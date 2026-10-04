import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Metadata } from "next";
import { isMalayalam } from "@/lib/locale";
import { getRequestLocale } from "@/lib/locale-server";
import { buildSocialMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);
  const englishTitle = "Data Deletion | Jaqilin Makeover";
  const englishDescription = "How to ask Jaqilin Makeover to delete your name, phone number and messages from our records. Email us and we will remove your data within 7 business days.";
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: "https://www.jaqilinmakeover.com/data-deletion",
  });

  return {
    title: inMalayalam
      ? "ഡാറ്റ ഡിലീഷൻ | ജാകിലിൻ മേക്കോവർ"
      : englishTitle,
    description: inMalayalam
      ? "നിങ്ങളുടെ പേര്, ഫോൺ നമ്പർ, സന്ദേശങ്ങൾ ഞങ്ങളുടെ രേഖകളിൽ നിന്ന് നീക്കം ചെയ്യാൻ ഇമെയിൽ അയയ്ക്കൂ. 7 പ്രവൃത്തി ദിവസത്തിനുള്ളിൽ ഡിലീറ്റ് ചെയ്യും."
      : englishDescription,
    alternates: {
      canonical: "/data-deletion",
    },
    robots: { index: false, follow: true },
    openGraph,
    twitter,
  };
}

export default function DataDeletionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-primary/20">
            <CardHeader>
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold leading-none tracking-tight text-primary">
                Data Deletion
              </h1>
            </CardHeader>
            <CardContent className="prose prose-sm sm:prose-lg max-w-none text-foreground/80 space-y-4">
              <p>
                If you want your data removed from our records, please email us
                with the subject line <strong>Data Deletion Request</strong>.
              </p>
              <p>
                Include your name and the phone number you used to contact us.
                We will verify the request and delete your data within 7
                business days.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:contact@jaqilinmakeover.com">
                  contact@jaqilinmakeover.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
