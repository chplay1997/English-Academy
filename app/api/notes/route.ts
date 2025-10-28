import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import UserLessonNote from '@/models/userLessonNote.model'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import mongoose from 'mongoose'

// ✅ CREATE note
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  if (!userId) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const body = await request.json()
    const { courseSlug, sectionOrder, lessonOrder, second, content } = body

    const newNote = await UserLessonNote.create({
      userId,
      courseSlug,
      sectionOrder,
      lessonOrder,
      second,
      content,
    })

    return NextResponse.json({ success: true, newNote }, { status: 201 })
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to create note', error: (error as Error).message },
      { status: 500 }
    )
  }
}

// ✅ UPDATE note content
export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  if (!userId) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const body = await request.json()
    const { noteId, content } = body

    if (!noteId || typeof content !== 'string') {
      return NextResponse.json({ success: false, message: 'Missing noteId or content' }, { status: 400 })
    }

    const updatedNote = await UserLessonNote.findOneAndUpdate({ _id: noteId, userId }, { content }, { new: true })

    if (!updatedNote) {
      return NextResponse.json({ success: false, message: 'Note not found or not owned by user' }, { status: 404 })
    }

    return NextResponse.json({ success: true, updatedNote }, { status: 200 })
  } catch (error) {
    console.error('Error updating note:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to update note', error: (error as Error).message },
      { status: 500 }
    )
  }
}

// ✅ DELETE note
export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  if (!userId) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()
    const { searchParams } = new URL(request.url)
    const noteId = searchParams.get('noteId')

    if (!noteId) {
      return NextResponse.json({ success: false, message: 'Missing noteId' }, { status: 400 })
    }

    const deletedNote = await UserLessonNote.findOneAndDelete({ _id: noteId, userId })

    if (!deletedNote) {
      return NextResponse.json({ success: false, message: 'Note not found or not owned by user' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Note deleted' }, { status: 200 })
  } catch (error) {
    console.error('Error deleting note:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to delete note', error: (error as Error).message },
      { status: 500 }
    )
  }
}
