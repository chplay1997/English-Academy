import { Card, CardContent } from '@/components/ui/card'
import { ICourse } from '@/models/course.model'
import { formatMsToHoursAndMinutes } from '@/lib/utils'
import { CirclePlay, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export interface ICourseClient extends Omit<ICourse, 'sections'> {
  duration: number
  students: number
  videoLessons: number
  isEnrolled: boolean
}

export default function CourseList({ courses }: { courses: ICourseClient[] }) {
  const listColor = [
    'bg-gradient-to-br from-blue-500 to-indigo-600',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-pink-500 to-rose-600',
  ]

  return (
    <section className="md:px-[66px] md:py-[24]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Khóa học <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded-md">MỚI</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {courses.map((course, index) => (
          <Link href={`/${course.isEnrolled ? 'learning' : 'courses'}/${course.slug}`} key={course.slug}>
            <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 pt-0 cursor-pointer">
              {/* Header */}
              <div className={`h-40 ${listColor[index]} flex flex-col justify-center px-6 text-center`}>
                <h3 className="text-white text-2xl font-bold drop-shadow">{course.title}</h3>
                <p className="text-white/90 text-sm drop-shadow">{course.subtitle}</p>
              </div>

              {/* Content */}
              <CardContent className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>

                <div className="text-sm mb-3">
                  {course.newPrice !== 0 && <span className="text-gray-400 line-through mr-2">{course.oldPrice}</span>}
                  <span className="text-[#f05123] text-base font-semibold">
                    {course.newPrice === 0 ? 'Free' : course.newPrice}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <CirclePlay size={14} /> {course.videoLessons}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {formatMsToHoursAndMinutes(course.duration)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
