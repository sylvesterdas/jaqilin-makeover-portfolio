export const LOCALE_COOKIE_NAME = "jm_locale";
export const SUPPORTED_LOCALES = ["ml-IN", "en-IN"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function normalizeLocale(value?: string | null): Locale {
  return value === "en-IN" ? "en-IN" : "ml-IN";
}

export function isMalayalam(locale: Locale): boolean {
  return locale === "ml-IN";
}
