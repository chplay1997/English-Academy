'use client'
import { MultipleChoice } from './MultipleChoice'
import { FillInBlank } from './FillInBlank'
import { Matching } from './Matching'
import { Correction } from './Correction'
import { EExerciseType, IQuestion } from '@/models/assessment.model'
import { MultipleSelect } from './MultipleSelect'
import { Dispatch, memo, SetStateAction, useCallback } from 'react'
import QuestionResultFeedback, { renderCorrectAnswer } from './QuestionResultFeedback'
import { cn } from '@/lib/utils'
import { getTestMode } from '@/services/getTestMode'

interface QuestionContainerProps {
  question: IQuestion
  exerciseType: EExerciseType
  setAnswers: Dispatch<SetStateAction<Record<string, string[] | null>>>
  userAnswer: string[] | null
  isSubmitted: boolean
  exerciseStem?: string
  showError?: boolean
  matchingOptions?: string[]
}

function QuestionContainerComponent({
  question,
  exerciseType,
  exerciseStem,
  showError,
  ...rest
}: QuestionContainerProps) {
  const { setAnswers, isSubmitted, userAnswer } = rest
  const value = userAnswer?.[0] || ''
  const isShowError = showError && !userAnswer?.length
  const testMode = getTestMode()

  const handleToggleAnswer = (questionId: string, value: string) => {
    if (isSubmitted) return

    if (userAnswer?.includes(value)) {
      setAnswers(prev => ({ ...prev, [questionId]: prev[questionId]?.filter(ans => ans !== value) || [] }))
    } else {
      setAnswers(prev => ({ ...prev, [questionId]: [...(prev[questionId] || []), value] }))
    }
  }

  const handleAnswerChange = useCallback((questionId: string, value: string) => {
    if (!isSubmitted) {
      setAnswers(prev => ({ ...prev, [questionId]: [value] }))
    }
  }, [])

  const renderQuestionComponent = () => {
    switch (exerciseType) {
      case EExerciseType.TrueFalse:
      case EExerciseType.MultipleChoice:
        return <MultipleChoice question={question} {...rest} onAnswerChange={handleAnswerChange} value={value} />

      case EExerciseType.MultipleSelect:
        return <MultipleSelect question={question} {...rest} onAnswerChange={handleToggleAnswer} value={userAnswer} />

      case EExerciseType.FillInBlank:
      case EExerciseType.Pluralization:
      case EExerciseType.PictureCompletion:
        return <FillInBlank question={question} {...rest} onAnswerChange={handleAnswerChange} value={value} />

      case EExerciseType.Matching:
        return <Matching question={question} {...rest} onAnswerChange={handleAnswerChange} value={value} />

      case EExerciseType.Correction:
      case EExerciseType.ErrorCorrection:
        return <Correction question={question} {...rest} onAnswerChange={handleAnswerChange} value={value} />

      default:
        return <p className="text-red-500">Loại câu hỏi không được hỗ trợ: {exerciseType}</p>
    }
  }

  return (
    <div className={`pl-4 py-2 space-y-3`} id={String(question._id)}>
      <p className="text-lg font-medium">
        <span className="text-primary mr-2 font-bold">{question.questionNumber}.</span>
        <span
          dangerouslySetInnerHTML={{ __html: question.stem?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '' }}
        />
      </p>

      <div
        className={cn(
          isShowError ? 'border-red-500 border-2 rounded-md p-3' : 'border-transparent border-2 rounded-md',
          'space-y-3'
        )}
      >
        {testMode && <p className="text-sm text-blue-600">Đáp án: {renderCorrectAnswer(question)}</p>}
        {renderQuestionComponent()}
        {isSubmitted && <QuestionResultFeedback question={question} answer={userAnswer} />}
      </div>

      {isShowError && <p className="text-red-600 mt-1 text-sm">Vui lòng chọn hoặc điền đáp án</p>}
    </div>
  )
}

export const QuestionContainer = memo(QuestionContainerComponent)
