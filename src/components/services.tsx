"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Heart, CheckCircle2, MessageCircle, Gem, Users } from "lucide-react";
import { event } from "@/lib/events";

export default function Services() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const getServiceWhatsAppUrl = (serviceName: string) => {
    const text = `Hi Jaqilin, I am inquiring about the "${serviceName}" package for my upcoming event. Could you please share availability and details?`;
    return `https://wa.me/917356483404?text=${encodeURIComponent(text)}`;
  };

  const services = [
    {
      id: "traditional-bridal",
      icon: Crown,
      badge: inMalayalam ? "ഏറ്റവും ജനപ്രിയം" : "Signature Look",
      title: inMalayalam ? "ഹിന്ദു ബ്രൈഡൽ മുഹൂർത്തം" : "Traditional Kerala Bridal",
      subtitle: inMalayalam
        ? "കസവ് സാരിയും ടെമ്പിൾ ജ്വല്ലറിയും ഇണങ്ങുന്ന നാച്ചുറൽ ഗോൾഡൻ ഗ്ലോ"
        : "Classic Kerala Muhurtham look with HD long-lasting finish & flower setting",
      features: [
        inMalayalam ? "HD സ്വെറ്റ്-പ്രൂഫ് & വാട്ടർ-റെസിസ്റ്റന്റ് ബ്രൈഡൽ ബേസ്" : "HD sweat-proof & waterproof bridal base",
        inMalayalam ? "മുല്ലപ്പൂവ്, നെറ്റിപ്പട്ടം, ജ്വല്ലറി സെറ്റിംഗ്" : "Traditional jasmine flower & temple jewellery setting",
        inMalayalam ? "പെർഫെക്റ്റ് കസവ് സാരി ബോക്സ് പ്ലീറ്റിംഗ്" : "Precision Kasavu saree pleating & draping",
        inMalayalam ? "മുഴുവൻ ദിവസവും നിൽക്കുന്ന നാച്ചുറൽ ഫിനിഷ്" : "All-day radiance without looking heavy or cakey",
      ],
      popular: true,
    },
    {
      id: "christian-bridal",
      icon: Gem,
      badge: inMalayalam ? "ലക്ഷ്വറി വെഡിങ്" : "Church Wedding",
      title: inMalayalam ? "ക്രിസ്ത്യൻ ചർച്ച് ബ്രൈഡൽ" : "Christian Bridal & Veil",
      subtitle: inMalayalam
        ? "വെഡിങ് ഗൗണിനും സാരിക്കും ഇണങ്ങുന്ന റോമാന്റിക് ഡ്യൂയി ലുക്ക്"
        : "Graceful bridal veil styling, modern hair updos & soft glam finish",
      features: [
        inMalayalam ? "വെയിൽ & ടിയാര പെർഫെക്റ്റ് ഫിക്സിംഗ്" : "Bridal veil & tiara secure placement",
        inMalayalam ? "റോമാന്റിക് ഹെയർ ബൺ / സോഫ്റ്റ് വേവ്സ് സ്റ്റൈലിംഗ്" : "Elegant hair bun or Hollywood soft waves",
        inMalayalam ? "ഫോട്ടോജെനിക് ഡ്യൂയി ഫിനിഷ്" : "Camera-ready luminous skin radiance",
        inMalayalam ? "വെഡിങ് സാരി / ഗൗൺ സ്റ്റൈലിംഗ് സപ്പോർട്ട്" : "Gown or wedding saree draping support",
      ],
      popular: false,
    },
    {
      id: "nikah-reception",
      icon: Sparkles,
      badge: inMalayalam ? "റോയൽ ലുക്ക്" : "Nikah & Glam",
      title: inMalayalam ? "നിക്കാഹ് & റിസപ്ഷൻ ഗ്ലാം" : "Nikah & Reception Glamour",
      subtitle: inMalayalam
        ? "ലെഹങ്കയ്ക്കും മന്ത്രകോടിയ്ക്കും അനുയോജ്യമായ റോയൽ ബ്രൈഡൽ സ്റ്റൈലിംഗ്"
        : "Sculpted eye artistry, royal dupatta setting & high-impact reception glow",
      features: [
        inMalayalam ? "സ്കൾപ്റ്റഡ് ഐ ആർട്ടിസ്ട്രി & ലാഷസ്" : "Signature eye artistry with lash styling",
        inMalayalam ? "ദുപ്പട്ട / ഹിജാബ് റോയൽ ഡ്രേപ്പിംഗ്" : "Secure dupatta & hijab styling draping",
        inMalayalam ? "ലൈറ്റ്-റീഫ്ലക്റ്റിംഗ് റിസപ്ഷൻ ഗ്ലോ" : "Evening light-reflecting reception glow",
        inMalayalam ? "ഹെവി ലെഹങ്ക / സാരി അഡ്ജസ്റ്റ്മെന്റ്" : "Heavy bridal lehenga & saree setting",
      ],
      popular: false,
    },
    {
      id: "engagement-haldi",
      icon: Heart,
      badge: inMalayalam ? "പ്രീ-വെഡിങ്" : "Pre-Wedding",
      title: inMalayalam ? "എൻഗേജ്മെന്റ് & മെഹന്ദി ലുക്ക്" : "Engagement & Haldi / Mehendi",
      subtitle: inMalayalam
        ? "ഫ്രഷ്, മോഡേൺ കളർഫുൾ ഇവന്റുകൾക്കായി ലൈറ്റ്-വെയ്റ്റ് സ്റ്റൈലിംഗ്"
        : "Vibrant, lightweight makeup for engagements, sangeet, haldi & mehendi",
      features: [
        inMalayalam ? "മോഡേൺ ഫ്രഷ്-ഫേസ്ഡ് മേക്കപ്പ്" : "Modern fresh-faced dewy base",
        inMalayalam ? "ഫ്ലോറൽ ഹെയർ ബ്രെയ്ഡ് / ഓപ്പൺ ഹെയർസ്റ്റൈൽ" : "Floral braided or modern open hairstyles",
        inMalayalam ? "ഔട്ട്ഫിറ്റ് തീമിന് അനുയോജ്യമായ ലിപ് & ഷാഡോ" : "Color-matched styling for vibrant event themes",
        inMalayalam ? "ഈസി സാരി / ദുപ്പട്ട സെറ്റിംഗ്" : "Quick and comfortable drape styling",
      ],
      popular: false,
    },
    {
      id: "saree-guest",
      icon: Users,
      badge: inMalayalam ? "ഫാമിലി പാക്കേജ്" : "Family Care",
      title: inMalayalam ? "സാരി ഡ്രേപ്പിംഗ് & ഗസ്റ്റ് മേക്കപ്പ്" : "Saree Draping & Guest Packages",
      subtitle: inMalayalam
        ? "വധുവിന്റെ അമ്മ, സഹോദരിമാർ, അതിഥികൾ എന്നിവർക്കായി പ്രൊഫഷണൽ കെയർ"
        : "Flawless saree pleating & graceful styling for mothers, sisters & guests",
      features: [
        inMalayalam ? "ആയാസമില്ലാതെ നടക്കാവുന്ന നീറ്റ് ബോക്സ് പ്ലീറ്റിംഗ്" : "Comfortable, wrinkle-free box pleating",
        inMalayalam ? "അമ്മമാർക്കും സഹോദരിമാർക്കും എലഗന്റ് ഗസ്റ്റ് ലുക്ക്" : "Graceful, age-appropriate guest makeup",
        inMalayalam ? "ക്വിക്ക് ഹെയർ സ്റ്റൈലിംഗ് സപ്പോർട്ട്" : "Quick elegant hair styling & flower pinning",
        inMalayalam ? "ഒന്നിലധികം പേർക്കുള്ള ഗ്രൂപ്പ് പാക്കേജുകൾ" : "Special group packages for wedding families",
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-20 md:py-28 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{inMalayalam ? "പ്രത്യേക പാക്കേജുകൾ" : "Curated Bridal Artistry"}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {inMalayalam ? "ബ്രൈഡൽ മേക്കോവർ സേവനങ്ങൾ" : "Luxury Bridal Services"}
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed">
            {inMalayalam
              ? "ഓരോ ചടങ്ങിനും വധുവിന്റെ തനിമയും സൗന്ദര്യവും കാത്തുസൂക്ഷിക്കുന്ന പ്രൊഫഷണൽ മേക്കപ്പ്, ഹെയർസ്റ്റൈലിംഗ് & സാരി ഡ്രേപ്പിംഗ് സേവനങ്ങൾ"
              : "Bespoke bridal artistry tailored to your skin tone, attire, and wedding ceremony with flawless all-day wear"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular
                    ? "border-2 border-primary/70 bg-gradient-to-b from-primary/5 via-card to-card shadow-md"
                    : "border border-border/70 bg-card"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl shadow-sm">
                    {inMalayalam ? "ഏറ്റവും പ്രിയപ്പെട്ടത്" : "Most Requested"}
                  </div>
                )}

                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                      {service.subtitle}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8 border-t border-border/50 pt-5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    size="default"
                    className={`w-full font-semibold rounded-xl gap-2 ${
                      service.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                        : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                    onClick={() => {
                      event({
                        action: "click_service_inquiry",
                        category: "conversion",
                        label: service.title,
                        service_name: service.title,
                        placement: "services_grid",
                        value: 1,
                      });
                    }}
                  >
                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{inMalayalam ? "ലഭ്യത ചോദിക്കൂ" : "Inquire Availability"}</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
