import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/data";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Ayman Sabir",
    "Marketing Strategy Consultant",
    "AI Consultant",
    "Artificial Intelligence",
    "Prompt Engineering",
    "AI Adoption Consultant",
    "Digital Transformation",
    "Marketing Consultant",
    "AI Agents",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
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
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
        <ThemeProvider>
          <PageLoader />
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <CommandMenu />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
