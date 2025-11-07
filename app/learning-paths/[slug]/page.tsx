'use client'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { ClipboardList, BookOpen } from 'lucide-react'
import { notFound, useParams } from 'next/navigation'
import { STUDY_PLAN } from './constants'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useState, useEffect } from 'react'

export default function StudyPlan() {
  const params = useParams()
  const slug = params.slug
  const currentPlan = STUDY_PLAN[slug as keyof typeof STUDY_PLAN]

  const [checkedDays, setCheckedDays] = useState<string[]>([])

  // Retrieve data from localStorage when the component mounts
  useEffect(() => {
    const saved = localStorage?.getItem(`${slug}-checkedDays`)

    if (saved) {
      setCheckedDays(JSON.parse(saved))
    }
  }, [slug])

  const toggleDay = (day: string) => {
    const newCheckedDays = checkedDays.includes(day) ? checkedDays.filter(d => d !== day) : [...checkedDays, day]
    setCheckedDays(newCheckedDays)

    // Save to localStorage
    localStorage?.setItem(`${slug}-checkedDays`, JSON.stringify(newCheckedDays))
  }

  if (!currentPlan) {
    notFound()
  }

  const { title, description, plans } = currentPlan

  return (
    <section className="max-w-4xl mx-auto p-4 pb-10">
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
                  <div className="flex items-center gap-3 justify-between w-full">
                    <Label htmlFor={item.day}>{item.day}</Label>
                    <Checkbox
                      id={item.day}
                      checked={checkedDays.includes(item.day)}
                      onCheckedChange={() => toggleDay(item.day)}
                      className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700">
                {item.newLesson && (
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 min-w-4" />
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
