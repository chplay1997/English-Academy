'use client'

import { useEffect, useRef } from 'react'
import Player from '@vimeo/player'
import Script from 'next/script'
import { Dispatch, SetStateAction } from 'react'
import { ICourseState } from './CourseClient'
import { Spinner } from '@/components/ui/spinner'
import { UserLessonProgressBase } from '@/types/course'

interface IVideoContent {
  vimeoID: string
  courseSlug: string
  lessonId: string
  setCurrentTime: (currentTime: number) => void
  playerRef: React.RefObject<Player | null>
  setCourseState: Dispatch<SetStateAction<ICourseState>>
  loadingVideo: boolean
  setLoadingVideo: Dispatch<SetStateAction<boolean>>
  userLessonProgress: UserLessonProgressBase
}

export default function VideoContent({
  vimeoID,
  courseSlug,
  lessonId,
  setCurrentTime,
  playerRef,
  setCourseState,
  loadingVideo,
  setLoadingVideo,
  userLessonProgress,
}: IVideoContent) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 🔹 Setup player only once
  useEffect(() => {
    let lastSent = 0
    let hasCompletedSent = false
    let cachedUserLessonProgress = userLessonProgress
    if (!iframeRef.current) return

    if (!playerRef.current) {
      playerRef.current = new Player(iframeRef.current)
    }

    const player = playerRef.current

    // --- Learning progress update function ---
    const updateProgress = async (seconds: number, duration: number, completed = false) => {
      const currentLessonId = iframeRef.current?.dataset.lessonId

      if (!currentLessonId) return
      try {
        const res = await fetch('/api/user-lesson-progress', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseSlug,
            lessonId: currentLessonId,
            lastWatched: seconds,
            duration,
            completed,
          }),
        })

        const result = await res.json()
        if (result.success) {
          cachedUserLessonProgress = result.data as UserLessonProgressBase
          setCourseState(prev => ({
            ...prev,
            userLessonProgress: cachedUserLessonProgress,
          }))
        } else {
          console.log('Update progress failed:', result.error)
        }
      } catch (err) {
        console.error('Update progress failed:', err)
      }
    }

    // --- Remove old listeners ---
    player.off('timeupdate')
    player.off('ended')

    // --- timeupdate (when video is playing) ---
    player.on('timeupdate', async ({ seconds, duration }) => {
      setCurrentTime(seconds)
      if (!seconds) return

      const isCompleted = seconds / duration >= 0.9
      lastSent = lastSent > seconds ? seconds : lastSent
      const isValidSendAfterSeconds = seconds - lastSent >= 15
      if (isValidSendAfterSeconds || (isCompleted && !hasCompletedSent)) {
        await updateProgress(seconds, duration, isCompleted)
        lastSent = seconds
        if (isCompleted) hasCompletedSent = true
      }
    })

    // --- Ended ---
    player.on('ended', async ({ seconds, duration }) => {
      await updateProgress(seconds, duration, true)
    })

    // --- Update duration when video changes ---
    player.on('loaded', async () => {
      lastSent = await player.getCurrentTime()
      hasCompletedSent = false
    })

    return () => {
      player.off('timeupdate')
      player.off('ended')
      player.off('loaded')
    }
  }, [])

  return (
    <div className="w-full relative bg-black px-[16%]">
      {loadingVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <Spinner className="h-12 w-12 text-white" />
        </div>
      )}

      <div className="relative pt-[56.25%]">
        <iframe
          data-lesson-id={lessonId}
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${vimeoID}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute top-0 left-0 size-full"
        />
        <Script src="https://player.vimeo.com/api/player.js" />
      </div>
    </div>
  )
}
