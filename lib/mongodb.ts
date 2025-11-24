import { MongoClient } from 'mongodb'

declare global {
  let _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient> | null = null

function getClientPromise(): Promise<MongoClient> {
  if (clientPromise) return clientPromise

  const uri = process.env.MONGODB_URI

  if (!uri) throw new Error('❌ Missing MONGODB_URI')

  const options = {}
  const client = new MongoClient(uri, options)

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

  return clientPromise
}

export default getClientPromise()
