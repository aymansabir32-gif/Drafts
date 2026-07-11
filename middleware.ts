import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",")[0]?.split("-")[0]?.trim();
    if (preferred && isLocale(preferred)) return preferred;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, { maxAge: 60 * 60 * 24 * 365, path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|sitemap.xml|robots.txt).*)"],
};
