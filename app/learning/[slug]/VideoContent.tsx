'use client'
import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'
import Script from 'next/script'

interface IVideoContent {
  vimeoID: string
  setCurrentTime: (currentTime: number) => void
  playerRef: React.RefObject<Player | null>
}

export default function VideoContent(props: IVideoContent) {
  const { vimeoID, setCurrentTime, playerRef } = props
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Create instance only once
    if (!playerRef.current && iframeRef.current) {
      playerRef.current = new Player(iframeRef.current)
      playerRef.current.on('timeupdate', data => {
        setCurrentTime(data.seconds || 0)
      })
    }
  }, [])

  return (
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
  )
}
