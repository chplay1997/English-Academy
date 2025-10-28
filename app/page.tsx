import CourseList from './components/CourseList'
import CoreLayout from './components/CoreLayout'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import { getHomeCourseData } from '@/lib/data/getHomeCourseData'

export default async function Home() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id || null

  const dataWithEnrollFlag = await getHomeCourseData(userId)

  return (
    <CoreLayout>
      <CourseList courses={dataWithEnrollFlag} />
    </CoreLayout>
  )
}
