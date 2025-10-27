import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import { rateLimiter } from '@/lib/rate-limit'

export async function GET(req: Request) {
  // Rate limit
  const ip = req.headers.get('x-forwarded-for') || 'anonymous'
  const { success } = await rateLimiter.check(ip)
  if (!success) {
    return new Response(JSON.stringify({ error: '⛔ Too many requests. Try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Connect to DB & import models
  await connectDB()
  const { default: Course } = await import('@/models/course.model')
  // const { default: Section } = await import('@/models/section.model')
  // const { default: Lesson } = await import('@/models/lesson.model')
  // const { default: Enrollment } = await import('@/models/enrollment.model')

  const cacheKey = 'courses:home'
  const cached = await redis.get(cacheKey)
  if (cached) {
    const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
    return new Response(json, { headers: { 'Content-Type': 'application/json' } })
  }

  // Get courses (aggregate)
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: 'sections',
        localField: '_id',
        foreignField: 'courseId',
        as: 'sections',
      },
    },
    {
      $lookup: {
        from: 'lessons',
        localField: 'sections._id',
        foreignField: 'sectionId',
        as: 'lessons',
      },
    },
    {
      $lookup: {
        from: 'enrollments',
        localField: 'slug',
        foreignField: 'courseSlug',
        as: 'enrollments',
      },
    },
    {
      $addFields: {
        duration: { $sum: '$lessons.duration' },
        students: { $size: '$enrollments' },
        videoLessons: {
          $size: {
            $filter: {
              input: '$lessons',
              as: 'lesson',
              cond: { $eq: ['$$lesson.type', 'video'] },
            },
          },
        },
      },
    },
    {
      $project: {
        sections: 0,
        lessons: 0,
        enrollments: 0,
      },
    },
    {
      $sort: { order: 1 },
    },
  ])

  // Cache in Redis
  const serializableData = JSON.stringify(courses)
  await redis.set(cacheKey, serializableData, { ex: 60 })

  return new Response(serializableData, {
    headers: { 'Content-Type': 'application/json' },
  })
}
