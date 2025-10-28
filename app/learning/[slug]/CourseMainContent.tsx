'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import VideoContent from './VideoContent'
import { LessonNoteForm } from './LessionNote'
import { IUserLessonNote } from '@/models/userLessonNote.model'

interface ICourseMainContentProps {
  title: string
  vimeoID: string
  open: boolean
  sectionOrder: number
  lessonOrder: number
  setLessonNote: Dispatch<SetStateAction<IUserLessonNote[]>>
}

export default function CourseMainContent({
  title,
  vimeoID,
  open,
  sectionOrder,
  lessonOrder,
  setLessonNote,
}: ICourseMainContentProps) {
  const [openNote, setOpenNote] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  return (
    <>
      <VideoContent
        title={title}
        vimeoID={vimeoID}
        open={open}
        setOpenNote={setOpenNote}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />

      <LessonNoteForm
        isFullWidth={!open}
        currentTime={currentTime}
        setOpenNote={setOpenNote}
        openNote={openNote}
        sectionOrder={sectionOrder}
        lessonOrder={lessonOrder}
        setLessonNote={setLessonNote}
      />
    </>
  )
}
