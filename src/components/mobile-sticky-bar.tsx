"use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { isMalayalam } from "@/lib/locale";
import { getWhatsAppUrl, getPhoneTelUrl } from "@/lib/contact-links";
import { event } from "@/lib/events";

export default function MobileStickyBar() {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const whatsappUrl = getWhatsAppUrl(locale);
  const phoneUrl = getPhoneTelUrl();

  const handleWhatsAppClick = () => {
    event({
      action: "click_whatsapp",
      category: "engagement",
      label: "Mobile Sticky Bar",
      value: 1,
    });
  };

  const handleCallClick = () => {
    event({
      action: "click_call",
      category: "engagement",
      label: "Mobile Sticky Bar",
      value: 1,
    });
  };

  return (
    <aside
      aria-label="Quick Contact"
      className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-background/95 backdrop-blur-md border-t border-border/80 p-2.5 px-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={phoneUrl}
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full border border-primary/40 bg-card text-foreground font-semibold text-xs sm:text-sm active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-primary" />
          <span>{inMalayalam ? "വിളിക്കൂ" : "Call"}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex-[1.4] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          <span>{inMalayalam ? "WhatsApp ബുക്കിംഗ്" : "WhatsApp Us"}</span>
        </a>
      </div>
    </aside>
  );
}
