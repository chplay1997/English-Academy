import mongoose from 'mongoose'

const UserLessonProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseSlug: { type: String, required: true },
    sectionOrder: { type: Number, required: true },
    lessonOrder: { type: Number, required: true },
    completed: { type: Boolean, default: false },
    lastWatchedSecond: { type: Number, default: 0 },
    lastWatchedAt: { type: Date },
  },
  { timestamps: true }
)

const UserLessonProgress =
  mongoose.models.UserLessonProgress || mongoose.model('UserLessonProgress', UserLessonProgressSchema)
export default UserLessonProgress
