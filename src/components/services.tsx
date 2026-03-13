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
      title: inMalayalam ? "വിവാഹ മേക്കോവർ പാക്കേജുകൾ" : "Wedding Makeover Packages",
      description: inMalayalam
        ? "വധുവിന് ലോങ്-വെയർ, ഫ്ലോലെസ് മേക്കപ്പ്. ചടങ്ങുകൾക്ക് അനുസരിച്ചുള്ള പാക്കേജുകൾ."
        : "Complete bridal packages with flawless, long-lasting makeup for your wedding day.",
    },
    {
      icon: <Gem className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "എൻഗേജ്മെന്റ് & റിസപ്ഷൻ ലുക്ക്" : "Engagement and Reception Looks",
      description: inMalayalam
        ? "ഡ്രസ്സിനും ചടങ്ങിനും ചേരുന്ന എലിഗന്റ് മേക്കപ്പ്."
        : "Stunning makeup for engagement and reception tailored to your outfit and function.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "ഗസ്റ്റ് / ഫാമിലി മേക്കപ്പ്" : "Guest and Family Makeup",
      description: inMalayalam
        ? "കുടുംബാംഗങ്ങൾക്കും ഗസ്റ്റുകൾക്കും ശുദ്ധവും മനോഹരവുമായ മേക്കപ്പ്."
        : "Elegant makeup for bridesmaids, family members, and wedding guests.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 18.5c-3.6 0-6.5-2.2-6.5-5.5s3-5.5 6.5-5.5s6.5 2.2 6.5 5.5"/><path d="M12 3v10"/><path d="m18.5 13-1.7-1.4"/><path d="m5.5 13 1.7-1.4"/><path d="M6 22h12"/></svg>,
      title: inMalayalam ? "സാരി ഡ്രേപ്പിംഗ്" : "Saree Draping",
      description: inMalayalam
        ? "വിവിധ സ്റ്റൈലുകളിൽ പ്രൊഫഷണൽ സാരി ഡ്രേപ്പിംഗ്."
        : "Expert saree draping in styles that complement your outfit and occasion.",
    },
    {
      icon: <Clapperboard className="w-8 h-8 text-primary" />,
      title: inMalayalam ? "ഫാഷൻ ഷോ മേക്കപ്പ്" : "Fashion Show Prep",
      description: inMalayalam
        ? "റൺവേയും ഫോട്ടോഷൂട്ടിനും ക്രിയേറ്റീവ് മേക്കപ്പ്."
        : "Creative high-fashion makeup for runway shows and photoshoots.",
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold">{inMalayalam ? "ഞങ്ങളുടെ സേവനങ്ങൾ" : "Our Services"}</h2>
          {/* <p className="text-lg text-foreground/70 mt-2">Crafting beauty for every occasion.</p> */}
          <p className="text-xs sm:text-sm text-foreground/70 mt-2 mx-4 sm:mx-8">
            {inMalayalam
              ? "ഫംഗ്ഷൻ, സമയം, ആളുകളുടെ എണ്ണം എന്നിവ പരിഗണിച്ച് കസ്റ്റം പാക്കേജുകൾ ലഭ്യമാണ്."
              : "Custom packages available based on function, timing, and number of people."}
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm sm:text-base text-foreground/80">

            <div className="flex items-center gap-2 py-1">
              <Heart className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "വിവാഹ മേക്കോവർ പാക്കേജുകൾ" : "Wedding makeover packages"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Gem className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "എൻഗേജ്മെന്റ് & റിസപ്ഷൻ ലുക്ക്" : "Engagement & reception looks"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Users className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "ഗസ്റ്റ് / ഫാമിലി മേക്കപ്പ്" : "Guest & family makeup"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Gem className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "സാരി ഡ്രേപ്പിംഗ്" : "Saree draping"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Clapperboard className="w-4 h-4 text-primary/80 shrink-0" />
              <span>{inMalayalam ? "ഫാഷൻ ഷോ മേക്കപ്പ്" : "Fashion show makeup"}</span>
            </div>

            <div className="flex items-center gap-2 py-1">
              <Heart className="w-4 h-4 text-primary/80 shrink-0" />
              <span>
                {inMalayalam ? "ഹെയർ സ്റ്റൈലിംഗ്" : "Hair styling"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
