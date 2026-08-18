"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Sparkles, CheckCircle2, MessageCircle, Phone, ArrowRight, ShieldCheck, Heart, Sparkle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/events";

const whatsappUrl =
  "https://wa.me/917356483404?text=Hi%20Jaqilin%2C%20I%20want%20to%20inquire%20about%20saree%20draping%20and%20box%20pleating%20services%20in%20Thiruvananthapuram.";

const drapeStyles = [
  {
    title: {
      ml: "പരമ്പരാഗത കേരള കസവ് ബോക്സ് പ്ലീറ്റിംഗ്",
      en: "Traditional Kasavu Saree Box Pleating",
    },
    desc: {
      ml: "മുഹൂർത്ത ചടങ്ങുകൾക്കായി ഓരോ പ്ലീറ്റും കൃത്യമായ വീതിയിലും ഷാർപ്പായ ഫിനിഷിലും ചിട്ടപ്പെടുത്തുന്നു.",
      en: "Precision box pleating with razor-sharp folds tailored for classic Kerala Muhurtham ceremonies.",
    },
    features: [
      { ml: "പെർഫെക്റ്റ് ബോക്സ് പ്ലീറ്റിംഗ് & പിന്നിംഗ്", en: "Crisp box pleats with secure zero-slip pinning" },
      { ml: "നൃത്തത്തിനും ഇരിക്കാനും എളുപ്പമുള്ള ഫിറ്റ്", en: "Comfortable movement for rituals and sitting" },
      { ml: "ഇളകിപ്പോകാത്ത ഷാർപ്പ് ബോർഡർ അലൈൻമെന്റ്", en: "Flawless border alignment throughout the day" },
    ],
  },
  {
    title: {
      ml: "കാഞ്ചീപുരം & ഹെവി പട്ടുസാരി ഡ്രേപ്പിംഗ്",
      en: "Kanchipuram & Heavy Silk Saree Draping",
    },
    desc: {
      ml: "കനത്ത പട്ടുസാരികൾ ശരീരത്തിന് അനുയോജ്യമായി ഭംഗിയോടെയും സുഖകരമായും ചുറ്റിക്കെട്ടുന്നു.",
      en: "Structured draping for heavy silk sarees to enhance bridal silhouette with neat pallu fan pleats.",
    },
    features: [
      { ml: "ഹെവി കാഞ്ചീപുരം പല്ലു ഫാൻ പ്ലീറ്റിംഗ്", en: "Structured pallu fan pleats with border display" },
      { ml: "ഒതുക്കമുള്ള സ്ലിം ലുക്ക് ഫിനിഷ്", en: "Slim, flattering tucking without bulkiness" },
      { ml: "ദിവസം മുഴുവൻ ചുളിവുകൾ വീഴാത്ത അഡ്ജസ്റ്റ്മെന്റ്", en: "Crease-resistant hold for long photo sessions" },
    ],
  },
  {
    title: {
      ml: "മന്ത്രകോടി & ക്രിസ്ത്യൻ ബ്രൈഡൽ സാരി സെറ്റിംഗ്",
      en: "Manthrakodi & Christian Bridal Saree Styling",
    },
    desc: {
      ml: "പള്ളിയിലെ ചടങ്ങുകൾക്ക് വെയിൽ, ടിയാര എന്നിവയോടൊപ്പം മന്ത്രകോടി സാരി എലഗന്റായി സെറ്റ് ചെയ്യുന്നു.",
      en: "Elegant church ceremony draping coordinated seamlessly with bridal veil and headpiece pins.",
    },
    features: [
      { ml: "വെയിൽ & ടിയാര കോർഡിനേറ്റഡ് പിന്നിംഗ്", en: "Veil & tiara integrated safety fastening" },
      { ml: "മന്ത്രകോടി പെർഫെക്റ്റ് ഷോൾഡർ ഡ്രേപ്പ്", en: "Graceful shoulder drape for ceremony photography" },
      { ml: "വേഗത്തിലുള്ള ചർച്ച്-ടു-റിസപ്ഷൻ ട്രാൻസിഷൻ", en: "Effortless transition for reception attire" },
    ],
  },
  {
    title: {
      ml: "മോഡേൺ ഓപ്പൺ പല്ലു & പാർട്ടി സാരി സ്റ്റൈൽസ്",
      en: "Modern Open Pallu & Party Drapes",
    },
    desc: {
      ml: "റിസപ്ഷൻ, എൻഗേജ്മെന്റ്, സംഗീത് ചടങ്ങുകൾക്കായി ഫ്ലോയിംഗ് മോഡേൺ സ്റ്റൈലുകൾ.",
      en: "Contemporary flowing drapes, mermaid cuts, and Gujarati-style pleating for evening receptions.",
    },
    features: [
      { ml: "ഫ്ലോയിംഗ് സിംഗിൾ പല്ലു സ്റ്റൈലിംഗ്", en: "Effortless flowing pallu setting with discreet pins" },
      { ml: "ഓർഗൻസ, ഷിഫോൺ, ജോർജറ്റ് സ്പെഷ്യലിസ്റ്റ്", en: "Specialized handling for organza, satin & chiffon" },
      { ml: "റോയൽ റിസപ്ഷൻ പാർട്ടികൾക്ക് അനുയോജ്യം", en: "High-glamour styling for reception entries" },
    ],
  },
  {
    title: {
      ml: "ഫാമിലി & ഗസ്റ്റ് സാരി ഡ്രേപ്പിംഗ് പാക്കേജുകൾ",
      en: "Family & Guest Group Saree Draping",
    },
    desc: {
      ml: "വധുവിന്റെ അമ്മ, സഹോദരിമാർ, ബന്ധുക്കൾ എന്നിവർക്കായി വേഗത്തിലുള്ള പ്രൊഫഷണൽ ഡ്രേപ്പിംഗ്.",
      en: "Fast, uniform, and stress-free draping for mothers, bridesmaids, and wedding guests at venue or home.",
    },
    features: [
      { ml: "ഒരേ സമയം ഒന്നിലധികം ആളുകൾക്ക് വേഗത്തിൽ ഡ്രേപ്പിംഗ്", en: "Efficient multi-guest styling without delay" },
      { ml: "മുതിർന്നവർക്ക് അനുയോജ്യമായ സുഖകരമായ ഡ്രേപ്പിംഗ്", en: "Comfortable traditional drape for elders & mothers" },
      { ml: "ഗ്രൂപ്പ് പാക്കേജ് കിഴിവുകൾ", en: "Affordable group rates for bridal parties" },
    ],
  },
];

