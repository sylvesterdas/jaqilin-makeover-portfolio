
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { event } from '@/lib/events';
import { useLocale } from '@/components/locale-provider';
import { isMalayalam } from '@/lib/locale';
import { CALL_NUMBER, DISPLAY_PHONE_NUMBER } from '@/lib/contact-links';

export default function CallContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
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
    const num = CALL_NUMBER;
    setPhoneNumber(num);
    setTelLink(`tel:${num}`);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto">
         <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl text-primary">
          {inMalayalam ? (
            "Jaqilin Makeover Call"
          ) : (
            <>
              Contacting <span className="text-primary">Jaqilin</span>{" "}
              <span className="text-foreground">Makeover</span>
            </>
          )}
         </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-foreground/80">
            {inMalayalam
              ? "Call button അമർത്തൂ."
              : "Tap the button below to call directly."}
        </p>
        <div className="mt-6 sm:mt-8">
          {telLink && (
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6" asChild>
                <a href={telLink} onClick={handleCallClick}>
                    <Phone className="mr-2" />
                    {inMalayalam ? `Call ${DISPLAY_PHONE_NUMBER}` : `Call ${phoneNumber}`}
                </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
