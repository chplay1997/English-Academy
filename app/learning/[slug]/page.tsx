'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import DirectionBar from '../DirectionBar'
import ProgressBar from '../ProgressBar'
import { CircleCheck, CirclePlay, Disc, Heart, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ICourseContent, courseContent } from './constant'
import { useSearchParams, notFound, useRouter, useParams } from 'next/navigation'

export default function CoursePage() {
  const { slug } = useParams<{ slug: string }>()
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCourse = courseContent[slug] || []

  const id = searchParams.get('id') || currentCourse[0]?.details?.[0]?.vimeoID
  const [currentVimeoID, setCurrentVimeoID] = useState(id)

  const courseTitle = slug?.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase())

  const handleSetCurrentVimeoID = (newID: string) => {
    setCurrentVimeoID(newID)
    router.push(`?id=${newID}`)
  }

  const currentData = currentCourse
    .flatMap(lesson => lesson.details) // gộp tất cả details thành 1 mảng
    .find(item => item.vimeoID === currentVimeoID)
  const lesson = currentCourse.find(lesson => lesson.details.some(detail => detail.vimeoID === currentVimeoID))

  const handleTogleOpen = () => {
    setOpen(prev => !prev)
  }

  if (!currentData || !lesson || !currentCourse) return notFound()

  return (
    <>
      <ProgressBar title={courseTitle} completed={1} total={3} />
      <main>
        <div className={`fixed z-2 ${open ? 'w-[77%]' : 'w-full'} top-[50px] left-[0] bottom-[50px] overflow-y-auto`}>
          <div className="w-full relative bg-black px-[16%]">
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://player.vimeo.com/video/${currentVimeoID}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute top-[0] left-[0] size-full"
              />
              <script src="https://player.vimeo.com/api/player.js" />
            </div>
          </div>

          <div className="px-[8.5%]">
            <div className="flex justify-between items-center">
              <header>
                <h1 className="text-[28px] font-semibold mt-[48px] mb-[8px]">{currentData.title}</h1>
                <p className="text-[13px] mb-[48px]">Cập nhật tháng 6 năm 2025</p>
              </header>
              <Button variant="secondary">
                <div className="flex justify-between gap-[8] items-center">
                  <Plus size="14" />
                  <span className="text-[13px]">
                    Thêm ghi chú tại
                    <span className="ml-[4] font-semibold">00:00</span>
                  </span>
                </div>
              </Button>
            </div>

            <p className="text-center text-[#666] text-sm">
              Made with
              <Heart size="12" className="inline text-[#d43c68] fill-[#d43c68] ml-[4px]" />
              <span className="px-[6px]">.</span>
              Powered by EA
            </p>
          </div>
        </div>

        <div
          className={`fixed z-2 w-[23%] top-[50px] right-[0] bottom-[50px] border-l ${open ? '' : 'hidden'}`}
          style={{ borderColor: '#e7e7e7' }}
        >
          <header className="px-[16] py-[12]">
            <h1 className="font-semibold">Nội dung khóa học</h1>
          </header>

          <div className="overflow-y-auto overflow-x-hidden h-full pb-[50]">
            {/* TODO: Update defaultValue later */}
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {currentCourse.map(data => {
                const { details, duration, progress, title } = data
                return (
                  <AccordionItem value={title} key={title}>
                    <AccordionTrigger className="sticky py-[8] px-[20] bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1]">
                      <div className="flex flex-col gap-[10]">
                        <h3>{title}</h3>
                        <span className="text-xs font-normal">
                          {progress} | {duration}
                        </span>
                      </div>
                    </AccordionTrigger>

                    {details.map(detail => {
                      const { duration, status, title, vimeoID } = detail
                      return (
                        <AccordionContent
                          className={`flex flex-col text-balance hover:no-underline pb-0 ${
                            vimeoID !== currentVimeoID && 'cursor-pointer hover:bg-[#f1f1f1]'
                          }`}
                          key={vimeoID}
                          onClick={() => vimeoID !== currentVimeoID && handleSetCurrentVimeoID(vimeoID)}
                        >
                          <div className={`py-[10] ${vimeoID === currentVimeoID ? 'bg-[#f0512333]' : ''}`}>
                            <div className="ml-[30] flex justify-between items-center">
                              <div className="flex flex-col gap-[4px]">
                                <h3>{title}</h3>
                                <p className="flex items-center gap-[6]">
                                  {vimeoID === id ? (
                                    <Disc size="11" className="text-[#f05123cc]" />
                                  ) : (
                                    <CirclePlay size="11" />
                                  )}

                                  <span className="text-[11px]">{duration}</span>
                                </p>
                              </div>

                              {status === 'completed' && <CircleCheck className="mr-[12] text-[#5db85c]" size="14" />}
                            </div>
                          </div>
                        </AccordionContent>
                      )
                    })}
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </main>
      <DirectionBar handleTogleOpen={handleTogleOpen} open={open} title={lesson.title} />
    </>
  )
}
