import CoreLayout from '../../components/CoreLayout'
import { CourseContent } from './CourseContent'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getCourseData } from '@/services/course/getCourseData'

export default async function Courses({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  const course = await getCourseData(slug, userId)

  if (!course) {
    throw new Error('Failed to fetch courses')
  }

  // When user has registered course, redirect to learning page
  if (course.isEnrolled) {
    redirect(`/learning/${slug}`)
  }

  const serializedCourse = JSON.stringify(course)

  return (
    <CoreLayout>
      <CourseContent courseData={JSON.parse(serializedCourse)} />
    </CoreLayout>
  )
}
