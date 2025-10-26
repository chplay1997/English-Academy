import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { redirect, notFound } from 'next/navigation'
import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import CourseClient from './CourseClient'

// @ts-nocheck
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // 1️⃣ Kiểm tra login
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')

  const cacheKey = `course:${slug}`
  const cached = await redis.get(cacheKey)
  let courseData

  if (cached) {
    // ✅ Nếu có cache → parse JSON
    courseData = typeof cached === 'string' ? JSON.parse(cached) : cached
  } else {
    // 2️⃣ Kết nối DB
    await connectDB()

    // 2️⃣ Import models SAU khi connect
    const { default: Course } = await import('@/models/course.model')
    const { default: Section } = await import('@/models/section.model')
    const { default: Lesson } = await import('@/models/lesson.model')

    // ✅ Truy vấn Course và populate đầy đủ
    const data = await Course.findOne({ slug })
      .populate({
        path: 'sections',
        model: Section,
        options: { sort: { order: 1 } },
        populate: {
          path: 'lessons',
          model: Lesson,
          options: { sort: { order: 1 } },
        },
      })
      .lean()

    if (!data) return notFound()

    const stringifyData = JSON.stringify(data)
    courseData = JSON.parse(stringifyData)

    // ✅ Cache lại trong Redis 2 phút
    await redis.set(cacheKey, stringifyData, { ex: 120 })
  }

  // 3️⃣ Truyền xuống Client component
  return <CourseClient courseData={courseData} slug={slug} />
}
