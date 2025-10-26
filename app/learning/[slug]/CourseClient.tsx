'use client'

import { useState } from 'react'
import { useRouter, useSearchParams, notFound } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CircleCheck, CirclePlay, Disc } from 'lucide-react'
import DirectionBar from './DirectionBar'
import ProgressBar from './ProgressBar'
import VideoContent from './VideoContent'
import { ICourse } from '@/models/course.model'
import { ISection } from '@/models/section.model'
import { ILesson } from '@/models/lesson.model'

export interface ICourseClient extends Omit<ICourse, 'sections'> {
  sections: (Omit<ISection, 'lessons'> & { lessons: ILesson[] })[]
}

export interface ICourseClientProps {
  courseData: ICourseClient
  slug: string
}

export default function CourseClient({ courseData, slug }: ICourseClientProps) {
  const [open, setOpen] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()

  console.log('courseData 11111: ', courseData, typeof courseData)

  const id = searchParams.get('id') || courseData.sections?.[0]?.lessons?.[0]?.video?.vimeoId || ''
  const [currentVimeoID, setCurrentVimeoID] = useState(id)

  const courseTitle = slug?.replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase())

  const handleSetCurrentVimeoID = (newID: string) => {
    setCurrentVimeoID(newID)
    router.push(`?id=${newID}`)
  }

  const currentLesson = courseData.sections.find((section: any) =>
    section.lessons.find((lesson: any) => lesson.video.vimeoId === currentVimeoID)
  )

  console.log('currentLesson: ', currentVimeoID, currentLesson)
  if (!courseData || !currentLesson || !currentVimeoID) return notFound()

  return (
    <>
      <ProgressBar title={courseTitle} completed={1} total={3} />
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
              return (
                <AccordionItem value={title} key={title}>
                  <AccordionTrigger className="sticky py-[8] px-[20] bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1]">
                    <div className="flex flex-col gap-[10]">
                      <h3>{title}</h3>
                      <span className="text-xs font-normal">
                        {/* TODO: add progress and duration */}
                        {/* {progress} | {duration} */}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {lessons.map(({ duration, status, title, video: { vimeoId } }: any) => (
                    <AccordionContent
                      key={vimeoId}
                      className={`flex flex-col pb-0 hover:no-underline ${
                        vimeoId !== currentVimeoID && 'cursor-pointer hover:bg-[#f1f1f1]'
                      }`}
                      onClick={() => vimeoId !== currentVimeoID && handleSetCurrentVimeoID(vimeoId)}
                    >
                      <div className={`py-[10] ${vimeoId === currentVimeoID ? 'bg-[#f0512333]' : ''}`}>
                        <div className="ml-[30] flex justify-between items-center">
                          <div className="flex flex-col gap-[4px]">
                            <h3>{title}</h3>
                            <p className="flex items-center gap-[6]">
                              {vimeoId === id ? (
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
