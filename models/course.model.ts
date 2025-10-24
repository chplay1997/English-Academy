import mongoose, { Schema, Document } from 'mongoose'
import { LessonDocument } from './lesson.model'

export type CourseSlug = 'toeic-foundation' | 'toeic-intermediate' | 'toeic-advanced'

export interface ICourse {
  title: string
  slug: CourseSlug
  subtitle: string
  author: string
  students: number
  duration: string
  oldPrice?: string
  newPrice?: string
  color?: string
}

export interface CourseDocument extends Document, ICourse {
  createdAt: Date
}

const CourseSchema = new Schema<CourseDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    subtitle: { type: String, required: true },
    author: { type: String, required: true },
    students: { type: Number, default: 0 },
    duration: { type: String, required: true },
    oldPrice: String,
    newPrice: String,
    color: String,
  },
  { timestamps: true }
)

// Automatically calculate the total duration from the Lesson table
CourseSchema.pre('save', async function (next) {
  const Lesson = mongoose.model<LessonDocument>('Lesson')
  const lessons = await Lesson.find({ courseSlug: this.slug })

  if (lessons.length > 0) {
    const totalMins = lessons.reduce((acc, cur) => {
      const mins = parseInt(cur.duration.replace('m', '')) || 0
      return acc + mins
    }, 0)
    this.duration = `${totalMins}m`
  }

  next()
})

export const Course = mongoose.models.Course || mongoose.model<CourseDocument>('Course', CourseSchema)
