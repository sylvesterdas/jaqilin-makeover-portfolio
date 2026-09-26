
'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { trackCallClick, trackWhatsAppClick } from '@/lib/events';
import { useLocale } from '@/components/locale-provider';
import { DISPLAY_PHONE_NUMBER, getPhoneTelUrl, getWhatsAppUrl } from '@/lib/contact-links';
import { isMalayalam } from '@/lib/locale';
import StudioLocation from '@/components/studio-location';

export default function Contact() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const whatsappUrl = getWhatsAppUrl(locale);

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="bg-card border-primary/50 shadow-lg shadow-primary/10">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
              {inMalayalam ? "വിവാഹത്തിന് ഒരുങ്ങാൻ തയ്യാറാണോ?" : "Ready for Your Makeover?"}
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/80">
              {inMalayalam
                ? "വിവാഹ തീയതിയും സ്ഥലവും WhatsApp-ൽ അയക്കൂ. അനുയോജ്യമായ പാക്കേജും ലുക്കും നിർദ്ദേശിക്കാം."
                : "Share your wedding date, venue, and function details. I can guide you with the right package and look."}
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact', { locale })}
                className="inline-block"
              >
                  <Image
                    src="/images/WhatsAppButtonGreenLarge.svg"
                    alt="Chat on WhatsApp"
                    width={260}
                    height={52}
                    className="w-56 sm:w-64 h-auto transition-transform hover:scale-105"
                    style={{ width: "auto", height: "auto" }}
                    data-ai-hint="whatsapp button"
                  />
              </a>
            </div>
            <p className="mt-3 text-sm text-foreground/70">
              {inMalayalam ? "അല്ലെങ്കിൽ വിളിക്കൂ: " : "Or call "}
              <a
                href={getPhoneTelUrl()}
                onClick={() => trackCallClick('contact')}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {DISPLAY_PHONE_NUMBER}
              </a>
            </p>
            <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-foreground/60">
              {inMalayalam
                ? "Studio: Kanjiramkulam, Thiruvananthapuram."
                : "Studio: Kanjiramkulam, Thiruvananthapuram."}
            </p>
            <StudioLocation compact />
            <p className="mt-2 text-xs sm:text-sm">
              <a
                href="/bridal-makeup-artist-thiruvananthapuram"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {inMalayalam
                  ? "തിരുവനന്തപുരം ജില്ല സേവന വിശദാംശങ്ങൾ കാണൂ"
                  : "See bridal service area in Thiruvananthapuram"}
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
