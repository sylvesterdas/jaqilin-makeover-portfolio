
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'About Jaqilin | Jaqilin Makeover';
  const englishDescription =
    'Learn more about Jaqilin, the makeup artist behind Jaqilin Makeover in Trivandrum.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/about',
  });

  return {
    title: inMalayalam
      ? 'ജാകിലിനെ കുറിച്ച് | ജാകിലിൻ മേക്കോവർ'
      : englishTitle,
    description: inMalayalam
      ? 'തിരുവനന്തപുരം കാഞ്ഞിരംകുളം ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന ജാകിലിൻ മേക്കോവറിനെ കുറിച്ച് അറിയൂ.'
      : englishDescription,
    alternates: {
      canonical: '/about',
    },
    openGraph,
    twitter,
  };
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
