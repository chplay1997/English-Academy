import { IQuestion } from '@/models/assessment.model'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface CorrectionProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

export function Correction({ question, onAnswerChange, userAnswer, isSubmitted }: CorrectionProps) {
  const isCorrect = isSubmitted && userAnswer === question.correctAnswerKey

  return (
    <div className="space-y-4">
      <RadioGroup
        value={userAnswer || ''}
        onValueChange={value => onAnswerChange(String(question._id), value)}
        disabled={isSubmitted}
      >
        {question.options?.map(option => {
          const isThisCorrect = isSubmitted && option.key === question.correctAnswerKey
          const isThisWrong = isSubmitted && option.key === userAnswer && option.key !== question.correctAnswerKey

          return (
            <div
              key={option.key}
              className={cn(
                'flex items-center space-x-3 p-3 rounded-lg border-2 transition-colors',
                isThisCorrect && 'bg-green-50 border-green-500',
                isThisWrong && 'bg-red-50 border-red-500',
                !isSubmitted && 'hover:bg-gray-50 border-gray-200'
              )}
            >
              <RadioGroupItem value={option.key} id={`${question._id}-${option.key}`} />
              <Label htmlFor={`${question._id}-${option.key}`} className="flex-1 cursor-pointer">
                <span className="font-bold mr-2">{option.key}.</span>
                {option.value}
              </Label>
              {isThisCorrect && <span className="text-green-600 font-bold text-xl">✓</span>}
              {isThisWrong && <span className="text-red-600 font-bold text-xl">✗</span>}
            </div>
          )
        })}
      </RadioGroup>

      {isSubmitted && (
        <Alert className={isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}>
          <AlertDescription>
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
              <div className="mt-3 p-3 bg-white rounded border">
                <p className="text-sm font-semibold text-gray-700 mb-1">✏️ Câu đúng:</p>
                <p className="text-sm text-gray-800">{question.correctForm}</p>
              </div>
            )}

            {question.errorType && (
              <p className="text-sm mt-2 text-orange-700">
                <strong>Loại lỗi:</strong> {question.errorType}
              </p>
            )}

            {question.note && (
              <p className="text-sm mt-2 text-blue-700">
                💡 <strong>Ghi chú:</strong> {question.note}
              </p>
            )}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
