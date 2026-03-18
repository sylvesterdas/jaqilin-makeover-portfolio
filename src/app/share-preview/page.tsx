import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const englishTitle = "Share Preview | Jaqilin Makeover";
  const englishDescription =
    "Bot-friendly share preview endpoint for Jaqilin Makeover.";
  const { openGraph, twitter } = buildSocialMetadata({
    title: englishTitle,
    description: englishDescription,
    url: "https://www.jaqilinmakeover.com/share-preview",
  });

  return {
    title: englishTitle,
    description: englishDescription,
    alternates: {
      canonical: "/share-preview",
    },
    openGraph,
    twitter,
  };
}

export default function SharePreviewPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 text-center">
      <div className="max-w-xl space-y-3">
        <h1 className="text-2xl sm:text-3xl font-headline text-primary">
          Share Preview Check
        </h1>
        <p className="text-sm sm:text-base text-foreground/80">
          This page exists to verify social share previews for WhatsApp,
          Facebook, and Twitter without requiring JavaScript.
        </p>
      </div>
    </main>
  );
}
