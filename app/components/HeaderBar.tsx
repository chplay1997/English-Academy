'use client'
import UserProfileDropdown from './UserProfileDropdown'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function HeaderBar() {
  const pathname = usePathname()
  const router = useRouter()

  const segments = pathname.split('/').filter(Boolean)
  const depth = segments.length
  const isShowBackButton = depth > 1

  return (
    <div
      className="border-b-1 bg-white h-16.5 flex justify-between items-center px-4 md:px-7 fixed w-full z-6 gap-2"
      style={{ borderColor: '#e8ebed' }}
    >
      <Link href="/#" className="flex items-center gap-2">
        <div className="bg-[#f05123] text-white font-bold text-lg px-3 py-1 rounded-md">EA</div>
      </Link>

      {isShowBackButton ? (
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5" />
          Quay lại
        </Button>
      ) : (
        <Link href="/#" className="flex items-center gap-2">
          <span className="font-semibold hidden md:block">English Academy</span>
        </Link>
      )}
      <SearchBar />

      <UserProfileDropdown />
    </div>
  )
}
