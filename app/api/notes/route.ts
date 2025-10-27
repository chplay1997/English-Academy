import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import UserLessonNote from '@/models/userLessonNote.model'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import mongoose from 'mongoose'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  if (!userId) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const body = (await request.json()) || {}
    const { courseSlug, sectionOrder, lessonOrder, second, content } = body

    // Create Note object with authenticated userId
    const newNoteData = {
      userId,
      courseSlug,
      sectionOrder,
      lessonOrder,
      second,
      content,
    }

    const newNote = await UserLessonNote.create(newNoteData)

    return NextResponse.json({ success: true, newNote }, { status: 201 })
  } catch (error) {
    console.error('Error creating note:', error)
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: 'Failed to create note', error: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json({ success: false, message: 'An unknown error occurred' }, { status: 500 })
  }
}
