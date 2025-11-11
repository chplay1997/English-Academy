import mongoose, { Document } from 'mongoose'

export interface IUserLessonNote extends Document {
  userId: string
  courseSlug: string
  sectionOrder: number
  lessonOrder: number
  second: number
  content: string
  createdAt: Date
  updatedAt: Date
}

const UserLessonNoteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseSlug: { type: String, required: true },
    sectionOrder: { type: Number, required: true },
    lessonOrder: { type: Number, required: true },
    second: { type: Number, required: true },
    content: { type: String, required: true, maxlength: 255 },
  },
  { timestamps: true }
)

const UserLessonNote =
  mongoose.models?.UserLessonNote || mongoose.model<IUserLessonNote>('UserLessonNote', UserLessonNoteSchema)
export default UserLessonNote
