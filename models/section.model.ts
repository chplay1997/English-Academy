import mongoose, { Schema, Document } from 'mongoose'
import { ILesson } from './lesson.model'

export interface ISection extends Document {
  courseId: mongoose.Types.ObjectId
  title: string
  order: number
  lessons: mongoose.Types.ObjectId[] | ILesson[]
}

const sectionSchema = new Schema<ISection>(
  {
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: true },
    order: { type: Number, default: 1 },
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  },
  { timestamps: true }
)

const Section = mongoose.models.Section || mongoose.model<ISection>('Section', sectionSchema)

export default Section
