import CourseList from './components/CourseList'
import CoreLayout from './components/CoreLayout'

export default async function Home() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/courses`, {
    next: { revalidate: 60 }, // ISR caching 60s
  })

  if (!res.ok) {
    throw new Error('Failed to fetch courses')
  }

  const courses = await res.json()

  return (
    <CoreLayout>
      <CourseList courses={courses} />
    </CoreLayout>
  )
}
