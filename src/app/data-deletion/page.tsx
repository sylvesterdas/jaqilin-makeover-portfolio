import Footer from "@/components/footer";
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import { isMalayalam } from "@/lib/locale";
import { getRequestLocale } from "@/lib/locale-server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const inMalayalam = isMalayalam(locale);

  return {
    title: inMalayalam
      ? "ഡാറ്റ ഡിലീഷൻ | ജാകിലിൻ മേക്കോവർ"
      : "Data Deletion | Jaqilin Makeover",
    description: inMalayalam
      ? "ഡാറ്റ ഡിലീഷൻ അഭ്യർത്ഥിക്കാൻ വേണ്ട മാർഗ്ഗനിർദ്ദേശങ്ങൾ."
      : "Instructions for requesting data deletion.",
    alternates: {
      canonical: "/data-deletion",
    },
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
              <CardTitle className="font-headline text-3xl sm:text-4xl md:text-5xl text-primary">
                Data Deletion
              </CardTitle>
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
