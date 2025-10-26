import { connectDB } from '@/lib/mongoose'
import Course from '@/models/course.model'
import { redis } from '@/lib/redis'
import { rateLimiter } from '@/lib/rate-limit'

export async function GET(req: Request) {
  // Retrieve the IP address of the client (or fallback)
  const ip = req.headers.get('x-forwarded-for') || 'anonymous'

  // Check rate limit
  const { success } = await rateLimiter.check(ip)

  if (!success) {
    return new Response(JSON.stringify({ error: '⛔ Too many requests. Try again later.' }), {
      status: 429,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const cacheKey = 'courses:home'
  const cached = await redis.get(cacheKey)

  if (cached) {
    const json = typeof cached === 'string' ? cached : JSON.stringify(cached)
    return new Response(json, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  await connectDB()

  const data = await Course.find().lean()

  const serializableData = JSON.stringify(data)

  // Cache for 1 minute
  await redis.set(cacheKey, serializableData, { ex: 60 })

  return new Response(serializableData, {
    headers: { 'Content-Type': 'application/json' },
  })
}
