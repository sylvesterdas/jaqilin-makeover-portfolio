
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import AboutContent from '@/components/about-content';

export const metadata: Metadata = {
  title: 'About Jaqilin | Jaqilin Makeover',
  description: 'Learn more about Jaqilin, the professional makeup artist behind Jaqilin Makeover based in Trivandrum.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
