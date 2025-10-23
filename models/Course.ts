import mongoose, { Schema, Document } from 'mongoose'

export interface ICourse extends Document {
  title: string
  level: string
  description?: string
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  level: { type: String, required: true },
  description: String,
})

export default mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema)
