import { MongoClient } from 'mongodb'

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const uri = process.env.MONGODB_URI!
if (!uri) throw new Error('❌ Missing MONGODB_URI')

const options = {}

const client = new MongoClient(uri, options)
let clientPromise: Promise<MongoClient>

console.log('connect db now.......................', uri)

if (process.env.NODE_ENV === 'development') {
  // Reuse client in dev mode to avoid multiple connections
  const globalWithMongo = globalThis as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }
  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise
