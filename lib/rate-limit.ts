import { redis } from './redis'

/**
 * Simple Redis-based sliding window rate limiter.
 * Each IP (or identifier) is limited to `maxRequests` per `windowSeconds`.
 */
class RateLimiter {
  private windowSeconds: number
  private maxRequests: number

  constructor({ windowSeconds, maxRequests }: { windowSeconds: number; maxRequests: number }) {
    this.windowSeconds = windowSeconds
    this.maxRequests = maxRequests
  }

  async check(identifier: string) {
    const key = `rate-limit:${identifier}`
    const now = Date.now()
    const windowStart = now - this.windowSeconds * 1000

    // Retrieve list of timestamps within the time window
    const timestamps = ((await redis.lrange<number>(key, 0, -1)) || []).filter(t => t > windowStart)

    if (timestamps.length >= this.maxRequests) {
      return { success: false, remaining: 0 }
    }

    // Add new timestamp
    await redis.lpush(key, now)
    await redis.expire(key, this.windowSeconds)

    const remaining = this.maxRequests - timestamps.length - 1
    return { success: true, remaining }
  }
}

export const rateLimiter = new RateLimiter({
  windowSeconds: 60, // allow 60 seconds
  maxRequests: 10, // allow 10 requests per minute / IP
})

// redis
//   .set('test:key', 'ping', { ex: 5 })
//   .then(() => console.log('✅ Redis connected successfully'))
//   .catch(err => console.error('❌ Redis connection failed:', err))
