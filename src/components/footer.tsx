
'use client';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import EmailLink from './email-link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { event } from '@/lib/events';
import { useLocale } from '@/components/locale-provider';
import { getWhatsAppUrl, CALL_NUMBER, DISPLAY_PHONE_NUMBER } from '@/lib/contact-links';
import { isMalayalam } from '@/lib/locale';

export default function Footer() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    setPhoneNumber(CALL_NUMBER);
    setWhatsappUrl(getWhatsAppUrl(locale));
  }, [locale]);

  const handleEvent = (action: string, label: string) => {
    event({
      action: action,
      category: 'engagement',
      label: label,
      value: 1
    });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-lg sm:text-xl font-bold mb-1 sm:mb-2">
              <span className="text-primary">Jaqilin</span>{" "}
              <span className="text-foreground">Makeover</span>
            </h3>
            <p className="text-sm sm:text-base text-foreground/70">LJS Works</p>
            <p className="text-sm sm:text-base text-foreground/70">{inMalayalam ? "TVM" : "Trivandrum"}</p>
            <p className="mt-2 text-sm">
              <a
                href="/bridal-makeup-artist-thiruvananthapuram"
                className="text-primary underline-offset-4 hover:underline"
              >
                {inMalayalam
                  ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ്"
                  : "Bridal makeup in Thiruvananthapuram"}
              </a>
            </p>
          </div>
          <div>
            <h3 className="font-headline text-base sm:text-lg font-semibold mb-2">{inMalayalam ? "Contact" : "Contact Me"}</h3>
            <ul className="space-y-3">
              <li>
                {whatsappUrl && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105" onClick={() => handleEvent('click_whatsapp', 'Footer')}>
                    <Image
                      src="/images/WhatsAppButtonGreenSmall.svg"
                      alt="Chat on WhatsApp"
                      width={140}
                      height={28}
                      style={{ width: "auto", height: "auto" }}
                      data-ai-hint="whatsapp button small"
                    />
                  </a>
                )}
              </li>
              <li>
                {phoneNumber && (
                  <a href={`tel:${phoneNumber}`} className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors" onClick={() => handleEvent('click_call', 'Footer')}>
                    <Phone size={16} />
                    <span>{DISPLAY_PHONE_NUMBER}</span>
                  </a>
                )}
              </li>
              <li>
                <div onClick={() => handleEvent('click_email', 'Footer')}>
                    <EmailLink
                    user="contact"
                    domain="jaqilinmakeover.com"
                    icon={true}
                    className="flex items-center justify-center md:justify-start gap-2 text-foreground/80 hover:text-primary transition-colors"
                    />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-base sm:text-lg font-semibold mb-2">{inMalayalam ? "സേവന മേഖലകൾ" : "Service Areas"}</h3>
            <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-3">
              {inMalayalam
                ? "തിരുവനന്തപുരം ജില്ലയിലെ പ്രധാന സ്ഥലങ്ങളിൽ ഹോം & വെന്യൂ സർവീസ് ലഭ്യമാണ്:"
                : "Home & venue bridal makeover services available across Thiruvananthapuram:"}
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center md:justify-start text-xs text-foreground/70">
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Trivandrum City</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Neyyattinkara</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Kanjiramkulam</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Kazhakoottam</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Balaramapuram</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Kovalam</span>
              <span className="px-2 py-0.5 rounded-md bg-background border border-border/60">Kattakada</span>
            </div>
            <div className="mt-4 space-y-2">
              <a href="https://www.instagram.com/jaqilinmua" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => handleEvent('click_instagram', 'Footer')}>
                <Instagram size={16} />
                <span>@jaqilinmua</span>
              </a>
              <a href="https://www.facebook.com/jaqilinmua" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-sm text-foreground/80 hover:text-primary transition-colors" onClick={() => handleEvent('click_facebook', 'Footer')}>
                <Facebook size={16} />
                <span>/jaqilinmua</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center text-xs sm:text-sm text-foreground/60">
          <p className="mb-1 text-xs text-primary font-medium">✨ Lakmé Certified Bridal Makeup Artist | Thiruvananthapuram, Kerala</p>
          <p>&copy; {new Date().getFullYear()} <span className="text-primary">Jaqilin</span> <span className="text-foreground">Makeover</span>. All Rights Reserved. | <a href="/about" className="hover:text-primary underline-offset-4 hover:underline">About</a> | <a href="/privacy-policy" className="hover:text-primary underline-offset-4 hover:underline">Privacy Policy</a> | <a href="/terms" className="hover:text-primary underline-offset-4 hover:underline">Terms</a> | <a href="/data-deletion" className="hover:text-primary underline-offset-4 hover:underline">Data Deletion</a></p>
        </div>
      </div>
    </footer>
  );
}
