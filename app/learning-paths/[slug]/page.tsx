'use client'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { ClipboardList, BookOpen } from 'lucide-react'
import { notFound, useParams } from 'next/navigation'
import { STUDY_PLAN } from './constants'

export default function StudyPlan() {
  const params = useParams()
  const slug = params.slug
  const currentPlan = STUDY_PLAN[slug as keyof typeof STUDY_PLAN]

  if (!currentPlan) {
    notFound()
  }

  const { title, description, plans } = currentPlan

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <div className="space-y-8">
        {/* === Title + Description === */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">{description}</p>
        </div>

        {/* === List of study days === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((item, idx) => (
            <Card
              key={idx}
              className={`transition hover:shadow-md ${
                item.review?.toLowerCase().includes('mini test')
                  ? 'border-yellow-400 bg-yellow-50/40'
                  : 'border-blue-200'
              }`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <ClipboardList className="w-5 h-5" />
                  {item.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700">
                {item.newLesson && (
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500 mt-0.5" />
                    <p>
                      <strong>Bài mới:</strong> {item.newLesson}
                    </p>
                  </div>
                )}
                {item.review && (
                  <div className="flex items-start gap-2">
                    <ClipboardList className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <p>
                      <strong>Ôn tập:</strong> {item.review}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
