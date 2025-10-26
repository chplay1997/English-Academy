import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 })
  }

  try {
    // 1️⃣ Kết nối DB
    await connectDB()

    // 2️⃣ Import models SAU khi connect
    const { default: Course } = await import('@/models/course.model')
    const { default: Section } = await import('@/models/section.model')
    const { default: Lesson } = await import('@/models/lesson.model')

    // 3️⃣ Kiểm tra cache Redis
    const cacheKey = `course:${slug}`
    const cached = await redis.get(cacheKey)
    if (cached) {
      const parsed = typeof cached === 'string' ? JSON.parse(cached) : cached
      return NextResponse.json(parsed)
    }

    // 4️⃣ Truy vấn Course + populate Section + Lesson
    const course = await Course.findOne({ slug })
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

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    // 5️⃣ Cache lại 2 phút
    await redis.set(cacheKey, JSON.stringify(course), { ex: 120 })

    return NextResponse.json(course)
  } catch (error: any) {
    console.error('❌ Error in GET /api/courses/[slug]:', error)
    return NextResponse.json({ error: 'Internal server error', detail: error.message }, { status: 500 })
  }
}
