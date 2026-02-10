
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { event } from '@/lib/events';
import { useLocale } from '@/components/locale-provider';
import { getWhatsAppUrl } from '@/lib/contact-links';
import { isMalayalam } from '@/lib/locale';

export default function Contact() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    setWhatsappUrl(getWhatsAppUrl(locale));
  }, [locale]);

  const handleWhatsAppClick = () => {
    event({
      action: 'click_whatsapp',
      category: 'engagement',
      label: 'Contact Section',
      value: 1
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="bg-card border-primary/50 shadow-lg shadow-primary/10">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
              {inMalayalam ? "നിങ്ങളുടെ വിവാഹ ലുക്ക് റെഡിയാണോ?" : "Ready for Your Makeover?"}
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/80">
              {inMalayalam
                ? "തീയതിയും വേദിയും ഫംഗ്ഷൻ വിവരങ്ങളും അയക്കൂ. വിവാഹദിനത്തിന് അനുയോജ്യമായ ലുക്ക് ഞാൻ നിർദ്ദേശിക്കും."
                : "Share your wedding date, venue, and function details. I can guide you with the right package and look."}
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              {whatsappUrl && (
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="inline-block">
                  <Image
                    src="/images/WhatsAppButtonGreenLarge.svg"
                    alt="Chat on WhatsApp"
                    width={260}
                    height={52}
                    className="w-56 sm:w-64 h-auto transition-transform hover:scale-105"
                    data-ai-hint="whatsapp button"
                  />
                </a>
              )}
            </div>
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-foreground/60">
              {inMalayalam
                ? "സേവനമേഖല: തിരുവനന്തപുരം, കൊല്ലം, നാഗർകോവിൽ, സമീപ പ്രദേശങ്ങൾ."
                : "Serving Trivandrum, Kollam, Nagercoil, and surrounding areas."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
