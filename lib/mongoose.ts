import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string
if (!MONGODB_URI) {
  throw new Error('❌ Missing MONGODB_URI environment variable')
}

let isConnected = false

export async function connectDB() {
  if (isConnected) return

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: 'english_academy',
    })
    isConnected = !!db.connections[0].readyState
    console.log('✅ Mongoose connected successfully')
  } catch (err) {
    console.error('❌ Mongoose connection error:', err)
    throw err
  }
}
