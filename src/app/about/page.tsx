
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';
import StructuredData from '@/components/structured-data';
import { buildBreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'About Jaqilin | Makeup Artist in Trivandrum';
  const englishDescription =
    'Meet Jaqilin, a Lakmé certified bridal makeup artist in Trivandrum, Kerala. Wedding, engagement and reception makeup with saree draping. Home service.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/about',
  });

  return {
    title: inMalayalam
      ? 'ജാകിലിനെ കുറിച്ച് | Trivandrum മേക്കപ്പ് ആർട്ടിസ്റ്റ്'
      : englishTitle,
    description: inMalayalam
      ? 'തിരുവനന്തപുരം (Trivandrum) ആസ്ഥാനമായ Lakmé സർട്ടിഫൈഡ് ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ്. വിവാഹം, എൻഗേജ്മെന്റ്, റിസപ്ഷൻ മേക്കപ്പ്.'
      : englishDescription,
    alternates: {
      canonical: '/about',
    },
    openGraph,
    twitter,
  };
}

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <StructuredData data={breadcrumbSchema} />
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
