import { Redis } from '@upstash/redis'

let redisInstance: Redis | null = null

export const redis = new Proxy({} as Redis, {
  get(target, prop) {
    if (!redisInstance) {
      if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
        throw new Error('❌ Missing Upstash Redis environment variables')
      }
      redisInstance = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    }
    return redisInstance[prop as keyof Redis]
  },
})
