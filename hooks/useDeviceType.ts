'use client'

import { useEffect, useState } from 'react'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      if (width < 640) setDeviceType('mobile') // Tailwind: <sm
      else if (width < 1024) setDeviceType('tablet') // Tailwind: <lg
      else setDeviceType('desktop') // >= lg
    }

    checkDevice() // Check the first time
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return deviceType
}
