
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { Instagram, X } from 'lucide-react';
import { Button } from './ui/button';
import { event } from '@/lib/events';
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";

const portfolioItems = {
  weddings: [
    { type: 'image', src: '/images/portfolio/weddings/1.jpg', alt: 'Bride with elegant makeup', hint: 'bride makeup' },
    { type: 'image', src: '/images/portfolio/weddings/2.jpg', alt: 'Close-up of bridal eye makeup', hint: 'hindu bridal makeup' },
    { type: 'image', src: '/images/portfolio/weddings/3.jpg', alt: 'Happy bride on her wedding day', hint: 'north indian bride' },
    { type: 'image', src: '/images/portfolio/weddings/4.jpg', alt: 'Bride showing her full wedding attire', hint: 'hindu wedding look' },
    { type: 'image', src: '/images/portfolio/weddings/wed-2.jpeg', alt: 'Bride showing her full temple look makeup', hint: 'temple look makeup' },
    { type: 'image', src: '/images/portfolio/weddings/wed-1.jpg', alt: 'Christian Bride in her wedding attire', hint: 'wedding chritian girl' },
    { type: 'image', src: '/images/portfolio/weddings/wed-3.jpeg', alt: 'Bride showing her full makeup', hint: 'hindu bridal makeup' },
  ],
  hairstyles: [
    { type: 'image', src: '/images/portfolio/hairstyles/1.jpg', alt: 'Elegant bridal hairstyle', hint: 'bridal hairstyle' },
    { type: 'video', src: '/videos/portfolio/hairstyles/1.mp4', alt: 'Video of a stylish hairdo', hint: 'hairstyle video' },
    { type: 'image', src: '/images/portfolio/hairstyles/2.jpg', alt: 'Close-up of intricate hair design', hint: 'intricate hairstyle' },
    { type: 'video', src: '/videos/portfolio/hairstyles/2.mp4', alt: 'Video showcasing a beautiful hairstyle', hint: 'hairstyle showcase' },
    { type: 'image', src: '/images/portfolio/hairstyles/3.jpg', alt: 'Modern hairstyle for an event', hint: 'modern hairstyle' },
    { type: 'image', src: '/images/portfolio/hairstyles/hair-1.jpeg', alt: 'Twist braid style for temple look', hint: 'braids hairstyle' },
    { type: 'image', src: '/images/portfolio/hairstyles/4.jpg', alt: 'Braids for the Jack Sparow look', hint: 'braids hairstyle' },
  ],
  draping: [
    { type: 'image', src: '/images/portfolio/draping/1.jpg', alt: 'Woman in an elegantly draped saree', hint: 'indian saree' },
    { type: 'image', src: '/images/portfolio/draping/2.jpg', alt: 'Woman in an elegantly draped saree', hint: 'saree draping' },
    { type: 'image', src: '/images/portfolio/draping/3.jpg', alt: 'Woman in an elegantly draped saree', hint: 'kerala hindu bride saree draping' },
    { type: 'image', src: '/images/portfolio/draping/sar-1.jpg', alt: 'Christian girl in an elegantly draped saree', hint: 'kerala christian bride saree draping' },
    { type: 'image', src: '/images/portfolio/draping/sar-2.jpeg', alt: 'Temple look elegantly draped saree', hint: 'kerala hindu temple look saree draping' },
    { type: 'image', src: '/images/portfolio/draping/sar-3.jpeg', alt: 'Hindu bride elegantly draped saree', hint: 'kerala hindu bridal saree draping' },
  ],
  fashion: [
    { type: 'image', src: '/images/portfolio/fashion/1.jpg', alt: 'Model with avant-garde fashion makeup', hint: 'fashion model' },
    { type: 'image', src: '/images/portfolio/fashion/2.jpg', alt: 'Model on a runway with cool hairstyle', hint: 'runway model' },
    { type: 'image', src: '/images/portfolio/fashion/3.jpg', alt: 'Model with avant-garde fashion makeup', hint: 'runway model' },
    { type: 'image', src: '/images/portfolio/hairstyles/4.jpg', alt: 'Braids for the Jack Sparow look', hint: 'braids hairstyle' },
  ],
};

