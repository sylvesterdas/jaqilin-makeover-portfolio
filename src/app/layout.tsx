import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jaqilinmakeover.com'),
  title: 'Jaqilin Makeover | Professional Makeup Artist in Trivandrum',
  description:
    'Jaqilin Makeover offers professional wedding makeup, guest makeup, saree draping, and fashion show preparation services in Trivandrum, Kollam, and Nagercoil. Based in Trivandrum.',
  keywords: [
    'makeup artist trivandrum',
    'wedding makeup trivandrum',
    'bridal makeup trivandrum',
    'guest makeup kollam',
    'saree draping nagercoil',
    'fashion show makeup trivandrum',
    'Jaqilin Makeover',
    'LJS Works',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jaqilin Makeover | Professional Makeup Artist in Trivandrum',
    description: 'Elegant and professional makeup services for weddings, events, and fashion shows in and around Trivandrum.',
    url: 'https://www.jaqilinmakeover.com',
    siteName: 'Jaqilin Makeover',
    images: [
      {
        url: '/images/hero-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Bridal makeup by Jaqilin Makeover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jaqilin Makeover',
    image: 'https://www.jaqilinmakeover.com/logo.jpg',
    '@id': 'https://www.jaqilinmakeover.com',
    url: 'https://www.jaqilinmakeover.com',
    telephone: '+91 73564 83404',
    email: 'contact@jaqilinmua.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kanjiramkulam',
      addressLocality: 'Trivandrum',
      addressRegion: 'KL',
      postalCode: '695524',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.3934,
      longitude: 77.056,
    },
    description: 'Professional makeup artist specializing in wedding makeovers, guest makeup, and saree draping.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: ['https://www.instagram.com/jaqilinmua'],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
