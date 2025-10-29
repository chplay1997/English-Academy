'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CircleCheck, CirclePlay, Disc } from 'lucide-react'
import { formatSecondsToTime } from '@/lib/utils'
import { ICourseData } from '@/types/course'
import { useEffect, useState } from 'react'

interface ICourseSidebarProps {
  courseData: ICourseData
  open: boolean
  setOpen: (open: boolean) => void
  currentVimeoID: string
  handleSetCurrentVimeoID: (newID: string) => void
  lessonIdCompleted: string[]
}

export default function CourseSidebar({
  courseData,
  open,
  currentVimeoID,
  handleSetCurrentVimeoID,
  lessonIdCompleted,
}: ICourseSidebarProps) {
  const currentSection = courseData.sections.find(section =>
    section.lessons.find(lesson => lesson.video?.vimeoId === currentVimeoID)
  )
  const currentSectionId = currentSection?._id || courseData.sections[0]?._id || ''
  const [value, setValue] = useState(currentSectionId)

  useEffect(() => {
    setValue(currentSectionId)
  }, [currentSectionId])

  return (
    <div
      className={`fixed z-2 w-[23%] top-[50px] right-[0] bottom-[50px] border-l ${open ? '' : 'hidden'}`}
      style={{ borderColor: '#e7e7e7' }}
    >
      <header className="px-[16] py-[12]">
        <h1 className="font-semibold">Nội dung khóa học</h1>
      </header>

      <div className="overflow-y-auto overflow-x-hidden h-full pb-[50]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={currentSectionId}
          value={value}
          onValueChange={val => setValue(val)}
        >
          {courseData.sections.map(section => {
            const { lessons, title, _id } = section
            const totalLessons = lessons.length
            const completedLessons = lessons.filter(lesson => lessonIdCompleted.includes(lesson._id))
            const totalDuration = lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0)

            return (
              <AccordionItem value={_id} key={_id}>
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
                            {video?.vimeoId === currentVimeoID ? (
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
  )
}
