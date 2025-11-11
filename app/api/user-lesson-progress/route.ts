import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { connectDB } from '@/lib/mongoose'
import UserLessonProgress, { IUserLessonProgress } from '@/models/userLessonProgress.model'
import mongoose from 'mongoose'
import { ELessonType, ILesson } from '@/models/lesson.model'
import { redis } from '@/lib/redis'
import { GET_COURSE_CACHE_KEY } from '@/services/course/getCourseData'
import AssessmentResult, { MAX_SCORE } from '@/models/assessmentResult.model'
import { ICourse } from '@/models/course.model'
import { ISection } from '@/models/section.model'

export async function PUT(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const body = await request.json()
    const { courseSlug, lessonId: lessonIdString, lastWatched = 0, duration = 0 } = body

    if (!courseSlug || !lessonIdString)
      return NextResponse.json({ success: false, error: 'Missing courseSlug or lessonId' }, { status: 400 })

    const lessonId = new mongoose.Types.ObjectId(String(lessonIdString))
    const allLessons = await getOrderedLessons(courseSlug)
    if (!allLessons.length)
      return NextResponse.json({ success: false, error: 'Course not found or has no lessons' }, { status: 404 })

    const idx = allLessons.findIndex(l => String(l._id) === lessonId.toString())
    if (idx === -1) return NextResponse.json({ success: false, error: 'Lesson not found in course' }, { status: 404 })

    const prevLesson = idx > 0 ? allLessons[idx - 1] : null
    const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null

    const userProgress = await getUserProgress(user.id, courseSlug)

    if (!userProgress && idx > 0) {
      return NextResponse.json(
        { success: false, error: 'You must complete a nearby lesson before continuing this one.' },
        { status: 403 }
      )
    }

    if (idx > 0 && userProgress) {
      const completedIds = new Set(userProgress.lessons.filter(l => l.completed).map(l => l.lessonId.toString()))
      const canUpdate =
        (prevLesson && completedIds.has(String(prevLesson._id))) ||
        (nextLesson && completedIds.has(String(nextLesson._id)))
      if (!canUpdate)
        return NextResponse.json(
          { success: false, error: 'You must complete a nearby lesson before continuing this one.' },
          { status: 403 }
        )
    }

    const currentLessonProgress = userProgress?.lessons.find(l => String(l.lessonId) === lessonId.toString())

    // --- Switch by lesson type ---
    let updated
    switch (allLessons[idx].type) {
      case ELessonType.VIDEO:
        updated = await handleVideoLesson(
          user.id,
          courseSlug,
          String(lessonId),
          lastWatched,
          duration,
          currentLessonProgress
        )
        break
      case ELessonType.GRAMMAR_TEST:
        updated = await handleGrammarTestLesson(user.id, courseSlug, String(lessonId))
        break
      default:
        // Unknown lesson type, fallback
        updated = await handleVideoLesson(
          user.id,
          courseSlug,
          lessonId.toString(),
          lastWatched,
          duration,
          currentLessonProgress
        )
    }

    redis.del(GET_COURSE_CACHE_KEY(courseSlug, user.id))

    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('Error in PUT /user-lesson-progress:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

// --- Helpers ---
async function checkAuth() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error('Unauthorized')
  return session.user
}

async function getOrderedLessons(courseSlug: string): Promise<ILesson[]> {
  const { default: Course } = await import('@/models/course.model')
  const { default: Section } = await import('@/models/section.model')
  const { default: Lesson } = await import('@/models/lesson.model')

  const course = await Course.findOne({ slug: courseSlug }).select('sections').lean<ICourse>()
  if (!course) return []

  const sections = await Section.find({ _id: { $in: course.sections } })
    .select('_id order')
    .sort({ order: 1 })
    .lean<ISection[]>()

  const lessons = await Lesson.find({ sectionId: { $in: course.sections } })
    .select('_id title order sectionId duration type isPreview')
    .lean<ILesson[]>()

  const sectionOrderMap = new Map(sections.map(s => [String(s._id), s.order]))
  lessons.sort((a, b) => {
    const secA = sectionOrderMap.get(String(a.sectionId)) ?? 0
    const secB = sectionOrderMap.get(String(b.sectionId)) ?? 0
    return secA !== secB ? secA - secB : a.order - b.order
  })

  return lessons
}

async function getUserProgress(userId: string, courseSlug: string) {
  return UserLessonProgress.findOne({
    userId: new mongoose.Types.ObjectId(userId),
    courseSlug,
  }).lean<IUserLessonProgress>()
}

async function updateLessonProgress(
  userId: string,
  courseSlug: string,
  lessonId: string,
  data: Partial<IUserLessonProgress['lessons'][0]>
) {
  const updated = await UserLessonProgress.findOneAndUpdate(
    { userId: new mongoose.Types.ObjectId(userId), courseSlug, 'lessons.lessonId': lessonId },
    { $set: { 'lessons.$': { lessonId: new mongoose.Types.ObjectId(lessonId), ...data } } },
    { new: true }
  )

  if (updated) return updated

  return UserLessonProgress.findOneAndUpdate(
    { userId: new mongoose.Types.ObjectId(userId), courseSlug },
    { $push: { lessons: { lessonId: new mongoose.Types.ObjectId(lessonId), ...data } } },
    { upsert: true, new: true }
  )
}

// --- Type-specific handlers ---
async function handleVideoLesson(
  userId: string,
  courseSlug: string,
  lessonId: string,
  lastWatched: number,
  duration: number,
  currentLessonProgress?: IUserLessonProgress['lessons'][0]
) {
  const progressPercent = duration > 0 ? Math.min((lastWatched / duration) * 100, 100) : 0
  const lessonCompleted = currentLessonProgress?.completed || progressPercent >= 90
  const lessonProgressPercent = Math.max(currentLessonProgress?.progressPercent ?? 0, progressPercent)

  return updateLessonProgress(userId, courseSlug, lessonId, {
    lastWatched,
    duration,
    progressPercent: lessonProgressPercent,
    completed: lessonCompleted,
  })
}

async function handleGrammarTestLesson(userId: string, courseSlug: string, lessonId: string) {
  const bestResult = await AssessmentResult.find({ userId: new mongoose.Types.ObjectId(userId), lessonId })
    .sort({ totalScore: -1 })
    .limit(1)

  console.log(bestResult)

  if (!bestResult.length || bestResult[0].totalScore < MAX_SCORE) {
    console.log(bestResult[0]?.totalScore)
    throw new Error('Lesson not completed')
  }

  return updateLessonProgress(userId, courseSlug, lessonId, {
    progressPercent: 100,
    completed: true,
  })
}
