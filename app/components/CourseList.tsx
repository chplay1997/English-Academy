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
  const LIST_COURSE_BACKGROUND_COLORS = [
    'bg-gradient-to-br from-blue-500 to-indigo-600',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-pink-500 to-rose-600',
  ]

  return (
    <section className="py-6 px-3 md:px-16 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Khóa học <span className="bg-blue-500 text-white text-sm px-2 py-0.5 rounded-md">MỚI</span>
      </h2>

      <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {courses.map((course, index) => {
          const {
            slug,
            level: levelRaw,
            title: titleRaw,
            isEnrolled,
            newPrice = 0,
            oldPrice = 0,
            students = 0,
            videoLessons = 0,
            duration = 0,
          } = course

          const title = titleRaw.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
          const level = levelRaw?.replace(/\b\w/g, char => char.toUpperCase())

          return (
            <Link href={`/${isEnrolled ? 'learning' : 'courses'}/${slug}`} key={slug}>
              <Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 py-0 cursor-pointer">
                {/* Header */}
                <div
                  className={`h-40 ${LIST_COURSE_BACKGROUND_COLORS[index]} flex flex-col justify-center px-2.5 md:px-4 text-center`}
                >
                  <h3 className="text-white text-2xl font-bold drop-shadow">English</h3>
                  <p className="text-white/90 text-sm drop-shadow">{level}</p>
                </div>

                {/* Content */}
                <CardContent className="p-2.5 md:p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>

                  <div className="text-sm mb-3">
                    {newPrice !== 0 && <span className="text-gray-400 line-through mr-2">{oldPrice}</span>}
                    <span className="text-[#f05123] text-base font-semibold">{newPrice === 0 ? 'Free' : newPrice}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1 hidden md:block">
                      <Users size={14} /> {students}
                    </span>
                    <span className="flex items-center gap-1">
                      <CirclePlay size={14} /> {videoLessons}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {formatMsToHoursAndMinutes(duration)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
