"use client";

import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import StructuredData from "@/components/structured-data";
import { buildBreadcrumbSchema } from "@/lib/schema";

const whatsappUrl =
  "https://wa.me/917356483404?text=Hi%2C%20I%20want%20to%20check%20availability%20for%20bridal%20makeup%20in%20Thiruvananthapuram.";

const localities = [
  "Kanjiramkulam",
  "Nellimoodu",
  "Poovar",
  "Balaramapuram",
  "Vizhinjam",
  "Kovalam",
  "Venganoor",
  "Thirupuram",
  "Neyyattinkara",
  "Amaravila",
  "Parassala",
  "Kattakada",
  "Malayinkeezhu",
  "Maranalloor",
  "Vellarada",
  "Thiruvananthapuram",
  "Kazhakoottam",
];

export default function BridalMakeupTvmContent() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    {
      name: "Bridal Makeup Artist in Thiruvananthapuram",
      path: "/bridal-makeup-artist-thiruvananthapuram",
    },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <section className="border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
              {inMalayalam
                ? "തിരുവനന്തപുരം ജില്ലാ സേവനം"
                : "Thiruvananthapuram District Service"}
            </p>
            <h1 className="mt-4 font-headline text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              {inMalayalam
                ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്"
                : "Bridal Makeup Artist in Thiruvananthapuram"}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-foreground/80 sm:text-lg">
              {inMalayalam
                ? "വിവാഹം, എൻഗേജ്മെന്റ്, റിസപ്ഷൻ, ഫാമിലി ഫങ്ഷൻ എന്നിവയ്ക്കായി bridal makeup, wedding makeup, hair styling, saree draping സേവനങ്ങൾ. വീട്ടിലോ വേദിയിലോ എത്തിച്ചേരുന്ന ബുക്കിംഗ് പിന്തുണ."
                : "Freelance bridal makeup and wedding makeup services in Thiruvananthapuram for engagements, receptions, and family functions, with hairstyling and saree draping support at home or venue."}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {inMalayalam
                  ? "WhatsApp വഴി തീയതി ചോദിക്കൂ"
                  : "Check Date on WhatsApp"}
              </a>
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
                : "Popular Bridal and Wedding Makeup Services in Thiruvananthapuram"}
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
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {inMalayalam
                  ? "WhatsApp ബുക്കിംഗ് ചോദിക്കൂ"
                  : "WhatsApp Booking Inquiry"}
              </a>
              <a
                href="tel:+917356483404"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {inMalayalam ? "കോൾ ചെയ്യൂ" : "Call +91 73564 83404"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
