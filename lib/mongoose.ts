import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string
if (!MONGODB_URI) {
  throw new Error('❌ Missing MONGODB_URI environment variable')
}

// ⚡ Use globalThis to store connection, prevent loss when hot reload / lambda reset
declare global {
  // eslint-disable-next-line no-var
  var mongoose:
    | {
        conn: Mongoose | null
        promise: Promise<Mongoose> | null
      }
    | undefined
}

const globalForMongoose = globalThis as unknown as {
  mongoose?: {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null
  }
}

type MongooseCache = { conn: Mongoose | null; promise: Promise<Mongoose> | null }
const cached: MongooseCache = globalForMongoose.mongoose ?? (globalForMongoose.mongoose = { conn: null, promise: null })

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'english_academy',
    })
  }

  cached.conn = await cached.promise
  console.info('✅ MongoDB connected')
  return cached.conn
}
