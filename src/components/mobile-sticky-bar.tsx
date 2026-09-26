"use client";

import { Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { getWhatsAppUrl, getPhoneTelUrl } from "@/lib/contact-links";
import { trackCallClick, trackWhatsAppClick } from "@/lib/events";
import WhatsAppGlyph from "@/components/icons/whatsapp-glyph";

// Always-visible contact: a Call/WhatsApp bar on mobile and a floating
// WhatsApp button on desktop.
export default function MobileStickyBar() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const whatsappUrl = getWhatsAppUrl(locale);
  const phoneUrl = getPhoneTelUrl();

  return (
    <>
      <aside
        aria-label="Quick Contact"
        className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-background/95 backdrop-blur-md border-t border-border/80 p-2.5 px-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]"
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <a
            href={phoneUrl}
            onClick={() => trackCallClick("sticky_bar")}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-primary/40 bg-card text-foreground font-semibold text-xs sm:text-sm active:scale-95 transition-transform"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span>{inMalayalam ? "വിളിക്കൂ" : "Call"}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("sticky_bar", { locale })}
            className="flex-[1.4] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-transform"
          >
            <WhatsAppGlyph className="size-4" />
            <span>{inMalayalam ? "WhatsApp ബുക്കിംഗ്" : "WhatsApp Us"}</span>
          </a>
        </div>
      </aside>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("desktop_float", { locale })}
        aria-label={inMalayalam ? "WhatsApp വഴി ബന്ധപ്പെടൂ" : "Chat on WhatsApp"}
        className="group fixed bottom-8 right-8 z-40 hidden md:flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg transition-all hover:bg-[#1ebe5a] hover:pr-5"
      >
        <WhatsAppGlyph className="size-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 group-hover:max-w-xs">
          {inMalayalam ? "തീയതി ചോദിക്കൂ" : "Check your date"}
        </span>
      </a>
    </>
  );
}
