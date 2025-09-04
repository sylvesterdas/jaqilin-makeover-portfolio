
import type { Metadata } from 'next';
import ConnectContent from '@/components/connect-content';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Connect with Jaqilin Makeover',
  description: 'Contact Jaqilin Makeover through Call, WhatsApp, Instagram, or our Website.',
  alternates: {
    canonical: '/connect',
  },
};


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
