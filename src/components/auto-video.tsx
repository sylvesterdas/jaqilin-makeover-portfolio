"use client";

import { useRef, useEffect } from "react";

interface Props {
  src: string;
  poster?: string;
  play: boolean;
}

export default function AutoVideo({ src, poster, play }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (play) {
      video.play().catch(() => {});
    } else {
      video.pause()
      video.load()
    }
  }, [play]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
      className="w-full h-full object-cover aspect-[9/16] rounded-xl transition-opacity duration-300"
    />
  );
}