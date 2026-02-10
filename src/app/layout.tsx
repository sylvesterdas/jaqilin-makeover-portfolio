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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const title = inMalayalam
    ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ് | ജാകിലിൻ മേക്കോവർ"
    : "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover";
  const description = inMalayalam
    ? "തിരുവനന്തപുരം, കാഞ്ഞിരംകുളം മേഖലയിലെ പ്രൊഫഷണൽ ബ്രൈഡൽ മേക്കപ്പ്. ലോങ്-വെയർ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ്. WhatsApp-ൽ ബുക്ക് ചെയ്യാം."
    : "Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling and saree draping. Home and venue service. Book on WhatsApp.";

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
      "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ്",
      "കാഞ്ഞിരംകുളം മേക്കപ്പ് ആർട്ടിസ്റ്റ്",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: "https://www.jaqilinmakeover.com",
      siteName: "Jaqilin Makeover",
      images: [
        {
          url: "/images/hero-background.jpg",
          width: 1200,
          height: 630,
          alt: "Bridal makeup by Jaqilin Makeover",
        },
      ],
      locale: inMalayalam ? "ml_IN" : "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-background.jpg"],
      creator: "@jaqilinmua",
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
      ? "തിരുവനന്തപുരം മേഖലയിലെ ബ്രൈഡൽ മേക്കപ്പ്, ഗസ്റ്റ് മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ് സേവനങ്ങൾ."
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
