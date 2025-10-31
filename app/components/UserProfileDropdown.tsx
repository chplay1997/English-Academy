'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { User, LogOut, Settings, Bookmark, FileText, LayoutDashboard } from 'lucide-react'
import LoginModal, { TModalType } from './LoginModal'
import { useState } from 'react'

export default function UserProfileDropdown() {
  const { data: session, status } = useSession()
  const [type, setType] = useState<TModalType>('login')

  const [open, setOpen] = useState(false)

  const handleOpenModal = (type: TModalType) => {
    setType(type)
    setOpen(true)
  }

  // Display skeleton or nothing while loading
  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-20 bg-gray-200 animate-pulse"></div>
      </div>
    )
  }

  // If not authenticated, display login button
  if (status === 'unauthenticated' || !session) {
    return (
      <div className="flex justify-between items-center gap-[8]">
        <Button variant="ghost" className="rounded-[99px]" onClick={() => handleOpenModal('register')}>
          Đăng ký
        </Button>

        <Button
          variant="secondary"
          className="text-white border-none hover:opacity-90 rounded-[99px]"
          style={{ background: 'linear-gradient(to right bottom, #ff8f26, #ff5117)' }}
          onClick={() => handleOpenModal('login')}
        >
          Đăng nhập
        </Button>
        <LoginModal type={type} setType={setType} open={open} setOpen={setOpen} />
      </div>
    )
  }

  // If authenticated, display user profile
  const user = session.user
  const defaultUserImage = '/images/default-avatar.png'
  const userImage = user?.image || defaultUserImage

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative rounded-full">
          <Image
            src={userImage}
            alt={user?.name || 'User Avatar'}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name || 'Đang cập nhật'}</p>
            <p className="text-xs leading-none text-muted-foreground">@{user?.email?.split('@')[0] || 'username'}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild disabled>
            <Link href="/profile" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Trang cá nhân</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link href="/blog/new" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              <span>Viết blog</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link href="/my-posts" className="flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Bài viết của tôi</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild disabled>
            <Link href="/saved-posts" className="flex items-center">
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Bài đã lưu</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild disabled>
          <Link href="/settings" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Cài đặt</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()} className="flex items-center cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Đăng xuất</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
