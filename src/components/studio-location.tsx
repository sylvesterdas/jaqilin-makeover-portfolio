"use client";

import { MapPin, Navigation, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/events";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";

const MAP_IFRAME_URL =
  "https://storage.googleapis.com/maps-solutions-0nzap8rrzq/commutes/hyjv/commutes.html";

export const STUDIO_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=8.3599453,77.0607636&travelmode=driving";

export const GOOGLE_MAPS_CID_URL =
  "https://maps.google.com/maps?cid=16246917355789142726";

export const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJxeS3_CBpaaARxsrwVkGleOE";

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
        <div className="flex flex-wrap items-center justify-center gap-2">
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
          <Button asChild variant="outline" size="sm" className="gap-2 border-amber-500/30 text-foreground/80 hover:bg-amber-500/10">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                event({
                  action: "click_google_review",
                  category: "engagement",
                  label: "Compact Contact Section",
                  value: 1,
                })
              }
            >
              <Star className="size-3.5 fill-amber-500 text-amber-500" />
              {inMalayalam ? "റിവ്യൂ ചെയ്യൂ (5.0 ★)" : "Review Us (5.0 ★)"}
            </a>
          </Button>
        </div>
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

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Button asChild className="h-auto w-full gap-2 py-3">
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
        <Button asChild variant="outline" className="h-auto w-full gap-2 py-3 border-amber-500/40 hover:bg-amber-500/10">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              event({
                action: "click_google_review",
                category: "engagement",
                label: "Connect Page Studio Location",
                value: 1,
              })
            }
          >
            <Star className="size-4 fill-amber-500 text-amber-500" />
            {inMalayalam ? "ഗൂഗിൾ റിവ്യൂ (5.0 ★)" : "Rate Us (5.0 ★)"}
          </a>
        </Button>
      </div>

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
