import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${en.siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${en.siteConfig.url}/${l}`])),
    },
  }));
}
