
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { event } from '@/lib/events';

const WhatsAppIcon = () => (
  <Image 
    src="/images/icons/whatsapp-black.svg" 
    alt="WhatsApp" 
    width={24} 
    height={24} 
  />
);


export default function Contact() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const number = '917356483404';
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    setWhatsappUrl(`https://wa.me/${number}?text=${text}`);
  }, []);

  const handleWhatsAppClick = () => {
    event({
      action: 'click_whatsapp',
      category: 'engagement',
      label: 'Contact Section',
      value: 1
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="bg-card border-primary/50 shadow-lg shadow-primary/10">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary">Ready for Your Makeover?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Contact me today to schedule your appointment or to get a personalized quote for your special day. I am excited to be a part of your beauty journey!
            </p>
            <div className="mt-8">
              {whatsappUrl && (
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                    <div className='mr-2'><WhatsAppIcon /></div>
                    Message on WhatsApp
                  </a>
                </Button>
              )}
            </div>
            <p className="mt-6 text-sm text-foreground/60">
                Serving Trivandrum, Kollam, Nagercoil, and surrounding areas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

    