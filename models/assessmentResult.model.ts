import mongoose, { Schema, Document } from 'mongoose'

export const MAX_SCORE = 10
export const MIN_SCORE = 0

export interface IAssessmentResult extends Document {
  assessmentId: Schema.Types.ObjectId
  userId: Schema.Types.ObjectId
  lessonId: Schema.Types.ObjectId
  courseSlug: string
  totalScore: { type: Number; default: 0; max: typeof MAX_SCORE; min: typeof MIN_SCORE }
  totalQuestions: number
  correctCount: number
  timeSpent: number
  answers: {
    questionId: Schema.Types.ObjectId
    selectedKey: string
    isCorrect: boolean
  }[]
}

const assessmentResultSchema = new Schema<IAssessmentResult>(
  {
    assessmentId: { type: Schema.Types.ObjectId, ref: 'Assessment', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true },
    courseSlug: { type: String, required: true },
    totalScore: { type: Number, default: 0, max: MAX_SCORE, min: MIN_SCORE },
    totalQuestions: { type: Number, default: 0 },
    correctCount: { type: Number, default: 0 },
    timeSpent: Number,
    answers: [
      {
        questionId: { type: Schema.Types.ObjectId, required: true },
        selectedKey: String,
        isCorrect: Boolean,
      },
    ],
  },
  { timestamps: true }
)

const AssessmentResult =
  mongoose.models?.AssessmentResult || mongoose.model<IAssessmentResult>('AssessmentResult', assessmentResultSchema)
export default AssessmentResult
