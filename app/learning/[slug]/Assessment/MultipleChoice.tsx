import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Check, X } from 'lucide-react'
import { IQuestion } from '@/models/assessment.model'

interface MultipleChoiceProps {
  question: IQuestion
  onAnswerChange: (questionId: string, value: string) => void
  userAnswer: string | null
  isSubmitted: boolean
}

const ExplanationAlert = ({
  question,
  isCorrect,
  userAnswer,
}: {
  question: IQuestion
  isCorrect: boolean
  userAnswer: string | null
}) => {
  if (!userAnswer) return null

  return (
    <Alert
      className={isCorrect ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}
    >
      {isCorrect ? <Check className="h-4 w-4 text-green-600" /> : <X className="h-4 w-4 text-red-600" />}
      <AlertTitle className="font-semibold mt-0">
        {isCorrect ? 'Tuyệt vời! Đáp án Đúng.' : 'Rất tiếc. Đáp án Sai.'}
      </AlertTitle>
      <AlertDescription className="mt-2 text-gray-700 space-y-1">
        <p>
          Đáp án chính xác:{' '}
          <strong>
            {question.correctAnswerKey}. {question.correctAnswerValue}
          </strong>
        </p>
      </AlertDescription>
    </Alert>
  )
}

export function MultipleChoice({ question, onAnswerChange, userAnswer, isSubmitted }: MultipleChoiceProps) {
  const isCorrectOption = (key: string) => key === question.correctAnswerKey
  const isUserSelected = (key: string) => key === userAnswer
  const isCorrectSubmission = isSubmitted && isCorrectOption(userAnswer || '')

  return (
    <RadioGroup
      value={userAnswer || undefined}
      onValueChange={value => onAnswerChange(String(question._id), value)}
      disabled={isSubmitted}
    >
      {question.options?.map(option => {
        let className = ''

        if (isSubmitted) {
          if (isCorrectOption(option.key)) {
            className = 'bg-green-100 border border-green-500 text-green-800 font-semibold'
          } else if (isUserSelected(option.key)) {
            className = 'bg-red-100 border border-red-500 text-red-800'
          }
        } else if (isUserSelected(option.key)) {
          className = 'border-blue-500'
        }

        return (
          <Label
            key={option.key}
            className={`flex items-center space-x-3 p-3 rounded-md transition-colors bg-gray-50 border-2 border-transparent ${className}`}
            htmlFor={`q${question.questionNumber}-${option.key}`}
          >
            <RadioGroupItem
              value={option.key}
              id={`q${question.questionNumber}-${option.key}`}
              checked={isUserSelected(option.key)}
            />
            <span className="text-base font-normal flex w-full ">
              <span className="font-semibold text-gray-800 mr-2 min-w-[20px]">{option.key}.</span>
              {option.value}
            </span>
          </Label>
        )
      })}

      {isSubmitted && userAnswer && (
        <ExplanationAlert question={question} isCorrect={isCorrectSubmission} userAnswer={userAnswer} />
      )}
    </RadioGroup>
  )
}