interface MediaItem {
  type: 'image' | 'video';
  src: string;
}


function Gallery({ category, onMediaClick }: { category: keyof typeof portfolioItems, onMediaClick: (media: MediaItem, e: React.MouseEvent) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {portfolioItems[category].map((item, index) => (
        <Card key={index} className="overflow-hidden border-border/50 group rounded-2xl shadow-sm">
          <CardContent className="p-0 aspect-[9/16]">
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={800}
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                data-ai-hint={item.hint}
                onContextMenu={(e) => e.preventDefault()}
                onClick={(e) => onMediaClick(item as any, e)}
              />
            ) : (
              <video
                src={item.src}
                width="600"
                height="800"
                className="w-full h-full object-cover cursor-pointer transform group-hover:scale-110 transition-transform duration-500"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
                onClick={(e) => onMediaClick(item as any, e)}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const handleMediaClick = (media: MediaItem, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedMedia(media);
  };
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMedia(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleInstagramClick = () => {
    event({
        action: 'click_instagram',
        category: 'engagement',
        label: 'Portfolio Section',
        value: 1,
    });
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">
            {inMalayalam ? "പോർട്ട്ഫോളിയോ" : "Portfolio"}
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-2">
            {inMalayalam ? "എന്റെ പുതിയ പ്രവൃത്തികൾ" : "A Glimpse of My Artistry"}
          </p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <div className="mb-4 sm:mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline text-2xl sm:text-3xl text-primary">
                {inMalayalam ? "വിവാഹ മേക്കപ്പ്" : "Wedding Makeovers"}
              </h3>
              <span className="hidden sm:inline-flex h-px flex-1 bg-border/60" />
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/40 p-3 sm:p-4 shadow-sm">
              <Gallery category="weddings" onMediaClick={handleMediaClick} />
            </div>
          </div>
          <div>
            <div className="mb-4 sm:mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline text-2xl sm:text-3xl text-primary">
                {inMalayalam ? "ഹെയർ സ്റ്റൈൽ" : "Hairstyles"}
              </h3>
              <span className="hidden sm:inline-flex h-px flex-1 bg-border/60" />
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/40 p-3 sm:p-4 shadow-sm">
              <Gallery category="hairstyles" onMediaClick={handleMediaClick} />
            </div>
          </div>
          <div>
            <div className="mb-4 sm:mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline text-2xl sm:text-3xl text-primary">
                {inMalayalam ? "സാരി ഡ്രേപ്പിംഗ്" : "Saree Draping"}
              </h3>
              <span className="hidden sm:inline-flex h-px flex-1 bg-border/60" />
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/40 p-3 sm:p-4 shadow-sm">
              <Gallery category="draping" onMediaClick={handleMediaClick} />
            </div>
          </div>
          <div>
            <div className="mb-4 sm:mb-6 flex items-center justify-between gap-4">
              <h3 className="font-headline text-2xl sm:text-3xl text-primary">
                {inMalayalam ? "ഫാഷൻ ഷോ" : "Fashion Shows"}
              </h3>
              <span className="hidden sm:inline-flex h-px flex-1 bg-border/60" />
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/40 p-3 sm:p-4 shadow-sm">
              <Gallery category="fashion" onMediaClick={handleMediaClick} />
            </div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Button size="lg" asChild>
            <a href="https://www.instagram.com/jaqilinmua" target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick}>
              <Instagram className="mr-2 h-5 w-5" />
              {inMalayalam ? "Instagram-ൽ കൂടുതൽ കാണൂ" : "Show More on Instagram"}
            </a>
          </Button>
        </div>
      </div>

      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-[90vw] h-[90vh] animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
                <Image 
                  src={selectedMedia.src}
                  alt="Fullscreen portfolio image"
                  fill
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw"
                  className="object-contain"
                  onContextMenu={(e) => e.preventDefault()}
                />
              ) : (
                <video 
                  src={selectedMedia.src}
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                />
              )
            }
          </div>
        </div>
      )}
    </section>
  );
}

    
