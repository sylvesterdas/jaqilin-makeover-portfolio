
import Header from '@/components/header';
import Footer from '@/components/footer';
import CallContent from '@/components/call-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Call Jaqilin Makeover',
  description: 'Contact Jaqilin Makeover directly by phone.',
  alternates: {
    canonical: '/call',
  },
};

export default function CallPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center pt-24 md:pt-32">
        <CallContent />
      </main>
      <Footer />
    </div>
  );
}
