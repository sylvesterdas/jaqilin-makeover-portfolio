"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { CalendarHeart, Sparkles, MapPinCheck, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/contact-links";
import { Button } from "@/components/ui/button";

export default function BookingSteps() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const steps = [
    {
      step: "01",
      icon: CalendarHeart,
      title: inMalayalam ? "തീയതി & പാക്കേജ് പരിശോധന" : "1. Date Check & Consultation",
      description: inMalayalam
        ? "വിവാഹ തീയതി, ചടങ്ങിന്റെ സമയം, സ്ഥലം എന്നിവ WhatsApp വഴി അറിയിക്കുക. അതനുസരിച്ച് പാക്കേജ് വിവരങ്ങൾ പങ്കുവെക്കും."
        : "Share your wedding date, muhurtham/ceremony time, and venue on WhatsApp to receive availability & tailored package details.",
    },
    {
      step: "02",
      icon: Sparkles,
      title: inMalayalam ? "ലുക്ക് പ്ലാനിംഗ് & കൺസൾട്ടേഷൻ" : "2. Look Planning & Consultation",
      description: inMalayalam
        ? "സാരി, ആഭരണങ്ങൾ, സ്കിൻ ടോൺ എന്നിവയ്ക്ക് ഇണങ്ങുന്ന മേക്കപ്പും ഹെയർസ്റ്റൈലും മുൻകൂട്ടി ചർച്ച ചെയ്ത് തീരുമാനിക്കാം."
        : "Finalize your dream hairstyle, jewellery placement, and customized look based on your attire and ceremony timing.",
    },
    {
      step: "03",
      icon: MapPinCheck,
      title: inMalayalam ? "വിവാഹദിന സേവനം" : "3. Stress-Free Wedding Glam",
      description: inMalayalam
        ? "കൃത്യസമയത്ത് നിങ്ങളുടെ വീട്ടിലോ മണ്ഡപത്തിലോ എത്തിച്ചേർന്ന് യാതൊരു തിരക്കുമില്ലാതെ വധുവിനെയും കുടുംബത്തെയും അണിയിച്ചൊരുക്കുന്നു."
        : "Guaranteed punctual arrival at your home or venue anywhere in Thiruvananthapuram for a relaxed, joyful wedding morning.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-card/60 border-t border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <span>{inMalayalam ? "ലളിതമായ ബുക്കിംഗ്" : "How It Works"}</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {inMalayalam ? "നിങ്ങളുടെ വലിയ ദിവസത്തിനായുള്ള ഒരുക്കം" : "Your Wedding Journey in 3 Easy Steps"}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed">
            {inMalayalam
              ? "തീയതി അന്വേഷിക്കുന്നത് മുതൽ വിവാഹദിനത്തിൽ സുന്ദരിയായി ഒരുങ്ങുന്നത് വരെയുള്ള ലളിതമായ ഘട്ടങ്ങൾ"
              : "From your initial date inquiry to the final veil pin on your big day — seamless, punctual, and personalized"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl border border-border/70 bg-card p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-headline text-3xl font-extrabold text-primary/30">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/75">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-sm gap-2"
          >
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{inMalayalam ? "തീയതി ലഭ്യത ചോദിക്കൂ" : "Check Date Availability on WhatsApp"}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
