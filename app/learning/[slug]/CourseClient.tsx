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
}

export default function CourseClient({ courseData }: ICourseClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lessonId = searchParams.get('id') || courseData.sections[0]?.lessons?.[0]?._id || ''
  const [courseState, setCourseState] = useState<ICourseState>({
    ...courseData,
    currentLessonId: lessonId,
  })

  const { sections, currentLessonId } = courseState
  const [open, setOpen] = useState(false)
  const [loadingVideo, setLoadingVideo] = useState(false)
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
    setLoadingVideo(true)
    setCourseState(prev => ({
      ...prev,
      currentLessonId: newID,
    }))
    router.push(`?id=${newID}`)

    const newLesson = courseState.sections.flatMap(s => s.lessons).find(l => l._id === newID)
    const newVimeoId = newLesson?.video?.vimeoId
    if (!playerRef.current || !newVimeoId) return

    const isPaused = await playerRef.current.getPaused()

    playerRef.current
      .loadVideo(newVimeoId)
      .then(async () => {
        await playerRef.current?.setCurrentTime(time || 0)
        setCurrentTime(time || 0)
        if (isPaused) {
          playerRef.current?.pause()
        } else {
          playerRef.current?.play()
        }
      })
      .catch(error => {
        console.error('Error loading video:', error)
      })
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
        loadingVideo={loadingVideo}
        setLoadingVideo={setLoadingVideo}
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
