import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Noto_Sans_Malayalam, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/scroll-to-top";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/analytics";
import CookieConsent from "@/components/cookie-consent";
import LocaleProvider from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { getRequestLocale } from "@/lib/locale-server";
import { buildSocialMetadata } from "@/lib/metadata";
import MobileStickyBar from "@/components/mobile-sticky-bar";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const title = inMalayalam
    ? "ബ്രൈഡൽ മേക്കപ്പ് Trivandrum | ജാകിലിൻ മേക്കോവർ"
    : "Bridal Makeup Artist in Trivandrum | Jaqilin Makeover";
  const description = inMalayalam
    ? "Bridal makeup artist in Trivandrum. തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ്. വീട്ടിലും വേദിയിലും സർവീസ്. തീയതി WhatsApp-ൽ ചോദിക്കൂ."
    : "Bridal makeup artist in Trivandrum (Thiruvananthapuram) for natural, long-wear wedding makeup, hair styling and saree draping. Home & venue service.";
  const { openGraph, twitter } = buildSocialMetadata();

  return {
    metadataBase: new URL("https://www.jaqilinmakeover.com"),
    title,
    description,
    keywords: [
      "bridal makeup artist in thiruvananthapuram",
      "wedding makeup artist trivandrum",
      "bridal makeup trivandrum",
      "home service bridal makeup kerala",
      "saree draping services trivandrum",
      "jaqilin makeover",
      "makeup artist trivandrum",
      "engagement makeup trivandrum",
      "reception makeup trivandrum",
      "hd bridal makeup trivandrum",
      "kerala christian bridal makeup",
      "kerala hindu bridal makeup",
      "kerala muslim bridal makeup",
      "TVM ബ്രൈഡൽ മേക്കപ്പ്",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph,
    twitter,
    facebook: {
      appId: "1408777984626519",
    },
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif",
});
const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  variable: "--font-noto-malayalam",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "BeautySalon"],
    "@id": "https://www.jaqilinmakeover.com/#business",
    name: "Jaqilin Makeover",
    url: "https://www.jaqilinmakeover.com",
    image: "https://www.jaqilinmakeover.com/logo.png",
    telephone: "+91 73564 83404",
    email: "contact@jaqilinmakeover.com",
    priceRange: "₹",
    description: inMalayalam
      ? "തിരുവനന്തപുരം, കാഞ്ഞിരംകുളം, നെയ്യാറ്റിൻകര, കാട്ടാക്കട, കോവളം ഉൾപ്പെടെയുള്ള പ്രദേശങ്ങളിൽ ബ്രൈഡൽ ബ്യൂട്ടീഷ്യൻ, മേക്കപ്പ്, ഗസ്റ്റ് മേക്കപ്പ്, ഹെയർസ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ് സേവനങ്ങൾ നൽകുന്ന ഫ്രീലാൻസ് ബ്രൈഡൽ ആർട്ടിസ്റ്റ്."
      : "Freelance bridal makeup artist and bridal beautician offering wedding makeup, pennorukkal, guest makeup, hairstyling, and saree draping services across Kanjiramkulam, Neyyattinkara, Kattakada, Kowdiar, and all of Thiruvananthapuram.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suku Cottage, Nellikakuzhi, Manaveli, Kanjiramkulam",
      addressLocality: "Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695524",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.3599366,
      longitude: 77.0607978,
    },
    hasMap: "https://maps.google.com/maps?cid=16246917355789142726",
    areaServed: [
      { "@type": "City", name: "Kanjiramkulam" },
      { "@type": "City", name: "Thiruvananthapuram" },
      { "@type": "City", name: "Neyyattinkara" },
      { "@type": "City", name: "Kattakada" },
      { "@type": "City", name: "Balaramapuram" },
      { "@type": "City", name: "Kovalam" },
      { "@type": "City", name: "Vizhinjam" },
      { "@type": "City", name: "Poovar" },
      { "@type": "City", name: "Nellimoodu" },
      { "@type": "City", name: "Azhimala" },
      { "@type": "City", name: "Chowara" },
      { "@type": "City", name: "Nellikkakuzhi" },
      { "@type": "City", name: "Kannaravila" },
      { "@type": "City", name: "Venganoor" },
      { "@type": "City", name: "Thirupuram" },
      { "@type": "City", name: "Amaravila" },
      { "@type": "City", name: "Parassala" },
      { "@type": "City", name: "Malayinkeezhu" },
      { "@type": "City", name: "Maranalloor" },
      { "@type": "City", name: "Kallikkadu" },
      { "@type": "City", name: "Peyyad" },
      { "@type": "City", name: "Perukavu" },
      { "@type": "City", name: "Vellarada" },
      { "@type": "City", name: "Thampanoor" },
      { "@type": "City", name: "Palayam" },
      { "@type": "City", name: "Kowdiar" },
      { "@type": "City", name: "Sasthamangalam" },
      { "@type": "City", name: "Peroorkada" },
      { "@type": "City", name: "Thirumala" },
      { "@type": "City", name: "Pappanamcode" },
      { "@type": "City", name: "Kaimanam" },
      { "@type": "City", name: "Karamana" },
      { "@type": "City", name: "Vellayani" },
      { "@type": "City", name: "Nemom" },
      { "@type": "City", name: "Kochu Veli" },
      { "@type": "City", name: "Kazhakoottam" },
      { "@type": "City", name: "Chirayinkeezhu" },
      { "@type": "City", name: "Kadakkavoor" },
      { "@type": "City", name: "Anjengo" },
      { "@type": "City", name: "Attingal" },
      { "@type": "City", name: "Nedumangad" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    inLanguage: ["ml-IN", "en-IN"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Guest Makeup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hair Styling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Saree Draping",
          },
        },
      ],
    },
    sameAs: [
      "https://maps.google.com/maps?cid=16246917355789142726",
      "https://www.instagram.com/jaqilinmua/",
      "https://www.facebook.com/jaqilinmua",
      "https://www.wedmegood.com/profile/Jaqilin-Makeover-25886362",
    ],
  };

  return (
    <html
      lang={locale}
      className={`${notoSerif.variable} ${notoMalayalam.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta property="fb:app_id" content="1408777984626519" />
        <meta
          property="og:logo"
          content="https://www.jaqilinmakeover.com/logo.png"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased pb-16 md:pb-0",
        )}
      >
        <LocaleProvider initialLocale={locale}>
          {children}
          <MobileStickyBar />
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Toaster />
        <ScrollToTop />
        <VercelAnalytics />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
