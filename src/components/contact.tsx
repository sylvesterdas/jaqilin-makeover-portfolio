
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

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


export default function Contact() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const number = '917356483404';
    const text = "Hello%20Jaqilin%20Makeover,%20I'd%20like%20to%20inquire%20about%20your%20services.";
    setWhatsappUrl(`https://wa.me/${number}?text=${text}`);
  }, []);

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
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2" />
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
