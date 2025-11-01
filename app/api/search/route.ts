import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoose'
import Course from '@/models/course.model'

export async function GET(request: Request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const q = searchParams.get('q')?.trim()

    if (!q) {
      return NextResponse.json({ data: [] })
    }

    // Search by title or subtitle
    const regex = new RegExp(q, 'i')

    const courses = await Course.find({
      $or: [{ title: regex }, { subtitle: regex }],
    })
      .select('title slug thumbnail newPrice oldPrice')
      .limit(10)
      .lean()

    return NextResponse.json({ data: courses })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
