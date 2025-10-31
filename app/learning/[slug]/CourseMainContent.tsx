'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import VideoContent from './VideoContent'
import { LessonNoteForm } from './LessionNote'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import Player from '@vimeo/player'
import { formatSecondsToTime } from '@/lib/utils'
import { Heart, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ICourseState } from './CourseClient'
import { notFound } from 'next/navigation'

interface ICourseMainContentProps {
  open: boolean
  playerRef: React.RefObject<Player | null>
  courseState: ICourseState
  setCourseState: Dispatch<SetStateAction<ICourseState>>
  loadingVideo: boolean
  setLoadingVideo: Dispatch<SetStateAction<boolean>>
  currentTime: number
  setCurrentTime: Dispatch<SetStateAction<number>>
}

export default function CourseMainContent({
  open,
  playerRef,
  courseState,
  setCourseState,
  loadingVideo,
  setLoadingVideo,
  currentTime,
  setCurrentTime,
}: ICourseMainContentProps) {
  const [openNote, setOpenNote] = useState(false)
  const { sections, slug, currentLessonId, userLessonProgress } = courseState

  const currentLesson = sections.flatMap(section => section.lessons).find(lesson => lesson._id === currentLessonId)
  const currentSection = sections.find(section => section.lessons.some(lesson => lesson._id === currentLessonId))

  const handleClickAddNote = () => {
    setOpenNote(true)
    if (playerRef.current) {
      playerRef.current.pause().catch(error => {
        console.error('Error pausing video:', error)
      })
    }
  }

  const vimeoID = currentLesson?.video?.vimeoId

  if (!currentLesson || !currentSection) return notFound()

  return (
    <>
      <div
        className={`fixed z-2 right-0 ${
          open ? 'lg:right-[23%]' : ''
        } top-[50px] left-[0] bottom-[50px] overflow-y-auto`}
      >
        {!!vimeoID && (
          <VideoContent
            userLessonProgress={userLessonProgress}
            vimeoID={vimeoID}
            setCurrentTime={setCurrentTime}
            playerRef={playerRef}
            courseSlug={slug}
            lessonId={currentLessonId}
            setCourseState={setCourseState}
            loadingVideo={loadingVideo}
            setLoadingVideo={setLoadingVideo}
          />
        )}
        <div className="px-4 md:px-[8.5%] lg:px-[16%] min-h-[400px]">
          <div className="flex justify-between items-center flex-wrap ">
            <header>
              <h1 className="text-[28px] font-semibold mt-[48px] mb-[8px]">{currentLesson.title}</h1>
              <p className="text-[13px] mb-6 md:mb-12">
                Cập nhật {new Date(currentLesson?.updatedAt).toLocaleDateString()}
              </p>
            </header>

            <Button variant="secondary" onClick={handleClickAddNote}>
              <div className="flex justify-between gap-[8] items-center">
                <Plus size="14" />
                <span className="text-[13px] font-normal">
                  Thêm ghi chú tại
                  <span className="ml-[4] font-semibold">{formatSecondsToTime(currentTime)}</span>
                </span>
              </div>
            </Button>
          </div>
        </div>

        <p className="text-center text-[#666] text-sm py-7">
          Made with
          <Heart size="12" className="inline text-[#d43c68] fill-[#d43c68] ml-[4px]" />
          <span className="px-[6px]">.</span>
          Powered by EA
        </p>
      </div>

      <LessonNoteForm
        isFullWidth={!open}
        currentTime={currentTime}
        setOpenNote={setOpenNote}
        openNote={openNote}
        sectionOrder={currentSection.order}
        lessonOrder={currentLesson.order}
        setCourseState={setCourseState}
      />
    </>
  )
}
