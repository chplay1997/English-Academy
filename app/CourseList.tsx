'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Course {
  id: number
  title: string
  slug: string
  subtitle: string
  author: string
  students: number
  duration: string
  oldPrice: string
  newPrice: string
  color: string // gradient background
}

const courses: Course[] = [
  {
    id: 1,
    title: 'TOEIC FOUNDATION',
    slug: 'toeic-foundation',
    subtitle: 'Nền tảng tiếng Anh cho người mất gốc – ôn lại phát âm, ngữ pháp cơ bản và từ vựng chủ đề thi thật.',
    author: 'Anonymous',
    students: 0,
    duration: '40 giờ học',
    oldPrice: '1.999.000đ',
    newPrice: 'Free',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'TOEIC INTERMEDIATE',
    slug: 'toeic-intermediate',
    subtitle: 'Củng cố kỹ năng Nghe – Đọc, luyện chiến lược làm bài và tăng tốc điểm từ 450–700+.',
    author: 'Anonymous',
    students: 0,
    duration: '55 giờ học',
    oldPrice: '2.999.000đ',
    newPrice: 'Free',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  },
  {
    id: 3,
    title: 'TOEIC ADVANCED',
    slug: 'toeic-advanced',
    subtitle: 'Khóa luyện đề chuyên sâu, kỹ thuật tăng tốc 800+ với bộ đề cập nhật theo định dạng mới nhất.',
    author: 'Anonymous',
    students: 0,
    duration: '60 giờ học',
    oldPrice: '9.999.000đ',
    newPrice: 'Free',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
]

export default function CourseList() {
  const router = useRouter()

  const handleClick = (slug: string) => {
    router.push(`/learning/${slug}`)
  }

  return (
    <section className="md:px-[66px] md:py-[24] p">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Khóa học <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded-md">MỚI</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {courses.map(course => (
          <Card
            onClick={() => handleClick(course.slug)}
            key={course.id}
            className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 pt-0 cursor-pointer"
          >
            {/* Header */}
            <div className={`h-40 ${course.color} flex flex-col justify-center px-6 text-center`}>
              <h3 className="text-white text-2xl font-bold drop-shadow">{course.title}</h3>
              <p className="text-white/90 text-sm drop-shadow">{course.subtitle}</p>
            </div>

            {/* Content */}
            <CardContent className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>

              <div className="text-sm mb-3">
                <span className="text-gray-400 line-through mr-2">{course.oldPrice}</span>
                <span className="text-red-600 font-semibold">{course.newPrice}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                {/* <Image
                  src="https://fullstack.edu.vn/images/f8_avatar.png"
                  alt={course.author}
                  className="w-6 h-6 rounded-full"
                /> */}
                <span>{course.author}</span>
                <span className="flex items-center gap-1 ml-2">
                  <User size={14} /> {course.students}
                </span>
                <span className="flex items-center gap-1 ml-2">
                  <Clock size={14} /> {course.duration}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
