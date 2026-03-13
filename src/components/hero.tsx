"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocale } from "@/components/locale-provider";
import { getWhatsAppUrl } from "@/lib/contact-links";
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

export default function Hero() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-end md:justify-center text-center md:text-left overflow-hidden"
    >
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
      <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/45 to-white/10 md:bg-gradient-to-r md:from-white/80 md:via-white/40 md:to-white/10 z-10" />

      <div className="relative z-20 container mx-auto px-4 pb-10 sm:pb-14 md:pb-0 md:px-8">
        <div className="max-w-[340px] mx-auto md:max-w-max rounded-2xl bg-white/60 p-3 px-2 sm:p-4 sm:px-3 md:p-6 md:px-4 backdrop-blur-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <h1 className="font-headline text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary text-balance leading-[1.15]">
            {inMalayalam ? (
              <>
                <span className="block text-[1.3em]">ബ്രൈഡൽ</span>
                <span className="block">മേക്കപ്പ് ആർട്ടിസ്റ്റ്</span>
              </>
            ) : (
              "Bridal Makeup Artist"
            )}
          </h1>

          <p className="mt-2 sm:mt-3 font-headline text-base sm:text-lg md:text-2xl text-foreground/90">
            {inMalayalam
              ? "നാചുറൽ ബ്രൈഡൽ മേക്കപ്പ്"
              : "Natural bridal makeup"}
          </p>

          <p className="mt-1 font-body text-sm sm:text-base md:text-lg text-foreground/80">
            {inMalayalam
              ? "ഹെയർ സ്റ്റൈലിംഗ് • സാരി ഡ്രേപ്പിംഗ്"
              : "Hair styling • saree draping"}
          </p>

          <p className="mt-1 font-body text-sm sm:text-base text-foreground/60">
            {inMalayalam ? "വീട് സർവീസ്" : "Home service"}
          </p>
          <p className="mt-1 font-body text-xs sm:text-sm text-foreground/60">
            {inMalayalam
              ? "തിരുവനന്തപുരം"
              : "Thiruvananthapuram"}
          </p>

          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
            <Button
              size="default"
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent w-full sm:w-auto"
            >
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inMalayalam
                  ? "WhatsApp-ൽ ചാറ്റ് ചെയ്യൂ"
                  : "WhatsApp Now"}
              </a>
            </Button>

            <Button
              size="default"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            >
              <a href="#portfolio">
                {inMalayalam ? "ബ്രൈഡൽ വർക്ക് കാണൂ" : "View Work"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
