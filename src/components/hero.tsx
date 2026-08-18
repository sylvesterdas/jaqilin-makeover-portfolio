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
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/25 to-transparent md:bg-gradient-to-r md:from-background/65 md:via-background/20 md:to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-4 pb-12 sm:pb-16 md:pb-0 md:px-8">
        <div className="max-w-[360px] mx-auto md:max-w-xl text-center md:text-left rounded-3xl bg-card/40 md:bg-card/45 p-5 sm:p-6 md:p-8 backdrop-blur-md border border-primary/25 shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:bg-card/50 transition-all duration-300">
          {/* Trust Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-sm border border-primary/20">
            <span>✨ {inMalayalam ? "Lakmé Certified ബ്രൈഡൽ ആർട്ടിസ്റ്റ്" : "Lakmé Certified Bridal Artist"}</span>
          </div>

          <h1 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.15]">
            {inMalayalam ? (
              <>
                <span className="text-primary block text-[1.15em]">ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്</span>
                <span className="mt-1 block text-sm font-body font-medium text-foreground/80 sm:text-base md:text-lg">
                  തിരുവനന്തപുരം | Trivandrum
                </span>
              </>
            ) : (
              <>
                <span className="block text-primary">
                  Bridal Makeup Artist
                </span>
                <span className="block text-foreground text-xl sm:text-2xl md:text-4xl mt-0.5">
                  in Thiruvananthapuram
                </span>
              </>
            )}
          </h1>

          <p className="mt-2.5 sm:mt-3 font-headline text-base sm:text-lg md:text-xl text-foreground/90 font-medium">
            {inMalayalam
              ? "പ്രത്യേക ദിവസത്തിനായി നാച്ചുറൽ & ലോങ്ങ്-വെയർ ബ്രൈഡൽ ലുക്ക്"
              : "Natural, long-wear bridal looks tailored for your wedding day"}
          </p>

          <p className="mt-1 font-body text-xs sm:text-sm md:text-base text-foreground/70">
            {inMalayalam
              ? "ഹെയർ സ്റ്റൈലിംഗ് • സാരി ഡ്രേപ്പിംഗ് • ഗസ്റ്റ് മേക്കപ്പ്"
              : "Hair styling • Saree draping • Family & guest makeup"}
          </p>

          <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-foreground/60">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{inMalayalam ? "ഹോം & വെന്യൂ സർവീസ് ലഭ്യമാണ്" : "Home & venue service across Trivandrum"}</span>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm w-full sm:w-auto text-sm sm:text-base"
            >
              <a
                href={getWhatsAppUrl(locale)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inMalayalam
                  ? "WhatsApp വഴി തീയതി ചോദിക്കൂ"
                  : "Check Date on WhatsApp"}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold w-full sm:w-auto text-sm sm:text-base"
            >
              <a href="#portfolio">
                {inMalayalam ? "വർക്കുകൾ കാണൂ" : "View Bridal Work"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
