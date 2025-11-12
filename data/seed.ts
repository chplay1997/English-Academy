import { connectDB } from '@/lib/mongoose'
import Course from '@/models/course.model'
import Section from '@/models/section.model'
import Lesson from '@/models/lesson.model'
import Assessment from '@/models/assessment.model'
import { courses, courseContent } from '@/data/defaultData'
import { grammarTest } from './grammarTestData'

// 🧩 Helper: convert "hh:mm:ss" | "mm:ss" → seconds (number)
function parseDurationToSeconds(duration?: string): number {
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

  console.info('🔄 Starting seed process...')

  // ============================================
  // 1. SEED ASSESSMENTS (with override logic)
  // ============================================
  console.info('📝 Seeding assessments...')

  const assessmentDocs: any[] = []

  for (const test of grammarTest) {
    // Find assessment by courseSlug + testName
    const existing = await Assessment.findOne({
      courseSlug: test.courseSlug,
      testName: test.testName,
    })

    if (existing) {
      // Override: Update assessment
      const updated = await Assessment.findByIdAndUpdate(
        existing._id,
        {
          $set: {
            testCategory: test.testCategory,
            exercises: test.exercises,
          },
        },
        { new: true }
      )
      assessmentDocs.push(updated)
      console.info(`  ✏️  Updated: ${test.testName}`)
    } else {
      // Create new assessment
      const created = await Assessment.create(test)
      assessmentDocs.push(created)
      console.info(`  ➕ Created: ${test.testName}`)
    }
  }

  // ============================================
  // 2. SEED COURSES (with override logic)
  // ============================================
  console.info('📚 Seeding courses...')

  for (const [courseIndex, course] of courses.entries()) {
    // Find course by slug
    let courseDoc = await Course.findOne({ slug: course.slug })

    if (courseDoc) {
      // Override: Update course
      courseDoc = await Course.findByIdAndUpdate(
        courseDoc._id,
        {
          $set: {
            title: course.title,
            subtitle: course.subtitle,
            author: course.author,
            oldPrice: course.oldPrice,
            newPrice: course.newPrice,
            level: course.level,
            order: courseIndex + 1,
          },
        },
        { new: true }
      )
      console.info(`  ✏️  Updated course: ${course.title}`)

      // Clean old sections & lessons
      const oldSections = await Section.find({ courseId: courseDoc._id })
      const oldSectionIds = oldSections.map(s => s._id)

      await Lesson.deleteMany({ sectionId: { $in: oldSectionIds } })
      await Section.deleteMany({ courseId: courseDoc._id })
      console.info(`  🗑️  Cleaned old sections & lessons for: ${course.title}`)
    } else {
      // Create new course
      courseDoc = await Course.create({
        title: course.title,
        slug: course.slug,
        subtitle: course.subtitle,
        author: course.author,
        oldPrice: course.oldPrice,
        newPrice: course.newPrice,
        level: course.level,
        order: courseIndex + 1,
      })
      console.info(`  ➕ Created course: ${course.title}`)
    }

    // ============================================
    // 3. SEED SECTIONS & LESSONS
    // ============================================
    const sections = courseContent[course.slug as keyof typeof courseContent]
    if (sections) {
      const sectionIds: any[] = []

      for (const [sectionIndex, section] of sections.entries()) {
        const sectionDoc = await Section.create({
          courseId: courseDoc._id,
          title: section.title,
          order: sectionIndex + 1,
        })

        sectionIds.push(sectionDoc._id)

        if (section.details) {
          const lessonIds: any[] = []

          for (const [lessonIndex, lesson] of section.details.entries()) {
            const assessmentName = 'assessmentName' in lesson ? lesson.assessmentName : undefined
            const duration = 'duration' in lesson ? lesson.duration : undefined
            const vimeoID = 'vimeoID' in lesson ? lesson.vimeoID : undefined

            // Find assessment ID from assessmentName
            const assessmentId = assessmentDocs.find(test => test.testName === assessmentName)?._id

            const lessonDoc = await Lesson.create({
              sectionId: sectionDoc._id,
              title: lesson.title,
              duration: parseDurationToSeconds(duration),
              video: {
                vimeoId: vimeoID,
              },
              type: lesson?.type || 'video',
              order: lessonIndex + 1,
              assessment: assessmentId,
            })

            lessonIds.push(lessonDoc._id)
          }

          // Update lessons to section
          await Section.findByIdAndUpdate(sectionDoc._id, {
            $set: { lessons: lessonIds },
          })
        }
      }

      // Update sections to course
      await Course.findByIdAndUpdate(courseDoc._id, {
        $set: { sections: sectionIds },
      })
    }
  }

  console.info('🎉 Seeding completed successfully!')
  return { message: 'Seeding completed with override!' }
}
