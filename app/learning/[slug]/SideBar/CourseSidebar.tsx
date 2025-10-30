'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CircleCheck, CirclePlay, Disc, Lock } from 'lucide-react'
import { formatSecondsToTime } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ICourseState } from '../CourseClient'

interface ICourseSidebarProps {
  courseState: ICourseState
  open: boolean
  setOpen: (open: boolean) => void
  handleSetCurrentLessonId: (id: string) => void
  lockedLessonIndex: number
}

export default function CourseSidebar({
  courseState,
  open,
  handleSetCurrentLessonId,
  lockedLessonIndex,
}: ICourseSidebarProps) {
  const { currentLessonId, userLessonProgress } = courseState
  let cachedLessonIndex = 0

  const lessonIdCompleted =
    userLessonProgress?.lessons?.filter(lesson => lesson.completed).map(lesson => String(lesson.lessonId)) || []

  const currentSection = courseState.sections.find(section =>
    section.lessons.find(lesson => lesson._id === currentLessonId)
  )
  const currentSectionId = currentSection?._id || courseState.sections[0]?._id || ''

  const [accordionValue, setAccordionValue] = useState(currentSectionId)

  // Count completed lessons
  const totalCompletedLessons =
    courseState.userLessonProgress?.lessons?.reduce((count, lesson) => (lesson.completed ? count + 1 : count), 0) || 0

  useEffect(() => {
    setAccordionValue(currentSectionId)
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
          value={accordionValue}
          onValueChange={setAccordionValue}
        >
          {courseState.sections.map(section => {
            const { lessons, title, _id } = section
            const totalLessons = lessons.length
            const totalDuration = lessons.reduce((total, lesson) => total + (lesson.duration || 0), 0)

            return (
              <AccordionItem value={_id} key={_id}>
                <AccordionTrigger className="sticky py-[8] px-[20] bg-[#f7f8fa] hover:no-underline cursor-pointer hover:bg-[#edeff1]">
                  <div className="flex flex-col gap-[10]">
                    <h3>{title}</h3>
                    <span className="text-xs font-normal">
                      {totalCompletedLessons}/{totalLessons} | {formatSecondsToTime(totalDuration)}
                    </span>
                  </div>
                </AccordionTrigger>

                {lessons.map(({ duration, title, video, _id }, index) => {
                  const isLocked = cachedLessonIndex >= lockedLessonIndex
                  cachedLessonIndex++

                  return (
                    <AccordionContent
                      key={_id || index}
                      className={`flex flex-col pb-0 hover:no-underline ${
                        isLocked
                          ? 'bg-gray-100 opacity-50 cursor-not-allowed'
                          : _id === currentLessonId
                          ? 'bg-[#f0512333]'
                          : 'cursor-pointer hover:bg-[#f1f1f1]'
                      }`}
                      onClick={() => _id !== currentLessonId && !isLocked && handleSetCurrentLessonId(_id)}
                    >
                      <div className={`py-[10] `}>
                        <div className="ml-[30] flex justify-between items-center">
                          <div className="flex flex-col gap-[4px]">
                            <h3>{title}</h3>
                            <p className="flex items-center gap-[6]">
                              {_id === currentLessonId ? (
                                <Disc size="11" className="text-[#f05123cc]" />
                              ) : (
                                <CirclePlay size="11" />
                              )}
                              <span className="text-[11px]">{formatSecondsToTime(duration || 0)}</span>
                            </p>
                          </div>

                          {isLocked && (
                            <span className="w-[14px] h-[14px] mr-[12]">
                              <Lock size="14" />
                            </span>
                          )}
                          {lessonIdCompleted.includes(String(_id)) && (
                            <span className="w-[14px] h-[14px] mr-[12]">
                              <CircleCheck className="mr-[12] text-[#5db85c]" size="14" />
                            </span>
                          )}
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
  )
}
