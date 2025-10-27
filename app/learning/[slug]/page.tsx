import { redirect } from 'next/navigation'
import CourseClient from './CourseClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getCourseData } from '@/lib/data'

// @ts-nocheck
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  const course = await getCourseData(slug, userId)

  if (!course) {
    throw new Error('Failed to fetch courses')
  }

  // When user has registered course, redirect to learning page
  if (!course.isEnrolled) {
    redirect(`/courses/${slug}`)
  }

  const stringifyData = JSON.stringify(course)
  const courseData = JSON.parse(stringifyData)

  // 3️⃣ Truyền xuống Client component
  return <CourseClient courseData={courseData} slug={slug} />
}
