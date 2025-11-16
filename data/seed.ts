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
    const existing = await Assessment.findOne({
      courseSlug: test.courseSlug,
      testName: test.testName,
    })

    if (existing) {
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
      const created = await Assessment.create(test)
      assessmentDocs.push(created)
      console.info(`  ➕ Created: ${test.testName}`)
    }
  }

  // ============================================
  // 2. SEED COURSES (with smart override)
  // ============================================
  console.info('📚 Seeding courses...')

  for (const [courseIndex, course] of courses.entries()) {
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
    // 3. SMART SEED SECTIONS & LESSONS
    // ============================================
    const sections = courseContent[course.slug as keyof typeof courseContent]
    if (sections) {
      const sectionIds: any[] = []
      const oldSections = await Section.find({ courseId: courseDoc._id })

      // Track which sections to keep
      const processedSectionIds = new Set()

      for (const [sectionIndex, section] of sections.entries()) {
        // Try to find existing section by title
        let sectionDoc = oldSections.find(s => s.title === section.title)

        if (sectionDoc) {
          // Update existing section
          sectionDoc = await Section.findByIdAndUpdate(
            sectionDoc._id,
            {
              $set: {
                title: section.title,
                order: sectionIndex + 1,
              },
            },
            { new: true }
          )
          console.info(`    ✏️  Updated section: ${section.title}`)
        } else {
          // Create new section
          sectionDoc = await Section.create({
            courseId: courseDoc._id,
            title: section.title,
            order: sectionIndex + 1,
          })
          console.info(`    ➕ Created section: ${section.title}`)
        }

        sectionIds.push(sectionDoc._id)
        processedSectionIds.add(sectionDoc._id.toString())

        // ============================================
        // 4. SMART SEED LESSONS
        // ============================================
        if (section.details) {
          const lessonIds: any[] = []
          const oldLessons = await Lesson.find({ sectionId: sectionDoc._id })

          // Track which lessons to keep
          const processedLessonIds = new Set()

          for (const [lessonIndex, lesson] of section.details.entries()) {
            const assessmentName = 'assessmentName' in lesson ? lesson.assessmentName : undefined
            const duration = 'duration' in lesson ? lesson.duration : undefined
            const vimeoID = 'vimeoID' in lesson ? lesson.vimeoID : undefined

            // Find assessment ID
            const assessmentId = assessmentDocs.find(test => test.testName === assessmentName)?._id

            // Try to find existing lesson by title
            let lessonDoc = oldLessons.find(l => l.title === lesson.title)

            if (lessonDoc) {
              // Update existing lesson
              lessonDoc = await Lesson.findByIdAndUpdate(
                lessonDoc._id,
                {
                  $set: {
                    title: lesson.title,
                    duration: parseDurationToSeconds(duration),
                    video: {
                      vimeoId: vimeoID,
                    },
                    type: lesson?.type || 'video',
                    order: lessonIndex + 1,
                    assessment: assessmentId,
                  },
                },
                { new: true }
              )
              console.info(`      ✏️  Updated lesson: ${lesson.title}`)
            } else {
              // Create new lesson
              lessonDoc = await Lesson.create({
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
              console.info(`      ➕ Created lesson: ${lesson.title}`)
            }

            lessonIds.push(lessonDoc._id)
            processedLessonIds.add(lessonDoc._id.toString())
          }

          // Delete lessons that are no longer in the new data
          const lessonsToDelete = oldLessons.filter(l => !processedLessonIds.has(l._id.toString()))

          if (lessonsToDelete.length > 0) {
            await Lesson.deleteMany({
              _id: { $in: lessonsToDelete.map(l => l._id) },
            })
            console.info(`      🗑️  Deleted ${lessonsToDelete.length} obsolete lessons`)
          }

          // Update lessons array in section
          await Section.findByIdAndUpdate(sectionDoc._id, {
            $set: { lessons: lessonIds },
          })
        }
      }

      // Delete sections that are no longer in the new data
      const sectionsToDelete = oldSections.filter(s => !processedSectionIds.has(s._id.toString()))

      if (sectionsToDelete.length > 0) {
        // First delete all lessons in these sections
        await Lesson.deleteMany({
          sectionId: { $in: sectionsToDelete.map(s => s._id) },
        })

        // Then delete the sections
        await Section.deleteMany({
          _id: { $in: sectionsToDelete.map(s => s._id) },
        })
        console.info(`    🗑️  Deleted ${sectionsToDelete.length} obsolete sections`)
      }

      // Update sections array in course
      await Course.findByIdAndUpdate(courseDoc._id, {
        $set: { sections: sectionIds },
      })
    }
  }

  console.info('🎉 Seeding completed successfully!')
  return { message: 'Seeding completed with smart override!' }
}
