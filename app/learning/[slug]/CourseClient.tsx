'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CircleCheck, CirclePlay, Disc } from 'lucide-react'
import DirectionBar from './DirectionBar'
import ProgressBar from './ProgressBar'
import VideoContent from './VideoContent'
import { formatSecondsToTime } from '@/lib/utils'
import { ICourseData } from '@/lib/data'

export interface ICourseClientProps {
  courseData: ICourseData
  slug: string
}

export default function CourseClient({ courseData, slug }: ICourseClientProps) {
  const { sections = [], lessonIdCompleted = [], videoLessonsCount, title } = courseData
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get('id') || sections[0]?.lessons?.[0]?.video?.vimeoId || ''
  const [currentVimeoID, setCurrentVimeoID] = useState(id)

  const handleSetCurrentVimeoID = (newID: string) => {
    setCurrentVimeoID(newID)
    router.push(`?id=${newID}`)
  }

  const currentLesson = sections.find(section =>
    section.lessons.find(lesson => lesson?.video?.vimeoId === currentVimeoID)
  )

  if (!courseData || !currentLesson || !currentVimeoID) return notFound()

  return (
    <>
      <ProgressBar title={title} completed={lessonIdCompleted.length} total={videoLessonsCount} />
      <VideoContent title={courseData.title} vimeoID={currentVimeoID} open={open} />

      <div
        className={`fixed z-2 w-[23%] top-[50px] right-[0] bottom-[50px] border-l ${open ? '' : 'hidden'}`}
        style={{ borderColor: '#e7e7e7' }}
      >
        <header className="px-[16] py-[12]">
          <h1 className="font-semibold">Nội dung khóa học</h1>
        </header>

        <div className="overflow-y-auto overflow-x-hidden h-full pb-[50]">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            {courseData.sections.map(section => {
              const { lessons, title } = section
              const totalLessons = lessons.length
              const completedLessons = lessons.filter(lesson => lessonIdCompleted.includes(lesson._id))
              const totalDuration = lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0)

              return (
                <AccordionItem value={title} key={title}>
                  <AccordionTrigger className="sticky py-[8] px-[20] bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1]">
                    <div className="flex flex-col gap-[10]">
                      <h3>{title}</h3>
                      <span className="text-xs font-normal">
                        {completedLessons.length}/{totalLessons} | {formatSecondsToTime(totalDuration)}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {lessons.map(({ duration, title, video, _id }, index) => (
                    <AccordionContent
                      key={_id || index}
                      className={`flex flex-col pb-0 hover:no-underline ${
                        video?.vimeoId !== currentVimeoID && 'cursor-pointer hover:bg-[#f1f1f1]'
                      }`}
                      onClick={() =>
                        video?.vimeoId !== currentVimeoID && video?.vimeoId && handleSetCurrentVimeoID(video.vimeoId)
                      }
                    >
                      <div className={`py-[10] ${video?.vimeoId === currentVimeoID ? 'bg-[#f0512333]' : ''}`}>
                        <div className="ml-[30] flex justify-between items-center">
                          <div className="flex flex-col gap-[4px]">
                            <h3>{title}</h3>
                            <p className="flex items-center gap-[6]">
                              {video?.vimeoId === id ? (
                                <Disc size="11" className="text-[#f05123cc]" />
                              ) : (
                                <CirclePlay size="11" />
                              )}
                              <span className="text-[11px]">{formatSecondsToTime(duration || 0)}</span>
                            </p>
                          </div>
                          {lessonIdCompleted.includes(_id) && (
                            <CircleCheck className="mr-[12] text-[#5db85c]" size="14" />
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>

      <DirectionBar handleTogleOpen={() => setOpen(!open)} open={open} title={currentLesson.title} />
    </>
  )
}
