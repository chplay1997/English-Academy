import { ArrowRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ICourseData } from '@/types/course'

interface ProgressBarProps {
  title: string
  handleTogleOpen: () => void
  open: boolean
  courseData: ICourseData
  handleSetCurrentVimeoID: (id: string, time?: number) => void
  vimeoID: string
}

export default function DirectionBar({
  title,
  handleTogleOpen,
  open,
  courseData,
  handleSetCurrentVimeoID,
  vimeoID,
}: ProgressBarProps) {
  const vimeoIds = courseData.sections
    .flatMap(section => section.lessons)
    .map(lesson => lesson.video?.vimeoId)
    .filter(Boolean)

  const index = vimeoIds.indexOf(vimeoID)
  const prev = index > 0 ? vimeoIds[index - 1] : null
  const next = index < vimeoIds.length - 1 ? vimeoIds[index + 1] : null

  return (
    <div
      className="border-b-1 h-[50px] flex justify-center items-center px-[28] fixed w-full z-4 bottom-0 left-0 right-0"
      style={{ borderColor: '#e8ebed', backgroundColor: '#f0f0f0' }}
    >
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          className="rounded-[99px]"
          disabled={!prev}
          onClick={() => handleSetCurrentVimeoID(prev!)}
        >
          <ChevronLeft className="w-5 h-5" />
          Bài trước
        </Button>
        <Button
          variant="ghost"
          className="rounded-[99px]"
          disabled={!next}
          onClick={() => handleSetCurrentVimeoID(next!)}
        >
          Bài tiếp theo
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute right-0 flex justify-end items-center gap-[8]">
        <span>{title}</span>

        <Button variant="ghost" onClick={handleTogleOpen}>
          {open ? <ArrowRight /> : <Menu />}
        </Button>
      </div>
    </div>
  )
}
