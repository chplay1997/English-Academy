import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import mongoose from 'mongoose'

// Dynamic import models
const getModels = async () => {
  const { default: Course } = await import('@/models/course.model')
  const { default: Section } = await import('@/models/section.model')
  const { default: Lesson } = await import('@/models/lesson.model')
  const { default: Enrollment } = await import('@/models/enrollment.model')

  return { Course, Section, Lesson, Enrollment }
}

/**
 * Get all optimized course data for the homepage, combined with enrollment status.
 */
export async function getHomeCourseData(userId: string | null) {
  const cacheKey = 'courses:home:public'
  const cached = await redis.get(cacheKey)

  if (cached) {
    const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
    return JSON.parse(json)
  }

  await connectDB()
  const { Course } = await getModels()
  const userIdObjectId = userId ? new mongoose.Types.ObjectId(userId) : null

  const courses = await Course.aggregate([
    { $lookup: { from: 'sections', localField: '_id', foreignField: 'courseId', as: 'sections' } },
    { $lookup: { from: 'lessons', localField: 'sections._id', foreignField: 'sectionId', as: 'lessons' } },
    { $lookup: { from: 'enrollments', localField: 'slug', foreignField: 'courseSlug', as: 'allEnrollments' } },
    {
      $addFields: {
        // Filter enrollments of current user to check enrollment status
        userEnrollments: {
          $filter: {
            input: '$allEnrollments',
            as: 'enrollment',
            // Filter condition: If userIdObjectId exists then compare, otherwise return empty array
            cond: userIdObjectId ? { $eq: ['$$enrollment.userId', userIdObjectId] } : false,
          },
        },
      },
    },
    {
      $addFields: {
        duration: { $sum: '$lessons.duration' },
        students: { $size: '$allEnrollments' },
        isEnrolled: { $gt: [{ $size: '$userEnrollments' }, 0] },
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
        allEnrollments: 0,
        userEnrollments: 0,
      },
    },
    { $sort: { order: 1 } },
  ])

  // Update cache
  await redis.set(cacheKey, JSON.stringify(courses), { ex: 60 })

  return courses
}
