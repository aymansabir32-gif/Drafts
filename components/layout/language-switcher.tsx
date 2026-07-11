"use client";

import { usePathname, useRouter } from "next/navigation";

import { locales } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/types";
import { useDictionary } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

function pathWithLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/");
  segments[1] = targetLocale;
  return segments.join("/") || `/${targetLocale}`;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const dictionary = useDictionary();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(targetLocale: Locale) {
    if (targetLocale === dictionary.locale) return;
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.push(pathWithLocale(pathname, targetLocale));
  }

  return (
    <div
      role="group"
      aria-label={dictionary.nav.languageLabel}
      className={cn(
        "flex items-center rounded-full border border-border bg-surface-muted p-0.5 text-xs font-mono",
        className,
      )}
    >
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-pressed={dictionary.locale === locale}
          className={cn(
            "rounded-full px-2.5 py-1.5 uppercase transition-colors",
            dictionary.locale === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}
