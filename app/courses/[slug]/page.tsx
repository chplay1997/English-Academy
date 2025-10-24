'use client'
import CoreLayout from '../../components/CoreLayout'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Clock, BookOpen, Layers, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Script from 'next/script'

const courseData = {
  title: 'TOEIC FOUNDATION',
  description: 'Nền tảng tiếng Anh cho người mất gốc – ôn lại phát âm, ngữ pháp cơ bản và từ vựng chủ đề thi thật.',
  sections: [
    {
      title: '1. Giới thiệu',
      lessons: 3,
      time: '3 bài học',
      content: ['Giới thiệu về khóa học', 'Cách học hiệu quả', 'Chuẩn bị công cụ'],
    },
    {
      title: '2. Phát âm',
      lessons: 10,
      time: '10 bài học',
      content: ['Khai báo biến', 'Sử dụng comments', 'Các hàm built-in cơ bản'],
    },
    {
      title: '3. Ngữ pháp',
      lessons: 1,
      time: '04:33',
      content: ['Nhúng JS vào HTML', 'DOM cơ bản'],
    },
    { title: '4. Từ vựng', lessons: 1, time: '01:00', content: ['Định nghĩa mảng'] },
  ],
  stats: { chapters: 4, lessons: 205, duration: '29 giờ 13 phút' },
  price: 'Miễn phí',
}

export default function Courses() {
  const { title, description, sections, stats, price } = courseData
  const [openItems, setOpenItems] = useState<string[]>([])

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
    <CoreLayout>
      <section className="md:px-[66px] md:py-[24px] w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
            <section>
              <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
              <p className="text-[#000c] leading-relaxed mt-4">{description}</p>
            </section>

            <section className="">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Nội dung khóa học</h2>
                <button className="text-[#f05123] hover:opacity-70 text-sm font-semibold" onClick={handleToggleAll}>
                  {toggleButtonText}
                </button>
              </div>
              <div className="text-sm">
                <b>{stats.lessons}</b> bài học • Thời lượng <b>{stats.duration}</b>
              </div>

              <Accordion type="multiple" value={openItems} onValueChange={handleValueChange} className="w-full mt-5">
                {sections.map((section, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="mb-2 border-b-0">
                    <AccordionTrigger className="sticky py-[14px] px-5 bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1] ">
                      {section.title}
                      <span className="ml-auto text-sm font-normal">{section.time}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      {section.content.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="px-6 flex items-center min-h-12 border-b-[1px] border-[#00000008]"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          <span>{lesson}</span>
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
                      src={`https://player.vimeo.com/video/${121133}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute top-[0] left-[0] size-full"
                    />
                    <Script src="https://player.vimeo.com/api/player.js" />
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-normal text-[#f05123] text-center mb-4 opacity-80">{price}</h3>
              <Button
                asChild
                className="text-sm font-bold px-6 py-1 bg-[#0093fc] hover:bg-[#0093fc] hover:opacity-70 transition-colors rounded-full"
              >
                <Link href="/register">ĐĂNG KÝ HỌC</Link>
              </Button>

              <div className="mt-6 space-y-3 text-sm">
                <StatItem icon={Layers}>Trình độ: cơ bản</StatItem>
                <StatItem icon={BookOpen}>
                  Tổng số: <b>{stats.lessons}</b> bài học
                </StatItem>
                <StatItem icon={Clock}>
                  Thời lượng: <b>{stats.duration}</b>
                </StatItem>
                <StatItem icon={Zap}>Học mọi lúc, mọi nơi</StatItem>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CoreLayout>
  )
}

interface IconProps {
  className?: string
}
function StatItem({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<IconProps> }) {
  return (
    <div className="flex items-center">
      <Icon className="w-4 h-4 mr-2 text-black" />
      <span className="font-normal">{children}</span>
    </div>
  )
}
