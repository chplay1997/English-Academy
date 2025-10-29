import { PipelineStage, Types } from 'mongoose'

/**
 * Build aggregation pipeline for fetching all courses on the homepage.
 * Includes duration, video count, student count, and enrollment status if userId provided.
 */
export const getHomeCoursesPipeline = (userId?: string | null): PipelineStage[] => {
  const userObjectId = userId ? new Types.ObjectId(userId) : null

  const pipeline: PipelineStage[] = [
    // === 1. Join Sections + Lessons + Enrollments ===
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
        as: 'allEnrollments',
      },
    },

    // === 2. If user logged in, filter enrollment of this user ===
    {
      $addFields: {
        userEnrollments: userObjectId
          ? {
              $filter: {
                input: '$allEnrollments',
                as: 'enrollment',
                cond: { $eq: ['$$enrollment.userId', userObjectId] },
              },
            }
          : [],
      },
    },

    // === 3. Compute derived metrics ===
    {
      $addFields: {
        duration: { $sum: '$lessons.duration' },
        students: { $size: '$allEnrollments' },
        isEnrolled: userObjectId ? { $gt: [{ $size: '$userEnrollments' }, 0] } : false,
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

    // === 4. Cleanup unnecessary fields ===
    {
      $project: {
        sections: 0,
        lessons: 0,
        allEnrollments: 0,
        userEnrollments: 0,
      },
    },

    // === 5. Sort by custom order field (optional) ===
    { $sort: { order: 1 } },
  ]

  return pipeline
}
