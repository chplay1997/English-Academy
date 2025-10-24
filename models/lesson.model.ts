import mongoose, { Schema, Document } from 'mongoose'

export interface Detail {
  title: string
  duration: string
  vimeoID: string
  status?: string
}

export interface LessonDocument extends Document {
  courseSlug: string
  title: string
  progress?: string
  duration: string
  details: Detail[]
}

const DetailSchema = new Schema<Detail>({
  title: String,
  duration: String,
  vimeoID: String,
  status: String,
})

const LessonSchema = new Schema<LessonDocument>({
  courseSlug: { type: String, required: true },
  title: { type: String, required: true },
  progress: String,
  duration: { type: String, required: true },
  details: [DetailSchema],
})

export const Lesson = mongoose.models.Lesson || mongoose.model<LessonDocument>('Lesson', LessonSchema)
