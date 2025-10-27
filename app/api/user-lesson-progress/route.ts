import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { connectDB } from '@/lib/mongoose'
import UserLessonProgress from '@/models/userLessonProgress.model'
import mongoose from 'mongoose'

// Middleware check auth
async function checkAuth() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    throw new Error('Unauthorized')
  }
  return session.user
}

// GET: Lấy tiến độ của user cho courseSlug
export async function GET(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const url = new URL(request.url)
    const courseSlug = url.searchParams.get('courseSlug')

    if (!courseSlug) {
      return NextResponse.json({ success: false, error: 'Missing courseSlug' }, { status: 400 })
    }

    const progress = await UserLessonProgress.find({
      courseSlug,
      userId: new mongoose.Types.ObjectId(user.id),
    })
      .lean()
      .exec()

    return NextResponse.json({ success: true, data: progress })
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 401 })
  }
}

// POST: Thêm hoặc đánh dấu lesson hoàn thành
export async function POST(request: Request) {
  try {
    const user = await checkAuth()
    await connectDB()

    const body = await request.json()
    const { lessonIdCompleted, courseSlug, userId } = body

    if (!courseSlug || !userId) {
      return NextResponse.json({ success: false, error: 'Missing lessonIdCompleted or courseSlug' }, { status: 400 })
    }

    const progress = await UserLessonProgress.findOneAndUpdate(
      {
        userId: new mongoose.Types.ObjectId(userId as string),
        lessonIdCompleted,
        courseSlug,
      },
      {
        $push: { lessonIdCompleted },
      },
      {
        upsert: true,
        new: true,
      }
    )

    // if (!progress) {
    //   progress = await UserLessonProgress.create({
    //     userId: new mongoose.Types.ObjectId(userId as string),
    //     lessonIdCompleted,
    //     courseSlug,
    //   })
    // }

    return NextResponse.json({ success: true, data: progress })
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 401 })
  }
}
