import { redirect } from 'next/navigation'
import CourseClient from './CourseClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getCourseData } from '@/services/course/getCourseData'

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

  const stringifyData = JSON.stringify(course)
  const courseData = JSON.parse(stringifyData)

  return <CourseClient courseData={courseData} />
}
