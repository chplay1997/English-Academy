import { PipelineStage, Types } from 'mongoose'

export const getCoursePipeline = (slug: string, userId?: string): PipelineStage[] => {
  const pipeline: PipelineStage[] = [
    { $match: { slug } },

    // === 1. Get sections & lessons ===
    {
      $lookup: {
        from: 'sections',
        localField: 'sections',
        foreignField: '_id',
        as: 'sections',
        pipeline: [
          { $sort: { order: 1 } },
          {
            $lookup: {
              from: 'lessons',
              localField: 'lessons',
              foreignField: '_id',
              as: 'lessons',
              pipeline: [{ $sort: { order: 1 } }],
            },
          },
          { $addFields: { duration: { $sum: '$lessons.duration' } } },
        ],
      },
    },

    // === 2. Total duration + video lessons count ===
    {
      $addFields: {
        duration: { $sum: '$sections.duration' },
        videoLessonsCount: {
          $size: {
            $filter: {
              input: {
                $reduce: {
                  input: '$sections.lessons',
                  initialValue: [],
                  in: { $concatArrays: ['$$value', '$$this'] },
                },
              },
              as: 'lesson',
              cond: { $eq: ['$$lesson.type', 'video'] },
            },
          },
        },
      },
    },
  ]

  // === 3. If user exists, get notes / enrollment / progress ===
  if (userId) {
    const userObjectId = new Types.ObjectId(userId)

    pipeline.push(
      // === a. Get user lesson notes ===
      {
        $lookup: {
          from: 'userlessonnotes',
          let: { slug: '$slug' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ['$courseSlug', '$$slug'] }, { $eq: ['$userId', userObjectId] }],
                },
              },
            },
          ],
          as: 'userLessonNote',
        },
      },

      // === b. Get enrollment ===
      {
        $lookup: {
          from: 'enrollments',
          let: { slug: '$slug' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ['$courseSlug', '$$slug'] }, { $eq: ['$userId', userObjectId] }],
                },
              },
            },
          ],
          as: 'enrollment',
        },
      },

      // === c. Get user progress ===
      {
        $lookup: {
          from: 'userlessonprogresses',
          let: { slug: '$slug' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ['$courseSlug', '$$slug'] }, { $eq: ['$userId', userObjectId] }],
                },
              },
            },
          ],
          as: 'userLessonProgress',
        },
      },

      // === d. Unwrap single progress document ===
      {
        $addFields: {
          userLessonProgress: { $arrayElemAt: ['$userLessonProgress', 0] },
        },
      },

      // === e. Compute enrollment flag ===
      {
        $addFields: {
          isEnrolled: { $gt: [{ $size: '$enrollment' }, 0] },
        },
      },

      // === f. Remove auxiliary arrays ===
      {
        $project: {
          enrollment: 0,
        },
      }
    )
  } else {
    // === If no user: default values ===
    pipeline.push({
      $addFields: {
        isEnrolled: false,
        userLessonNote: [],
        userLessonProgress: null,
      },
    })
  }

  return pipeline
}
