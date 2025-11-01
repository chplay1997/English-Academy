'use client'
import { useEffect, useState } from 'react'

/**
 * Hook debounce for a value — only return the value after the user stops changing within `delay` ms
 * @param value - The value to debounce
 * @param delay - The delay (ms) before updating (default: 300ms)
 */
export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
