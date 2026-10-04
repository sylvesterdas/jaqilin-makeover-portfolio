"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import StructuredData from "@/components/structured-data";
import { buildBreadcrumbSchema } from "@/lib/schema";
import WhatsAppCta from "@/components/whatsapp-cta";
import { getPhoneTelUrl, DISPLAY_PHONE_NUMBER } from "@/lib/contact-links";
import { trackCallClick } from "@/lib/events";


const localities = [
  "Kanjiramkulam",
  "Nellimoodu",
  "Poovar",
  "Balaramapuram",
  "Vizhinjam",
  "Kovalam",
  "Azhimala",
  "Chowara",
  "Nellikkakuzhi",
  "Kannaravila",
  "Venganoor",
  "Thirupuram",
  "Neyyattinkara",
  "Amaravila",
  "Parassala",
  "Kattakada",
  "Malayinkeezhu",
  "Maranalloor",
  "Kallikkadu",
  "Peyyad",
  "Perukavu",
  "Vellarada",
  "Thampanoor",
  "Palayam",
  "Kowdiar",
  "Sasthamangalam",
  "Peroorkada",
  "Thirumala",
  "Pappanamcode",
  "Kaimanam",
  "Karamana",
  "Vellayani",
  "Nemom",
  "Kochu Veli",
  "Kazhakoottam",
  "Chirayinkeezhu",
  "Kadakkavoor",
  "Anjengo",
  "Attingal",
  "Nedumangad",
  "Thiruvananthapuram",
];

