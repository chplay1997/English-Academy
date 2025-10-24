import { connectDB } from '@/lib/mongoose'
import { Course } from '@/models/course.model'
import { Lesson } from '@/models/lesson.model'
import { courses, courseContent } from '@/data/defaultData'

export async function runSeed() {
  await connectDB()

  const count = await Course.countDocuments()
  if (count > 0) {
    console.log('✅ Database already seeded.')
    return { message: 'Database already seeded.' }
  }

  for (const course of courses) {
    await Course.create(course)

    const lessons = courseContent[course.slug]
    if (lessons) {
      for (const lesson of lessons) {
        await Lesson.create({ ...lesson, courseSlug: course.slug })
      }
    }
  }

  console.log('🎉 Seeded successfully!')
  return { message: 'Seeding completed!' }
}
