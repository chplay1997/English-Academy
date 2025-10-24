'use client'
import { Card, CardContent } from '@/components/ui/card'
import { ICourse } from '@/models/course.model'
import { Clock, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function CourseList({ courses }: { courses: ICourse[] }) {
  const router = useRouter()
  const { data: session, status } = useSession()

  const path = status === 'unauthenticated' || !session ? '/courses' : '/learning'
  const handleClick = (slug: string) => {
    router.push(`${path}/${slug}`)
  }

  return (
    <section className="md:px-[66px] md:py-[24]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Khóa học <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded-md">MỚI</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {courses.map(course => (
          <Card
            onClick={() => handleClick(course.slug)}
            key={course.slug}
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
