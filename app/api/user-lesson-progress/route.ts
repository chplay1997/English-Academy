import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { connectDB } from '@/lib/mongoose'
import UserLessonProgress, { IUserLessonProgress } from '@/models/userLessonProgress.model'
import mongoose from 'mongoose'
import { ILesson } from '@/models/lesson.model'
import { ICourse } from '@/models/course.model'
import { ISection } from '@/models/section.model'
import { redis } from '@/lib/redis'
import { GET_COURSE_CACHE_KEY } from '@/services/course/getCourseData'

// Authentication middleware
async function checkAuth() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user
}

// GET: Get user progress for a courseSlug
export async function GET(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const url = new URL(request.url)
    const courseSlug = url.searchParams.get('courseSlug')

    if (!courseSlug) return NextResponse.json({ success: false, error: 'Missing courseSlug' }, { status: 400 })

    const progress = await UserLessonProgress.findOne({
      courseSlug,
      userId: new mongoose.Types.ObjectId(user.id),
    }).lean()

    return NextResponse.json({ success: true, data: progress || null })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 401 })
  }
}

// === Helper: Get ordered lessons in a course ===
async function getOrderedLessons(courseSlug: string): Promise<ILesson[]> {
  const { default: Course } = await import('@/models/course.model')
  const { default: Section } = await import('@/models/section.model')
  const { default: Lesson } = await import('@/models/lesson.model')

  const course = await Course.findOne({ slug: courseSlug }).select('sections').lean<ICourse>()
  if (!course) return []

  // Get all sections of this course
  const sections = await Section.find({ _id: { $in: course.sections } })
    .select('_id order')
    .sort({ order: 1 })
    .lean<ISection[] & { _id: mongoose.Types.ObjectId }>()

  // Get all lessons in those sections
  const lessons = await Lesson.find({ sectionId: { $in: course.sections } })
    .select('_id title order sectionId duration type isPreview')
    .lean<ILesson[] & { sectionId: mongoose.Types.ObjectId }>()

  // Sort: section.order → lesson.order
  const sectionOrderMap = new Map(sections.map(s => [s?._id?.toString(), s?.order]))
  lessons.sort((a, b) => {
    const secA = sectionOrderMap.get(a.sectionId?.toString() ?? '') ?? 0
    const secB = sectionOrderMap.get(b.sectionId?.toString() ?? '') ?? 0
    if (secA !== secB) return secA - secB
    return a.order - b.order
  })

  return lessons
}

// === API PUT ===
export async function PUT(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const body = await request.json()
    const { courseSlug, lessonId: lessonIdString, lastWatched, duration } = body

    if (!courseSlug || !lessonIdString)
      return NextResponse.json({ success: false, error: 'Missing courseSlug or lessonId' }, { status: 400 })

    const lessonId = new mongoose.Types.ObjectId(lessonIdString as string)

    // --- 1️⃣ Get all lessons in the course ---
    const allLessons = await getOrderedLessons(courseSlug)
    if (!allLessons.length)
      return NextResponse.json({ success: false, error: 'Course not found or has no lessons' }, { status: 404 })

    // --- 2️⃣ Find the current lesson ---
    const idx = allLessons.findIndex(l => l._id?.toString() === lessonId.toString())
    if (idx === -1) return NextResponse.json({ success: false, error: 'Lesson not found in course' }, { status: 404 })

    const prevLesson = idx > 0 ? allLessons[idx - 1] : null
    const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null

    // --- 3️⃣ Get user progress ---
    const userProgress = await UserLessonProgress.findOne({
      userId: new mongoose.Types.ObjectId(user.id),
      courseSlug,
    }).lean<IUserLessonProgress>()

    // If no progress and not the first lesson → block learning
    if (!userProgress && idx > 0) {
      return NextResponse.json(
        { success: false, error: 'You must complete a nearby lesson before continuing this one.' },
        { status: 403 }
      )
    }

    // --- 4️⃣ Check learning conditions ---
    if (idx > 0 && userProgress) {
      const completedIds = userProgress.lessons.filter(l => l.completed).map(l => l.lessonId.toString())
      const canUpdate =
        (prevLesson && prevLesson._id && completedIds.includes(prevLesson._id.toString())) ||
        (nextLesson && nextLesson._id && completedIds.includes(nextLesson._id.toString()))

      if (!canUpdate) {
        return NextResponse.json(
          { success: false, error: 'You must complete a nearby lesson before continuing this one.' },
          { status: 403 }
        )
      }
    }

    // --- 5️⃣ Calculate progress percentage ---
    const progressPercent = duration && duration > 0 ? Math.min((lastWatched / duration) * 100, 100) : 0

    const currentLessonProgress = userProgress?.lessons?.find(l => l.lessonId.toString() === lessonId.toString())

    const lessonCompleted = currentLessonProgress?.completed || progressPercent >= 90
    const lessonProgressPercent = Math.max(currentLessonProgress?.progressPercent ?? 0, progressPercent)

    // --- 6️⃣ Update or create ---
    const updated = await UserLessonProgress.findOneAndUpdate(
      {
        userId: new mongoose.Types.ObjectId(user.id),
        courseSlug,
        'lessons.lessonId': lessonId,
      },
      {
        $set: {
          'lessons.$.lastWatched': lastWatched,
          'lessons.$.duration': duration,
          'lessons.$.progressPercent': lessonProgressPercent,
          'lessons.$.completed': lessonCompleted,
        },
      },
      { new: true }
    )

    if (!updated) {
      const created = await UserLessonProgress.findOneAndUpdate(
        {
          userId: new mongoose.Types.ObjectId(user.id),
          courseSlug,
        },
        {
          $push: {
            lessons: {
              lessonId,
              lastWatched,
              duration,
              progressPercent: lessonProgressPercent,
              completed: lessonCompleted,
            },
          },
        },
        { upsert: true, new: true }
      )

      return NextResponse.json({ success: true, data: created })
    }

    // Remove cache for related course
    redis.del(GET_COURSE_CACHE_KEY(courseSlug, user.id))
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('Error in PUT /user-lesson-progress:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
