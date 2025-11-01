'use client'

import UserProfileDropdown from './UserProfileDropdown'
import Link from 'next/link'
import { SearchBar } from './SearchBar'

export default function HeaderBar() {
  return (
    <div
      className="border-b-1 bg-white h-16.5 flex justify-between items-center px-4 md:px-7 fixed w-full z-6 gap-2"
      style={{ borderColor: '#e8ebed' }}
    >
      <Link href="/#" className="flex items-center gap-2">
        <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
        <span className="font-semibold hidden md:block">English Academy</span>
      </Link>

      <SearchBar />

      <UserProfileDropdown />
    </div>
  )
}
