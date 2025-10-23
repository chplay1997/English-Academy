import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI!
if (!uri) throw new Error('❌ Missing MONGODB_URI')

const options = {}

let client = new MongoClient(uri, options)
let clientPromise: Promise<MongoClient>

console.log('connect db now.......................', uri)

if (process.env.NODE_ENV === 'development') {
  // Reuse client in dev mode to avoid multiple connections
  if (!(global as any)._mongoClientPromise) {
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise
