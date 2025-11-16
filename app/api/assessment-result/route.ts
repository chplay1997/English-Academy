import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import Assessment from '@/models/assessment.model'
import AssessmentResult, { MAX_SCORE } from '@/models/assessmentResult.model'
import { Types } from 'mongoose'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import mongoose from 'mongoose'
import Lesson from '@/models/lesson.model'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

    if (!userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
    }
    await connectDB()

    const body = await req.json()
    const { assessmentId: _assessmentId, courseSlug, answers, timeSpent, lessonId: _lessonId } = body

    // Validate the input data
    if (
      !_assessmentId ||
      !_lessonId ||
      !courseSlug ||
      !answers ||
      typeof answers !== 'object' ||
      Array.isArray(answers)
    ) {
      return NextResponse.json(
        { message: 'Invalid request data, missing lessonId or other required fields', success: false },
        { status: 400 }
      )
    }

    const assessmentId = new Types.ObjectId(String(_assessmentId))
    const lessonId = new Types.ObjectId(String(_lessonId))
    const assessment = await Assessment.findById(assessmentId)
    const lesson = await Lesson.findById(lessonId)

    if (!assessment || !lesson || String(lesson.assessment) !== String(assessmentId)) {
      return NextResponse.json({ message: 'Lesson or assessment not found', success: false }, { status: 404 })
    }

    let totalQuestions = 0
    let correctCount = 0
    const evaluatedAnswers = []

    // Prepare question data and evaluate answers
    const allQuestionsMap = assessment.exercises
      .flatMap((exercise: any) =>
        exercise.questions.map((question: any) => ({
          _id: String(question._id),
          correctAnswerKey: question.correctAnswerKey,
          exerciseType: exercise.exerciseType,
          questionNumber: question.questionNumber,
        }))
      )
      .reduce((acc: any, question: any) => {
        acc[question._id] = question
        return acc
      }, {})

    totalQuestions = Object.keys(allQuestionsMap).length

    // Check if the number of submitted answers matches the total number of questions
    if (Object.keys(answers).length < totalQuestions) {
      return NextResponse.json(
        { message: 'Invalid request data, not enough answers submitted', success: false },
        { status: 400 }
      )
    }

    for (const [questionId, selectedKey] of Object.entries(answers)) {
      const questionInfo = allQuestionsMap[questionId]
      const { correctAnswerKey, correctAnswerKeys } = questionInfo

      if (questionInfo) {
        const userAnsKey = selectedKey as string[] | null
        const isCorrect =
          userAnsKey !== null &&
          (correctAnswerKeys?.length
            ? userAnsKey.every(key => correctAnswerKeys?.includes(key))
            : userAnsKey[0] === correctAnswerKey)

        if (isCorrect) correctCount++

        evaluatedAnswers.push({
          questionId,
          questionNumber: questionInfo.questionNumber,
          selectedKey: userAnsKey || [],
          isCorrect,
          correctAnswerKey: questionInfo.correctAnswerKey,
          exerciseType: questionInfo.exerciseType,
        })
      }
    }

    const totalScore = Math.round((correctCount / totalQuestions) * MAX_SCORE)

    const result = await AssessmentResult.create({
      assessmentId,
      userId,
      lessonId,
      courseSlug,
      totalScore,
      totalQuestions,
      correctCount,
      timeSpent: timeSpent || 0,
      answers: evaluatedAnswers,
    })

    return NextResponse.json(
      {
        data: result,
        success: true,
        ok: true,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('❌ Submit error:', error)
    return NextResponse.json({ message: 'Server error', success: false, error: error.message }, { status: 500 })
  }
}
