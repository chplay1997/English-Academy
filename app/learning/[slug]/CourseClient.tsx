'use client'

import { useRef, useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import DirectionBar from './DirectionBar'
import ProgressBar from './ProgressBar'
import { ICourseData } from '@/lib/data/getCourseData'
import CourseSidebar from './CourseSidebar'
import CourseMainContent from './CourseMainContent'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import Player from '@vimeo/player'

export interface ICourseClientProps {
  courseData: ICourseData
  userLessonNote: IUserLessonNote[]
}

export default function CourseClient({ courseData, userLessonNote }: ICourseClientProps) {
  const { sections, lessonIdCompleted = [], videoLessonsCount, title } = courseData
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [lessonNote, setLessonNote] = useState<IUserLessonNote[]>(userLessonNote)
  const [currentTime, setCurrentTime] = useState(0)
  const playerRef = useRef<Player | null>(null)

  const id = searchParams.get('id') || sections[0]?.lessons?.[0]?.video?.vimeoId || ''
  const [currentVimeoID, setCurrentVimeoID] = useState(id)

  const handleSetCurrentVimeoID = async (newID: string, time?: number) => {
    setCurrentVimeoID(newID)
    router.push(`?id=${newID}`)

    if (playerRef.current) {
      const isPaused = await playerRef.current?.getPaused()

      playerRef.current
        .loadVideo(newID)
        .then(() => {
          playerRef.current?.setCurrentTime(time || 0)
          setCurrentTime(time || 0)

          if (isPaused) {
            playerRef.current?.pause()
          } else {
            playerRef.current?.play()
          }
        })
        .catch(err => {
          console.error('Load video lỗi:', err)
        })
    }
  }

  const currentSection = sections.find(section =>
    section.lessons.some(lesson => lesson.video?.vimeoId === currentVimeoID)
  )

  const currentLesson = currentSection?.lessons.find(lesson => lesson.video?.vimeoId === currentVimeoID)

  if (!courseData || !currentLesson || !currentVimeoID || !currentSection) return notFound()

  return (
    <>
      <ProgressBar
        onChangeVimeoID={handleSetCurrentVimeoID}
        sectionOrder={currentSection.order}
        courseData={courseData}
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
        sectionOrder={currentSection.order}
        lessonOrder={currentLesson.order}
        setLessonNote={setLessonNote}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        playerRef={playerRef}
        lessonUpdatedAt={currentLesson.updatedAt}
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
