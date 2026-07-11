import type { MetadataRoute } from "next";

import { en } from "@/lib/i18n/en";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${en.siteConfig.url}/sitemap.xml`,
  };
}
