import { ArrowRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProgressBarProps {
  title: string
  handleTogleOpen: () => void
  open: boolean
}

export default function DirectionBar({ title, handleTogleOpen, open }: ProgressBarProps) {
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
        <span>{title}</span>

        <Button variant="ghost" onClick={handleTogleOpen}>
          {open ? <ArrowRight /> : <Menu />}
        </Button>
      </div>
    </div>
  )
}
