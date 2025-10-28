import CourseList, { ICourseClient } from './components/CourseList'
import CoreLayout from './components/CoreLayout'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import Enrollment from '@/models/enrollment.model'
import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongoose'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/courses`, {
    next: { revalidate: 60 }, // ISR caching 60s
  })

  if (!res.ok) {
    throw new Error('Failed to fetch courses')
  }

  const courses = await res.json()

  let enrolledCourses = new Set<string>()
  if (userId) {
    await connectDB()

    const userEnrollments = await Enrollment.find({ userId }).select('courseSlug').lean()
    enrolledCourses = new Set(userEnrollments.map(e => e.courseSlug))
  }

  const dataWithEnrollFlag = courses.map((c: ICourseClient) => ({
    ...c,
    isEnrolled: enrolledCourses.has(c.slug),
  }))

  return (
    <CoreLayout>
      <CourseList courses={dataWithEnrollFlag} />
    </CoreLayout>
  )
}
