
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { getInstagramPosts } from '@/lib/instagram';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

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
