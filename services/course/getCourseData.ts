import { connectDB } from '@/lib/mongoose'
// import { redis } from '@/lib/redis'
import { getCoursePipeline } from '@/lib/pipelines/course'
import { ICourseData } from '@/types/course'

export const GET_COURSE_CACHE_KEY = (slug: string, userId?: string) => `course:${slug}-${userId}`

export async function getCourseData(slug: string, userId?: string): Promise<ICourseData | null> {
  const cacheKey = GET_COURSE_CACHE_KEY(slug, userId)
  // const cached = await redis.get(cacheKey)
  // if (cached) {
  //   const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
  //   return JSON.parse(json) as ICourseData
  // }

  await connectDB()
  const { default: Course } = await import('@/models/course.model')

  const pipeline = getCoursePipeline(slug, userId)
  const result = await Course.aggregate(pipeline)
  const course = result[0]
  if (!course) return null

  // await redis.set(cacheKey, JSON.stringify(course), { ex: 60 })
  return course as ICourseData
}
