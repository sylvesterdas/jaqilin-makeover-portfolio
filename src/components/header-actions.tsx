
'use client';

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { getWhatsAppUrl, getPhoneTelUrl } from "@/lib/contact-links";
import { isMalayalam } from "@/lib/locale";
import { trackCallClick, trackWhatsAppClick } from "@/lib/events";
import WhatsAppGlyph from "@/components/icons/whatsapp-glyph";


export default function HeaderActions() {
  const { locale, setLocale } = useLocale();
  const inMalayalam = isMalayalam(locale);
  const whatsappUrl = getWhatsAppUrl(locale);

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex md:hidden items-center rounded-md border border-border/70 bg-background/70 p-1">
          <Button
            size="sm"
            variant={inMalayalam ? "secondary" : "ghost"}
            className="h-7 px-2 text-[11px]"
            onClick={() => setLocale("ml-IN")}
          >
            ML
          </Button>
          <Button
            size="sm"
            variant={!inMalayalam ? "secondary" : "ghost"}
            className="h-7 px-2 text-[11px]"
            onClick={() => setLocale("en-IN")}
          >
            EN
          </Button>
        </div>

        <div className="hidden md:flex items-center rounded-md border border-border/70 p-1 mr-1">
          <Button
            size="sm"
            variant={inMalayalam ? "secondary" : "ghost"}
            className="h-7 px-2 text-xs"
            onClick={() => setLocale("ml-IN")}
          >
            ML
          </Button>
          <Button
            size="sm"
            variant={!inMalayalam ? "secondary" : "ghost"}
            className="h-7 px-2 text-xs"
            onClick={() => setLocale("en-IN")}
          >
            EN
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-9 px-3" asChild>
            <a href={getPhoneTelUrl()} onClick={() => trackCallClick("header")}>
              <Phone className="h-4 w-4" />
              <span className="ml-2 hidden md:inline">
                {inMalayalam ? "വിളിക്കുക" : "Call"}
              </span>
            </a>
          </Button>

          <Button
            size="sm"
            className="h-9 bg-[#25D366] px-3 text-white hover:bg-[#1ebe5a]"
            asChild
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header", { locale })}
            >
              <WhatsAppGlyph className="size-[18px]" />
              <span className="hidden sm:inline">
                {inMalayalam ? "വാട്ട്സ്ആപ്പ്" : "WhatsApp"}
              </span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
