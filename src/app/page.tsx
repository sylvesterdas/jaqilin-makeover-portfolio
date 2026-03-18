
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { getInstagramPosts } from '@/lib/instagram';
import { getRequestLocale } from '@/lib/locale-server';
import { isMalayalam } from '@/lib/locale';
import { buildSocialMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle =
    'Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover';
  const englishDescription =
    'Professional bridal makeup artist in Thiruvananthapuram offering natural, long-wear makeup with hair styling and saree draping. Home and venue service. Book on WhatsApp.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com',
  });

  return {
    title: inMalayalam
      ? 'തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ് | ജാകിലിൻ മേക്കോവർ'
      : englishTitle,
    description: inMalayalam
      ? 'തിരുവനന്തപുരം, കാഞ്ഞിരംകുളം മേഖലയിലെ പ്രൊഫഷണൽ ബ്രൈഡൽ മേക്കപ്പ്. ലോങ്-വെയർ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ്. WhatsApp-ൽ ബുക്ക് ചെയ്യാം.'
      : englishDescription,
    alternates: {
      canonical: '/',
    },
    openGraph,
    twitter,
  };
}

export default async function Home() {
  const posts = await getInstagramPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio data={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
