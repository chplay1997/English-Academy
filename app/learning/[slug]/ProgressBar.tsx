'use client'
import { ArrowLeft, CircleQuestionMark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProgressCircle from '@/components/ui/progress-circle'
import Link from 'next/link'
import { NotesSheet } from './NotesSheet'
import { Dispatch, SetStateAction } from 'react'
import { ICourseState } from './CourseClient'
import Player from '@vimeo/player'

interface ProgressBarProps {
  courseState: ICourseState
  setCourseState: Dispatch<SetStateAction<ICourseState>>
  handleSetCurrentLessonId: (newID: string, time?: number) => void
}

export default function ProgressBar({ courseState, setCourseState, handleSetCurrentLessonId }: ProgressBarProps) {
  const { sections, userLessonProgress, videoLessonsCount } = courseState
  const totalCompletedLessons =
    courseState.userLessonProgress?.lessons.reduce((count, lesson) => (lesson.completed ? count + 1 : count), 0) || 0

  return (
    <div className="h-[50px] flex justify-between items-center px-[28] fixed w-full z-4 text-white bg-[#29303b]">
      <Link href="/#" className="flex items-center gap-2">
        <Button variant="ghost" className="rounded-[99px]">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="bg-[#f05123] text-white font-bold text-lg h-[30] w-[30] text-center rounded-md">EA</div>
        <span className="font-semibold ">{courseState.title}</span>
      </Link>

      <div className="flex justify-between items-center gap-[8]">
        <div className="flex items-center gap-2 text-sm text-white">
          <ProgressCircle percent={Math.round((totalCompletedLessons / courseState.videoLessonsCount) * 100)} />

          <div className="flex items-center gap-1 text-[13px]">
            <span className="font-semibold">
              {totalCompletedLessons}/{courseState.videoLessonsCount}
            </span>
            <span>bài học</span>
            {totalCompletedLessons === courseState.videoLessonsCount && (
              <a href="#" className="ml-2 text-[#ff5117] hover:underline font-medium">
                Xem chứng chỉ
              </a>
            )}
          </div>
        </div>

        <NotesSheet
          courseState={courseState}
          setCourseState={setCourseState}
          handleSetCurrentLessonId={handleSetCurrentLessonId}
        />

        <Button variant="ghost" className="rounded-[99px]" disabled>
          <CircleQuestionMark />
          Hướng dẫn
        </Button>
      </div>
    </div>
  )
}
