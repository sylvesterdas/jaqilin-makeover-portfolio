import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { buildSocialMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/locale-server";
import { isMalayalam } from "@/lib/locale";
import BridalMakeupTvmContent from "@/components/bridal-makeup-tvm-content";

const pageUrl =
  "https://www.jaqilinmakeover.com/bridal-makeup-artist-thiruvananthapuram";
const whatsappUrl =
  "https://wa.me/917356483404?text=Hi%2C%20I%20want%20to%20check%20availability%20for%20bridal%20makeup%20in%20Thiruvananthapuram.";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle =
    "Bridal Makeup Artist in Thiruvananthapuram | Jaqilin Makeover";
  const englishDescription =
    "Freelance bridal makeup artist in Thiruvananthapuram for weddings, engagements, receptions, hairstyling, and saree draping. WhatsApp for date check and package details.";
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: pageUrl,
  });

  return {
    title: inMalayalam
      ? "തിരുവനന്തപുരം ബ്രൈഡൽ മേക്കപ്പ് ആർട്ടിസ്റ്റ് | ജാകിലിൻ മേക്കോവർ"
      : englishTitle,
    description: inMalayalam
      ? "തിരുവനന്തപുരം ജില്ലയിൽ ബ്രൈഡൽ മേക്കപ്പ്, ഹെയർ സ്റ്റൈലിംഗ്, സാരി ഡ്രേപ്പിംഗ് സേവനങ്ങൾ. തീയതി പരിശോധിക്കാൻ WhatsApp ചെയ്യൂ."
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
