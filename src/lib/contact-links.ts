import { type Locale, isMalayalam } from "@/lib/locale";

const WHATSAPP_NUMBER = "917356483404";
export const CALL_NUMBER = "+917356483404";
export const DISPLAY_PHONE_NUMBER = "+91 73564 83404";

export type WhatsAppMessageOptions = {
  /** Service the visitor is asking about, e.g. "Bridal Makeup". */
  service?: string;
  /** Fully custom message; overrides the default template. */
  message?: string;
};

// Ends with blank "date" and "place" lines so the visitor fills in the two
// details needed to check availability, instead of sending a bare "Hi".
export function getWhatsAppMessage(locale: Locale, options: WhatsAppMessageOptions = {}): string {
  if (options.message) return options.message;

  if (isMalayalam(locale)) {
    const intro = options.service
      ? `ഹായ്, വെബ്സൈറ്റ് കണ്ടാണ് മെസ്സേജ് അയക്കുന്നത്. ${options.service} ബുക്ക് ചെയ്യാൻ താല്പര്യമുണ്ട്.`
      : "ഹായ്, വെബ്സൈറ്റ് കണ്ടാണ് മെസ്സേജ് അയക്കുന്നത്. മേക്കപ്പ് ബുക്കിംഗിനെക്കുറിച്ച് അറിയണം.";
    return `${intro}\nതീയതി: \nസ്ഥലം: `;
  }

  const intro = options.service
    ? `Hi, I found your website and I'm interested in ${options.service}.`
    : "Hi, I found your website and would like to know more about your makeup services.";
  return `${intro}\nEvent date: \nVenue / place: `;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrl(locale: Locale, options?: WhatsAppMessageOptions): string {
  return buildWhatsAppUrl(getWhatsAppMessage(locale, options));
}

export function getPhoneTelUrl(): string {
  return `tel:${CALL_NUMBER}`;
}
