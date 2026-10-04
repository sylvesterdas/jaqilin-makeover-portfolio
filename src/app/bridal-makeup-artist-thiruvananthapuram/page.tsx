import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { buildSocialMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/locale-server";
import { isMalayalam } from "@/lib/locale";
import BridalMakeupTvmContent from "@/components/bridal-makeup-tvm-content";

const pageUrl =
  "https://www.jaqilinmakeover.com/bridal-makeup-artist-thiruvananthapuram";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle =
    "Bridal Makeup Trivandrum, Kerala Weddings | Jaqilin Makeover";
  const englishDescription =
    "Freelance bridal makeup artist in Trivandrum (Thiruvananthapuram) for weddings, engagements, receptions, hairstyling and saree draping. WhatsApp for dates.";
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: pageUrl,
  });

  return {
    title: inMalayalam
      ? "Bridal Makeup Artist in Trivandrum | ബ്രൈഡൽ മേക്കപ്പ് | Jaqilin Makeover"
      : englishTitle,
    description: inMalayalam
      ? "Bridal makeup artist in Trivandrum for weddings. തിരുവനന്തപുരം ജില്ലയിൽ ബ്രൈഡൽ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ്. തീയതി പരിശോധിക്കാൻ WhatsApp ചെയ്യൂ."
      : englishDescription,
    alternates: {
      canonical: "/bridal-makeup-artist-thiruvananthapuram",
    },
    openGraph,
    twitter,
  };
}

export default async function BridalMakeupArtistThiruvananthapuramPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-28">
        <BridalMakeupTvmContent />
      </main>
      <Footer />
    </div>
  );
}
