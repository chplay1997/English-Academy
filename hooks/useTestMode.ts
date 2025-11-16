import { useState, useEffect } from 'react'

export const useTestMode = () => {
  const [isTestMode, setIsTestMode] = useState(false)

  useEffect(() => {
    const testModeValue = localStorage?.getItem('ea_test_mode') === 'true'
    setIsTestMode(testModeValue)
  }, [])

  return isTestMode
}
