'use client'
import { IQuestion } from '@/models/assessment.model'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { memo } from 'react'

interface MatchingProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  value: string
  isSubmitted: boolean
  matchingOptions?: string[]
}

function MatchingComponent({ question, onAnswerChange, value, isSubmitted, matchingOptions }: MatchingProps) {
  const isCorrect = isSubmitted && value === question.correctAnswerValue
  const isWrong = isSubmitted && value !== question.correctAnswerValue

  return (
    <div className="flex items-center gap-3">
      <Select
        value={value || ''}
        onValueChange={value => onAnswerChange(String(question._id), value)}
        disabled={isSubmitted}
      >
        <SelectTrigger
          className={cn(
            'w-[280px]',
            isCorrect && 'border-green-500 bg-green-50',
            isWrong && 'border-red-500 bg-red-50'
          )}
        >
          <SelectValue placeholder="Chọn đáp án..." />
        </SelectTrigger>
        <SelectContent>
          {matchingOptions?.map(option => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isSubmitted && isCorrect && <span className="text-green-600 text-2xl">✓</span>}
      {isSubmitted && isWrong && <span className="text-red-600 text-2xl">✗</span>}
    </div>
  )
}

export const Matching = memo(MatchingComponent)
