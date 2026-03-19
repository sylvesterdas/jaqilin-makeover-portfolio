
import type { Metadata } from 'next';
import ConnectContent from '@/components/connect-content';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'Contact Jaqilin Makeover - Call, WhatsApp, or Instagram';
  const englishDescription =
    'Contact Jaqilin Makeover through call, WhatsApp, Instagram, or website.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/connect',
  });

  return {
    title: inMalayalam
      ? 'Jaqilin Makeover - WhatsApp / Call'
      : englishTitle,
    description: inMalayalam
      ? 'WhatsApp അല്ലെങ്കിൽ Call.'
      : englishDescription,
    alternates: {
      canonical: '/connect',
    },
    openGraph,
    twitter,
  };
}


export default function ConnectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ConnectContent />
      </main>
      <Footer />
    </div>
  );
}
