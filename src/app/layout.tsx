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
      "home service bridal makeup",
      "guest makeup thiruvananthapuram",
      "saree draping services trivandrum",
      "kerala bridal makeup artist",
      "jaqilin makeover",
      "TVM ബ്രൈഡൽ മേക്കപ്പ്",
      "കാഞ്ഞിരംകുളം മേക്കപ്പ് ആർട്ടിസ്റ്റ്",
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
    name: "Jaqilin Makeover",
    image: "https://www.jaqilinmakeover.com/logo.png",
    "@id": "https://www.jaqilinmakeover.com",
    url: "https://www.jaqilinmakeover.com",
    telephone: "+91 73564 83404",
    email: "contact@jaqilinmakeover.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kanjiramkulam",
      addressLocality: "Trivandrum",
      addressRegion: "KL",
      postalCode: "695524",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.3934,
      longitude: 77.056,
    },
    description: inMalayalam
      ? "TVM bridal makeup, hair styling, saree draping."
      : "Professional makeup artist specializing in wedding makeovers, guest makeup, and saree draping.",
    areaServed: [
      "Thiruvananthapuram",
      "Kanjiramkulam",
      "Neyyattinkara",
      "Kerala",
    ],
    priceRange: "₹",
    serviceType: [
      "Bridal Makeup",
      "Guest Makeup",
      "Hair Styling",
      "Saree Draping",
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
        <SpeedInsights />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
