
import Header from '@/components/header';
import Hero from '@/components/hero';
import StatsBar from '@/components/stats-bar';
import Services from '@/components/services';
import BridalConcierge from '@/components/bridal-concierge';
import BookingSteps from '@/components/booking-steps';
import Portfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import FaqSection from '@/components/faq-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { getInstagramPosts } from '@/lib/instagram';
import { getRequestLocale } from '@/lib/locale-server';
import { isMalayalam } from '@/lib/locale';
import { buildSocialMetadata } from '@/lib/metadata';
import StructuredData from '@/components/structured-data';
import { buildBreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle =
    'Bridal Makeup Artist in Trivandrum | Jaqilin Makeover';
  const englishDescription =
    'Bridal makeup artist in Trivandrum (Thiruvananthapuram) for natural, long-wear wedding makeup, hair styling and saree draping. Home & venue service.';
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: 'https://www.jaqilinmakeover.com',
  });

  return {
    title: inMalayalam
      ? 'Bridal Makeup Artist Trivandrum | ബ്രൈഡൽ മേക്കപ്പ് | Jaqilin Makeover'
      : englishTitle,
    description: inMalayalam
      ? 'Bridal makeup artist in Trivandrum. തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ്. വീട്ടിലും വേദിയിലും സർവീസ്. തീയതി WhatsApp-ൽ ചോദിക്കൂ.'
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
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <StructuredData data={breadcrumbSchema} />
        <Hero />
        <StatsBar />
        <Services />
        <BridalConcierge />
        <BookingSteps />
        <Portfolio data={posts} />
        <Testimonials />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
