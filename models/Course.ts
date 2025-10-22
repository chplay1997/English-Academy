import mongoose, { Schema, models, model } from 'mongoose'

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
  },
  { timestamps: true }
)

// tránh lỗi “OverwriteModelError” khi HMR
const Course = models.Course || model('Course', courseSchema)

export default Course
