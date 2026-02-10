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
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-white/15 md:bg-gradient-to-r md:from-white/85 md:via-white/55 md:to-white/20 z-10" />

      <div className="relative z-20 container mx-auto px-4 pb-16 sm:pb-20 md:pb-0 md:px-8">
        <div className="max-w-xl rounded-2xl bg-white/75 p-4 sm:p-6 md:bg-transparent md:p-0 backdrop-blur-[2px] md:backdrop-blur-0">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-primary drop-shadow-md text-balance">
            {inMalayalam
              ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്"
              : "Bridal Makeup Artist in Thiruvananthapuram"}
          </h1>

          <p className="mt-3 sm:mt-4 font-headline text-xl sm:text-2xl md:text-3xl text-foreground">
            {inMalayalam
              ? "നാചുറൽ, ലോങ്-വെയർ ബ്രൈഡൽ മേക്കപ്പ്"
              : "Natural, long-wear bridal makeup"}
          </p>

          <p className="mt-1 font-body text-base sm:text-lg md:text-xl text-foreground/90">
            {inMalayalam
              ? "ഹെയർ സ്റ്റൈലിംഗ് • സാരി ഡ്രേപ്പിംഗ്"
              : "Hair styling • saree draping"}
          </p>

          <p className="mt-2 font-body text-sm sm:text-base md:text-lg text-foreground/70">
            {inMalayalam ? "വീട് & വേദി സർവീസ്" : "Home & venue service"}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent"
            >
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inMalayalam
                  ? "WhatsApp-ൽ തീയതി ചോദിക്കുക"
                  : "Check Date on WhatsApp"}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#portfolio">
                {inMalayalam ? "വധുവിന്റെ പ്രവൃത്തി കാണൂ" : "View Bridal Work"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
