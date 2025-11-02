import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import { getHomeCoursesPipeline } from '@/lib/pipelines/getHomeCoursesPipeline'

export const GET_HOME_COURSES_CACHE_KEY = (userId: string | null) => `courses:home:${userId ?? 'public'}`

export async function getHomeCourseData(userId: string | null) {
  const cacheKey = GET_HOME_COURSES_CACHE_KEY(userId)
  const cached = await redis.get(cacheKey)

  if (cached) {
    const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
    return JSON.parse(json)
  }

  await connectDB()

  const { default: Course } = await import('@/models/course.model')
  const pipeline = getHomeCoursesPipeline(userId)
  const courses = await Course.aggregate(pipeline)

  await redis.set(cacheKey, JSON.stringify(courses), { ex: 60 })
  return courses
}
