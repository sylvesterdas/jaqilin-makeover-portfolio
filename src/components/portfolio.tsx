"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

  const currentIndex = selectedMedia
    ? data.findIndex(p => p.id === selectedMedia.id)
    : -1

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedMedia) return

      if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault()
      }

      const index = data.findIndex(p => p.id === selectedMedia.id)

      if (e.key === "ArrowRight" && index < data.length - 1) {
        setSelectedMedia(data[index + 1])
      }

      if (e.key === "ArrowLeft" && index > 0) {
        setSelectedMedia(data[index - 1])
      }
    }

    window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [selectedMedia, data])

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMedia(null);
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
      const img = new window.Image()
      img.src = data[currentIndex + 1].media_url
    }
  }, [currentIndex, data])

  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
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

  let startX = 0

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    const diff = startX - endX

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
            <Button onClick={() => setVisible((v) => v + 9)}>
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm touch-pan-y"
          onClick={() => {
            setSelectedMedia(null)
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 text-white z-[110] p-2"
            onClick={() => {
              setSelectedMedia(null)
            }}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-[90vw] h-[90vh] cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.media_type === "VIDEO" ? (
              <video
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
