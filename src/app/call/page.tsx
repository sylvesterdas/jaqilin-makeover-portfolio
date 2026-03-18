
import Header from '@/components/header';
import Footer from '@/components/footer';
import CallContent from '@/components/call-content';
import type { Metadata } from 'next';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'Call Jaqilin Makeover';
  const englishDescription = 'Contact Jaqilin Makeover directly by phone.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/call',
  });

  return {
    title: inMalayalam ? 'ജാകിലിൻ മേക്കോവർ - ഫോൺ കോൾ' : englishTitle,
    description: inMalayalam
      ? 'ജാകിലിൻ മേക്കോവറുമായി നേരിട്ട് ഫോൺ വഴി ബന്ധപ്പെടുക.'
      : englishDescription,
    alternates: {
      canonical: '/call',
    },
    openGraph,
    twitter,
  };
}

export default function CallPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center pt-20 sm:pt-24 md:pt-32">
        <CallContent />
      </main>
      <Footer />
    </div>
  );
}
