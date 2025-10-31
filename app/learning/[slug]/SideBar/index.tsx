'use client'
import { Dispatch, SetStateAction } from 'react'
import { ICourseState } from '../CourseClient'
import CourseSidebar from './CourseSidebar'
import DirectionBar from './DirectionBar'
import { useRouter } from 'next/navigation'

interface ISideBarProps {
  courseState: ICourseState
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setCourseState: Dispatch<SetStateAction<ICourseState>>
  handleSetCurrentLessonId: (newID: string, time?: number) => void
}

export function SideBar({ courseState, open, setOpen, setCourseState, handleSetCurrentLessonId }: ISideBarProps) {
  const { userLessonProgress } = courseState
  const router = useRouter()

  const lessonIdCompleted =
    userLessonProgress?.lessons?.filter(lesson => lesson.completed)?.map(lesson => String(lesson.lessonId)) || []

  const allLessons = courseState.sections.flatMap(section => section.lessons)

  const lastCompletedLessonIndex = allLessons.findLastIndex(lesson => lessonIdCompleted?.includes(String(lesson._id)!))

  const lockedLessonIndex = lastCompletedLessonIndex === -1 ? 1 : lastCompletedLessonIndex + 2

  const handleTogleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <CourseSidebar
        courseState={courseState}
        open={open}
        handleTogleOpen={handleTogleOpen}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
        lockedLessonIndex={lockedLessonIndex}
      />

      <DirectionBar
        handleTogleOpen={handleTogleOpen}
        open={open}
        courseState={courseState}
        handleSetCurrentLessonId={handleSetCurrentLessonId}
        lockedLessonIndex={lockedLessonIndex}
      />
    </>
  )
}
