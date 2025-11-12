import { IQuestion } from '@/models/assessment.model'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface FillInBlankProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

export function FillInBlank({ question, onAnswerChange, userAnswer, isSubmitted }: FillInBlankProps) {
  const [inputValue, setInputValue] = useState(userAnswer || '')

  useEffect(() => {
    if (userAnswer) setInputValue(userAnswer)
  }, [userAnswer])

  const checkAnswer = (answer: string): boolean => {
    const normalized = answer.toLowerCase().trim()

    if (question.correctAnswerValue?.toLowerCase() === normalized) {
      return true
    }

    if (question.alternativeAnswers && question.alternativeAnswers.length > 0) {
      return question.alternativeAnswers.some(alt => alt.toLowerCase() === normalized)
    }

    return false
  }

  const isCorrect = isSubmitted && checkAnswer(inputValue)
  const isWrong = isSubmitted && !checkAnswer(inputValue) && inputValue.trim() !== ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    onAnswerChange(String(question._id), value)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          disabled={isSubmitted}
          placeholder="Nhập câu trả lời của bạn..."
          className={cn(
            'max-w-md text-lg',
            isCorrect && 'border-green-500 bg-green-50',
            isWrong && 'border-red-500 bg-red-50'
          )}
        />
        {isSubmitted && isCorrect && <span className="text-green-600 text-2xl">✓</span>}
        {isSubmitted && isWrong && <span className="text-red-600 text-2xl">✗</span>}
      </div>

      {isSubmitted && (
        <div className={cn('p-4 rounded-lg', isCorrect ? 'bg-green-50' : 'bg-red-50')}>
          {isCorrect ? (
            <p className="text-green-700 font-medium">✅ Chính xác!</p>
          ) : (
            <div className="space-y-2">
              <p className="text-red-700 font-medium">❌ Chưa đúng</p>
              <p className="text-sm">
                Đáp án đúng: <span className="font-bold">{question.correctAnswerValue}</span>
              </p>
              {question.alternativeAnswers && question.alternativeAnswers.length > 0 && (
                <p className="text-sm">
                  Đáp án khác: <span className="font-bold">{question.alternativeAnswers.join(', ')}</span>
                </p>
              )}
            </div>
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
