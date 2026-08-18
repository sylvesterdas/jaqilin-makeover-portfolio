"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { Sparkles, Award, Clock, HeartHandshake } from "lucide-react";

export default function StatsBar() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const stats = [
    {
      number: "500+",
      label: inMalayalam ? "വിവാഹ മേക്കോവറുകൾ" : "Brides Styled",
      subtext: inMalayalam ? "തൃപ്തികരമായ അനുഭവം" : "Across South Kerala",
      icon: Sparkles,
    },
    {
      number: "2+",
      label: inMalayalam ? "വർഷത്തെ പരിചയം" : "Years Experience",
      subtext: inMalayalam ? "Lakmé അക്കാദമി ട്രെയിൻഡ്" : "Lakmé Certified Artist",
      icon: Award,
    },
    {
      number: "100%",
      label: inMalayalam ? "സമയനിഷ്ഠ" : "On-Time Arrival",
      subtext: inMalayalam ? "മണ്ഡപത്തിലും വീട്ടിലും" : "Home & Venue Guarantee",
      icon: Clock,
    },
    {
      number: "5.0 ★",
      label: inMalayalam ? "ഉപഭോക്തൃ റേറ്റിംഗ്" : "Client Rating",
      subtext: inMalayalam ? "100% ശുപാർശ" : "Direct Word of Mouth",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative z-30 -mt-8 sm:-mt-10 mb-6 sm:mb-12 container mx-auto px-4">
      <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl bg-card border border-primary/20 p-5 sm:p-7 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-2 sm:p-3 ${
                  idx > 1 ? "pt-4 sm:pt-3" : ""
                }`}
              >
                <div className="inline-flex p-2.5 rounded-full bg-primary/10 text-primary mb-2">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  {stat.number}
                </span>
                <span className="font-headline text-xs sm:text-sm font-semibold text-primary mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs text-foreground/60 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
