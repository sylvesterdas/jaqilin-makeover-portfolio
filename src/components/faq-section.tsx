"use client";

import { useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqSection() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: inMalayalam
        ? "ബ്രൈഡൽ മേക്കപ്പിനായി എത്ര ദിവസം മുൻപ് ബുക്ക് ചെയ്യണം?"
        : "How early should I book my bridal makeup date?",
      a: inMalayalam
        ? "വിവാഹ സീസണിൽ തീയതികൾ വേഗത്തിൽ ബുക്കാകുന്നതിനാൽ 2 മുതൽ 4 മാസം മുൻപ് തന്നെ തീയതി ഉറപ്പാക്കുന്നത് നല്ലതാണ്. എന്നിരുന്നാലും അടുത്തുള്ള തീയതികളിലെ ലഭ്യത WhatsApp വഴി ചോദിക്കാവുന്നതാണ്."
        : "During peak Kerala wedding seasons, dates get booked 2 to 4 months in advance. However, you can check immediate date availability on WhatsApp anytime.",
    },
    {
      q: inMalayalam
        ? "വീട്ടിലോ വിവാഹ മണ്ഡപത്തിലോ നേരിട്ടെത്തി സർവീസ് ലഭ്യമാക്കുമോ?"
        : "Do you provide home and venue service in Thiruvananthapuram?",
      a: inMalayalam
        ? "അതെ, തിരുവനന്തപുരം ജില്ലയിലുടനീളം (നെയ്യാറ്റിൻകര, കാഞ്ഞിരംകുളം, ബാലരാമപുരം, കഴക്കൂട്ടം, നെയ്യാറ്റിൻകര, വെള്ളറട തുടങ്ങിയ പ്രദേശങ്ങൾ ഉൾപ്പെടെ) വീട്ടിലോ മണ്ഡപത്തിലോ എത്തിച്ചേർന്ന് സേവനം നൽകുന്നു."
        : "Yes, we travel to your home or wedding venue across Thiruvananthapuram district (including Kanjiramkulam, Neyyattinkara, Balaramapuram, Kazhakoottam, Kovalam, and nearby areas).",
    },
    {
      q: inMalayalam
        ? "ബ്രൈഡൽ പാക്കേജിൽ എന്തൊക്കെ ഉൾപ്പെടുന്നു?"
        : "What is included in the bridal makeover package?",
      a: inMalayalam
        ? "ഫ്രഷ് & ലോങ്ങ്-വെയർ ബ്രൈഡൽ മേക്കപ്പ്, ഹൈ-ക്വാളിറ്റി ഹെയർ സ്റ്റൈലിംഗ് (പൂക്കൾ, ഓർണമെന്റ്സ് സെറ്റിംഗ് ഉൾപ്പെടെ), പെർഫെക്റ്റ് സാരി ഡ്രേപ്പിംഗ് / ലെഹങ്ക സെറ്റിംഗ് എന്നിവ പാക്കേജിൽ ഉൾപ്പെടുന്നു."
        : "Our complete bridal package includes long-wearing bridal makeup tailored to your skin tone, bridal hairstyling (with veil/flower/jewellery setting), and expert saree draping or lehenga styling.",
    },
    {
      q: inMalayalam
        ? "കുടുംബാംഗങ്ങൾക്കും സുഹൃത്തുക്കൾക്കും ഗസ്റ്റ് മേക്കപ്പ് ലഭ്യമാണോ?"
        : "Is guest / family makeup support available for relatives?",
      a: inMalayalam
        ? "തീർച്ചയായും! വധുവിന്റെ അമ്മ, സഹോദരിമാർ, ബന്ധുക്കൾ എന്നിവർക്കായി ലളിതവും ഭംഗിയുള്ളതുമായ ഗസ്റ്റ് മേക്കപ്പും സാരി ഡ്രേപ്പിംഗും ലഭ്യമാണ്. മുൻകൂട്ടി ആളുകളുടെ എണ്ണം അറിയിക്കുക."
        : "Yes, we offer elegant guest makeup and saree draping packages for mothers, sisters, and close relatives. Please mention the total count when inquiring.",
    },
    {
      q: inMalayalam
        ? "എന്തൊക്കെ മേക്കപ്പ് ബ്രാൻഡുകളാണ് ഉപയോഗിക്കുന്നത്? സ്കിന്നിന് സുരക്ഷിതമാണോ?"
        : "What makeup products & brands do you use? Are they skin-safe?",
      a: inMalayalam
        ? "Estée Lauder, NARS, MAC, Huda Beauty തുടങ്ങിയ ലോകോത്തര പ്രീമിയം ബ്രാൻഡുകൾ മാത്രമാണ് ഞങ്ങൾ ഉപയോഗിക്കുന്നത്. ഓരോ വധുവിന്റെയും സ്കിൻ ടൈപ്പിനും (ഓയ്‌ലി, ഡ്രൈ, സെൻസിറ്റീവ്) ഹെയർ ടൈപ്പിനും അനുയോജ്യമായ പ്രോഡക്റ്റുകൾ കൃത്യമായി തിരഞ്ഞെടുക്കുന്നു. ക്വാളിറ്റിയിൽ യാതൊരു വിട്ടുവീഴ്ചയുമില്ലാതെ, സ്കിന്നിന് പൂർണ്ണ സുരക്ഷിതത്വവും ദീർഘനേരം നിൽക്കുന്ന നാച്ചുറൽ ഗ്ലോയും ഉറപ്പുനൽകുന്നു."
        : "We exclusively use premium, internationally acclaimed brands such as Estée Lauder, NARS, MAC, and Huda Beauty. We strictly customize products to match your exact skin type (sensitive, dry, oily) and hair texture with zero compromise on quality or hygiene, guaranteeing a skin-safe, long-lasting, and sweat-resistant bridal radiance.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card border-t border-border/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{inMalayalam ? "സംശയങ്ങൾ & ഉത്തരങ്ങൾ" : "Common Questions"}</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {inMalayalam ? "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ" : "Frequently Asked Questions"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground/70">
            {inMalayalam
              ? "ബുക്കിംഗുമായി ബന്ധപ്പെട്ട പ്രധാന വിവരങ്ങൾ"
              : "Everything you need to know about bridal booking, venue travel, and packages"}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/60 bg-background overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-headline text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed text-foreground/80 border-t border-border/40 pt-4 animate-in fade-in-50 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
