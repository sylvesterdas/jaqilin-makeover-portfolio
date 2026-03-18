import { type Locale } from "@/lib/locale";

const WHATSAPP_NUMBER = "917356483404";
export const CALL_NUMBER = "+917356483404";
export const DISPLAY_PHONE_NUMBER = "+91 73564 83404";

function getWhatsAppMessage(locale: Locale): string {
  return "Hi, I found your website and would like to know more about your makeup services. My event date and venue are:";
}

export function getWhatsAppUrl(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(locale))}`;
}
