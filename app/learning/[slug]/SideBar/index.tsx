'use client'
import { Dispatch, SetStateAction } from 'react'
import { ICourseState } from '../CourseClient'
import CourseSidebar from './CourseSidebar'
import DirectionBar from './DirectionBar'
import { useTestMode } from '@/hooks/useTestMode'

interface ISideBarProps {
  courseState: ICourseState
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  handleSetCurrentLessonId: (newID: string, time?: number) => void
}

export function SideBar({ courseState, open, setOpen, handleSetCurrentLessonId }: ISideBarProps) {
  const { userLessonProgress } = courseState
  const isTestMode = useTestMode()

  const lessonIdCompleted =
    userLessonProgress?.lessons?.filter(lesson => lesson.completed)?.map(lesson => String(lesson.lessonId)) || []

  const allLessons = courseState.sections.flatMap(section => section.lessons)

  const lastCompletedLessonIndex = allLessons.findLastIndex(lesson => lessonIdCompleted?.includes(String(lesson._id)!))

  // Test mode by pass lock lesson
  const lockedLessonIndex = isTestMode ? 9999 : lastCompletedLessonIndex === -1 ? 1 : lastCompletedLessonIndex + 2

  const handleToggleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <CourseSidebar
        courseState={courseState}
        open={open}
        handleToggleOpen={handleToggleOpen}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
        lockedLessonIndex={lockedLessonIndex}
      />

      <DirectionBar
        handleToggleOpen={handleToggleOpen}
        open={open}
        courseState={courseState}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
        lockedLessonIndex={lockedLessonIndex}
      />
    </>
  )
}
