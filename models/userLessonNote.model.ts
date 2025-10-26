import mongoose from 'mongoose'

const UserLessonNoteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseSlug: { type: String, required: true },
    sectionOrder: { type: Number, required: true },
    lessonOrder: { type: Number, required: true },
    second: { type: Number, required: true }, // thời điểm trong video
    content: { type: String, required: true },
  },
  { timestamps: true }
)

const UserLessonNote = mongoose.models.UserLessonNote || mongoose.model('UserLessonNote', UserLessonNoteSchema)
export default UserLessonNote
