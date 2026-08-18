import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { buildSocialMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/locale-server";
import { isMalayalam } from "@/lib/locale";
import SareeDrapingContent from "@/components/saree-draping-content";

const pageUrl = "https://www.jaqilinmakeover.com/saree-draping-trivandrum";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = "Saree Draping & Box Pleating Services in Thiruvananthapuram | Jaqilin Makeover";
  const englishDescription =
    "Expert bridal saree draping, Kasavu box pleating, Kanchipuram silk saree styling, and advance pre-pleating services in Thiruvananthapuram, Kanjiramkulam, and Neyyattinkara.";

  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: pageUrl,
  });

  return {
    title: inMalayalam
      ? "സാരി ഡ്രേപ്പിംഗ് & ബോക്സ് പ്ലീറ്റിംഗ് തിരുവനന്തപുരം | ജാകിലിൻ മേക്കോവർ"
      : englishTitle,
    description: inMalayalam
      ? "തിരുവനന്തപുരത്ത് പ്രൊഫഷണൽ കസവ് സാരി ബോക്സ് പ്ലീറ്റിംഗ്, കാഞ്ചീപുരം പട്ടുസാരി ഡ്രേപ്പിംഗ്, അഡ്വാൻസ് പ്രീ-പ്ലീറ്റിംഗ് സർവീസുകൾ. വാട്സാപ്പിൽ ബന്ധപ്പെടൂ."
      : englishDescription,
    keywords: [
      "saree draping services in thiruvananthapuram",
      "saree draping trivandrum",
      "kasavu saree box pleating",
      "bridal saree draping kerala",
      "saree pre pleating trivandrum",
      "kanchipuram saree draping trivandrum",
      "saree draping kanjiramkulam",
      "saree draping neyyattinkara",
      "saree draping kattakada",
      "സാരി ഡ്രേപ്പിംഗ് തിരുവനന്തപുരം",
      "ബോക്സ് പ്ലീറ്റിംഗ് കേരള",
    ],
    alternates: {
      canonical: "/saree-draping-trivandrum",
    },
    openGraph,
    twitter,
  };
}

export default async function SareeDrapingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-28">
        <SareeDrapingContent />
      </main>
      <Footer />
    </div>
  );
}
