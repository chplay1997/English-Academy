'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { QuestionContainer } from './QuestionContainer'
import { IAssessment } from '@/models/assessment.model'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { ICourseState } from '../CourseClient'
import { Dispatch, SetStateAction } from 'react'
import { MAX_SCORE } from '@/models/assessmentResult.model'
import Image from 'next/image'
import { getTestMode } from '@/services/getTestMode'

interface AssessmentProps {
  assessment: IAssessment
  lessonId: string
  setCourseState: Dispatch<SetStateAction<ICourseState>>
}

export default function Assessment({ assessment, lessonId, setCourseState }: AssessmentProps) {
  const [answers, setAnswers] = useState<Record<string, string[] | null>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showError, setShowError] = useState(false)
  const testMode = getTestMode()

  const allQuestionIds = assessment.exercises.flatMap(exercise =>
    exercise.questions.map(question => String(question._id))
  )

  const totalCorrectAnswers = isSubmitted
    ? Object.entries(answers).filter(([questionId, answer]) =>
        answer?.includes(
          assessment.exercises
            .flatMap(exercise => exercise.questions)
            .find(question => String(question._id) === questionId)?.correctAnswerKey || ''
        )
      ).length
    : 0

  const handleSubmit = async () => {
    if (isSubmitted) {
      setIsSubmitted(false)
      setShowError(false)
      setAnswers({})
      document.getElementById(allQuestionIds[0])?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    // Test mode by pass check all question
    if (!testMode) {
      const firstQuestionNotAnswered = allQuestionIds.find(questionId => !answers[questionId])

      if (firstQuestionNotAnswered) {
        setShowError(true)
        document.getElementById(firstQuestionNotAnswered)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
      }
    }

    setIsSubmitted(true)
    setShowError(false)

    const response = await fetch('/api/assessment-result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assessmentId: assessment._id,
        courseSlug: assessment.courseSlug,
        answers,
        lessonId,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Failed to submit assessment: ${errorData.message}`)
    }

    const data = await response.json()

    if (data.ok && data.data.totalScore === MAX_SCORE) {
      const res = await fetch('/api/user-lesson-progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseSlug: assessment.courseSlug,
          lessonId,
        }),
      })

      const result = await res.json()
      if (result.success) {
        setCourseState(prev => ({
          ...prev,
          userLessonProgress: result.data,
        }))
      } else {
        console.log('Update progress failed:', result.error)
      }
    }
  }

  const handleShowQuestionError = () => {
    const firstWrongAnswerId = allQuestionIds.find(questionId => {
      const userAnswer = answers[questionId]
      const correctAnswer = assessment.exercises
        .flatMap(exercise => exercise.questions)
        .find(question => String(question._id) === questionId)?.correctAnswerKey
      return userAnswer?.includes(correctAnswer || '')
    })

    if (!firstWrongAnswerId) return
    document.getElementById(firstWrongAnswerId)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setShowError(true)
  }

  useEffect(() => {
    setAnswers({})
    setIsSubmitted(false)
    setShowError(false)
  }, [lessonId])

  return (
    <div className="container max-w-4xl py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center text-primary">
        {assessment.testName} - {assessment.testCategory}
      </h1>
      <Separator />
      {assessment.exercises.map((exercise, exerciseIndex) => (
        <Card key={exerciseIndex} className="shadow-lg border-2 border-gray-100 pt-0">
          <CardHeader className="bg-gray-50 border-b pt-6">
            <CardTitle className="text-xl font-semibold text-gray-700">{exercise.exerciseTitle}</CardTitle>
            {exercise.exerciseStem && (
              <span
                dangerouslySetInnerHTML={{
                  __html: exercise.exerciseStem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                }}
              />
            )}

            {exercise.exerciseImage && (
              <Image src={exercise.exerciseImage} alt="" width={500} height={500} className="mt-4" />
            )}
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            {exercise.questions.map(question => (
              <QuestionContainer
                key={question._id as string}
                question={question}
                exerciseType={exercise.exerciseType}
                setAnswers={setAnswers}
                userAnswer={answers[question._id as string]}
                exerciseStem={exercise.exerciseStem}
                isSubmitted={isSubmitted}
                showError={showError}
                matchingOptions={exercise.matchingOptions}
              />
            ))}
          </CardContent>
        </Card>
      ))}
      <div className="text-end">
        <Button
          className="bg-blue-500 rounded-full hover:bg-blue-600"
          onClick={handleSubmit}
          disabled={Object.keys(answers).length === 0}
        >
          {isSubmitted ? 'LÀM LẠI' : 'TRẢ LỜI'}
        </Button>
      </div>
      {isSubmitted && (
        <div>
          <h2 className="text-lg font-semibold">Kết quả:</h2>
          <p className="text-sm font-normal py-4">
            Tổng số câu trả lời đúng:{' '}
            <strong>
              {totalCorrectAnswers} / {allQuestionIds.length}
            </strong>
          </p>

          {totalCorrectAnswers !== allQuestionIds.length && (
            <Button onClick={handleShowQuestionError}>Xem lại câu sai</Button>
          )}
        </div>
      )}
    </div>
  )
}
