import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('❌ Missing MONGODB_URI environment variable')
}

let isConnected = false // tránh connect nhiều lần

export async function connectDB() {
  if (isConnected) return

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: 'english_academy', // tùy tên DB bạn muốn
    })

    isConnected = !!db.connections[0].readyState
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}