const faqs = [
  {
    q: {
      en: "Do you do makeup for Hindu, Christian, and Muslim weddings?",
      ml: "ഹിന്ദു, ക്രിസ്ത്യൻ, മുസ്ലീം വിവാഹങ്ങൾക്ക് മേക്കപ്പ് ചെയ്യുമോ?",
    },
    a: {
      en: "Yes. Looks are planned for Hindu Muhurtham, Christian church weddings with veil setting, and Muslim Nikah and reception functions, matched to your outfit, jewellery, and family traditions.",
      ml: "അതെ. ഹിന്ദു മുഹൂർത്തം, ക്രിസ്ത്യൻ പള്ളി കല്യാണം (വെയിൽ സെറ്റിംഗ് ഉൾപ്പെടെ), മുസ്ലീം നിക്കാഹ്, റിസപ്ഷൻ എന്നിവയ്ക്ക് ഡ്രസ്സ്, ആഭരണങ്ങൾ, കുടുംബ രീതികൾ എന്നിവ നോക്കി ലുക്ക് തയ്യാറാക്കുന്നു.",
    },
  },
  {
    q: {
      en: "Will the bridal makeup last in Kerala heat and humidity?",
      ml: "ചൂടിലും വിയർപ്പിലും മേക്കപ്പ് നിലനിൽക്കുമോ?",
    },
    a: {
      en: "The bridal base is HD, sweat-proof, and water-resistant, so it stays fresh through the ceremony, photos, and reception without looking heavy.",
      ml: "HD സ്വെറ്റ്-പ്രൂഫ്, വാട്ടർ-റെസിസ്റ്റന്റ് ബ്രൈഡൽ ബേസ് ആണ് ഉപയോഗിക്കുന്നത്. ചടങ്ങിലും ഫോട്ടോയിലും റിസപ്ഷനിലും ഹെവി ആയി തോന്നാതെ ഫ്രഷ് ആയി നിൽക്കും.",
    },
  },
  {
    q: {
      en: "Which makeup brands do you use?",
      ml: "ഏതൊക്കെ മേക്കപ്പ് ബ്രാൻഡുകളാണ് ഉപയോഗിക്കുന്നത്?",
    },
    a: {
      en: "Professional brands such as Estée Lauder, NARS, MAC, and Huda Beauty, chosen to suit the bride's skin type. Please mention any skin allergies in advance.",
      ml: "Estée Lauder, NARS, MAC, Huda Beauty തുടങ്ങിയ പ്രൊഫഷണൽ ബ്രാൻഡുകൾ, വധുവിന്റെ സ്കിൻ ടൈപ്പ് നോക്കി തിരഞ്ഞെടുക്കുന്നു. സ്കിൻ അലർജി ഉണ്ടെങ്കിൽ മുൻകൂട്ടി അറിയിക്കുക.",
    },
  },
  {
    q: {
      en: "How much does bridal makeup cost in Trivandrum?",
      ml: "തിരുവനന്തപുരത്ത് ബ്രൈഡൽ മേക്കപ്പിന് എത്ര ചാർജ് ആകും?",
    },
    a: {
      en: "It depends on the package — the number of functions, how many people need makeup, and the venue distance. Send your wedding date and venue on WhatsApp for an exact package quote.",
      ml: "എത്ര ഫങ്ഷനുകൾ, എത്ര പേർക്ക് മേക്കപ്പ്, വേദിയിലേക്കുള്ള ദൂരം എന്നിവ അനുസരിച്ചാണ് പാക്കേജ് റേറ്റ്. വിവാഹ തീയതിയും സ്ഥലവും WhatsApp-ൽ അയച്ചാൽ കൃത്യമായ റേറ്റ് അറിയിക്കും.",
    },
  },
  {
    q: {
      en: "Do you come to the bride's home or the wedding venue?",
      ml: "വധുവിന്റെ വീട്ടിലോ വിവാഹ വേദിയിലോ വന്ന് മേക്കപ്പ് ചെയ്യുമോ?",
    },
    a: {
      en: "Yes. Home and venue service is available across Thiruvananthapuram district, including Kanjiramkulam, Neyyattinkara, Balaramapuram, Kovalam, Kazhakoottam, and Attingal. Arrival is planned on time so the bride gets ready without rushing.",
      ml: "അതെ. കാഞ്ഞിരംകുളം, നെയ്യാറ്റിൻകര, ബാലരാമപുരം, കോവളം, കഴക്കൂട്ടം, ആറ്റിങ്ങൽ ഉൾപ്പെടെ തിരുവനന്തപുരം ജില്ലയിലുടനീളം വീട്ടിലും വേദിയിലും സേവനം ലഭ്യമാണ്. വധുവിന് തിരക്കില്ലാതെ ഒരുങ്ങാൻ കൃത്യസമയത്ത് എത്തിച്ചേരും.",
    },
  },
  {
    q: {
      en: "Is Jaqilin a certified makeup artist?",
      ml: "ജാകിലിൻ സർട്ടിഫൈഡ് മേക്കപ്പ് ആർട്ടിസ്റ്റ് ആണോ?",
    },
    a: {
      en: "Yes. Jaqilin is a Lakmé certified bridal makeup artist based in Kanjiramkulam, Thiruvananthapuram.",
      ml: "അതെ. കാഞ്ഞിരംകുളം, തിരുവനന്തപുരം ആസ്ഥാനമായുള്ള Lakmé സർട്ടിഫൈഡ് ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ് ആണ് ജാകിലിൻ.",
    },
  },
  {
    q: {
      en: "Do you offer a trial makeup session?",
      ml: "ട്രയൽ മേക്കപ്പ് ചെയ്തു തരുമോ?",
    },
    a: {
      en: "No, trial makeup is not offered. You can share photos of looks you like and your outfit on WhatsApp before the wedding, and the look is planned with you.",
      ml: "ഇല്ല, ട്രയൽ മേക്കപ്പ് ഇല്ല. ഇഷ്ടപ്പെട്ട ലുക്കുകളുടെ ഫോട്ടോയും ഡ്രസ്സും വിവാഹത്തിന് മുൻപ് WhatsApp-ൽ അയച്ചാൽ, അതനുസരിച്ച് ലുക്ക് ഒരുമിച്ച് പ്ലാൻ ചെയ്യാം.",
    },
  },
  {
    q: {
      en: "How do I book my wedding date?",
      ml: "വിവാഹ തീയതി എങ്ങനെ ബുക്ക് ചെയ്യാം?",
    },
    a: {
      en: "Send your wedding date, venue, function type, and the number of people who need makeup on WhatsApp. Availability and package details are shared there, and the date is booked with an advance of at least 20% of the total quote.",
      ml: "വിവാഹ തീയതി, സ്ഥലം, ഫങ്ഷൻ, എത്ര പേർക്ക് മേക്കപ്പ് വേണം എന്നിവ WhatsApp-ൽ അയയ്ക്കൂ. ലഭ്യതയും പാക്കേജ് വിവരങ്ങളും അറിയിക്കും; ആകെ റേറ്റിന്റെ കുറഞ്ഞത് 20% അഡ്വാൻസ് നൽകി തീയതി ബുക്ക് ചെയ്യാം.",
    },
  },
];

