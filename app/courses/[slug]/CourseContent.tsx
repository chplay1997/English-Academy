'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Clock, BookOpen, Layers, Zap } from 'lucide-react'
import { useState } from 'react'
import Script from 'next/script'
import { StatItem } from './StatItem'
import { RegisterCourse } from './RegisterCourse'
import { ICourseData } from '@/lib/data/getCourseData'
import { formatMsToHoursAndMinutes } from '@/lib/utils'

export function CourseContent({ courseData }: { courseData: ICourseData }) {
  const { title, subtitle, sections, duration, videoLessonsCount, newPrice } = courseData
  const [openItems, setOpenItems] = useState<string[]>([])

  const firstVimeoId = sections?.[0]?.lessons?.[0]?.video?.vimeoId || ''
  const allItemValues = sections.map((_, index) => `item-${index}`)

  const handleToggleAll = () => {
    if (openItems.length > 0) {
      setOpenItems([])
    } else {
      setOpenItems(allItemValues)
    }
  }

  const handleValueChange = (newValues: string[]) => {
    setOpenItems(newValues)
  }

  const toggleButtonText = openItems.length > 0 ? 'Thu nhỏ tất cả' : 'Mở rộng tất cả'
  return (
    <div className=" md:px-[66px] md:py-[24px] w-full flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3 space-y-8">
        <section>
          <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
          <p className="text-[#000c] leading-relaxed mt-4">{subtitle}</p>
        </section>

        <section className="">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Nội dung khóa học</h2>
            <button className="text-[#f05123] hover:opacity-70 text-sm font-semibold" onClick={handleToggleAll}>
              {toggleButtonText}
            </button>
          </div>
          <div className="text-sm">
            <b>{videoLessonsCount}</b> bài học • Thời lượng <b>{formatMsToHoursAndMinutes(duration)}</b>
          </div>

          <Accordion type="multiple" value={openItems} onValueChange={handleValueChange} className="w-full mt-5">
            {sections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-2 border-b-0">
                <AccordionTrigger className="sticky py-[14px] px-5 bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1] ">
                  {section.title}
                  <span className="ml-auto text-sm font-normal">{section.lessons.length} bài học</span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="px-6 flex items-center min-h-12 border-b-[1px] border-[#00000008] justify-between"
                    >
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>{lesson.title}</span>
                      </div>
                      <span className="ml-auto text-sm font-normal">
                        {formatMsToHoursAndMinutes(lesson.duration || 0)}
                      </span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>

      <div className="hidden lg:block lg:w-1/3">
        <div className="sticky top-8 bg-white p-6 rounded-lg flex items-center flex-col ">
          <div className="relative mb-5 w-full">
            <div className="aspect-video bg-black flex items-center justify-center rounded-lg overflow-hidden">
              <div className="relative pt-[56.25%] w-full">
                <iframe
                  src={`https://player.vimeo.com/video/${firstVimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute top-[0] left-[0] size-full"
                />
                <Script src="https://player.vimeo.com/api/player.js" />
              </div>
            </div>
          </div>

          <h3 className="text-4xl font-normal text-[#f05123] text-center mb-4 opacity-80">
            {newPrice === 0 ? 'Miễn phí' : newPrice}
          </h3>
          <RegisterCourse />

          <div className="mt-6 space-y-3 text-sm">
            <StatItem icon={Layers}>Trình độ: cơ bản</StatItem>
            <StatItem icon={BookOpen}>
              Tổng số: <b>{courseData.videoLessonsCount}</b> bài học
            </StatItem>
            <StatItem icon={Clock}>
              Thời lượng: <b>{formatMsToHoursAndMinutes(courseData.duration)}</b>
            </StatItem>
            <StatItem icon={Zap}>Học mọi lúc, mọi nơi</StatItem>
          </div>
        </div>
      </div>
    </div>
  )
}
