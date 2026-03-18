import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { isMalayalam } from "@/lib/locale";
import { getRequestLocale } from "@/lib/locale-server";
import { buildSocialMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = "Terms and Conditions | Jaqilin Makeover";
  const englishDescription =
    "Terms and conditions for using Jaqilin Makeover website and services.";
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: "https://www.jaqilinmakeover.com/terms",
  });

  return {
    title: inMalayalam
      ? "ഉപയോഗ നിബന്ധനകൾ | ജാകിലിൻ മേക്കോവർ"
      : englishTitle,
    description: inMalayalam
      ? "ജാകിലിൻ മേക്കോവർ വെബ്സൈറ്റ് ഉപയോഗ നിബന്ധനകൾ."
      : englishDescription,
    alternates: {
      canonical: "/terms",
    },
    openGraph,
    twitter,
  };
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-primary/20">
            <CardHeader>
              <CardTitle className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary">
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                By using this website, you agree to contact Jaqilin Makeover only
                for genuine service inquiries and booking discussions.
              </p>
              <p>
                All pricing, availability, and service confirmation are finalized
                only through direct communication on call or WhatsApp.
              </p>
              <p>
                Portfolio images and videos are owned by Jaqilin Makeover and may
                not be reused without permission.
              </p>
              <p>
                Service schedules can change based on travel, function timing, and
                client requirements. Final slots are confirmed only after direct
                approval.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
