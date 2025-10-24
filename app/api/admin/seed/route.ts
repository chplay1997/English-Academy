import { NextResponse } from 'next/server'
import { runSeed } from '@/data/seed'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')

  if (key !== process.env.SEED_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await runSeed()
    return NextResponse.json({ success: true, ...result })
  } catch (error: unknown) {
    console.error('❌ Seeding error:', error)
    const message = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
