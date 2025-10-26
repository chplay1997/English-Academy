import { connectDB } from '@/lib/mongoose'
import Course from '@/models/course.model'
import Section from '@/models/section.model'
import Lesson from '@/models/lesson.model'
import { courses, courseContent } from '@/data/defaultData'

// 🧩 Helper: convert "hh:mm:ss" | "mm:ss" → seconds (number)
function parseDurationToSeconds(duration: string): number {
  if (!duration) return 0

  const parts = duration.split(':').map(Number)
  if (parts.length === 3) {
    const [h, m, s] = parts
    return h * 3600 + m * 60 + s
  } else if (parts.length === 2) {
    const [m, s] = parts
    return m * 60 + s
  } else if (parts.length === 1) {
    return Number(parts[0]) || 0
  }
  return 0
}

export async function runSeed() {
  await connectDB()

  const count = await Course.countDocuments()
  if (count > 0) {
    console.log('✅ Database already seeded.')
    return { message: 'Database already seeded.' }
  }

  for (const [courseIndex, course] of courses.entries()) {
    const courseDoc = await Course.create({
      title: course.title,
      slug: course.slug,
      subtitle: course.subtitle,
      author: course.author,
      oldPrice: course.oldPrice,
      newPrice: course.newPrice,
      order: courseIndex + 1,
    })

    const sections = courseContent[course.slug as keyof typeof courseContent]
    if (sections) {
      const sectionIds: any[] = []

      for (const [sectionIndex, section] of sections.entries()) {
        const sectionDoc = await Section.create({
          courseId: courseDoc._id, // ✅ liên kết với course
          title: section.title,
          order: sectionIndex + 1,
        })

        sectionIds.push(sectionDoc._id)

        if (section.details) {
          const lessonIds: any[] = []
          for (const [lessonIndex, lesson] of section.details.entries()) {
            const lessonDoc = await Lesson.create({
              sectionId: sectionDoc._id, // ✅ liên kết với section
              title: lesson.title,
              duration: parseDurationToSeconds(lesson.duration),
              video: {
                vimeoId: lesson.vimeoID,
              },
              type: lesson.type || 'video',
              order: lessonIndex + 1,
            })
            lessonIds.push(lessonDoc._id)
          }

          // cập nhật mảng lessons vào section (nếu bạn có field đó trong schema)
          await Section.findByIdAndUpdate(sectionDoc._id, {
            $set: { lessons: lessonIds },
          })
        }
      }

      // cập nhật mảng sections vào course (nếu bạn có field đó trong schema)
      await Course.findByIdAndUpdate(courseDoc._id, {
        $set: { sections: sectionIds },
      })
    }
  }

  console.log('🎉 Seeded successfully!')
  return { message: 'Seeding completed!' }
}
