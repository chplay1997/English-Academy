'use client'
import { ArrowLeft, CircleQuestionMark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProgressCircle from '@/components/ui/progress-circle'
import Link from 'next/link'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import { NotesSheet } from './NotesSheet'
import { Dispatch, SetStateAction } from 'react'
import { ICourseData } from '@/types/course'

interface ProgressBarProps {
  courseData: ICourseData
  title: string
  completed: number
  total: number
  lessonNote: IUserLessonNote[]
  setLessonNote: Dispatch<SetStateAction<IUserLessonNote[]>>
  sectionOrder: number
  onChangeVimeoID: (id: string, time?: number) => void
}

export default function ProgressBar({
  courseData,
  title,
  completed = 0,
  total = 1,
  lessonNote,
  setLessonNote,
  sectionOrder,
  onChangeVimeoID,
}: ProgressBarProps) {
  return (
    <div className="h-[50px] flex justify-between items-center px-[28] fixed w-full z-4 text-white bg-[#29303b]">
      <Link href="/#" className="flex items-center gap-2">
        <Button variant="ghost" className="rounded-[99px]">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="bg-[#f05123] text-white font-bold text-lg h-[30] w-[30] text-center rounded-md">EA</div>
        <span className="font-semibold ">{title}</span>
      </Link>

      <div className="flex justify-between items-center gap-[8]">
        <div className="flex items-center gap-2 text-sm text-white">
          <ProgressCircle percent={Math.round((completed / total) * 100)} />

          <div className="flex items-center gap-1 text-[13px]">
            <span className="font-semibold">
              {completed}/{total}
            </span>
            <span>bài học</span>
            {completed === total && (
              <a href="#" className="ml-2 text-[#ff5117] hover:underline font-medium">
                Xem chứng chỉ
              </a>
            )}
          </div>
        </div>

        <NotesSheet
          courseData={courseData}
          lessonNote={lessonNote}
          setLessonNote={setLessonNote}
          sectionOrder={sectionOrder}
          onChangeVimeoID={onChangeVimeoID}
        />

        <Button variant="ghost" className="rounded-[99px]" disabled>
          <CircleQuestionMark />
          Hướng dẫn
        </Button>
      </div>
    </div>
  )
}
