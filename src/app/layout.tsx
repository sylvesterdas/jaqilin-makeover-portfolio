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
    ? "TVM ബ്രൈഡൽ മേക്കപ്പ് | ജാകിലിൻ മേക്കോവർ"
    : "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover";
  const description = inMalayalam
    ? "TVM bridal makeup, hair styling, saree draping. WhatsApp booking."
    : "Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling and saree draping. Home and venue service. Book on WhatsApp.";
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
      "guest makeup thiruvananthapuram",
      "saree draping services trivandrum",
      "kerala bridal makeup artist",
      "jaqilin makeover",
      "bridal makeup kanjiramkulam",
      "bridal makeup neyyattinkara",
      "bridal makeup kattakada",
      "bridal makeup kowdiar",
      "bridal makeup thampanoor",
      "bridal makeup palayam",
      "bridal makeup sasthamangalam",
      "bridal makeup peroorkada",
      "bridal makeup thirumala",
      "bridal makeup pappanamcode",
      "bridal makeup kaimanam",
      "bridal makeup karamana",
      "bridal makeup vellayani",
      "bridal makeup peyyad",
      "bridal makeup perukavu",
      "bridal makeup kallikkadu",
      "bridal makeup venganoor",
      "bridal makeup azhimala",
      "bridal makeup chowara",
      "bridal makeup nellikkakuzhi",
      "bridal makeup kannaravila",
      "bridal makeup vizhinjam",
      "bridal makeup kovalam",
      "bridal makeup poovar",
      "bridal makeup nellimoodu",
      "bridal makeup balaramapuram",
      "bridal makeup chirayinkeezhu",
      "bridal makeup anjengo",
      "bridal makeup kadakkavoor",
      "bridal makeup kochu veli",
      "bridal makeup kazhakoottam",
      "TVM ബ്രൈഡൽ മേക്കപ്പ്",
      "കാഞ്ഞിരംകുളം മേക്കപ്പ് ആർട്ടിസ്റ്റ്",
      "നെയ്യാറ്റിൻകര ബ്രൈഡൽ മേക്കപ്പ്",
      "കാട്ടാക്കട ബ്രൈഡൽ മേക്കപ്പ്",
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
    "@type": "ProfessionalService",
    "@id": "https://www.jaqilinmakeover.com/#business",
    name: "Jaqilin Makeover",
    url: "https://www.jaqilinmakeover.com",
    image: "https://www.jaqilinmakeover.com/logo.png",
    telephone: "+91 73564 83404",
    email: "contact@jaqilinmakeover.com",
    priceRange: "₹",
    description: inMalayalam
      ? "തിരുവനന്തപുരം, കാഞ്ഞിരംകുളം, നെയ്യാറ്റിൻകര, കാട്ടാക്കട, കോവളം ഉൾപ്പെടെയുള്ള പ്രദേശങ്ങളിൽ ബ്രൈഡൽ മേക്കപ്പ്, ഗസ്റ്റ് മേക്കപ്പ്, ഹെയർസ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ് സേവനങ്ങൾ നൽകുന്ന ഫ്രീലാൻസ് മേക്കപ്പ് ആർട്ടിസ്റ്റ്."
      : "Freelance bridal makeup artist offering bridal makeup, guest makeup, hairstyling, and saree draping services across Kanjiramkulam, Neyyattinkara, Kattakada, Kowdiar, and all of Thiruvananthapuram.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kanjiramkulam",
      addressLocality: "Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695524",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.3547,
      longitude: 77.0519,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
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
          "min-h-screen bg-background font-body text-foreground antialiased",
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