const faqs = [
  {
    q: {
      ml: "സാരി പ്രീ-പ്ലീറ്റിംഗ് (Pre-Pleating) മുൻകൂട്ടി ചെയ്തു നൽകുമോ?",
      en: "Do you provide Saree Pre-Pleating and Box Folding in advance?",
    },
    a: {
      ml: "അതെ! വിവാഹദിനത്തിലെ സമയം ലാഭിക്കുന്നതിനായി സാരി മുൻകൂട്ടി കൃത്യമായ അളവിൽ ബോക്സ് പ്ലീറ്റ് ചെയ്ത്, അയൺ ചെയ്ത് ഫോൾഡ് ചെയ്ത് തരുന്നതാണ്. വിവാഹ ദിവസം 5 മിനിറ്റിനുള്ളിൽ സാരി ധരിക്കാൻ ഇത് സഹായിക്കും.",
      en: "Yes! We offer advance saree pre-pleating and box ironing. The saree is folded and pinned to your exact measurements so on the wedding morning, it can be worn flawlessly in under 5 minutes.",
    },
  },
  {
    q: {
      ml: "വീട്ടിലോ മണ്ഡപത്തിലോ നേരിട്ടെത്തി സാരി ഡ്രേപ്പിംഗ് ചെയ്യുമോ?",
      en: "Do you travel to venues and homes across Thiruvananthapuram?",
    },
    a: {
      ml: "അതെ, കാഞ്ഞിരംകുളം, നെയ്യാറ്റിൻകര, കാട്ടാക്കട, കോവളം, ബാലരാമപുരം, തിരുവനന്തപുരം സിറ്റി എന്നിവിടങ്ങളിൽ വീട്ടിലോ കല്യാണ മണ്ഡപത്തിലോ നേരിട്ടെത്തി സർവീസ് നൽകുന്നു.",
      en: "Yes, we travel to all wedding halls, auditoriums, and homes across Kanjiramkulam, Neyyattinkara, Kattakada, Kowdiar, and the entire Thiruvananthapuram district.",
    },
  },
  {
    q: {
      ml: "എത്ര ദിവസം മുൻപ് ബുക്ക് ചെയ്യണം?",
      en: "How do I book saree draping services?",
    },
    a: {
      ml: "മുഹൂർത്ത സമയങ്ങൾ മുൻകൂട്ടി പ്ലാൻ ചെയ്യുന്നതിനായി വിവാഹ തീയതിയും സ്ഥലവും എത്ര പേർക്ക് ഡ്രേപ്പിംഗ് ആവശ്യമുണ്ട് എന്നതും WhatsApp വഴി അറിയിക്കുക.",
      en: "Simply tap the WhatsApp button with your wedding date, venue location, and total number of sarees to be draped to check availability.",
    },
  },
];

