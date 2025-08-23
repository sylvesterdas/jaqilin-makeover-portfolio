
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
          <Image src="/logo.jpg" alt="Jaqilin Makeover Logo" width={32} height={32} data-ai-hint="logo monogram" className="rounded-full" />
          <span>Jaqilin Makeover</span>
        </a>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="link" asChild>
            <a href="/#services" className="text-foreground/80 hover:text-primary">Services</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#portfolio" className="text-foreground/80 hover:text-primary">Portfolio</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/#contact" className="text-foreground/80 hover:text-primary">Contact</a>
          </Button>
        </nav>
        <Button asChild className="bg-primary hover:bg-accent text-primary-foreground">
          <a href="https://wa.me/917356483404?text=Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.">Book Now</a>
        </Button>
      </div>
    </header>
  );
}
