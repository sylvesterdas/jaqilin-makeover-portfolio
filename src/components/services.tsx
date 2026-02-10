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
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold">{inMalayalam ? "ഞങ്ങളുടെ സേവനങ്ങൾ" : "Our Services"}</h2>
          {/* <p className="text-lg text-foreground/70 mt-2">Crafting beauty for every occasion.</p> */}
          <p className="text-xs sm:text-sm text-foreground/70 mt-2 mx-4 sm:mx-8">
            {inMalayalam
              ? "ഫംഗ്ഷൻ, സമയം, ആളുകളുടെ എണ്ണം എന്നിവ പരിഗണിച്ച് കസ്റ്റം പാക്കേജുകൾ ലഭ്യമാണ്."
              : "Custom packages available based on function, timing, and number of people."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/50 text-center p-5 sm:p-6 transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="p-3 sm:p-4 bg-background rounded-full mb-3 sm:mb-4">
                    {service.icon}
                </div>
                <CardTitle className="font-headline text-xl sm:text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-foreground/80 text-sm sm:text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
