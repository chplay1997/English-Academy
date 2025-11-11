import mongoose, { Schema, Document } from 'mongoose'

export interface ICourse extends Document {
  title: string
  slug: string
  subtitle?: string
  author?: string
  oldPrice?: number
  newPrice?: number
  currency?: 'VND' | 'USD' | 'EUR'
  thumbnail?: string
  category?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  language?: string
  order: number
  sections: mongoose.Types.ObjectId[]
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: String,
    author: { type: String, default: 'Anonymous' },
    oldPrice: Number,
    newPrice: Number,
    currency: { type: String, enum: ['VND', 'USD', 'EUR'], default: 'VND' },
    thumbnail: String,
    category: String,
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    language: { type: String, default: 'vi' },
    order: { type: Number, default: 1 },
    sections: [{ type: Schema.Types.ObjectId, ref: 'Section' }],
  },
  { timestamps: true }
)

const Course = mongoose.models?.Course || mongoose.model<ICourse>('Course', courseSchema)

export default Course
