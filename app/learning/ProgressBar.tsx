import { ArrowLeft, CircleQuestionMark, NotebookPen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProgressCircle from '@/components/ui/progress-circle'
import Link from 'next/link'

interface ProgressBarProps {
  title?: string
  description?: string
  progress?: number
}

export default function ProgressBar({ title = 'hihihihi', description, progress }: ProgressBarProps) {
  return (
    <div
      className="border-b-1 h-[66px] flex justify-between items-center px-[28] fixed w-full z-4 text-white"
      style={{ borderColor: '#e8ebed', backgroundColor: '#29303b' }}
    >
      <div className="flex items-center gap-2">
        <Link href="/#">
          <Button variant="ghost" className="rounded-[99px]">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
        <span className="font-semibold ">{title}</span>
      </div>

      <div className="flex justify-between items-center gap-[8]">
        <div className="flex items-center gap-2 text-sm text-white">
          <ProgressCircle percent={12} />

          <div className="flex items-center gap-1 text-[13px]">
            <span className="font-semibold">
              {11}/{12}
            </span>
            <span>bài học</span>
            <a href="#" className="ml-2 text-[#ff5117] hover:underline font-medium">
              Xem chứng chỉ
            </a>
          </div>
        </div>

        <Button variant="ghost" className="rounded-[99px]">
          <NotebookPen />
          Ghi chú
        </Button>

        <Button variant="ghost" className="rounded-[99px]">
          <CircleQuestionMark />
          Hướng dẫn
        </Button>
      </div>
    </div>
  )
}
