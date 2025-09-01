
import type { Metadata } from 'next';
import ConnectContent from '@/components/connect-content';

export const metadata: Metadata = {
  title: 'Connect with Jaqilin Makeover',
  description: 'Contact Jaqilin Makeover through Call, WhatsApp, Instagram, or our Website.',
  alternates: {
    canonical: '/connect',
  },
};


export default function ConnectPage() {
  return (
    <ConnectContent />
  );
}
