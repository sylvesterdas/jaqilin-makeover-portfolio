import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE_NAME, normalizeLocale, type Locale } from "@/lib/locale";

function resolveFromAcceptLanguage(acceptLanguage?: string | null): Locale {
  if (!acceptLanguage) {
    return "ml-IN";
  }

  const lowered = acceptLanguage.toLowerCase();

  if (lowered.includes("ml")) {
    return "ml-IN";
  }

  if (lowered.includes("en")) {
    return "en-IN";
  }

  return "ml-IN";
}

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  if (cookieLocale) {
    return normalizeLocale(cookieLocale);
  }

  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language");
  return resolveFromAcceptLanguage(acceptLanguage);
}
