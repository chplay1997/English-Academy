'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CircleCheck, CirclePlay, Disc, Lock, X } from 'lucide-react'
import { formatSecondsToTime } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { ICourseState } from '../CourseClient'
import { Button } from '@/components/ui/button'
import { useDeviceType } from '@/hooks/useDeviceType'

interface ICourseSidebarProps {
  courseState: ICourseState
  open: boolean
  handleSetCurrentLessonId: (id: string) => void
  lockedLessonIndex: number
  handleToggleOpen: () => void
}

export default function CourseSidebar({
  courseState,
  open,
  handleSetCurrentLessonId,
  lockedLessonIndex,
  handleToggleOpen,
}: ICourseSidebarProps) {
  const { currentLessonId, userLessonProgress } = courseState
  const deviceType = useDeviceType()

  const handleClickLesson = (id: string) => {
    handleSetCurrentLessonId(id)
    if (deviceType === 'mobile' || deviceType === 'tablet') {
      handleToggleOpen()
    }
  }

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
    <>
      <div
        onClick={handleToggleOpen}
        className={`fixed inset-0 bg-black/50 z-5 lg:hidden ${open ? 'block' : 'hidden'}`}
      />
      <div
        className={`transform transition-transform duration-300 lg:transition-none bg-white fixed z-5 lg:z-4 w-full md:w-[50%] lg:w-[23%] top-0 lg:top-[50px] right-0 left-0 lg:left-auto bottom-0 lg:bottom-[50px] border-l ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-full'
        }`}
        style={{ borderColor: '#e7e7e7' }}
      >
        <header className="lg:px-4 pl-4 pr-2 py-[12] flex justify-between items-center">
          <h1 className="font-semibold">Nội dung khóa học</h1>
          <Button variant="ghost" onClick={handleToggleOpen} className="lg:hidden">
            <X />
          </Button>
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

                  {lessons.map(({ duration, title, _id }, index) => {
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
                        onClick={() => _id !== currentLessonId && !isLocked && handleClickLesson(_id)}
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
    </>
  )
}
