
import type { Metadata } from 'next';
import ConnectContent from '@/components/connect-content';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { isMalayalam } from '@/lib/locale';
import { getRequestLocale } from '@/lib/locale-server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);

  return {
    title: inMalayalam
      ? 'ജാകിലിൻ മേക്കോവർ - WhatsApp / Call ബന്ധപ്പെടാം'
      : 'Contact Jaqilin Makeover - Call, WhatsApp, or Instagram',
    description: inMalayalam
      ? 'വിവാഹ മേക്കപ്പ് ഇൻക്വയറിയ്ക്കായി WhatsApp അല്ലെങ്കിൽ ഫോൺ വഴി ബന്ധപ്പെടാം.'
      : 'Contact Jaqilin Makeover through call, WhatsApp, Instagram, or website.',
    alternates: {
      canonical: '/connect',
    },
  };
}


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
