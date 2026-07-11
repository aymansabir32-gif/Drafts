"use client";

import { Mail, ArrowUpRight } from "lucide-react";

import { useDictionary } from "@/contexts/locale-context";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function Footer() {
  const { siteConfig, nav, footer } = useDictionary();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-display text-xl font-semibold tracking-tight">
            {siteConfig.name}
            <span className="text-electric">.</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-electric/50 hover:text-electric"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {footer.sectionsLabel}
            </div>
            <ul className="mt-4 space-y-2.5">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {footer.elsewhereLabel}
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {footer.linkedinLink} <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.legacyPortfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {footer.legacyPortfolioLink} <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {footer.contactLabel}
            </div>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-muted-foreground">{siteConfig.email}</li>
              <li className="text-sm text-muted-foreground">{siteConfig.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-3 border-t border-border px-6 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. {footer.rights}
        </span>
        <span className="font-mono">{footer.builtWith}</span>
      </div>
    </footer>
  );
}
