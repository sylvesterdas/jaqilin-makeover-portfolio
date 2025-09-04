
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { event } from '@/lib/events';

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
            <div className="mt-8 flex justify-center">
              {whatsappUrl && (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="inline-block">
                  <Image
                    src="/images/WhatsAppButtonGreenLarge.svg"
                    alt="Chat on WhatsApp"
                    width={260}
                    height={52}
                    className="transition-transform hover:scale-105"
                    data-ai-hint="whatsapp button"
                  />
                </a>
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
