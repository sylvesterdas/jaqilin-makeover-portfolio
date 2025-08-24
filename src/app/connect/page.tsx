
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Instagram, Phone } from 'lucide-react';
import Image from 'next/image';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413C23.994 18.667 18.659 24 .057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.395 1.906 6.22l-1.359 4.954 5.076-1.362zM15.232 14.64c-.24-1.358-1.554-1.449-1.554-1.449s-1.31-.094-1.554 1.449c0 0-.141.281-.469.281-.328 0-1.875-1.125-1.875-1.125s-1.031-1.172-1.031-2.062c0-.891 1.031-2.062 1.031-2.062s1.547-1.125 1.875-1.125c.328 0 .469.281.469.281s1.314.094 1.554-1.449c.24-1.359.094-1.449.094-1.449s-.563-.281-1.406-.281c-.844 0-2.344.281-3.656 1.406-1.312 1.125-2.062 2.625-2.062 4.125 0 1.5.75 2.906 2.062 4.031 1.313 1.125 3.563 1.406 3.563 1.406s.844.094 1.406-.281c.563-.375.281-.563.281-.563z"/>
    </svg>
);


export default function ConnectPage() {
  const [links, setLinks] = useState({
    call: '',
    whatsapp: '',
    instagram: 'https://www.instagram.com/jaqilinmua',
    website: '/',
  });

  useEffect(() => {
    const phoneNumber = '+917356483404';
    const whatsappText = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    
    setLinks(prev => ({
        ...prev,
        call: `tel:${phoneNumber}`,
        whatsapp: `https://wa.me/917356483404?text=${whatsappText}`
    }));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
        <div className="flex flex-col items-center mb-8">
            <Image 
                src="/logo.png" 
                alt="Jaqilin Makeover Logo" 
                width={96} 
                height={96} 
                className="rounded-full border-2 border-primary shadow-lg"
                data-ai-hint="logo monogram"
                priority
            />
            <h1 className="mt-4 font-headline text-4xl text-primary">Jaqilin Makeover</h1>
            <p className="text-foreground/80">Professional Makeup Artist</p>
        </div>
      <Card className="w-full max-w-sm bg-card border-primary/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.call}>
                <Phone className="mr-4" /> Call
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-4"/> WhatsApp
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-4" /> Instagram
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.website}>
                <Globe className="mr-4" /> Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-center text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Jaqilin Makeover. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
