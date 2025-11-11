import mongoose, { Schema, Document } from 'mongoose'

export enum ELessonType {
  VIDEO = 'video',
  READING = 'reading',
  QUIZ = 'quiz',
  ASSIGNMENT = 'assignment',
  LIVE = 'live',
  GRAMMAR_TEST = 'grammar-test',
}

export interface ILesson extends Document {
  sectionId: mongoose.Types.ObjectId
  title: string
  type: ELessonType
  order: number
  duration?: number
  isPreview: boolean
  video?: {
    vimeoId: string
    thumbnail?: string
  }
  reading?: {
    content?: string
    attachments?: {
      name?: string
      url?: string
      type?: 'pdf' | 'image' | 'file' | 'link'
    }[]
  }
  assessment?: mongoose.Types.ObjectId
  createdAt: Date
}

const lessonSchema = new Schema<ILesson>(
  {
    sectionId: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ELessonType,
      default: ELessonType.VIDEO,
    },
    order: { type: Number, default: 1 },
    duration: Number,

    // 🎥 Video lesson
    video: {
      vimeoId: String,
      thumbnail: String,
    },

    // 📖 Reading lesson
    reading: {
      content: String,
      attachments: [
        {
          name: String,
          url: String,
          type: { type: String, enum: ['pdf', 'image', 'file', 'link'] },
        },
      ],
    },
    assessment: {
      type: Schema.Types.ObjectId,
      ref: 'Assessment',
    },

    isPreview: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Lesson = mongoose.models?.Lesson || mongoose.model<ILesson>('Lesson', lessonSchema)

export default Lesson
