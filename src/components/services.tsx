"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gem, Clapperboard, Users, Heart } from 'lucide-react';
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";

export default function Services() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "Wedding packages" : "Wedding Makeover Packages",
      description: inMalayalam
        ? "Long-wear bridal makeup."
        : "Complete bridal packages with flawless, long-lasting makeup for your wedding day.",
    },
    {
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "Engagement & Reception" : "Engagement and Reception Looks",
      description: inMalayalam
        ? "Dress-match look."
        : "Stunning makeup for engagement and reception tailored to your outfit and function.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "Guest & Family" : "Guest and Family Makeup",
      description: inMalayalam
        ? "Clean, fresh makeup."
        : "Elegant makeup for bridesmaids, family members, and wedding guests.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 18.5c-3.6 0-6.5-2.2-6.5-5.5s3-5.5 6.5-5.5s6.5 2.2 6.5 5.5"/><path d="M12 3v10"/><path d="m18.5 13-1.7-1.4"/><path d="m5.5 13 1.7-1.4"/><path d="M6 22h12"/></svg>,
      title: inMalayalam ? "Saree draping" : "Saree Draping",
      description: inMalayalam
        ? "Pro saree draping."
        : "Expert saree draping in styles that complement your outfit and occasion.",
    },
    {
      icon: <Clapperboard className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "Fashion show" : "Fashion Show Prep",
      description: inMalayalam
        ? "Shoot/Runway makeup."
        : "Creative high-fashion makeup for runway shows and photoshoots.",
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold">{inMalayalam ? "സേവനങ്ങൾ" : "Our Services"}</h2>
          {/* <p className="text-lg text-foreground/70 mt-2">Crafting beauty for every occasion.</p> */}
          <p className="text-xs sm:text-sm text-foreground/70 mt-2 mx-4 sm:mx-8">
            {inMalayalam
              ? "Bridal makeup, wedding makeup, hairstyling, saree draping എന്നിവയ്ക്ക് custom packages available."
              : "Custom packages for bridal makeup, wedding functions, hairstyling, saree draping, and guest makeup in Thiruvananthapuram."}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm sm:text-base text-foreground/80">

            <div className="flex items-center gap-2 py-1">
              <Heart className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "Wedding / bridal packages" : "Wedding and bridal makeup packages"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Gem className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "Engagement & Reception" : "Engagement and reception makeup"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Users className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "Guest & Family" : "Guest & family makeup"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Gem className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "Saree draping" : "Saree draping service"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Clapperboard className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "Fashion show" : "Fashion show makeup"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Heart className="w-4 h-4 text-primary/80 shrink-0" />
              <span>
                {inMalayalam ? "Hair styling" : "Bridal hair styling"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
