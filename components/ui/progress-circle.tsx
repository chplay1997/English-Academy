'use client'
import React from 'react'

interface ProgressCircleProps {
  percent: number
}

export default function ProgressCircle({ percent }: ProgressCircleProps) {
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="relative w-10 h-10">
      <svg className="transform -rotate-90" width="40" height="40" viewBox="0 0 40 40">
        {/* Đường nền xám */}
        <circle cx="20" cy="20" r={radius} stroke="#444" strokeWidth="3" fill="none" />
        {/* Đường tiến độ */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="#ff5117"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-white">
        {percent}%
      </span>
    </div>
  )
}
