import type { Locale } from "./types";
import { locales, defaultLocale, isLocale } from "./locales";
import { en } from "./en";
import { fr } from "./fr";

export { locales, defaultLocale, isLocale };

export const dictionaries = { en, fr };

export function getDictionary(locale: string) {
  return locales.includes(locale as Locale) ? dictionaries[locale as Locale] : dictionaries[defaultLocale];
}
