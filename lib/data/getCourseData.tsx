import { connectDB } from '@/lib/mongoose'
import { redis } from '@/lib/redis'
import { ILesson } from '@/models/lesson.model'
import { ISection } from '@/models/section.model'
import { ICourse } from '@/models/course.model'

type LessonBase = ILesson & { _id: string }
type SectionBase = Omit<ISection, 'lessons'> & { lessons: LessonBase[]; _id: string }
type CourseBase = Omit<ICourse, 'sections'> & { sections: SectionBase[]; _id: string }

export interface ICourseData extends Omit<CourseBase, 'sections'> {
  sections: (Omit<SectionBase, 'lessons'> & { lessons: LessonBase[]; duration: number })[]
  isEnrolled: boolean
  duration: number
  videoLessonsCount: number
  lessonIdCompleted: string[]
}

export async function getCourseData(slug: string, userId?: string): Promise<ICourseData | null> {
  const cacheKey = `course:${slug}-${userId}`
  const cached = await redis.get(cacheKey)
  if (cached) {
    return cached as ICourseData
  }

  await connectDB()
  const { default: Course } = await import('@/models/course.model')
  const { default: Section } = await import('@/models/section.model')
  const { default: Lesson } = await import('@/models/lesson.model')
  const { default: Enrollment } = await import('@/models/enrollment.model')
  const { default: UserLessonProgress } = await import('@/models/userLessonProgress.model')

  // Query Course + populate Sections + Lessons
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
    .lean<CourseBase>()

  if (!course) {
    return null
  }

  // Calculate duration for each section and update course
  const newCourse: Omit<ICourseData, 'isEnrolled' | 'duration' | 'videoLessonsCount' | 'lessonIdCompleted'> = {
    ...course,
    sections: course.sections.map((section: SectionBase) => ({
      ...section,
      duration: section.lessons.reduce((sum: number, lesson) => sum + (lesson.duration || 0), 0),
    })),
  }

  // Calculate duration & videoLessonsCount
  const allLessons: LessonBase[] = course.sections.flatMap((section: SectionBase) => section.lessons || [])
  const duration = allLessons.reduce((sum: number, l) => sum + (l.duration || 0), 0)
  const videoLessonsCount = allLessons.filter(l => l.type === 'video').length

  // Check enrollment (if user is logged in)
  let isEnrolled = false
  let lessonIdCompleted = []

  if (userId) {
    const enrolled = await Enrollment.exists({ userId, courseSlug: slug })
    const userLessonProgress = await UserLessonProgress.findOne({ userId, courseSlug: slug })
    isEnrolled = !!enrolled
    lessonIdCompleted = userLessonProgress?.lessonIdCompleted || []
  }

  // Create return data
  const data = {
    ...newCourse,
    duration,
    videoLessonsCount,
    isEnrolled,
    lessonIdCompleted,
  }

  // Cache Redis (TTL: 60s)
  const serialized = JSON.stringify(data)
  await redis.set(cacheKey, serialized, { ex: 60 })

  return data
}
