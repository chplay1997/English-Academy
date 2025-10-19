import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleQuestionMark,
  Menu,
  NotebookPen,
  Search,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import ProgressCircle from '@/components/ui/progress-circle'

interface ProgressBarProps {
  title?: string
  description?: string
  progress?: number
}

export default function DirectionBar({ title = 'hihihihi', description, progress }: ProgressBarProps) {
  return (
    <div
      className="border-b-1 h-[50px] flex justify-center items-center px-[28] fixed w-full z-4 bottom-0 left-0 right-0"
      style={{ borderColor: '#e8ebed', backgroundColor: '#f0f0f0' }}
    >
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="rounded-[99px]">
          <ChevronLeft className="w-5 h-5" />
          Bài trước
        </Button>
        <Button variant="ghost" className="rounded-[99px]">
          Bài tiếp theo
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="absolute right-0 flex justify-end items-center gap-[8]">
        <span>1. Khái niệm kỹ thuật cần biết</span>

        <Button variant="ghost">
          <Menu />
          {/* <ArrowRight /> */}
        </Button>
      </div>
    </div>
  )
}
