import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { redirect, notFound } from 'next/navigation'
import { connectDB } from '@/lib/mongoose'
import Course from '@/models/course.model'
import { redis } from '@/lib/redis'
import CourseClient from './CourseClient'

// @ts-nocheck
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // 1️⃣ Kiểm tra login
  const session = await getServerSession(authOptions)
  if (!session) redirect('/login')

  // 2️⃣ Kết nối DB
  await connectDB()

  const cacheKey = `course:${slug}`
  const cached = await redis.get(cacheKey)
  let courseData

  if (cached) {
    // ✅ Nếu có cache → parse JSON
    courseData = typeof cached === 'string' ? JSON.parse(cached) : cached
  } else {
    // ✅ Truy vấn Course và populate đầy đủ
    courseData = await Course.findOne({ slug })
      .populate({
        path: 'sections',
        options: { sort: { order: 1 } },
        populate: {
          path: 'lessons',
          options: { sort: { order: 1 } },
        },
      })
      .lean()

    if (!courseData) return notFound()

    // ✅ Cache lại trong Redis 2 phút
    await redis.set(cacheKey, JSON.stringify(courseData), { ex: 120 })
  }

  console.log('📘 Course data loaded:', courseData.title)

  // 3️⃣ Truyền xuống Client component
  return <CourseClient courseData={courseData} slug={slug} />
}
