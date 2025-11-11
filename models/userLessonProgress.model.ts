import mongoose from 'mongoose'

export interface IUserLessonProgress {
  userId: mongoose.Types.ObjectId
  courseSlug: string
  lessons: {
    lessonId: mongoose.Types.ObjectId
    lastWatched: number
    duration?: number
    progressPercent?: number
    completed: boolean
  }[]
}

const UserLessonProgressSchema = new mongoose.Schema<IUserLessonProgress>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseSlug: { type: String, required: true },
    lessons: [
      {
        lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
        lastWatched: { type: Number, default: 0 },
        duration: { type: Number },
        progressPercent: { type: Number, default: 0 },
        completed: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
)

// Add compound index to ensure each user has only one progress record per course
UserLessonProgressSchema.index({ userId: 1, courseSlug: 1 }, { unique: true })

const UserLessonProgress =
  mongoose.models?.UserLessonProgress ||
  mongoose.model<IUserLessonProgress>('UserLessonProgress', UserLessonProgressSchema)

export default UserLessonProgress
