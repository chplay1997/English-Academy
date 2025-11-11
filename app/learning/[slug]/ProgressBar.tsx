'use client'
import { ArrowLeft, CircleQuestionMark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProgressCircle from '@/components/ui/progress-circle'
import Link from 'next/link'
import { NotesSheet } from './NotesSheet'
import { Dispatch, SetStateAction } from 'react'
import { ICourseState } from './CourseClient'
import { useRouter } from 'next/navigation'

interface ProgressBarProps {
  courseState: ICourseState
  setCourseState: Dispatch<SetStateAction<ICourseState>>
  handleSetCurrentLessonId: (newID: string, time?: number) => void
}

export default function ProgressBar({ courseState, setCourseState, handleSetCurrentLessonId }: ProgressBarProps) {
  const { userLessonProgress } = courseState
  const router = useRouter()
  const totalCompletedLessons =
    userLessonProgress?.lessons?.reduce((count, lesson) => (lesson.completed ? count + 1 : count), 0) || 0

  return (
    <div className="h-12.5 flex justify-between items-center pr-4 lg:px-7 fixed w-full z-4 text-white bg-[#29303b] gap-4">
      <div className="flex items-center gap-2 truncate">
        <Button variant="ghost" className="rounded-[99px]" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Link href="/#" className="flex items-center gap-2 truncate">
          <div className="bg-[#f05123] text-white font-bold text-lg h-[30] w-[30] text-center rounded-md hidden lg:block">
            EA
          </div>
        </Link>
        <span className="font-semibold text-sm truncate">{courseState.title}</span>
      </div>

      <div className="flex justify-between items-center gap-[8]">
        <div className="flex items-center gap-2 text-sm text-white">
          <ProgressCircle percent={Math.round((totalCompletedLessons / courseState.videoLessonsCount) * 100)} />

          <div className="items-center gap-1 text-[13px] hidden lg:flex">
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

        <Link href={`/learning-paths/${courseState.slug}`}>
          <Button variant="ghost" className="rounded-[99px] hidden lg:flex">
            <CircleQuestionMark />
            Lộ trình
          </Button>
        </Link>
      </div>
    </div>
  )
}
