import mongoose from 'mongoose'

interface IUserLessonProgress {
  userId: mongoose.Types.ObjectId
  lessonIdCompleted: mongoose.Types.ObjectId[]
  courseSlug: string
}

const UserLessonProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lessonIdCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
    courseSlug: { type: String, required: true },
  },
  { timestamps: true }
)

const UserLessonProgress =
  mongoose.models.UserLessonProgress ||
  mongoose.model<IUserLessonProgress>('UserLessonProgress', UserLessonProgressSchema)

export default UserLessonProgress
