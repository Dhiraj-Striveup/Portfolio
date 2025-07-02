'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ExperienceTimeline({ children }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start center', 'end center']
  })

  const top = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={trackRef} className="relative ml-6 pl-6">
      {/* vertical line */}
      <span className="absolute left-[7px] md:left-[225px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-white/60" />

      {/* animated dot */}
      <motion.span
        style={{ top }}
        className="absolute left-[-4px] md:left-[215px] z-20 h-6 w-6 rounded-full bg-cyan-400 border-4 border-black shadow-lg"
      />

      {/* cards */}
      <div className="space-y-24">{children}</div>
    </div>
  )
}
