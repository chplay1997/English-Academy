'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import DirectionBar from './DirectionBar'
import ProgressBar from './ProgressBar'
import { ICourseData } from '@/lib/data/getCourseData'
import CourseSidebar from './CourseSidebar'
import CourseMainContent from './CourseMainContent'
import { IUserLessonNote } from '@/models/userLessonNote.model'

export interface ICourseClientProps {
  courseData: ICourseData
  userLessonNote: IUserLessonNote[]
}

export default function CourseClient({ courseData, userLessonNote }: ICourseClientProps) {
  const { sections = [], lessonIdCompleted = [], videoLessonsCount, title } = courseData
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [lessonNote, setLessonNote] = useState<IUserLessonNote[]>(userLessonNote)

  const id = searchParams.get('id') || sections[0]?.lessons?.[0]?.video?.vimeoId || ''
  const [currentVimeoID, setCurrentVimeoID] = useState(id)

  const handleSetCurrentVimeoID = (newID: string) => {
    setCurrentVimeoID(newID)
    router.push(`?id=${newID}`)
  }

  const currentLesson = sections.find(section =>
    section.lessons.find(lesson => lesson?.video?.vimeoId === currentVimeoID)
  )

  if (!courseData || !currentLesson || !currentVimeoID) return notFound()

  return (
    <>
      <ProgressBar
        title={title}
        completed={lessonIdCompleted.length}
        total={videoLessonsCount}
        lessonNote={lessonNote}
        setLessonNote={setLessonNote}
      />

      <CourseMainContent
        title={courseData.title}
        vimeoID={currentVimeoID}
        open={open}
        sectionOrder={currentLesson.order}
        lessonOrder={currentLesson.order}
        setLessonNote={setLessonNote}
      />

      <CourseSidebar
        courseData={courseData}
        open={open}
        setOpen={setOpen}
        currentVimeoID={currentVimeoID}
        handleSetCurrentVimeoID={handleSetCurrentVimeoID}
        lessonIdCompleted={lessonIdCompleted}
        id={id}
      />

      <DirectionBar handleTogleOpen={() => setOpen(!open)} open={open} title={currentLesson.title} />
    </>
  )
}
