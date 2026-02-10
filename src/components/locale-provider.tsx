"use client";

import {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LOCALE_COOKIE_NAME,
  normalizeLocale,
  type Locale,
} from "@/lib/locale";

type LocaleContextType = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export default function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const storedLocale = normalizeLocale(
      window.localStorage.getItem(LOCALE_COOKIE_NAME),
    );
    if (storedLocale !== locale) {
      setLocaleState(storedLocale);
      document.documentElement.lang = storedLocale;
      document.cookie = `${LOCALE_COOKIE_NAME}=${storedLocale}; path=/; max-age=31536000; samesite=lax`;
    }
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    const safeLocale = normalizeLocale(nextLocale);
    setLocaleState(safeLocale);
    document.documentElement.lang = safeLocale;
    document.cookie = `${LOCALE_COOKIE_NAME}=${safeLocale}; path=/; max-age=31536000; samesite=lax`;
    window.localStorage.setItem(LOCALE_COOKIE_NAME, safeLocale);
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}
