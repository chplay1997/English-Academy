import { MongoClient } from 'mongodb'

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getMongoClient() {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('❌ Missing MONGODB_URI')

  const options = {}
  return new MongoClient(uri, options)
}

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // Reuse client in dev mode to avoid multiple connections
  const globalWithMongo = globalThis as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }
  if (!globalWithMongo._mongoClientPromise) {
    const client = getMongoClient()
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  const client = getMongoClient()
  clientPromise = client.connect()
}

export default clientPromise
