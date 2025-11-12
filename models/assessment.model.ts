import mongoose, { Document, Schema } from 'mongoose'

export interface IOption extends Document {
  key: string
  value: string
}

export enum EExerciseType {
  MultipleChoice = 'multiple_choice',
  FillInBlank = 'fill_in_blank',
  Matching = 'matching',
  TrueFalse = 'true_false',
  Writing = 'writing',
  Conjugation = 'conjugation',
  ErrorCorrection = 'error_correction',
  ClozeTest = 'cloze_test',
  TableCompletion = 'table_completion',
  Rewrite = 'rewrite',
  Rearrangement = 'rearrangement',
  SentenceRearrangement = 'sentence_rearrangement',
  SentenceOrdering = 'sentence_ordering',
  Correction = 'correction',
  Pluralization = 'pluralization',
  PictureCompletion = 'picture_completion',
  Transformation = 'transformation',
  ImageCompletion = 'image_completion',
  SentenceArrangement = 'sentence_arrangement',
}

export enum ETestCategory {
  Grammar = 'Grammar',
  Listening = 'Listening',
  Reading = 'Reading',
  Writing = 'Writing',
  Speaking = 'Speaking',
}

export interface IQuestion extends Document {
  questionNumber: number
  stem: string
  options?: IOption[]
  correctAnswerKey?: string
  correctAnswerValue?: string
  alternativeAnswers?: string[]
  errorType?: string
  correctForm?: string
  note?: string
}

export interface IExercise extends Document {
  exerciseOrder?: number
  exerciseType: EExerciseType
  exerciseTitle?: string
  exerciseStem?: string
  questions: IQuestion[]
}

export interface IAssessment extends Document {
  testName: string
  testCategory: ETestCategory
  courseSlug: string
  exercises: IExercise[]
}

// --- SCHEMAS ---

const optionSchema = new Schema<IOption>({ key: String, value: String }, { _id: false })

const questionSchema = new Schema<IQuestion>(
  {
    questionNumber: Number,
    stem: String,
    options: [optionSchema],
    correctAnswerKey: String,
    correctAnswerValue: String,
    alternativeAnswers: [String],
    errorType: String,
    correctForm: String,
    note: String,
  },
  { _id: true }
)

const exerciseSchema = new Schema<IExercise>(
  {
    exerciseOrder: Number,
    exerciseType: {
      type: String,
      enum: EExerciseType,
      required: true,
    },
    exerciseTitle: String,
    exerciseStem: String,
    questions: [questionSchema],
  },
  { _id: true }
)

const assessmentSchema = new Schema<IAssessment>(
  {
    testName: { type: String, required: true },
    testCategory: { type: String, default: ETestCategory.Grammar },
    courseSlug: { type: String, required: true },
    exercises: [exerciseSchema],
  },
  { timestamps: true }
)

assessmentSchema.index({ courseSlug: 1, testName: 1 }, { unique: true })

const Assessment = mongoose.models?.Assessment || mongoose.model<IAssessment>('Assessment', assessmentSchema)
export default Assessment
