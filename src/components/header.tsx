
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { event } from "@/lib/events";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    const number = '917356483404';
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    setWhatsappUrl(`https://wa.me/${number}?text=${text}`);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookNowClick = () => {
    event({
      action: 'click_whatsapp',
      category: 'engagement',
      label: 'Book Now Header',
      value: 1
    });
  };

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border/50" : "bg-transparent"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
          <Image src="/logo.png" alt="Jaqilin Makeover Logo" width={32} height={32} data-ai-hint="logo monogram" className="rounded-full" />
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
        {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleBookNowClick} className="inline-block transition-transform hover:scale-105">
                <Image
                src="/images/WhatsAppButtonGreenSmall.svg"
                alt="Chat on WhatsApp"
                width={140}
                height={28}
                data-ai-hint="whatsapp button small"
                />
            </a>
        )}
      </div>
    </header>
  );
}
