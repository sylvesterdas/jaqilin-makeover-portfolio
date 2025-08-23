
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const heroImages = [
  {
    src: '/images/hero-background.jpg',
    alt: 'Background of a beautifully decorated wedding setting',
    hint: 'bride makeup',
  },
  {
    src: '/images/hero-background1.jpg',
    alt: 'Another beautiful makeup shot',
    hint: 'bridal makeup',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[80vh] min-h-[500px] flex flex-col justify-end md:flex-row md:items-center md:justify-start text-center md:text-left overflow-hidden"
    >
      <Carousel
        className="absolute inset-0 z-0"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-right"
                data-ai-hint={image.hint}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent z-10" />
        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30" />
        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30" />
      </Carousel>

      <div className="relative z-20 container mx-auto px-4 pb-12 md:pb-0 md:px-4 text-white">
        <div className="max-w-xl">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary drop-shadow-md">
            Jaqilin S
          </h1>
          <p className="mt-4 font-headline text-2xl md:text-3xl text-foreground">
            Professional Makeup Artist
          </p>
          <p className="mt-2 text-lg md:text-xl text-foreground/80">
            Based in Trivandrum
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#contact">Book an Inquiry</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
