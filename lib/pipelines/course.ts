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

  // === 3. If user exists, check progress ===
  if (userId) {
    console.log('userId', userId)
    const userObjectId = new Types.ObjectId(userId)

    pipeline.push(
      // Get lesson notes
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
      // Get Enrollment
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

      // Get Progress (lessonIdCompleted)
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
            { $project: { _id: 0, lessonIdCompleted: 1 } },
          ],
          as: 'progress',
        },
      },

      // Combine Enrollment + Progress
      {
        $addFields: {
          isEnrolled: { $gt: [{ $size: '$enrollment' }, 0] },
          lessonIdCompleted: {
            $ifNull: [{ $arrayElemAt: ['$progress.lessonIdCompleted', 0] }, []],
          },
        },
      },

      // === 🔥 4. Add isCompleted to each lesson ===
      {
        $addFields: {
          sections: {
            $map: {
              input: '$sections',
              as: 'section',
              in: {
                $mergeObjects: [
                  '$$section',
                  {
                    lessons: {
                      $map: {
                        input: '$$section.lessons',
                        as: 'lesson',
                        in: {
                          $mergeObjects: [
                            '$$lesson',
                            {
                              isCompleted: {
                                $in: ['$$lesson._id', '$lessonIdCompleted'],
                              },
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },

      // Remove auxiliary fields
      { $project: { enrollment: 0, progress: 0 } }
    )
  } else {
    // === If no user → default to false ===
    pipeline.push({
      $addFields: {
        isEnrolled: false,
        lessonIdCompleted: [],
        sections: {
          $map: {
            input: '$sections',
            as: 'section',
            in: {
              $mergeObjects: [
                '$$section',
                {
                  lessons: {
                    $map: {
                      input: '$$section.lessons',
                      as: 'lesson',
                      in: {
                        $mergeObjects: ['$$lesson', { isCompleted: false }],
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    })
  }

  return pipeline
}
