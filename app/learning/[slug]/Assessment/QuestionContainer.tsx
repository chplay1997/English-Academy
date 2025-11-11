import { MultipleChoice } from './MultipleChoice'
import { ErrorCorrection } from './ErrorCorrection'
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
  const isMultipleChoice = exerciseType === EExerciseType.MultipleChoice
  const isErrorCorrection = exerciseType === EExerciseType.FillInBlank || exerciseType === EExerciseType.TrueFalse

  const renderQuestionComponent = () => {
    if (isMultipleChoice) {
      return <MultipleChoice question={question} {...rest} />
    }
    if (isErrorCorrection) {
      return <ErrorCorrection question={question} exerciseType={exerciseType} {...rest} />
    }
    return <p className="text-red-500">Loại câu hỏi không xác định.</p>
  }

  return (
    <div className={`pl-4 py-2 space-y-3`} id={String(question._id)}>
      <p className="text-lg font-medium">
        <span className="text-primary mr-2 font-bold">{question.questionNumber}.</span>
        <span dangerouslySetInnerHTML={{ __html: question.stem?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </p>

      <div className={showError ? 'border-red-500 border-1 rounded-md' : 'border-transparent border-1 rounded-md'}>
        {renderQuestionComponent()}
      </div>
      {showError && <p className="text-red-600 mt-1 text-sm">Vui lòng chọn 1 đáp án</p>}
    </div>
  )
}
