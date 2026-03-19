"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Instagram, X, Play, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { event } from "@/lib/events";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import AutoVideo from "@/components/auto-video";

interface InstagramChild {
  id?: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
}

interface InstagramPost extends InstagramChild {
  id: string;
  permalink: string;
  children?: {
    data: InstagramChild[];
  };
}

export default function Portfolio({ data }: { data: InstagramPost[] }) {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const [selectedMedia, setSelectedMedia] = useState<InstagramPost | null>(
    null,
  );
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [visible, setVisible] = useState(9);
  const [hovered, setHovered] = useState<string | null>(null)
  const startX = useRef(0)

  const currentIndex = selectedMedia
    ? data.findIndex(p => p.id === selectedMedia.id)
    : -1

  const currentChildren = selectedMedia?.children?.data ?? []
  const isCarousel = selectedMedia?.media_type === "CAROUSEL_ALBUM"
  const currentChild = isCarousel
    ? currentChildren[selectedChildIndex]
    : undefined
  const displayMedia = currentChild ?? selectedMedia

  const closeModal = () => {
    setSelectedMedia(null);
    setSelectedChildIndex(0);

    if (window.history.state?.fullscreen) {
      window.history.back();
    }
  };

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedMedia) return

      if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }

      if (e.key === "ArrowRight") {
        if (isCarousel && selectedChildIndex < currentChildren.length - 1) {
          setSelectedChildIndex((i) => i + 1)
          return
        }
        if (currentIndex < data.length - 1) {
          setSelectedMedia(data[currentIndex + 1])
        }
      }

      if (e.key === "ArrowLeft") {
        if (isCarousel && selectedChildIndex > 0) {
          setSelectedChildIndex((i) => i - 1)
          return
        }
        if (currentIndex > 0) {
          setSelectedMedia(data[currentIndex - 1])
        }
      }
    }

    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [
    selectedMedia,
    data,
    currentIndex,
    isCarousel,
    selectedChildIndex,
    currentChildren.length,
  ])

  /* Escape key */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  /* Block devtools shortcuts */
  useEffect(() => {
    const blockKeys = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.key === "s") ||
        (e.ctrlKey && e.key === "u") ||
        e.key === "F12"
      ) {
        e.preventDefault()
      }
    }

    window.addEventListener("keydown", blockKeys)
    return () => window.removeEventListener("keydown", blockKeys)
  }, [])

  /* Pause videos when modal closes */
  useEffect(() => {
    if (!selectedMedia) {
      document
        .querySelectorAll<HTMLVideoElement>("#portfolio video")
        .forEach((v) => v.pause());
    }
  }, [selectedMedia])

  /* Preload next image */
  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < data.length - 1) {
      const next = data[currentIndex + 1]

      if (next.media_type !== "VIDEO") {
        const img = new window.Image()
        img.src = next.media_url
      }
    }
  }, [currentIndex, data])

  /* Lock scroll when modal open */
  useEffect(() => {
    const prev = document.body.style.overflow

    if (selectedMedia) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedMedia])

  /* Modal history handling */
  useEffect(() => {
    if (!selectedMedia) return

    const closeOnBack = () => setSelectedMedia(null);

    if (!window.history.state?.fullscreen) {
      window.history.pushState({ fullscreen: true }, "")
    }

    window.addEventListener("popstate", closeOnBack)
    return () => window.removeEventListener("popstate", closeOnBack)
  }, [selectedMedia])

  /* Swipe navigation */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!selectedMedia) return
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!selectedMedia) return

    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      if (isCarousel && selectedChildIndex < currentChildren.length - 1) {
        setSelectedChildIndex((i) => i + 1)
        return
      }
      if (currentIndex < data.length - 1) {
        setSelectedMedia(data[currentIndex + 1])
      }
    }

    if (diff < 0) {
      if (isCarousel && selectedChildIndex > 0) {
        setSelectedChildIndex((i) => i - 1)
        return
      }
      if (currentIndex > 0) {
        setSelectedMedia(data[currentIndex - 1])
      }
    }
  }

  const handleInstagramClick = () => {
    event({
      action: "click_instagram",
      category: "engagement",
      label: "Portfolio Section",
      value: 1,
    });
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            {inMalayalam ? "Portfolio" : "Portfolio"}
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-2">
            {inMalayalam
              ? "പുതിയ work"
              : "A Glimpse of My Artistry"}
          </p>
        </div>
        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {data.slice(0, visible).map((post) => {
            const isPostCarousel = post.media_type === "CAROUSEL_ALBUM"
            const postChild = isPostCarousel ? post.children?.data?.[0] : null
            const postMedia = postChild ?? post

            return (
              <div
                key={post.id}
                onClick={() => {
                  setSelectedMedia(post)
                  setSelectedChildIndex(0)
                }}
                onMouseEnter={() => setHovered(post.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative aspect-[4/5] overflow-hidden cursor-pointer group rounded-sm hover:rounded-md transition-all select-none group-hover:shadow-lg"
              >
                {postMedia.media_type === "VIDEO" ? (
                  <AutoVideo
                    src={postMedia.media_url}
                    poster={postMedia.thumbnail_url}
                    play={hovered === post.id}
                  />
                ) : (
                  <img
                    src={postMedia.media_url}
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {postMedia.media_type === "VIDEO" && (
                  <div className="absolute top-2 right-2 text-white drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={20} fill="white" className="text-white drop-shadow-lg animate-pulse" />
                  </div>
                )}

                {isPostCarousel && (
                  <div className="absolute top-2 right-2 text-white drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Copy size={18} className="text-white drop-shadow-lg" />
                  </div>
                )}

                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-full">
                    <Instagram size={14} className="text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* Load More */}
        {visible < data.length && (
          <div className="text-center mt-10">
            <Button
              onClick={() => setVisible((v) => Math.min(v + 9, data.length))}
            >
              {inMalayalam ? "കൂടുതൽ" : "Load More"}
            </Button>
          </div>
        )}
        {/* Instagram Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" asChild>
            <a
              href="https://www.instagram.com/jaqilinmua"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
            >
              <Instagram className="mr-2 h-5 w-5" />
              {inMalayalam
                ? "Instagram more"
                : "Show More on Instagram"}
            </a>
          </Button>
        </div>
      </div>
      {/* Fullscreen Viewer */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm touch-pan-y select-none overscroll-contain"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 text-white z-[110] p-2"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-[90vw] h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {displayMedia?.media_type === "VIDEO" ? (
              <video
                key={`${selectedMedia.id}-${selectedChildIndex}`}
                src={displayMedia.media_url}
                className="w-full h-full object-contain"
                preload="metadata"
                autoPlay
                loop
                muted={isMuted}
                controls
                playsInline
                controlsList="nodownload"
                onVolumeChange={(e) => {
                  const target = e.currentTarget
                  setIsMuted(target.muted)
                }}
                onContextMenu={(e) => e.preventDefault()}
              />
            ) : (
              <Image
                key={`${selectedMedia.id}-${selectedChildIndex}`}
                src={displayMedia?.media_url ?? selectedMedia.media_url}
                alt="Instagram post"
                fill
                priority
                sizes="(max-width:768px) 75vw, (max-width:1200px) 50vw"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="object-contain"
              />
            )}

            {isCarousel && currentChildren.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {currentChildren.map((_, i) => (
                  <button
                    key={`${selectedMedia.id}-dot-${i}`}
                    className={`h-2 w-2 rounded-full ${
                      i === selectedChildIndex ? "bg-white" : "bg-white/40"
                    }`}
                    onClick={() => setSelectedChildIndex(i)}
                    aria-label={`Media ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
