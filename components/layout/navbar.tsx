"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandMenuTrigger } from "@/components/layout/command-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={cn(
          "flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-border px-4 py-2.5 transition-all duration-300",
          scrolled ? "glass shadow-lg shadow-black/5" : "border-transparent bg-transparent",
        )}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-display text-lg font-semibold tracking-tight"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-electric">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandMenuTrigger />
          <ThemeToggle />
          <Button
            size="sm"
            variant="gradient"
            className="hidden md:inline-flex"
            onClick={() => handleNavClick("#contact")}
          >
            Let&apos;s talk
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute inset-x-4 top-16 flex flex-col gap-1 rounded-2xl border border-border p-3 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-xl px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button variant="gradient" className="mt-1" onClick={() => handleNavClick("#contact")}>
            Let&apos;s talk
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
