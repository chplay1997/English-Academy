import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import Lesson from '@/models/lesson.model'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)

  // 🔒 Nếu chưa login → từ chối truy cập
  if (!session) {
    return NextResponse.json({ success: false, message: 'Bạn cần đăng nhập để xem nội dung này.' }, { status: 401 })
  }

  try {
    const url = new URL(req.url)
    const courseSlug = url.searchParams.get('courseSlug')
    const cacheKey = courseSlug ? `lesson:${courseSlug}` : 'lesson:all'

    // ⚡ 1️⃣ Kiểm tra cache
    const cached = await redis.get(cacheKey)
    if (cached) {
      const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
      return NextResponse.json({
        success: true,
        data: json,
        cached: true,
      })
    }
    await connectDB()

    // ⚙️ 2️⃣ Fetch từ Mongo
    const query = courseSlug ? { courseSlug } : {}
    const lessons = await Lesson.find(query).lean()

    // 💾 3️⃣ Lưu cache 60s
    await redis.set(cacheKey, JSON.stringify(lessons), { ex: 60 })

    return NextResponse.json({
      success: true,
      data: lessons,
      cached: false,
    })
  } catch (error) {
    console.error('GET /api/lessons error:', error)
    return NextResponse.json({ success: false, message: 'Không thể tải dữ liệu bài học.' }, { status: 500 })
  }
}
