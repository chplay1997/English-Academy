'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { useParams } from 'next/navigation'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import { toast } from 'sonner'
import { TextEditor } from './TextEditor'
import { ICourseState } from './CourseClient'

interface ILessonNoteFormProps {
  sectionOrder: number
  lessonOrder: number
  setOpenNote: (openNote: boolean) => void
  openNote: boolean
  currentTime: number
  isFullWidth?: boolean
  setCourseState: Dispatch<SetStateAction<ICourseState>>
}

export function LessonNoteForm({
  sectionOrder,
  lessonOrder,
  setOpenNote,
  openNote,
  currentTime,
  setCourseState,
  isFullWidth,
}: ILessonNoteFormProps) {
  const [content, setContent] = useState('')
  const params = useParams()
  const courseSlug = params.slug
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const newNote = await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseSlug, sectionOrder, lessonOrder, second: currentTime, content }),
    })

    const newNoteData = await newNote.json()

    if (newNoteData.success) {
      setCourseState(prev => ({
        ...prev,
        userLessonNote: [...prev.userLessonNote, newNoteData.newNote],
      }))
      toast.success('Note has been created', {
        position: 'bottom-center',
      })
    } else {
      toast.error('Failed to create note', {
        position: 'bottom-center',
      })
    }

    setLoading(false)
    handleCancel()
  }

  const handleCancel = () => {
    setContent('')
    setOpenNote(false)
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 ${
        isFullWidth ? 'w-full' : 'w-[77%]'
      } px-[8.5%] transition-transform duration-300 ${openNote ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <TextEditor
        currentTime={currentTime}
        content={content}
        setContent={setContent}
        loading={loading}
        setLoading={setLoading}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
