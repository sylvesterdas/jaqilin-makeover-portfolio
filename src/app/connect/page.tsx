
import type { Metadata } from 'next';
import ConnectContent from '@/components/connect-content';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';
import { buildSocialMetadata } from '@/lib/metadata';
import StructuredData from '@/components/structured-data';
import { buildBreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = 'Contact Jaqilin Makeover | Bridal Makeup Trivandrum';
  const englishDescription =
    'Book a bridal makeup artist in Trivandrum. Call or WhatsApp +91 73564 83404 to check your wedding date, packages and home service availability.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com/connect',
  });

  return {
    title: inMalayalam
      ? 'ബന്ധപ്പെടുക | ജാകിലിൻ മേക്കോവർ Trivandrum'
      : englishTitle,
    description: inMalayalam
      ? 'Book a bridal makeup artist in Trivandrum. വിവാഹ തീയതി ഒഴിവുണ്ടോ എന്ന് അറിയാൻ WhatsApp അല്ലെങ്കിൽ Call ചെയ്യൂ: 73564 83404.'
      : englishDescription,
    alternates: {
      canonical: '/connect',
    },
    openGraph,
    twitter,
  };
}


export default function ConnectPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Connect', path: '/connect' },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <StructuredData data={breadcrumbSchema} />
        <ConnectContent />
      </main>
      <Footer />
    </div>
  );
}
