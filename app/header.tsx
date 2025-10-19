import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  return (
    <div
      className="border-b-1 bg-white h-[66px] flex justify-between items-center px-[28] fixed w-full z-1"
      style={{ borderColor: '#e8ebed' }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
        <span className="font-semibold ">English Academy</span>
      </div>

      <div className="relative w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </span>
        <Input className="pl-10" placeholder="Search..." />
      </div>

      <div className="flex justify-between items-center gap-[8]">
        <Button variant="ghost" className="rounded-[99px]">
          Đăng ký
        </Button>

        <Button
          variant="secondary"
          className="text-white border-none hover:opacity-90 rounded-[99px]"
          style={{ background: 'linear-gradient(to right bottom, #ff8f26, #ff5117)' }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  )
}
