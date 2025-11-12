import { MultipleChoice } from './MultipleChoice'
import { FillInBlank } from './FillInBlank'
import { Matching } from './Matching'
import { Correction } from './Correction'
import { EExerciseType, IQuestion } from '@/models/assessment.model'

interface QuestionContainerProps {
  question: IQuestion
  exerciseType: EExerciseType
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
  exerciseStem?: string
  showError?: boolean
}

export function QuestionContainer({
  question,
  exerciseType,
  exerciseStem,
  showError,
  ...rest
}: QuestionContainerProps) {
  const renderQuestionComponent = () => {
    switch (exerciseType) {
      case EExerciseType.TrueFalse:
      case EExerciseType.MultipleChoice:
        return <MultipleChoice question={question} {...rest} />

      case EExerciseType.FillInBlank:
        return <FillInBlank question={question} {...rest} />

      case EExerciseType.Matching:
        return <Matching question={question} {...rest} />

      case EExerciseType.Correction:
      case EExerciseType.ErrorCorrection:
        return <Correction question={question} {...rest} />

      default:
        return <p className="text-red-500">Loại câu hỏi không được hỗ trợ: {exerciseType}</p>
    }
  }

  return (
    <div className={`pl-4 py-2 space-y-3`} id={String(question._id)}>
      <p className="text-lg font-medium">
        <span className="text-primary mr-2 font-bold">{question.questionNumber}.</span>
        <span
          dangerouslySetInnerHTML={{ __html: question.stem?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '' }}
        />
      </p>

      <div className={showError ? 'border-red-500 border-2 rounded-md p-3' : 'border-transparent border-2 rounded-md'}>
        {renderQuestionComponent()}
      </div>

      {showError && <p className="text-red-600 mt-1 text-sm">Vui lòng chọn hoặc điền đáp án</p>}
    </div>
  )
}
