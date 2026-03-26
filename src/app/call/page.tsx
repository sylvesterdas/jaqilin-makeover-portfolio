
import Header from '@/components/header';
import Footer from '@/components/footer';
import CallContent from '@/components/call-content';
import type { Metadata } from 'next';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';
import StructuredData from '@/components/structured-data';
import { buildBreadcrumbSchema } from '@/lib/schema';

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
    title: inMalayalam ? 'Jaqilin Makeover Call' : englishTitle,
    description: inMalayalam
      ? 'Call ചെയ്യൂ.'
      : englishDescription,
    alternates: {
      canonical: '/call',
    },
    openGraph,
    twitter,
  };
}

export default function CallPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Call', path: '/call' },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center pt-20 sm:pt-24 md:pt-32">
        <StructuredData data={breadcrumbSchema} />
        <CallContent />
      </main>
      <Footer />
    </div>
  );
}
