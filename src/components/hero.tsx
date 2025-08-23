import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/images/hero-background.jpg"
        alt="Background of a beautifully decorated wedding setting"
        fill
        className="object-cover z-0"
        data-ai-hint="bride makeup"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 text-white">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary drop-shadow-md">
          Jaqilin S
        </h1>
        <p className="mt-4 font-headline text-2xl md:text-3xl text-foreground">
          Professional Makeup Artist
        </p>
        <p className="mt-2 text-lg md:text-xl text-foreground/80">
          Based in Trivandrum
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-accent">
            <a href="#portfolio">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Book an Inquiry</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
