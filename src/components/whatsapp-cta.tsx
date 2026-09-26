"use client";

import { type ReactNode } from "react";
import { useLocale } from "@/components/locale-provider";
import { getWhatsAppUrl, type WhatsAppMessageOptions } from "@/lib/contact-links";
import { isMalayalam } from "@/lib/locale";
import { trackWhatsAppClick } from "@/lib/events";
import { cn } from "@/lib/utils";
import WhatsAppGlyph from "@/components/icons/whatsapp-glyph";

type WhatsAppCtaProps = WhatsAppMessageOptions & {
  /** GA4 `placement` value, e.g. "hero", "faq", "landing:saree-draping". */
  placement: string;
  children?: ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-9 px-4 text-sm gap-2",
  md: "h-11 px-6 text-sm sm:text-base gap-2",
  lg: "h-12 px-8 text-base gap-2.5",
};

const variantClasses = {
  solid: "bg-[#25D366] text-white hover:bg-[#1ebe5a] shadow-sm",
  outline: "border-2 border-[#25D366] text-foreground bg-card hover:bg-[#25D366]/10",
};

export default function WhatsAppCta({
  placement,
  service,
  message,
  children,
  variant = "solid",
  size = "md",
  className,
}: WhatsAppCtaProps) {
  const { locale } = useLocale();
  const inMalayalam = isMalayalam(locale);

  return (
    <a
      href={getWhatsAppUrl(locale, { service, message })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(placement, { service_name: service, locale })}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors active:scale-[0.98]",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      <WhatsAppGlyph className={variant === "outline" ? "text-[#25D366]" : undefined} />
      <span>{children ?? (inMalayalam ? "WhatsApp വഴി തീയതി ചോദിക്കൂ" : "Check Date on WhatsApp")}</span>
    </a>
  );
}
