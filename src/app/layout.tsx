import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Alegreya, Belleza, Noto_Sans_Malayalam } from "next/font/google";
import './globals.css';
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/scroll-to-top";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Analytics from "@/components/analytics";
import CookieConsent from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaqilinmakeover.com"),
  title: "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover",
  description:
    "Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling & saree draping. Home & venue service. Book on WhatsApp.",
  keywords: [
    "bridal makeup artist in thiruvananthapuram",
    "wedding makeup artist trivandrum",
    "bridal makeup trivandrum",
    "home service bridal makeup",
    "guest makeup thiruvananthapuram",
    "saree draping services trivandrum",
    "kerala bridal makeup artist",
    "jaqilin makeover",
  ],
  openGraph: {
    title: "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover",
    description:
      "Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling & saree draping. Home & venue service. Book on WhatsApp.",
    url: "https://www.jaqilinmakeover.com",
    siteName: "Jaqilin Makeover",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Bridal makeup by Jaqilin Makeover",
      },
      {
        url: "/images/hero-background1.jpg",
        width: 1200,
        height: 630,
        alt: "Stunning bridal look by Jaqilin Makeover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaqilin Makeover | Professional Makeup Artist in Trivandrum",
    description:
      "Elegant and professional makeup services for weddings, events, and fashion shows in and around Trivandrum.",
    images: ["/images/hero-background.jpg"],
    creator: "@jaqilinmua",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const belleza = Belleza({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-belleza",
});
const notoMalayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  variable: "--font-noto-malayalam",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    description:
      "Professional makeup artist specializing in wedding makeovers, guest makeup, and saree draping.",
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
    sameAs: ["https://www.instagram.com/jaqilinmua"],
  };

  return (
    <html
      lang="en-IN"
      className={`dark ${alegreya.variable} ${belleza.variable} ${notoMalayalam.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased",
        )}
      >
        {children}
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
