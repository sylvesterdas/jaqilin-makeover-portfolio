"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Instagram, Phone } from "lucide-react";
import Image from "next/image";
import { event } from "@/lib/events";
import WhatsAppIcon from "./icons/whatsapp-icon";
import { useLocale } from "@/components/locale-provider";
import { getWhatsAppUrl, CALL_NUMBER, DISPLAY_PHONE_NUMBER } from "@/lib/contact-links";
import { isMalayalam } from "@/lib/locale";

const heroImages = [
  {
    src: "/images/hero-background.jpg",
    alt: "Background of a beautifully decorated wedding setting",
    hint: "bride makeup",
  },
  {
    src: "/images/hero-background1.jpg",
    alt: "Another beautiful makeup shot",
    hint: "bridal makeup",
  },
];

export default function ConnectContent() {
  const { locale, setLocale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [links, setLinks] = useState({
    call: "",
    whatsapp: "",
    instagram: "https://www.instagram.com/jaqilinmua",
    website: "/",
  });
  const [callPhoneNumber, setCallPhoneNumber] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const callNum = CALL_NUMBER;

    setCallPhoneNumber(DISPLAY_PHONE_NUMBER);

    setLinks((prev) => ({
      ...prev,
      call: `tel:${callNum}`,
      whatsapp: getWhatsAppUrl(locale),
    }));
  }, [locale]);

  const handleEvent = (action: string, label: string) => {
    event({
      action,
      category: "engagement",
      label,
      value: 1,
    });
  };

  return (
    <div className="relative pt-12 sm:pt-16 flex flex-col items-center justify-center min-h-[100svh] bg-background p-4 sm:p-6 overflow-hidden">
      {heroImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover object-right transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          data-ai-hint={image.hint}
          priority={index === 0}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
      <div className="absolute inset-0 bg-white/70 z-10" />

      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Intro */}
        <div className="flex flex-col items-center mb-6 sm:mb-8 px-5 sm:px-8 py-4 text-center w-full max-w-sm sm:max-w-md bg-gray-950/20 rounded-3xl">
          <Image
            src="/logo.png"
            alt="Jaqilin Makeover Logo"
            width={96}
            height={96}
            className="rounded-full border-2 border-primary shadow-lg size-20 sm:size-24"
          />

          <h1 className="mt-4 font-headline text-2xl sm:text-3xl text-primary drop-shadow-md text-balance">
            {inMalayalam
              ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്"
              : "Bridal Makeup Artist in Thiruvananthapuram"}
          </h1>

          <p className="mt-2 text-foreground/90 text-sm sm:text-base">
            {inMalayalam
              ? "നേച്ചുറൽ, ലോങ്-വെയർ മേക്കപ്പ് + ഹെയർ സ്റ്റൈലിംഗ് & സാരി ഡ്രേപ്പിംഗ്"
              : "Natural, long-wear makeup with hair styling & saree draping"}
          </p>

          <p className="mt-1 text-foreground/80 text-xs sm:text-sm">
            {inMalayalam ? "വീട് & വേദി സർവീസ്" : "Home & venue service"}
          </p>

          <p className="mt-3 text-foreground/70 text-xs sm:text-sm">
            {inMalayalam
              ? "തീയതി + വേദി അയക്കൂ. ഞാൻ ഗൈഡ് ചെയ്യും."
              : "Send date + venue. I’ll guide you."}
          </p>
        </div>

        {/* Mobile Language Toggle (Connect page only) */}
        <div className="mb-3 w-full max-w-sm sm:max-w-md">
          <div className="mx-auto flex items-center justify-center rounded-xl border border-primary/20 bg-card/60 p-1 shadow-sm backdrop-blur">
            <Button
              size="sm"
              variant={inMalayalam ? "secondary" : "ghost"}
              className="h-8 px-4 text-xs"
              onClick={() => setLocale("ml-IN")}
            >
              ML
            </Button>
            <Button
              size="sm"
              variant={!inMalayalam ? "secondary" : "ghost"}
              className="h-8 px-4 text-xs"
              onClick={() => setLocale("en-IN")}
            >
              EN
            </Button>
          </div>
        </div>

        {/* Contact Buttons */}
        <Card className="w-full max-w-sm sm:max-w-md bg-card/65 backdrop-blur-md border-primary/15 shadow-md">
          <CardContent className="p-4 sm:p-5 space-y-3">
            {/* WhatsApp */}
            <Button
              size="lg"
              asChild
              className="h-auto py-3.5 sm:py-4 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_whatsapp", "Connect Page")}
            >
              <a
                target="_blank"
                href={links.whatsapp}
                className="flex items-start gap-3 sm:gap-4 w-full"
              >
                <WhatsAppIcon />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    {inMalayalam
                      ? "WhatsApp-ൽ തീയതി ചോദിക്കുക"
                      : "Check Date on WhatsApp"}
                  </span>
                </div>
              </a>
            </Button>

            {/* Call */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-3.5 sm:py-4 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_call", "Connect Page")}
            >
              <a href={links.call} className="flex items-start gap-3 sm:gap-4 w-full">
                <Phone className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    {inMalayalam
                      ? "ബുക്കിംഗിനായി വിളിക്കുക"
                      : "Call for Booking Enquiry"}
                  </span>
                  <span className="hidden sm:block text-xs text-foreground/60 leading-snug">
                    {callPhoneNumber}
                  </span>
                </div>
              </a>
            </Button>

            {/* Instagram */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-3 sm:py-3.5 px-4 justify-start rounded-xl"
              onClick={() => handleEvent("click_instagram", "Connect Page")}
            >
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 sm:gap-4 w-full min-w-0"
              >
                <Instagram className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left min-w-0 max-w-full">
                  <span className="font-medium leading-snug break-words max-w-full">
                    {inMalayalam
                      ? "Instagram-ൽ ബ്രൈഡൽ വർക്ക് കാണൂ"
                      : "View Bridal Work on Instagram"}
                  </span>
                </div>
              </a>
            </Button>

            {/* Website */}
            <Button
              size="lg"
              asChild
              variant="outline"
              className="h-auto py-3 sm:py-3.5 px-4 justify-start rounded-xl"
            >
              <a href={links.website} className="flex items-start gap-3 sm:gap-4 w-full">
                <Globe className="size-6 shrink-0 mt-1" />
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium leading-snug">
                    {inMalayalam
                      ? "സേവനങ്ങളും പോർട്ട്ഫോളിയോയും"
                      : "View Services & Portfolio"}
                  </span>
                </div>
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