export default function BridalMakeupTvmContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Bridal Makeup Artist in Trivandrum",
      path: "/bridal-makeup-artist-thiruvananthapuram",
    },
  ]);

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
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />

      <section className="border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
              {inMalayalam
                ? "തിരുവനന്തപുരം ജില്ലാ സേവനം"
                : "Trivandrum (Thiruvananthapuram) District Service"}
            </p>
            <h1 className="mt-4 font-headline text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              {inMalayalam
                ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്"
                : "Bridal Makeup Artist in Trivandrum"}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg">
              {inMalayalam
                ? "വിവാഹം, എൻഗേജ്മെന്റ്, റിസപ്ഷൻ, ഫാമിലി ഫങ്ഷൻ എന്നിവയ്ക്കായി bridal makeup, wedding makeup, hair styling, saree draping സേവനങ്ങൾ. വീട്ടിലോ വേദിയിലോ എത്തിച്ചേരുന്ന ബുക്കിംഗ് പിന്തുണ."
                : "Freelance bridal makeup and wedding makeup services in Thiruvananthapuram for engagements, receptions, and family functions, with hairstyling and saree draping support at home or venue."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppCta placement="landing:bridal-tvm" service={inMalayalam ? "ബ്രൈഡൽ മേക്കപ്പ്" : "bridal makeup in Thiruvananthapuram"} size="lg" />
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {inMalayalam ? "ബ്രൈഡൽ വർക്ക് കാണൂ" : "View Bridal Work"}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-3xl border border-primary/20 bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-headline text-2xl font-bold text-primary sm:text-3xl">
              {inMalayalam
                ? "എന്തുകൊണ്ട് ജാകിലിൻ മേക്കോവർ"
                : "Why Brides Choose Jaqilin Makeover"}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-foreground/80 sm:text-base">
              <p>
                {inMalayalam
                  ? "Heavy-looking makeup അല്ലാതെ ഫോട്ടോയിലും നേരിലും മനോഹരമായി കാണുന്ന clean bridal finish ആണ് പ്രധാന ശ്രദ്ധ."
                  : "The focus is on bridal looks that feel polished and long-wearing without becoming heavy in person or in photos, which is what many brides search for as the best makeup artist in Trivandrum."}
              </p>
              <p>
                {inMalayalam
                  ? "Bride, family timing, venue travel, function flow എന്നിവ മനസ്സിലാക്കി package guidance നൽകുന്നു."
                  : "Each booking is planned around your wedding timing, venue logistics, and the number of people who need makeup support."}
              </p>
              <p>
                {inMalayalam
                  ? "Kerala wedding functions ന് match ചെയ്യുന്ന hairstyle, saree draping, guest makeup support ലഭ്യമാണ്."
                  : "Services are tailored for Kerala wedding events, including bridal hairstyling, saree draping, and guest or family makeup across Trivandrum and nearby areas."}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-6 shadow-sm sm:p-8">
            <div className="rounded-[28px] border border-dashed border-primary/30 bg-background/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                {inMalayalam ? "സേവന പരിധി" : "Service Area"}
              </p>
              <h2 className="mt-3 font-headline text-2xl font-bold text-primary">
                {inMalayalam
                  ? "തിരുവനന്തപുരം ജില്ലയിലെ സേവനം"
                  : "Serving Across Thiruvananthapuram District"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-foreground/75">
                {inMalayalam
                  ? "വീട്ടിലെ exact location കാണിക്കാതെ, തിരുവനന്തപുരം ജില്ലയിലുടനീളമുള്ള bridal makeup, wedding makeup ബുക്കിംഗുകൾക്കായി സേവനം ലഭ്യമാണ്."
                  : "This page shows district-level coverage only, so brides searching for bridal makeup, wedding makeup, hairstyling, or saree draping in Thiruvananthapuram can understand the service area without exposing a precise home address."}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                {localities.map((locality) => (
                  <div
                    key={locality}
                    className="rounded-full border border-primary/20 bg-card px-3 py-2 text-center font-medium text-foreground/80"
                  >
                    {locality}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-medium text-primary">
                {inMalayalam
                  ? "Venue distance, timing, and function schedule അനുസരിച്ച് travel confirmation ലഭിക്കും."
                  : "Travel confirmation depends on venue distance, call time, and event schedule."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/70 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-background p-6 shadow-sm sm:p-10">
            <h2 className="font-headline text-2xl font-bold text-primary sm:text-3xl">
              {inMalayalam
                ? "സേവനങ്ങൾ"
                : "Popular Bridal and Wedding Makeup Services in Trivandrum"}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 p-4">
                <h3 className="font-headline text-xl text-primary">
                  {inMalayalam ? "ബ്രൈഡൽ മേക്കപ്പ്" : "Bridal Makeup"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {inMalayalam
                    ? "Wedding day ന് long-wear finish, skin tone balance, and event-ready look."
                    : "Wedding-day bridal makeup designed for a fresh, balanced finish that lasts through the ceremony and photos."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <h3 className="font-headline text-xl text-primary">
                  {inMalayalam ? "ഹെയർ സ്റ്റൈലിംഗ്" : "Hair Styling"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {inMalayalam
                    ? "Veil, flowers, jewellery, and outfit ന് match ചെയ്യുന്ന styling."
                    : "Bridal hair styling matched to the outfit, veil, flowers, jewellery, and the function style."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <h3 className="font-headline text-xl text-primary">
                  {inMalayalam ? "സാരി ഡ്രേപ്പിംഗ്" : "Saree Draping"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {inMalayalam
                    ? "Bride, sister, mother, guest എന്നിവർക്കായി neat draping support."
                    : "Neat saree draping support for the bride, mother, sisters, or wedding guests attending the function."}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <h3 className="font-headline text-xl text-primary">
                  {inMalayalam ? "ഗസ്റ്റ് മേക്കപ്പ്" : "Guest Makeup"}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {inMalayalam
                    ? "Reception, engagement, and family function makeup packages."
                    : "Simple, elegant guest makeup packages for engagement, reception, and family function looks."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-headline text-2xl font-bold text-primary sm:text-3xl">
            {inMalayalam ? "ബ്രൈഡൽ മേക്കപ്പ് സംശയങ്ങൾ" : "Bridal Makeup FAQs"}
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q.en} className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm sm:p-6">
                <h3 className="mb-2 font-headline text-base font-bold text-foreground sm:text-lg">
                  {inMalayalam ? faq.q.ml : faq.q.en}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  {inMalayalam ? faq.a.ml : faq.a.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/70 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-primary/25 bg-primary/5 p-6 text-center shadow-sm sm:p-10">
            <h2 className="font-headline text-2xl font-bold text-primary sm:text-3xl">
              {inMalayalam
                ? "ബ്രൈഡൽ മേക്കപ്പ് ബുക്കിംഗ് ചോദിക്കൂ"
                : "Ask About Bridal Makeup Booking"}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-foreground/80 sm:text-base">
              {inMalayalam
                ? "Wedding date, venue, function type, എത്ര പേർക്ക് makeup വേണം എന്നിവ WhatsApp ൽ അയയ്ക്കൂ. അതനുസരിച്ച് package details പങ്കുവെക്കും."
                : "Send the wedding date, venue, function type, and number of people on WhatsApp for package guidance and availability confirmation."}
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppCta placement="landing:bridal-tvm:end" service={inMalayalam ? "ബ്രൈഡൽ മേക്കപ്പ്" : "bridal makeup in Thiruvananthapuram"} size="lg">
                {inMalayalam ? "WhatsApp ബുക്കിംഗ് ചോദിക്കൂ" : "WhatsApp Booking Inquiry"}
              </WhatsAppCta>
              <a
                href={getPhoneTelUrl()}
                onClick={() => trackCallClick("landing:bridal-tvm")}
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {inMalayalam ? "കോൾ ചെയ്യൂ" : `Call ${DISPLAY_PHONE_NUMBER}`}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
