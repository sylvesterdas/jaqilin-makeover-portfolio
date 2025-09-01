

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Instagram, Phone } from 'lucide-react';
import Image from 'next/image';
import { event } from '@/lib/events';
import type { Metadata } from 'next';

const WhatsAppIcon = () => (
  <Image
    src="/images/icons/whatsapp-black.svg"
    alt="WhatsApp"
    width={24}
    height={24}
  />
);

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

export const metadata: Metadata = {
  alternates: {
    canonical: '/connect',
  },
};


export default function ConnectPage() {
  const [links, setLinks] = useState({
    call: '',
    whatsapp: '',
    instagram: 'https://www.instagram.com/jaqilinmua',
    website: '/',
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const phoneNumber = '+917356483404';
    const whatsappText =
      "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";

    setLinks((prev) => ({
      ...prev,
      call: `tel:${phoneNumber}`,
      whatsapp: `https://wa.me/917356483404?text=${whatsappText}`,
    }));
  }, []);

  const handleEvent = (action: string, label: string) => {
    event({
      action: action,
      category: 'engagement',
      label: label,
      value: 1
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background p-4 overflow-hidden">
        {heroImages.map((image, index) => (
            <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            data-ai-hint={image.hint}
            priority={index === 0}
            onContextMenu={(e) => e.preventDefault()}
            />
        ))}
       <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 flex flex-col items-center w-full">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/logo.png"
              alt="Jaqilin Makeover Logo"
              width={96}
              height={96}
              className="rounded-full border-2 border-primary shadow-lg"
              data-ai-hint="logo monogram"
            />
            <h1 className="mt-4 font-headline text-4xl text-primary drop-shadow-md">
              Jaqilin Makeover
            </h1>
            <p className="text-foreground/80 text-center">Professional Makeup Artist</p>
          </div>
          <Card className="w-full max-w-sm bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <Button size="lg" asChild className="justify-start text-lg h-14" onClick={() => handleEvent('click_call', 'Connect Page')}>
                  <a href={links.call}>
                    <Phone className="mr-4 size-6" /> Call / വിളിക്കുക
                  </a>
                </Button>
                <Button size="lg" asChild className="justify-start text-lg h-14" onClick={() => handleEvent('click_whatsapp', 'Connect Page')}>
                  <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                    <div className="mr-4">
                      <WhatsAppIcon />
                    </div>
                    WhatsApp / വാട്സാപ്പ്
                  </a>
                </Button>
                <Button size="lg" asChild className="justify-start text-lg h-14" onClick={() => handleEvent('click_instagram', 'Connect Page')}>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-4 size-6" /> Instagram / ഇൻസ്റ്റാഗ്രാം
                  </a>
                </Button>
                <Button size="lg" asChild className="justify-start text-lg h-14">
                  <a href={links.website}>
                    <Globe className="mr-4 size-6" /> Website / വെബ്സൈറ്റ്
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <footer className="mt-8 text-center text-sm text-foreground/80 drop-shadow-sm">
            <p>&copy; {new Date().getFullYear()} Jaqilin Makeover. All Rights Reserved. | <a href="/about" className="hover:text-primary underline-offset-4 hover:underline">About</a> | <a href="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</a></p>
          </footer>
      </div>
    </div>
  );
}

    
