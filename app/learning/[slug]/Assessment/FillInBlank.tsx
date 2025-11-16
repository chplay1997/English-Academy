'use client'
import { IQuestion } from '@/models/assessment.model'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useState, useEffect, memo } from 'react'

interface FillInBlankProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  value: string
  isSubmitted: boolean
}

function FillInBlankComponent({ question, onAnswerChange, value, isSubmitted }: FillInBlankProps) {
  const [inputValue, setInputValue] = useState(value || '')

  useEffect(() => {
    if (value) setInputValue(value)
  }, [value])

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

  const isCorrect = isSubmitted && checkAnswer(inputValue || '')
  const isWrong = isSubmitted && !checkAnswer(inputValue || '') && inputValue.trim() !== ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    onAnswerChange(String(question._id), value)
  }

  return (
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
  )
}

export const FillInBlank = memo(FillInBlankComponent)
