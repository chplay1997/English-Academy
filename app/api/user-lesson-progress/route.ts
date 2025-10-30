import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { connectDB } from '@/lib/mongoose'
import UserLessonProgress, { IUserLessonProgress } from '@/models/userLessonProgress.model'
import mongoose from 'mongoose'
import { ILesson } from '@/models/lesson.model'

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
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 401 })
  }
}

export async function PUT(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const body = await request.json()
    const { courseSlug, lessonId: lessonIdString, lastWatched, duration, completed } = body

    if (!courseSlug || !lessonIdString)
      return NextResponse.json({ success: false, error: 'Missing courseSlug or lessonId' }, { status: 400 })

    const lessonId = new mongoose.Types.ObjectId(lessonIdString as string)
    const { default: Lesson } = await import('@/models/lesson.model')

    // --- 1️⃣ Get current lesson information ---
    const currentLesson = await Lesson.findById(lessonId).lean<ILesson>()
    if (!currentLesson) {
      return NextResponse.json({ success: false, error: 'Lesson not found' }, { status: 404 })
    }

    // --- 2️⃣ Get all lessons in the same section ---
    const allLessons = await Lesson.find({ sectionId: currentLesson.sectionId })
      .sort({ order: 1 })
      .select('_id order')
      .lean<ILesson[] & { _id: mongoose.Types.ObjectId }[]>()

    // --- 3️⃣ Find previous and next lessons ---
    const idx = allLessons.findIndex((l: { _id: mongoose.Types.ObjectId }) => l._id.toString() === lessonId.toString())
    const prevLesson = idx > 0 ? allLessons[idx - 1] : null
    const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null

    // --- 4️⃣ Get user progress ---
    const userProgress = await UserLessonProgress.findOne({
      userId: new mongoose.Types.ObjectId(user.id),
      courseSlug,
    }).lean<IUserLessonProgress>()

    // --- 5️⃣ Check learning conditions ---
    if (idx > 0 && userProgress) {
      const completedIds = userProgress.lessons.filter(l => l.completed).map(l => l.lessonId.toString())

      const canUpdate =
        (prevLesson && completedIds.includes(prevLesson._id.toString())) ||
        (nextLesson && completedIds.includes(nextLesson._id.toString()))

      if (!canUpdate) {
        return NextResponse.json(
          { success: false, error: 'You must complete a nearby lesson before continuing this one.' },
          { status: 403 }
        )
      }
    }

    // --- 6️⃣ Calculate progress percentage ---
    const progressPercent = duration && duration > 0 ? Math.min((lastWatched / duration) * 100, 100) : 0

    // --- 7️⃣ Update or add new ---
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
          'lessons.$.progressPercent': progressPercent,
          'lessons.$.completed': completed ?? progressPercent >= 90,
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
              progressPercent,
              completed: completed ?? progressPercent >= 90,
            },
          },
        },
        { upsert: true, new: true }
      )

      return NextResponse.json({ success: true, data: created })
    }

    return NextResponse.json({ success: true, data: updated })
  } catch (error: any) {
    console.error('Error in PUT /user-lesson-progress:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
