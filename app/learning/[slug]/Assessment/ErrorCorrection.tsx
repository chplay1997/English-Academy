import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Check, X } from 'lucide-react'
import { IQuestion, EExerciseType } from '@/models/assessment.model'

interface ErrorCorrectionProps {
  question: IQuestion
  exerciseType: EExerciseType
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

export function ErrorCorrection({
  question,
  exerciseType,
  onAnswerChange,
  userAnswer,
  isSubmitted,
}: ErrorCorrectionProps) {
  const isCorrectOption = (key: string) => key === question.correctAnswerKey
  const isUserSelected = (key: string) => key === userAnswer
  const isCorrectSubmission = isSubmitted && isCorrectOption(userAnswer || '')

  const isTrueFalse = exerciseType === EExerciseType.TrueFalse

  const handleSelect = (key: string) => {
    if (!isSubmitted) {
      onAnswerChange(String(question._id), key)
    }
  }

  return (
    <div className="space-y-4">
      {/* 1. DISPLAY OPTIONS/ERROR OPTIONS USING BUTTON */}
      <div className="flex flex-wrap gap-3">
        {question.options.map(option => {
          let variant: 'default' | 'outline' | 'secondary' = 'outline'
          let className = 'hover:bg-gray-100 border-gray-300'

          if (isUserSelected(option.key)) {
            variant = 'default'
            className = 'bg-blue-500 hover:bg-blue-600 text-white'
          }

          if (isSubmitted) {
            if (isCorrectOption(option.key)) {
              variant = 'default'
              className = 'bg-green-600 hover:bg-green-700 text-white font-semibold'
            } else if (isUserSelected(option.key)) {
              variant = 'default'
              className = 'bg-red-600 hover:bg-red-700 text-white'
            } else {
              variant = 'outline'
            }
          }

          return (
            <Button
              key={option.key}
              variant={variant}
              className={className}
              onClick={() => handleSelect(option.key)}
              disabled={isSubmitted}
            >
              {option.key}. {option.value}
            </Button>
          )
        })}
      </div>

      {/* 2. DISPLAY DETAILED EXPLANATION AFTER SUBMIT */}
      {isSubmitted && (
        <Alert
          className={
            isCorrectSubmission
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }
        >
          {isCorrectSubmission ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />}
          <AlertTitle className="font-semibold mt-0">
            {isCorrectSubmission ? 'Tuyệt vời! Đáp án Đúng.' : 'Rất tiếc. Đáp án Sai.'}
          </AlertTitle>
          <AlertDescription className="mt-2 text-gray-700 space-y-1">
            <p>
              Đáp án chính xác:{' '}
              <strong>
                {question.correctAnswerKey}. {question.correctAnswerValue}
              </strong>
            </p>

            {/* Display Correct Form / Error Type */}
            {question.errorType && (
              <p>
                <span className="font-bold text-red-600 mr-1">Lỗi:</span> {question.errorType}
              </p>
            )}

            {question.correctForm && (
              <p>
                <span className="font-bold text-green-600 mr-1">Sửa lại:</span>
                {/* Display detailed correction details */}
                {question.correctForm}
              </p>
            )}

            {/* Edge case: T/F is True */}
            {isTrueFalse && question.correctAnswerValue === 'Đúng' && (
              <p>
                Câu đã <strong>Đúng</strong> về mặt ngữ pháp, không cần sửa đổi.
              </p>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
