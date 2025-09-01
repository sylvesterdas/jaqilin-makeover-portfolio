
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';
import { Instagram, X } from 'lucide-react';
import { Button } from './ui/button';
import { event } from '@/lib/events';

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {portfolioItems[category].map((item, index) => (
        <Card key={index} className="overflow-hidden border-border/50 group">
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
    <section id="portfolio" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Portfolio</h2>
          <p className="text-lg text-foreground/70 mt-2">A Glimpse of My Artistry</p>
        </div>
        <Tabs defaultValue="weddings" className="w-full">
          <TabsList className="flex flex-wrap justify-center md:grid md:grid-cols-4 h-auto mb-8">
            <TabsTrigger value="weddings">Wedding Makeovers</TabsTrigger>
            <TabsTrigger value="hairstyles">Hairstyles</TabsTrigger>
            <TabsTrigger value="draping">Saree Draping</TabsTrigger>
            <TabsTrigger value="fashion">Fashion Shows</TabsTrigger>
          </TabsList>
          <TabsContent value="weddings"><Gallery category="weddings" onMediaClick={handleMediaClick} /></TabsContent>
          <TabsContent value="hairstyles"><Gallery category="hairstyles" onMediaClick={handleMediaClick} /></TabsContent>
          <TabsContent value="draping"><Gallery category="draping" onMediaClick={handleMediaClick} /></TabsContent>
          <TabsContent value="fashion"><Gallery category="fashion" onMediaClick={handleMediaClick} /></TabsContent>
        </Tabs>
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://www.instagram.com/jaqilinmua" target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick}>
              <Instagram className="mr-2 h-5 w-5" />
              Show More on Instagram
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

    