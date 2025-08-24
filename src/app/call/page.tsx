
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CallPage() {
  const phoneNumber = '+917356483404';
  const telLink = `tel:${phoneNumber}`;

  useEffect(() => {
    // Automatically trigger the call on page load.
    window.location.href = telLink;
  }, [telLink]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
             <h1 className="font-headline text-4xl text-primary">Contacting Jaqilin Makeover</h1>
            <p className="mt-4 text-lg text-foreground/80">
                You should be redirected to your phone's dialer automatically. If not, please click the button below.
            </p>
            <div className="mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6" asChild>
                    <a href={telLink}>
                        <Phone className="mr-2" />
                        Call {phoneNumber}
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
