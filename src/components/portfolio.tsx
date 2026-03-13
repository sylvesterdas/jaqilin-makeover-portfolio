"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Instagram, X, Play } from "lucide-react";
import { Button } from "./ui/button";
import { event } from "@/lib/events";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import AutoVideo from "@/components/auto-video";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
}

export default function Portfolio({ data }: { data: InstagramPost[] }) {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const [selectedMedia, setSelectedMedia] = useState<InstagramPost | null>(
    null,
  );
  const [visible, setVisible] = useState(9);
  const startX = useRef(0)

  const currentIndex = selectedMedia
    ? data.findIndex(p => p.id === selectedMedia.id)
    : -1

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedMedia) return

      if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }

      if (e.key === "ArrowRight" && currentIndex < data.length - 1) {
        setSelectedMedia(data[currentIndex + 1])
      }

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setSelectedMedia(data[currentIndex - 1])
      }
    }

    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [selectedMedia, data, currentIndex])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMedia(null)
        if (window.history.state?.fullscreen) {
          window.history.back()
        }
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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

  useEffect(() => {
    if (!selectedMedia) {
      document.querySelectorAll("video").forEach(v => v.pause())
    }
  }, [selectedMedia])

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < data.length - 1) {
      const next = data[currentIndex + 1]

      if (next.media_type !== "VIDEO") {
        const img = new window.Image()
        img.src = next.media_url
      }
    }
  }, [currentIndex, data])

  useEffect(() => {
    const prev = document.body.style.overflow

    if (selectedMedia) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = prev
    }
  }, [selectedMedia])

  useEffect(() => {
    if (!selectedMedia) return

    const closeOnBack = () => {
      setSelectedMedia(null)
    }

    window.history.pushState({ fullscreen: true }, "")

    window.addEventListener("popstate", closeOnBack)

    return () => {
      window.removeEventListener("popstate", closeOnBack)
    }
  }, [selectedMedia])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!selectedMedia) return
    startX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!selectedMedia) return

    const endX = e.changedTouches[0].clientX
    const diff = startX.current - endX

    if (diff > 50 && currentIndex < data.length - 1)
      setSelectedMedia(data[currentIndex + 1])

    if (diff < -50 && currentIndex > 0)
      setSelectedMedia(data[currentIndex - 1])
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
            {inMalayalam ? "പോർട്ട്ഫോളിയോ" : "Portfolio"}
          </h2>

          <p className="text-base sm:text-lg text-foreground/70 mt-2">
            {inMalayalam
              ? "എന്റെ പുതിയ പ്രവൃത്തികൾ"
              : "A Glimpse of My Artistry"}
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {data.slice(0, visible).map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedMedia(post)}
              className="relative aspect-[4/5] overflow-hidden cursor-pointer group rounded-sm hover:rounded-md transition-all select-none group-hover:shadow-lg"
            >

              {post.media_type === "VIDEO" ? (
                <AutoVideo
                  src={post.media_url}
                  poster={post.thumbnail_url}
                />
              ) : (
                <img
                  src={post.media_url}
                  loading="lazy"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* reels icon */}
              {post.media_type === "VIDEO" && (
                <div className="absolute top-2 right-2 text-white drop-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={20} fill="white" />
                </div>
              )}

              <div className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />

              {/* instagram badge */}
              <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-sm p-1.5 rounded-full">
                  <Instagram size={14} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visible < data.length && (
          <div className="text-center mt-10">
            <Button onClick={() => setVisible((v) => Math.min(v + 9, data.length))}>
              {inMalayalam ? "കൂടുതൽ കാണുക" : "Load More"}
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
                ? "Instagram-ൽ കൂടുതൽ കാണൂ"
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
            if (e.target === e.currentTarget) {
              setSelectedMedia(null)
              if (window.history.state?.fullscreen) {
                window.history.back()
              }
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 text-white z-[110] p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedMedia(null)
              if (window.history.state?.fullscreen) {
                window.history.back()
              }
            }}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-[90vw] h-[90vh] cursor-ew-resize"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.media_type === "VIDEO" ? (
              <video
                key={selectedMedia.id}
                src={selectedMedia.media_url}
                className="w-full h-full object-contain"
                preload="metadata"
                autoPlay
                loop
                muted
                controls
                playsInline
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              />
            ) : (
              <Image
                key={selectedMedia.id}
                src={selectedMedia.media_url}
                alt="Instagram post"
                fill
                priority
                sizes="(max-width:768px) 75vw, (max-width:1200px) 50vw"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
