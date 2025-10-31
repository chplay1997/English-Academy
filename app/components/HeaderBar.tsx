'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import UserProfileDropdown from './UserProfileDropdown'
import Link from 'next/link'

export default function HeaderBar() {
  return (
    <div
      className="border-b-1 bg-white h-16.5 flex justify-between items-center px-4 md:px-7 fixed w-full z-2 gap-2"
      style={{ borderColor: '#e8ebed' }}
    >
      <Link href="/#" className="flex items-center gap-2">
        <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
        <span className="font-semibold hidden md:block">English Academy</span>
      </Link>

      <div className="relative w-full max-w-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </span>
        <Input className="pl-10" placeholder="Search..." />
      </div>
      <UserProfileDropdown />
    </div>
  )
}
