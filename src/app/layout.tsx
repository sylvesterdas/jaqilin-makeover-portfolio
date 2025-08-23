import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
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
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
