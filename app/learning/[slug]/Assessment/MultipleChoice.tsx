import { IQuestion } from '@/models/assessment.model'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface MultipleChoiceProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

export function MultipleChoice({ question, onAnswerChange, userAnswer, isSubmitted }: MultipleChoiceProps) {
  const isCorrect = isSubmitted && userAnswer === question.correctAnswerKey

  return (
    <div className="space-y-3">
      <RadioGroup
        value={userAnswer || ''}
        onValueChange={value => onAnswerChange(String(question._id), value)}
        disabled={isSubmitted}
      >
        {question.options?.map(option => {
          const isThisCorrect = isSubmitted && option.key === question.correctAnswerKey
          const isThisWrong = isSubmitted && option.key === userAnswer && option.key !== question.correctAnswerKey
          const isUserSelected = !isSubmitted && option.key === userAnswer

          return (
            <Label
              key={option.key}
              htmlFor={`${question._id}-${option.key}`}
              className={cn(
                'flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors',
                isThisCorrect && 'bg-green-50 border-green-500',
                isThisWrong && 'bg-red-50 border-red-500',
                !isSubmitted && 'hover:bg-gray-50 border-gray-200 cursor-pointer',
                isUserSelected && 'bg-blue-50 border-blue-500 hover:bg-blue-50 cursor-default'
              )}
            >
              <RadioGroupItem value={option.key} id={`${question._id}-${option.key}`} />
              <span className="flex-1 font-medium">
                <span className="font-bold mr-2">{option.key}.</span>
                {option.value}
              </span>
              {isThisCorrect && <span className="text-green-600 font-bold">✓</span>}
              {isThisWrong && <span className="text-red-600 font-bold">✗</span>}
            </Label>
          )
        })}
      </RadioGroup>

      {isSubmitted && (
        <div className={cn('p-4 rounded-lg', isCorrect ? 'bg-green-50' : 'bg-red-50')}>
          {isCorrect ? (
            <p className="text-green-700 font-medium">✅ Chính xác!</p>
          ) : (
            <div className="space-y-2">
              <p className="text-red-700 font-medium">❌ Chưa đúng</p>
              <p className="text-sm">
                Đáp án đúng:{' '}
                <span className="font-bold">
                  {question.correctAnswerKey}. {question.correctAnswerValue}
                </span>
              </p>
            </div>
          )}
          {question.correctForm && (
            <p className="text-sm mt-2 text-gray-700">
              <strong>Sửa lại:</strong> {question.correctForm}
            </p>
          )}
          {question.note && (
            <p className="text-sm mt-2 text-blue-700">
              💡 <strong>Ghi chú:</strong> {question.note}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
