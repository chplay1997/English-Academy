import mongoose, { Schema, Document } from 'mongoose'

export interface IChapter extends Document {
  title: string
  description?: string
  order: number
  course: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
}

const ChapterSchema = new Schema<IChapter>(
  {
    title: { type: String, required: true },
    description: String,
    order: Number,
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  },
  { timestamps: true }
)

const Chapter = mongoose.model<IChapter>('Chapter', ChapterSchema)
export default Chapter
