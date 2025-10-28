import { redirect } from 'next/navigation'
import CourseClient from './CourseClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getCourseData } from '@/lib/data/getCourseData'

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  if (!userId) {
    redirect('/')
  }

  const course = await getCourseData(slug, userId)

  if (!course) {
    throw new Error('Failed to fetch courses')
  }

  // When user hasn't registered course, redirect to courses page
  if (!course.isEnrolled) {
    redirect(`/courses/${slug}`)
  }

  const { default: UserLessonNote } = await import('@/models/userLessonNote.model')
  const userLessonNote = await UserLessonNote.find({ userId, courseSlug: slug })

  const stringifyData = JSON.stringify(course)
  const courseData = JSON.parse(stringifyData)

  const serializedUserLessonNote = userLessonNote ? JSON.parse(JSON.stringify(userLessonNote)) : null

  return <CourseClient courseData={courseData} userLessonNote={serializedUserLessonNote} />
}
