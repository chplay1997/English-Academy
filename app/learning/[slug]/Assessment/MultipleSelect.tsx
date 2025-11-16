'use client'
import { IQuestion } from '@/models/assessment.model'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { memo } from 'react'

interface MultipleSelectProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  value: string[] | null
  isSubmitted: boolean
}

function MultipleSelectComponent({ question, onAnswerChange, value, isSubmitted }: MultipleSelectProps) {
  const isCorrect =
    isSubmitted &&
    value?.length === question.correctAnswerKeys?.length &&
    value?.every(answer => question.correctAnswerKeys?.includes(answer))

  return (
    <div className="space-y-2">
      {question.options?.map(option => {
        const isThisCorrect = isSubmitted && question.correctAnswerKeys?.includes(option.key)
        const isThisWrong =
          isSubmitted && value?.includes(option.key) && !question.correctAnswerKeys?.includes(option.key)
        const isUserSelected = !isSubmitted && value?.includes(option.key)

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
            <Checkbox
              value={option.key}
              id={`${question._id}-${option.key}`}
              checked={isUserSelected}
              disabled={isSubmitted}
              onCheckedChange={() => onAnswerChange(String(question._id), option.key)}
            />
            <span className="flex-1 font-medium">
              <span className="font-bold mr-2">{option.key}.</span>
              {option.value}
            </span>
            {isThisCorrect && <span className="text-green-600 font-bold">✓</span>}
            {isThisWrong && <span className="text-red-600 font-bold">✗</span>}
          </Label>
        )
      })}
    </div>
  )
}

export const MultipleSelect = memo(MultipleSelectComponent)
