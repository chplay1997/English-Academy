'use client'
import { Heart, Plus } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Player from '@vimeo/player'
import Script from 'next/script'
import { formatSecondsToTime } from '@/lib/utils'

interface IVideoContent {
  title: string
  vimeoID: string
  open: boolean
  currentTime: number
  setCurrentTime: (currentTime: number) => void
  setOpenNote: (openNote: boolean) => void
}

export default function VideoContent(props: IVideoContent) {
  const { title, vimeoID, open, currentTime, setCurrentTime, setOpenNote } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<Player | null>(null)

  useEffect(() => {
    // Create instance only once
    if (!playerRef.current && iframeRef.current) {
      playerRef.current = new Player(iframeRef.current)
      playerRef.current.on('timeupdate', data => {
        setCurrentTime(data.seconds || 0)
      })
    }
  }, [])

  // When vimeoID changes -> load video new
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current
        .loadVideo(vimeoID)
        .then(() => {
          setCurrentTime(0)
        })
        .catch(err => {
          console.error('Load video lỗi:', err)
        })
    }
  }, [vimeoID])

  const handleClickAddNote = () => {
    setOpenNote(true)
    if (playerRef.current) {
      playerRef.current.pause().catch(error => {
        console.error('Error pausing video:', error)
      })
    }
  }

  return (
    <div className={`fixed z-2 ${open ? 'w-[77%]' : 'w-full'} top-[50px] left-[0] bottom-[50px] overflow-y-auto`}>
      <div className="w-full relative bg-black px-[16%]">
        <div className="relative pt-[56.25%]">
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoID}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-[0] left-[0] size-full"
          />
          <Script src="https://player.vimeo.com/api/player.js" />
        </div>
      </div>

      <div className="px-[8.5%] min-h-[400px]">
        <div className="flex justify-between items-center">
          <header>
            <h1 className="text-[28px] font-semibold mt-[48px] mb-[8px]">{title}</h1>
            <p className="text-[13px] mb-[48px]">Cập nhật tháng 6 năm 2025</p>
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
  )
}
