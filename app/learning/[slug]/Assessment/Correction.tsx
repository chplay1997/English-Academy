'use client'
import { IQuestion } from '@/models/assessment.model'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { memo } from 'react'

interface CorrectionProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  value: string
  isSubmitted: boolean
}

function CorrectionComponent({ question, onAnswerChange, value, isSubmitted }: CorrectionProps) {
  return (
    <RadioGroup
      value={value || ''}
      onValueChange={value => onAnswerChange(String(question._id), value)}
      disabled={isSubmitted}
    >
      {question.options?.map(option => {
        const isThisCorrect = isSubmitted && option.key === question.correctAnswerKey
        const isThisWrong = isSubmitted && option.key === value && option.key !== question.correctAnswerKey

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
  )
}

export const Correction = memo(CorrectionComponent)
