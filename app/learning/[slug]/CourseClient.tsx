'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import ProgressBar from './ProgressBar'
import CourseMainContent from './CourseMainContent'
import Player from '@vimeo/player'
import { ICourseData } from '@/types/course'
import { SideBar } from './SideBar'
import { useDeviceType } from '@/hooks/useDeviceType'

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
  const searchParamsId = searchParams.get('id')

  const allLessonIds = courseData.sections.flatMap(section => section.lessons.map(lesson => lesson._id))

  const getCurrentLesson = useCallback((id: string | null) => {
    const allLessonOnUserProgress = courseData.userLessonProgress?.lessons || []

    if (id) {
      const lessonOnUserProgress = allLessonOnUserProgress.find(lesson => String(lesson.lessonId) === id)
      return {
        lessonId: id,
        lastWatched: lessonOnUserProgress?.lastWatched || 0,
      }
    }

    if (allLessonOnUserProgress.length > 0) {
      const lessonOnUserProgress = allLessonOnUserProgress.find(lesson => !lesson.completed)

      if (lessonOnUserProgress) {
        return {
          lessonId: String(lessonOnUserProgress.lessonId),
          lastWatched: lessonOnUserProgress.lastWatched,
        }
      }

      const lastLessonOnUserProgress = allLessonOnUserProgress[allLessonOnUserProgress.length - 1]
      const index = allLessonIds.indexOf(String(lastLessonOnUserProgress.lessonId))
      const lessonId = allLessonIds[index + 1] || allLessonIds[index]
      return {
        lessonId: String(lessonId),
        lastWatched: 0,
      }
    }

    return {
      lessonId: allLessonIds[0],
      lastWatched: 0,
    }
  }, [])

  const [courseState, setCourseState] = useState<ICourseState>({
    ...courseData,
    currentLessonId: getCurrentLesson(searchParamsId).lessonId,
    timeFirstLoad: getCurrentLesson(searchParamsId).lastWatched,
  })

  const deviceType = useDeviceType()

  const { currentLessonId } = courseState
  const [open, setOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    if (deviceType === 'mobile' || deviceType === 'tablet') {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [deviceType])

  useEffect(() => {
    router.push(`?id=${currentLessonId}`)
  }, [currentLessonId])

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
        handleSetCurrentLessonId={handleSetCurrentLessonId}
      />
    </>
  )
}
