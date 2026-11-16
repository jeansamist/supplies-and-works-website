"use client";

import { createContext, useContext, type ReactNode } from "react";
import { ui } from "@/content/ui";
import { defaultLocale, type Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale>(defaultLocale);

/** Makes the current locale available to client components. */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

/** Interface strings (content/ui.ts) for the current locale. */
export const useUi = () => ui(useLocale());
