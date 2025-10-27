'use client'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import LoginModal, { TModalType } from '@/app/components/LoginModal'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Spinner } from '@/components/ui/spinner'

export function RegisterCourse() {
  const { data: session, status } = useSession()
  const userId = session?.user?.id
  const params = useParams()
  const courseSlug = params.slug
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<TModalType>('login')

  async function handleEnroll() {
    if (status === 'unauthenticated' || !session) {
      setOpen(true)
      return
    }
    setLoading(true)

    const res = await fetch('/api/enroll', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courseSlug }),
    })
    const data = await res.json()

    if (data.success) {
      console.log('Enrolled successfully')
      router.push(`/learning/${courseSlug}`)
    } else {
      setLoading(false)
      throw new Error(data.error)
    }
  }

  return (
    <>
      <Button
        disabled={loading}
        onClick={handleEnroll}
        className="text-sm font-bold px-6 py-1 bg-[#0093fc] hover:bg-[#0093fc] hover:opacity-70 transition-colors rounded-full"
      >
        {loading && <Spinner />}
        ĐĂNG KÝ HỌC
      </Button>

      <LoginModal type={type} setType={setType} open={open} setOpen={setOpen} />
    </>
  )
}
