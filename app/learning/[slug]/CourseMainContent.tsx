'use client'
import { useState } from 'react'
import VideoContent from './VideoContent'
import { LessonNoteForm } from './LessionNote'

interface ICourseMainContentProps {
  title: string
  vimeoID: string
  open: boolean
  sectionOrder: number
  lessonOrder: number
}

export default function CourseMainContent({
  title,
  vimeoID,
  open,
  sectionOrder,
  lessonOrder,
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
        currentTime={currentTime}
        setOpenNote={setOpenNote}
        openNote={openNote}
        sectionOrder={sectionOrder}
        lessonOrder={lessonOrder}
      />
    </>
  )
}
