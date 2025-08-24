
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Instagram, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/language-switcher';

const WhatsAppIcon = () => (
  <Image
    src="/images/icons/whatsapp-black.svg"
    alt="WhatsApp"
    width={24}
    height={24}
  />
);

export default function ConnectPage() {
  const t = useTranslations('ConnectPage');
  const [links, setLinks] = useState({
    call: '',
    whatsapp: '',
    instagram: 'https://www.instagram.com/jaqilinmua',
    website: '/',
  });

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
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
        <h1 className="mt-4 font-headline text-4xl text-primary">
          {t('title')}
        </h1>
        <p className="text-foreground/80">{t('subtitle')}</p>
      </div>
      <Card className="w-full max-w-sm bg-card border-primary/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.call}>
                <Phone className="mr-4 h-6 w-6" /> {t('call')}
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <div className="mr-4">
                  <WhatsAppIcon />
                </div>{' '}
                {t('whatsapp')}
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-4 h-6 w-6" /> {t('instagram')}
              </a>
            </Button>
            <Button size="lg" asChild className="justify-start text-lg h-14">
              <a href={links.website}>
                <Globe className="mr-4 h-6 w-6" /> {t('website')}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <footer className="mt-8 text-center text-sm text-foreground/60">
        <p>{t('copyright', { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  );
}
