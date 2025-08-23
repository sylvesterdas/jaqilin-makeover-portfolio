'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const portfolioItems = {
  weddings: [
    { src: '/images/portfolio/weddings/1.jpg', alt: 'Bride with elegant makeup', hint: 'bride makeup' },
    { src: '/images/portfolio/weddings/2.jpg', alt: 'Close-up of bridal eye makeup', hint: 'bridal makeup' },
    { src: '/images/portfolio/weddings/3.jpg', alt: 'Happy bride on her wedding day', hint: 'indian bride' },
    { src: '/images/portfolio/weddings/4.jpg', alt: 'Bride showing her full wedding attire', hint: 'wedding dress' },
  ],
  guests: [
    { src: '/images/portfolio/guests/1.jpg', alt: 'Wedding guest with subtle makeup', hint: 'woman portrait' },
    { src: '/images/portfolio/guests/2.jpg', alt: 'Group of bridesmaids with matching makeup', hint: 'group photo' },
  ],
  draping: [
    { src: '/images/portfolio/draping/1.jpg', alt: 'Woman in an elegantly draped saree', hint: 'indian saree' },
    { src: '/images/portfolio/draping/2.jpg', alt: 'Close-up of a saree pleats', hint: 'saree draping' },
  ],
  fashion: [
    { src: '/images/portfolio/fashion/1.jpg', alt: 'Model with avant-garde fashion makeup', hint: 'fashion model' },
    { src: '/images/portfolio/fashion/2.jpg', alt: 'Model on a runway with dramatic makeup', hint: 'runway model' },
  ],
};

function Gallery({ category }: { category: keyof typeof portfolioItems }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {portfolioItems[category].map((item, index) => (
        <div key={index} className="break-inside-avoid">
          <Card className="overflow-hidden border-border/50">
            <CardContent className="p-0">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={800}
                className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500"
                data-ai-hint={item.hint}
                onContextMenu={(e) => e.preventDefault()}
              />
            </CardContent>
          </Card>
        </div>
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="weddings">Wedding Makeovers</TabsTrigger>
            <TabsTrigger value="guests">Guest Makeup</TabsTrigger>
            <TabsTrigger value="draping">Saree Draping</TabsTrigger>
            <TabsTrigger value="fashion">Fashion Shows</TabsTrigger>
          </TabsList>
          <TabsContent value="weddings"><Gallery category="weddings" /></TabsContent>
          <TabsContent value="guests"><Gallery category="guests" /></TabsContent>
          <TabsContent value="draping"><Gallery category="draping" /></TabsContent>
          <TabsContent value="fashion"><Gallery category="fashion" /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
