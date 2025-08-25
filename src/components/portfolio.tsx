'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const portfolioItems = {
  weddings: [
    { type: 'image', src: '/images/portfolio/weddings/1.jpg', alt: 'Bride with elegant makeup', hint: 'bride makeup' },
    { type: 'image', src: '/images/portfolio/weddings/2.jpg', alt: 'Close-up of bridal eye makeup', hint: 'bridal makeup' },
    { type: 'image', src: '/images/portfolio/weddings/3.jpg', alt: 'Happy bride on her wedding day', hint: 'indian bride' },
    { type: 'image', src: '/images/portfolio/weddings/4.jpg', alt: 'Bride showing her full wedding attire', hint: 'wedding dress' },
  ],
  hairstyles: [
    { type: 'image', src: '/images/portfolio/hairstyles/1.jpg', alt: 'Elegant bridal hairstyle', hint: 'bridal hairstyle' },
    { type: 'video', src: '/videos/portfolio/hairstyles/1.mp4', alt: 'Video of a stylish hairdo', hint: 'hairstyle video' },
    { type: 'image', src: '/images/portfolio/hairstyles/2.jpg', alt: 'Close-up of intricate hair design', hint: 'intricate hairstyle' },
    { type: 'video', src: '/videos/portfolio/hairstyles/2.mp4', alt: 'Video showcasing a beautiful hairstyle', hint: 'hairstyle showcase' },
    { type: 'image', src: '/images/portfolio/hairstyles/3.jpg', alt: 'Modern hairstyle for an event', hint: 'modern hairstyle' },
  ],
  draping: [
    { type: 'image', src: '/images/portfolio/draping/1.jpg', alt: 'Woman in an elegantly draped saree', hint: 'indian saree' },
    { type: 'image', src: '/images/portfolio/draping/2.jpg', alt: 'Woman in an elegantly draped saree', hint: 'saree draping' },
    { type: 'image', src: '/images/portfolio/draping/3.jpg', alt: 'Woman in an elegantly draped saree', hint: 'kerala hindu bride saree draping' },
  ],
  fashion: [
    { type: 'image', src: '/images/portfolio/fashion/1.jpg', alt: 'Model with avant-garde fashion makeup', hint: 'fashion model' },
    { type: 'image', src: '/images/portfolio/fashion/2.jpg', alt: 'Model on a runway with cool hairstyle', hint: 'runway model' },
    { type: 'image', src: '/images/portfolio/fashion/3.jpg', alt: 'Model with avant-garde fashion makeup', hint: 'runway model' },
  ],
};

function Gallery({ category }: { category: keyof typeof portfolioItems }) {
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
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                data-ai-hint={item.hint}
                onContextMenu={(e) => e.preventDefault()}
              />
            ) : (
              <video
                src={item.src}
                width="600"
                height="800"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onContextMenu={(e) => e.preventDefault()}
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
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Portfolio</h2>
          <p className="text-lg text-foreground/70 mt-2">A Glimpse of My Artistry</p>
        </div>
        <Tabs defaultValue="weddings" className="w-full">
          <TabsList className="flex flex-wrap justify-center md:grid md:grid-cols-4 h-auto md:h-10 mb-8">
            <TabsTrigger value="weddings">Wedding Makeovers</TabsTrigger>
            <TabsTrigger value="hairstyles">Hairstyles</TabsTrigger>
            <TabsTrigger value="draping">Saree Draping</TabsTrigger>
            <TabsTrigger value="fashion">Fashion Shows</TabsTrigger>
          </TabsList>
          <TabsContent value="weddings"><Gallery category="weddings" /></TabsContent>
          <TabsContent value="hairstyles"><Gallery category="hairstyles" /></TabsContent>
          <TabsContent value="draping"><Gallery category="draping" /></TabsContent>
          <TabsContent value="fashion"><Gallery category="fashion" /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
