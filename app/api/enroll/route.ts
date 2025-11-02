import { connectDB } from '@/lib/mongoose'
import Enrollment from '@/models/enrollment.model'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import mongoose from 'mongoose'
import { redis } from '@/lib/redis'
import { GET_COURSE_CACHE_KEY } from '@/services/course/getCourseData'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id ? new mongoose.Types.ObjectId(session.user.id) : null

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized', success: false }), { status: 401 })
  }

  const { courseSlug } = await req.json()
  if (!courseSlug) {
    return new Response(JSON.stringify({ error: 'Missing courseSlug', success: false }), { status: 400 })
  }

  await connectDB()

  // Check if the user has already enrolled in this course
  const exists = await Enrollment.findOne({ userId, courseSlug })
  if (exists) {
    return new Response(JSON.stringify({ message: 'Already enrolled', success: false }), { status: 200 })
  }

  const enroll = await Enrollment.create({ userId, courseSlug })

  // Delete cache after enrollment to correctly redirect to the learning page
  await redis.del(GET_COURSE_CACHE_KEY(courseSlug, userId.toString()))

  return new Response(JSON.stringify({ success: true, enroll }), { status: 201 })
}
