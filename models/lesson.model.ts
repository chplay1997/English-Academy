import mongoose, { Schema, Document } from 'mongoose'

export interface ILesson extends Document {
  sectionId: mongoose.Types.ObjectId
  title: string
  type: 'video' | 'reading' | 'quiz' | 'assignment' | 'live'
  order: number
  duration?: number
  isPreview: boolean
  video?: {
    vimeoId?: string
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
  quiz?: {
    questions: {
      question: string
      options: string[]
      correctIndex: number
    }[]
  }
  assignment?: {
    description?: string
    deadline?: Date
  }
  live?: {
    meetingUrl?: string
    startTime?: Date
    endTime?: Date
  }
}

const lessonSchema = new Schema<ILesson>(
  {
    sectionId: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ['video', 'reading', 'quiz', 'assignment', 'live'],
      default: 'video',
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

    // 🧠 Quiz lesson
    quiz: {
      questions: [
        {
          question: String,
          options: [String],
          correctIndex: Number,
        },
      ],
    },

    // 📝 Assignment lesson
    assignment: {
      description: String,
      deadline: Date,
    },

    // 🔴 Live session
    live: {
      meetingUrl: String,
      startTime: Date,
      endTime: Date,
    },

    isPreview: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Lesson = mongoose.models.Lesson || mongoose.model<ILesson>('Lesson', lessonSchema)

export default Lesson
