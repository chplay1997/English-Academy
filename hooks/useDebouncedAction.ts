'use client'
import { useRef, useCallback } from 'react'

/**
 * Hook debounce — delay the execution of the callback function until the user stops interacting
 * @param callback - The function to be debounced
 * @param delay - The time to wait (in milliseconds) before the callback is executed (default: 300ms)
 */
export function useDebouncedAction<T extends (...args: any[]) => void>(callback: T, delay = 300) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay]
  )

  // Optionally: cleanup when component unmount
  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  return { run: debouncedFn, cancel }
}
