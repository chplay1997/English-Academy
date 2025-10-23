import { connectDB } from '@/lib/mongoose'
import Course from '@/models/Course'
import { NextResponse } from 'next/server'

// 🟢 GET /api/courses → lấy danh sách khóa học
export async function GET() {
  try {
    await connectDB()

    console.log('Courses fetched successfully')
    const courses = await Course.find()
    courses.push({ data: 'test' })
    return NextResponse.json(courses)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}

// 🔵 POST /api/courses → thêm khóa học mới
export async function POST(req: Request) {
  try {
    await connectDB()
    const data = await req.json()
    const newCourse = await Course.create(data)
    return NextResponse.json(newCourse, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
}
