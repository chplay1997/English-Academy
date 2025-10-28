'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import VideoContent from './VideoContent'
import { LessonNoteForm } from './LessionNote'
import { IUserLessonNote } from '@/models/userLessonNote.model'
import Player from '@vimeo/player'
import { formatSecondsToTime } from '@/lib/utils'
import { Heart, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ICourseMainContentProps {
  title: string
  vimeoID: string
  open: boolean
  sectionOrder: number
  lessonOrder: number
  setLessonNote: Dispatch<SetStateAction<IUserLessonNote[]>>
  currentTime: number
  setCurrentTime: Dispatch<SetStateAction<number>>
  playerRef: React.RefObject<Player | null>
  lessonUpdatedAt: Date | string
}

export default function CourseMainContent({
  title,
  vimeoID,
  open,
  sectionOrder,
  lessonOrder,
  setLessonNote,
  currentTime,
  setCurrentTime,
  playerRef,
  lessonUpdatedAt,
}: ICourseMainContentProps) {
  const [openNote, setOpenNote] = useState(false)

  const handleClickAddNote = () => {
    setOpenNote(true)
    if (playerRef.current) {
      playerRef.current.pause().catch(error => {
        console.error('Error pausing video:', error)
      })
    }
  }

  return (
    <>
      <div className={`fixed z-2 ${open ? 'w-[77%]' : 'w-full'} top-[50px] left-[0] bottom-[50px] overflow-y-auto`}>
        <VideoContent vimeoID={vimeoID} setCurrentTime={setCurrentTime} playerRef={playerRef} />
        <div className="px-[8.5%] min-h-[400px]">
          <div className="flex justify-between items-center">
            <header>
              <h1 className="text-[28px] font-semibold mt-[48px] mb-[8px]">{title}</h1>
              <p className="text-[13px] mb-[48px]">Cập nhật {new Date(lessonUpdatedAt).toLocaleDateString()}</p>
            </header>

            <Button variant="secondary" onClick={handleClickAddNote}>
              <div className="flex justify-between gap-[8] items-center">
                <Plus size="14" />
                <span className="text-[13px]">
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
        sectionOrder={sectionOrder}
        lessonOrder={lessonOrder}
        setLessonNote={setLessonNote}
      />
    </>
  )
}
