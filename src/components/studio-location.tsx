"use client";

import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/events";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";

const MAP_IFRAME_URL =
  "https://storage.googleapis.com/maps-solutions-0nzap8rrzq/commutes/hyjv/commutes.html";

export const STUDIO_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=8.3599453,77.0607636&travelmode=driving";

type StudioLocationProps = {
  compact?: boolean;
};

export default function StudioLocation({ compact = false }: StudioLocationProps) {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  const handleDirectionsClick = () => {
    event({
      action: "click_directions",
      category: "engagement",
      label: compact ? "Contact Section" : "Connect Page",
      value: 1,
    });
  };

  if (compact) {
    return (
      <div className="mt-5 sm:mt-6 flex flex-col items-center gap-3 text-center">
        <p className="text-xs sm:text-sm text-foreground/65">
          {inMalayalam
            ? "Studio visit available. Home / venue bridal service ഉണ്ട്."
            : "Studio visit available. Home and venue bridal service also available."}
        </p>
        <Button asChild variant="outline" size="sm" className="gap-2">
          <a
            href={STUDIO_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDirectionsClick}
          >
            <Navigation className="size-4" />
            {inMalayalam ? "ലൊക്കേഷൻ കാണൂ" : "Get Directions"}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <section
      aria-labelledby="studio-location-title"
      className="mx-auto w-full max-w-sm rounded-2xl border border-primary/15 bg-card/70 p-4 shadow-md backdrop-blur-md sm:max-w-md"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MapPin className="size-5" />
        </div>
        <div className="min-w-0 text-left">
          <h2
            id="studio-location-title"
            className="font-headline text-xl font-semibold leading-tight text-primary"
          >
            {inMalayalam ? "സ്റ്റുഡിയോ ലൊക്കേഷൻ" : "Studio Location"}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-foreground/75">
            {inMalayalam
              ? "Jaqilin Makeover Studio, Kanjiramkulam, Thiruvananthapuram"
              : "Jaqilin Makeover Studio, Kanjiramkulam, Thiruvananthapuram"}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/60">
            {inMalayalam
              ? "Studio visit available. Home / venue bridal service ഉണ്ട്."
              : "Studio visit available. Home and venue bridal service also available."}
          </p>
        </div>
      </div>

      <Button asChild className="mt-4 h-auto w-full gap-2 py-3">
        <a
          href={STUDIO_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirectionsClick}
        >
          <Navigation className="size-4" />
          {inMalayalam ? "ലൊക്കേഷൻ കാണൂ" : "Get Directions"}
        </a>
      </Button>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/40">
        <iframe
          src={MAP_IFRAME_URL}
          title="Jaqilin Makeover Studio location map"
          width="100%"
          height="260"
          className="block h-[260px] w-full sm:h-[320px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
