'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react' // 👈 thêm dòng này

interface ILoginModal {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function LoginModal({ open, setOpen }: ILoginModal) {
  const router = useRouter()

  const handleGoogleLogin = async () => {
    console.log('run here')
    try {
      await signIn('google', { callbackUrl: '/' }) // 👈 login Google, sau khi xong quay lại trang chủ
    } catch (error) {
      console.error('Google login failed:', error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md rounded-2xl p-8">
        <DialogHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-orange-500 text-white font-bold rounded-md w-10 h-10 flex items-center justify-center text-xl">
              EA
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center">Đăng nhập vào EA</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          <Button variant="outline" className="w-full py-6 text-base">
            Sử dụng email / số điện thoại
          </Button>

          {/* Nút đăng nhập Google */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6 text-base"
            onClick={handleGoogleLogin}
          >
            <FcGoogle className="text-xl" /> Đăng nhập với Google
          </Button>

          {/* Nút Facebook — tạm thời chưa dùng */}
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 py-6 text-base">
            <FaFacebook className="text-blue-600 text-xl" /> Đăng nhập với Facebook
          </Button>
        </div>

        <div className="mt-4 text-center text-sm">
          Bạn chưa có tài khoản?{' '}
          <Link href="/register" className="font-semibold underline text-[#f05123]">
            Đăng ký
          </Link>
        </div>
        <div className="text-center text-sm">
          <Link href="/forgot-password" className="font-semibold underline text-[#f05123]">
            Quên mật khẩu?
          </Link>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4 text-[11px]">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
          <Link href="/terms" className="underline">
            điều khoản sử dụng
          </Link>{' '}
          của chúng tôi.
        </p>
      </DialogContent>
    </Dialog>
  )
}
