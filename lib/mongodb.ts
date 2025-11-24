import { MongoClient } from 'mongodb'

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
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

// Export a getter that lazily creates the client
export default new Proxy({} as Promise<MongoClient>, {
  get(_target, prop) {
    const promise = getClientPromise()
    const value = promise[prop as keyof Promise<MongoClient>]
    // Bind function methods to the promise object
    return typeof value === 'function' ? value.bind(promise) : value
  },
})
