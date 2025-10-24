'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { LucideAlertOctagon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ErrorProps {
  message?: string
}

const Error: FC<ErrorProps> = ({ message = 'Đã có lỗi xảy ra!' }) => {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 p-4">
      <Card className="max-w-sm w-full shadow-lg border border-gray-200">
        <CardHeader className="flex flex-col items-center">
          <LucideAlertOctagon className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
          <CardTitle className="text-2xl font-bold text-center">Oops!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <CardDescription className="text-center text-gray-600">{message}</CardDescription>
          <Button variant="default" className="w-full" onClick={() => router.refresh()}>
            Thử lại
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Error
