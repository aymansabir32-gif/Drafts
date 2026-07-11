import type { Locale } from "./types";
import { en } from "./en";
import { fr } from "./fr";

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

export const dictionaries = { en, fr };

export function getDictionary(locale: string) {
  return locales.includes(locale as Locale) ? dictionaries[locale as Locale] : dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
