import { isMalayalam, type Locale } from "@/lib/locale";

const WHATSAPP_NUMBER = "917356483404";
export const CALL_NUMBER = "+917356483404";
export const DISPLAY_PHONE_NUMBER = "+91 73564 83404";

function getWhatsAppMessage(locale: Locale): string {
  if (isMalayalam(locale)) {
    return "ഹലോ ജാകിലിൻ മേക്കോവർ, എന്റെ വിവാഹ മേക്കപ്പിനായി ഇൻക്വയറി ആണ്. തീയതി, വേദി, ഫംഗ്ഷൻ വിശദാംശങ്ങൾ പങ്കിടുന്നു.";
  }

  return "Hello Jaqilin Makeover, inquiry for bridal makeup. Wedding date, venue, and function details will be shared. വിവാഹ മേക്കപ്പ് ഇൻക്വയറി.";
}

export function getWhatsAppUrl(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage(locale))}`;
}
