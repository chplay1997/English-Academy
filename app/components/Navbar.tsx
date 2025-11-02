'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MapMinus, Newspaper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(pathname || '/')

  const navItems = [
    { href: '/', label: 'Trang chủ', icon: <Home size={20} /> },
    { href: '/learning-paths', label: 'Lộ trình', icon: <MapMinus size={20} /> },
    { href: '/blog', label: 'Bài viết', icon: <Newspaper size={20} /> },
  ]

  return (
    <div className="fixed md:static bottom-0 left-0 right-0 bg-white z-5">
      <ul className="w-full md:w-24 md:px-3 flex md:flex-col gap-2 md:py-3 md:sticky md:top-0 justify-evenly ">
        {navItems.map(item => {
          const isActive = activeItem === item.href
          return (
            <li key={item.href}>
              <Link href={item.href} prefetch>
                <Button
                  onClick={() => setActiveItem(item.href)}
                  variant={isActive ? 'secondary' : 'ghost'}
                  className={`rounded-2xl h-15 md:w-18 md:h-18 flex flex-col items-center justify-center transition-all
                  ${
                    isActive
                      ? 'shadow-md md:scale-105 text-[#f05123] md:text-black'
                      : 'opacity-80 hover:opacity-100 hover:scale-105'
                  }
                `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs text-black">{item.label}</span>
                </Button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
