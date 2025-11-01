'use client'
import { useRef, useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import ProgressBar from './ProgressBar'
import CourseMainContent from './CourseMainContent'
import Player from '@vimeo/player'
import { ICourseData } from '@/types/course'
import { SideBar } from './SideBar'

export interface ICourseClientProps {
  courseData: ICourseData
}

export interface ICourseState extends ICourseData {
  currentLessonId: string
  timeFirstLoad: number
}

export default function CourseClient({ courseData }: ICourseClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lessonId = searchParams.get('id') || courseData.sections[0]?.lessons?.[0]?._id || ''
  const [courseState, setCourseState] = useState<ICourseState>({
    ...courseData,
    currentLessonId: lessonId,
    timeFirstLoad: 0,
  })

  const { sections, currentLessonId } = courseState
  const [open, setOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const playerRef = useRef<Player | null>(null)

  const allLessonIds = sections.flatMap(section => section.lessons.map(lesson => lesson._id))

  if (!courseState || !allLessonIds.includes(currentLessonId)) return notFound()

  const handleSetCurrentLessonId = async (newID: string, time?: number) => {
    if (newID === currentLessonId) {
      setCurrentTime(time || 0)
      playerRef.current?.setCurrentTime(time || 0)
      return
    }
    setCourseState(prev => ({
      ...prev,
      currentLessonId: newID,
      timeFirstLoad: time || 0,
    }))
    router.push(`?id=${newID}`)
  }

  return (
    <>
      <ProgressBar
        courseState={courseState}
        setCourseState={setCourseState}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
      />

      <CourseMainContent
        courseState={courseState}
        setCourseState={setCourseState}
        open={open}
        playerRef={playerRef}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />

      <SideBar
        courseState={courseState}
        open={open}
        setOpen={setOpen}
        setCourseState={setCourseState}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
      />
    </>
  )
}