const localities = [
  "Kanjiramkulam",
  "Neyyattinkara",
  "Kattakada",
  "Balaramapuram",
  "Vizhinjam",
  "Kovalam",
  "Azhimala",
  "Nellimoodu",
  "Poovar",
  "Thampanoor",
  "Kowdiar",
  "Sasthamangalam",
  "Peroorkada",
  "Pappanamcode",
  "Kazhakoottam",
];

export default function SareeDrapingContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Saree Draping Services in Thiruvananthapuram",
      path: "/saree-draping-trivandrum",
    },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Saree Draping & Box Pleating Service",
    provider: {
      "@type": "ProfessionalService",
      name: "Jaqilin Makeover",
      telephone: "+91 73564 83404",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thiruvananthapuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Thiruvananthapuram District, Kerala",
    },
    description:
      "Professional bridal saree draping, Kasavu box pleating, Kanchipuram silk saree styling, and guest group saree draping in Thiruvananthapuram.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: inMalayalam ? item.q.ml : item.q.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: inMalayalam ? item.a.ml : item.a.en,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-foreground/60">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                {inMalayalam ? "ഹോം" : "Home"}
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground/90 font-medium">
              {inMalayalam ? "സാരി ഡ്രേപ്പിംഗ് സർവീസ്" : "Saree Draping Services"}
            </li>
          </ol>
        </nav>

        {/* Hero Card */}
        <section className="rounded-3xl border border-primary/25 bg-card p-6 sm:p-10 shadow-lg text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{inMalayalam ? "പ്രൊഫഷണൽ സാരി ഡ്രേപ്പിംഗ്" : "Expert Saree Draping & Box Pleating"}</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight text-balance">
            {inMalayalam
              ? "തിരുവനന്തപുരത്ത് പ്രൊഫഷണൽ സാരി ഡ്രേപ്പിംഗ് & ബോക്സ് പ്ലീറ്റിംഗ് സർവീസ്"
              : "Bridal Saree Draping & Kasavu Box Pleating in Thiruvananthapuram"}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {inMalayalam
              ? "വിവാഹ മുഹൂർത്തങ്ങൾക്കും റിസപ്ഷനുകൾക്കും കസവ് സാരി, കാഞ്ചീപുരം പട്ടുസാരി, മന്ത്രകോടി എന്നിവ പെർഫെക്റ്റ് ഷാർപ്പ് പ്ലീറ്റുകളോടെ ഒതുക്കമുള്ള ഭംഗിയിൽ ചുറ്റിക്കെട്ടുന്നു. വീട്ടിലും മണ്ഡപത്തിലും സർവീസ് ലഭ്യമാണ്."
              : "Flawless box pleating, Kanchipuram silk saree draping, and Christian Manthrakodi setting tailored to your silhouette with secure zero-slip hold. Available at your home and wedding venue."}
          </p>

          {/* Quick CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-sm gap-2"
              onClick={() => {
                event({
                  action: "click_whatsapp",
                  category: "conversion",
                  label: "Saree Draping Page WhatsApp",
                  placement: "saree_draping_hero",
                  value: 1,
                });
              }}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span>{inMalayalam ? "സാരി ഡ്രേപ്പിംഗ് ബുക്ക് ചെയ്യൂ" : "Book Saree Draping on WhatsApp"}</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground font-semibold px-6"
            >
              <a href="tel:+917356483404">
                <Phone className="h-4 w-4 mr-2" />
                <span>{inMalayalam ? "വിളിക്കുക: +91 73564 83404" : "Call +91 73564 83404"}</span>
              </a>
            </Button>
          </div>
        </section>

        {/* Styles Grid */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
              {inMalayalam ? "ഞങ്ങൾ നൽകുന്ന സാരി ഡ്രേപ്പിംഗ് സ്റ്റൈലുകൾ" : "Curated Saree Draping Styles"}
            </h2>
            <p className="mt-2 text-sm text-foreground/75">
              {inMalayalam
                ? "ഓരോ ചടങ്ങിനും അനുയോജ്യമായ പ്രൊഫഷണൽ സ്റ്റൈലുകൾ"
                : "Tailored draping techniques for every ceremony and fabric type"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drapeStyles.map((style, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-primary/20 bg-card p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary mb-4">
                    <Sparkle className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-foreground mb-2">
                    {inMalayalam ? style.title.ml : style.title.en}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-4">
                    {inMalayalam ? style.desc.ml : style.desc.en}
                  </p>
                  <ul className="space-y-2 text-xs text-foreground/80 mb-6">
                    {style.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{inMalayalam ? feat.ml : feat.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/917356483404?text=${encodeURIComponent(
                    `Hi Jaqilin, I am interested in booking: ${style.title.en} in Thiruvananthapuram.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  onClick={() => {
                    event({
                      action: "click_service_inquiry",
                      category: "conversion",
                      label: style.title.en,
                      service_name: style.title.en,
                      placement: "saree_draping_cards",
                      value: 1,
                    });
                  }}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>{inMalayalam ? "ഈ സ്റ്റൈൽ ചോദിക്കൂ" : "Inquire This Style"}</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pre-Pleating Highlight Card */}
        <section className="mt-12 sm:mt-16 rounded-3xl border border-primary/20 bg-card/75 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {inMalayalam ? "✨ സമയം ലാഭിക്കാം" : "✨ 5-Minute Wedding Morning Wear"}
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
                {inMalayalam ? "അഡ്വാൻസ് സാരി പ്രീ-പ്ലീറ്റിംഗ് & അയണിംഗ്" : "Advance Saree Pre-Pleating Service"}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 max-w-xl">
                {inMalayalam
                  ? "വിവാഹത്തിന് മുൻപ് സാരി കൃത്യമായ അളവിൽ പ്രീ-പ്ലീറ്റ് ചെയ്ത് ബോക്സ് ഫോൾഡ് ചെയ്തു തരുന്നു. കല്യാണ ദിവസം ടെൻഷനില്ലാതെ വെറും 5 മിനിറ്റിനുള്ളിൽ സാരി പെർഫെക്റ്റായി ഉടുക്കാം."
                  : "We pre-pleat, iron, and box-fold your wedding sarees in advance. On your wedding day, simply wrap and pin in 5 minutes with zero stress or rush."}
              </p>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 shadow-sm shrink-0"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span>{inMalayalam ? "പ്രീ-പ്ലീറ്റിംഗ് വിവരങ്ങൾ ചോദിക്കൂ" : "Check Pre-Pleating Details"}</span>
              </a>
            </Button>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 sm:mt-16">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">
            {inMalayalam ? "സാരി ഡ്രേപ്പിംഗ് സംശയങ്ങൾ" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-sm">
                <h3 className="font-headline text-base sm:text-lg font-bold text-foreground mb-2">
                  {inMalayalam ? faq.q.ml : faq.q.en}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  {inMalayalam ? faq.a.ml : faq.a.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Areas Grid */}
        <section className="mt-12 sm:mt-16 text-center">
          <h2 className="font-headline text-lg sm:text-xl font-bold text-foreground mb-3">
            {inMalayalam ? "സർവീസ് ലഭ്യമായ പ്രധാന സ്ഥലങ്ങൾ" : "Locations Served Across Thiruvananthapuram"}
          </h2>
          <div className="flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
            {localities.map((loc) => (
              <span
                key={loc}
                className="px-3 py-1 rounded-full bg-card border border-border/60 text-xs text-foreground/75"
              >
                {loc}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
