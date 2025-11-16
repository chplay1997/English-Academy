import React from 'react'
import cn from 'clsx'
import { IQuestion } from '@/models/assessment.model'

interface QuestionResultFeedbackProps {
  question: IQuestion
  answer: string[] | null
}

const QuestionResultFeedback: React.FC<QuestionResultFeedbackProps> = ({ question, answer }) => {
  const {
    correctAnswerKey,
    correctAnswerValue,
    correctAnswerKeys,
    correctAnswerValues,
    note,
    correctForm,
    alternativeAnswers,
  } = question

  const isCorrect = checkQuestionAnswer(question, answer)

  // Handle simple markdown for note
  const formattedNote = note?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

  return (
    <div className={cn('p-4 rounded-lg', isCorrect ? 'bg-green-50' : 'bg-red-50')}>
      {isCorrect ? (
        <p className="text-green-700 font-medium">✅ Chính xác!</p>
      ) : (
        <div className="space-y-2">
          <p className="text-red-700 font-medium">❌ Chưa đúng</p>
          <p className="text-sm">Đáp án đúng: {renderCorrectAnswer(question)}</p>

          {alternativeAnswers && alternativeAnswers.length > 0 && (
            <p className="text-sm">
              Đáp án khác: <span className="font-bold">{alternativeAnswers.join(', ')}</span>
            </p>
          )}
        </div>
      )}

      {correctForm && (
        <p className="text-sm mt-2 text-gray-700">
          <strong>Sửa lại:</strong> {correctForm}
        </p>
      )}

      {note && (
        <p className="text-sm mt-2 text-blue-700">
          💡 <strong>Ghi chú:</strong> <span dangerouslySetInnerHTML={{ __html: formattedNote || note }} />
        </p>
      )}
    </div>
  )
}

export default QuestionResultFeedback

export const renderCorrectAnswer = (question: IQuestion) => {
  const { correctAnswerKeys, correctAnswerValues, correctAnswerKey, correctAnswerValue } = question

  if (correctAnswerKeys?.length && correctAnswerValues?.length) {
    const answers = correctAnswerKeys.map((key, index) => `${key}. ${correctAnswerValues[index]}`).join(', ')
    return <span className="font-bold">{answers}</span>
  }

  if (correctAnswerKey && correctAnswerValue) {
    return (
      <span className="font-bold">
        {correctAnswerKey}. {correctAnswerValue}
      </span>
    )
  }

  if (correctAnswerValue) {
    return <span className="font-bold">{correctAnswerValue}</span>
  }

  return null
}

/**
 * Checks the correctness of the user's answer based on the question type.
 * * @param {object} question - The question object containing correct answer keys/values.
 * @param {string | string[]} answer - The user's submitted answer(s).
 * @returns {boolean} - True if the answer is correct, false otherwise.
 */
const checkQuestionAnswer = (question: IQuestion, answer: string[] | null) => {
  if (!answer || answer.length === 0) {
    return false
  }

  // Always convert the user's answer to an array for normalized handling,
  const userAnswers = Array.isArray(answer) ? answer : [answer].filter(Boolean)

  /**
   * Internal helper function to check text input (Fill-in-the-Blank) answers.
   * Compares input value against correct and alternative answers, ignoring case and trim.
   * @param {string} input
   * @returns {boolean}
   */
  const checkTextAnswer = (input: string) => {
    const normalized = input.toLowerCase().trim()

    // Check against the primary correct answer value
    if (question.correctAnswerValue?.toLowerCase() === normalized) {
      return true
    }

    // Check against alternative answers
    if (question.alternativeAnswers && question.alternativeAnswers.length > 0) {
      return question.alternativeAnswers.some(alt => alt.toLowerCase().trim() === normalized)
    }

    return false
  }

  // --- ANSWER CHECK LOGIC BY QUESTION TYPE ---

  // 1. Single Choice (using correctAnswerKey)
  if (question.correctAnswerKey) {
    // Must have exactly one answer and it must match the correct key.
    return userAnswers.length === 1 && userAnswers[0] === question.correctAnswerKey
  }

  // 2. Multiple Choice / Matching (using correctAnswerKeys)
  if (question.correctAnswerKeys) {
    const correctKeys = question.correctAnswerKeys

    // Must match the number of correct keys AND every user answer must be present in the correct keys list.
    return userAnswers.length === correctKeys.length && userAnswers.every(key => correctKeys.includes(key))
  }

  // 3. Fill-in-the-Blank / Value Input (using correctAnswerValue)
  if (question.correctAnswerValue) {
    // Only proceed if the user provided exactly one input string.
    if (userAnswers.length !== 1) return false

    // Check against the primary and alternative values using text normalization.
    return checkTextAnswer(userAnswers[0])
  }

  // Default: Return false if the question type is unrecognized or lacks proper answer fields.
  return false
}
