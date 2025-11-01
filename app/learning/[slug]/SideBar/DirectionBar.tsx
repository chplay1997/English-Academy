import { ArrowRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ICourseState } from '../CourseClient'

interface ProgressBarProps {
  handleToggleOpen: () => void
  open: boolean
  courseState: ICourseState
  lockedLessonIndex: number
  handleSetCurrentLessonId: (id: string) => void
}

export default function DirectionBar({
  handleToggleOpen,
  open,
  courseState,
  lockedLessonIndex,
  handleSetCurrentLessonId,
}: ProgressBarProps) {
  const { currentLessonId } = courseState

  const lessonIds = courseState.sections
    .flatMap(section => section.lessons)
    .map(lesson => lesson._id)
    .filter(Boolean)

  const currentLesson = courseState.sections
    .flatMap(section => section.lessons)
    .find(lesson => lesson._id === courseState.currentLessonId)

  const index = lessonIds.indexOf(currentLessonId)
  const prev = index > 0 ? lessonIds[index - 1] : null
  const next = index < lessonIds.length - 1 && index < lockedLessonIndex - 1 ? lessonIds[index + 1] : null

  return (
    <div
      className="border-b-1 h-[50px] flex justify-center md:justify-end lg:justify-center items-center px-[28] fixed w-full z-4 bottom-0 left-0 right-0"
      style={{ borderColor: '#e8ebed', backgroundColor: '#f0f0f0' }}
    >
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="rounded-[99px]"
          disabled={!prev}
          onClick={() => handleSetCurrentLessonId(prev!)}
        >
          <span className="inline-flex items-center">
            <ChevronLeft size={14} className="mt-0.5" />
            <span className="text-sm">Bài trước</span>
          </span>
        </Button>
        <Button
          variant="ghost"
          className="rounded-[99px]"
          disabled={!next}
          onClick={() => handleSetCurrentLessonId(next!)}
        >
          <span className="inline-flex items-center">
            <span className="text-sm">Bài tiếp theo</span>
            <ChevronRight size={14} className="mt-0.5" />
          </span>
        </Button>
      </div>

      <div className="absolute left-0 lg:right-0 lg:left-auto lg:flex-row-reverse flex justify-end items-center gap-[8]">
        <Button variant="ghost" onClick={handleToggleOpen}>
          {open ? <ArrowRight /> : <Menu />}
        </Button>

        <span className="hidden md:block">{currentLesson?.title}</span>
      </div>
    </div>
  )
}
