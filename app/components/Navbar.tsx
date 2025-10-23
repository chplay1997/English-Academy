'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MapMinus, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Trang chủ', icon: <Home size={20} /> },
    { href: '/learning-paths', label: 'Lộ trình', icon: <MapMinus size={20} /> },
    { href: '/blog', label: 'Bài viết', icon: <Newspaper size={20} /> },
  ]

  return (
    <ul className="w-[96px] md:px-[12] flex flex-col gap-[8] py-[12]">
      {navItems.map(item => {
        const isActive = pathname === item.href
        return (
          <li key={item.href}>
            <Link href={item.href} prefetch>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                className={`rounded-2xl w-[72px] h-[72px] flex flex-col items-center justify-center text-sm transition-all
                  ${isActive ? 'shadow-md scale-105' : 'opacity-80 hover:opacity-100 hover:scale-105'}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
