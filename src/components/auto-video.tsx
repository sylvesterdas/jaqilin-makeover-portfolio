'use client'

import { useEffect, useRef } from "react"

interface Props {
  src: string
  poster?: string
}

export default function AutoVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
      preload="metadata"
      className="w-full h-full object-cover aspect-[9/16] rounded-xl"
    />
  )
}