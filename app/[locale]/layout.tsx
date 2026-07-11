import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "../globals.css";
import { locales, getDictionary, isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/types";
import { LocaleProvider } from "@/contexts/locale-context";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandMenu } from "@/components/layout/command-menu";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { PageLoader } from "@/components/layout/page-loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { siteConfig, meta } = dictionary;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: meta.title,
      template: `%s — ${siteConfig.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${dictionary.locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      type: "website",
      locale: dictionary.locale === "fr" ? "fr_FR" : "en_US",
      url: `${siteConfig.url}/${dictionary.locale}`,
      title: meta.title,
      description: meta.description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/ayman-sabir.png",
          width: 705,
          height: 966,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/ayman-sabir.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);
  const { siteConfig } = dictionary;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    image: `${siteConfig.url}/images/ayman-sabir.png`,
    sameAs: [siteConfig.linkedin, siteConfig.legacyPortfolio],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antony",
      addressCountry: "FR",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Prompt Engineering",
      "Marketing Strategy",
      "Digital Transformation",
      "Workflow Automation",
      "AI Governance",
    ],
  };

  return (
    <html
      lang={dictionary.htmlLang}
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased selection:bg-electric selection:text-white">
        <LocaleProvider dictionary={dictionary}>
          <ThemeProvider>
            <PageLoader />
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <CommandMenu />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
