
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { event } from '@/lib/events';

export default function CallContent() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [telLink, setTelLink] = useState('');

  const handleCallClick = () => {
    event({
        action: 'click_call',
        category: 'engagement',
        label: 'Call Page Button',
        value: 1,
    });
  };

  useEffect(() => {
    const num = '+917356483404';
    setPhoneNumber(num);
    const link = `tel:${num}`;
    setTelLink(link);
    // Automatically trigger the call on page load.
    handleCallClick();
    window.location.href = link;
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto">
         <h1 className="font-headline text-4xl text-primary">Contacting Jaqilin Makeover</h1>
        <p className="mt-4 text-lg text-foreground/80">
            You should be redirected to your phone's dialer automatically. If not, please click the button below.
        </p>
        <div className="mt-8">
          {telLink && (
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-accent text-lg px-8 py-6" asChild>
                <a href={telLink} onClick={handleCallClick}>
                    <Phone className="mr-2" />
                    Call {phoneNumber}
                </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
