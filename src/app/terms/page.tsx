import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { isMalayalam } from "@/lib/locale";
import { getRequestLocale } from "@/lib/locale-server";
import { buildSocialMetadata } from "@/lib/metadata";
import StructuredData from "@/components/structured-data";
import { buildBreadcrumbSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = "Terms and Conditions | Jaqilin Makeover";
  const englishDescription =
    "Terms and conditions for using the Jaqilin Makeover website and contacting a bridal makeup artist in Trivandrum by call, WhatsApp or Instagram.";
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
      ? "ജാകിലിൻ മേക്കോവർ (Trivandrum) വെബ്സൈറ്റ് ഉപയോഗവും Call, WhatsApp, Instagram വഴി ബന്ധപ്പെടുന്നതും സംബന്ധിച്ച നിബന്ധനകൾ."
      : englishDescription,
    alternates: {
      canonical: "/terms",
    },
    openGraph,
    twitter,
  };
}

export default function TermsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms", path: "/terms" },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <StructuredData data={breadcrumbSchema} />
        <div className="container mx-auto px-4">
          <Card className="bg-card border-primary/20">
            <CardHeader>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold leading-none tracking-tight text-primary">
                Terms and Conditions
              </h1>
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
