'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export type TModalType = 'login' | 'register'

interface ILoginModal {
  type: TModalType
  open: boolean
  setOpen: (open: boolean) => void
  setType: (type: TModalType) => void
}

export default function LoginModal({ type, open, setOpen, setType }: ILoginModal) {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async (type: 'google' | 'facebook') => {
    setIsLoading(true)
    try {
      await signIn(type, { callbackUrl: '/' })
    } catch (error) {
      console.error(`${type} login failed:`, error)
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
          <DialogTitle className="text-2xl font-bold text-center">
            {type === 'login' ? 'Đăng nhập vào EA' : 'Đăng ký tài khoản EA'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          {/* <Button variant="outline" className="w-full py-6 text-base">
            Sử dụng email / số điện thoại
          </Button> */}

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6 text-base"
            onClick={() => handleGoogleLogin('google')}
          >
            <FcGoogle className="text-xl" /> {type === 'login' ? 'Đăng nhập với Google' : 'Đăng ký với Google'}
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6 text-base"
            onClick={() => handleGoogleLogin('facebook')}
          >
            <FaFacebook className="text-blue-600 text-xl" />{' '}
            {type === 'login' ? 'Đăng nhập với Facebook' : 'Đăng ký với Facebook'}
          </Button>
        </div>

        <div className="mt-4 text-center text-sm">
          {type === 'login' ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}{' '}
          <Button
            variant="link"
            onClick={() => setType(type === 'login' ? 'register' : 'login')}
            className="font-semibold underline text-[#f05123] hover:opacity-90 p-0"
          >
            {type === 'login' ? 'Đăng ký' : 'Đăng nhập'}
          </Button>
        </div>
        {/* <div className="text-center text-sm">
          <Link
            href={type === 'login' ? '/forgot-password' : '/login'}
            className="font-semibold underline text-[#f05123]"
          >
            Quên mật khẩu?
          </Link>
        </div> */}

        <p className="text-center text-xs text-gray-500 mt-4 text-[11px]">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
          <Link href={type === 'login' ? '/terms' : '/register'} className="underline">
            điều khoản sử dụng
          </Link>{' '}
          của chúng tôi.
        </p>

        {isLoading && (
          <div className="fixed inset-0 bg-[#000c] backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl">
            <div className="bg-[#1f2937] p-8 flex flex-col items-center shadow-2xl">
              <Loader2 className="h-8 w-8 stroke-[#f05123] animate-spin mb-4" />
              <p className="text-sm font-medium text-[#f9fafb]">
                {type === 'login' ? 'Đang đăng nhập' : 'Đang đăng ký'}...
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
