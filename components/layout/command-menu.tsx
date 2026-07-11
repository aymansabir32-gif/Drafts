"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Compass,
  FileText,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";

import { LinkedinIcon } from "@/components/icons/linkedin-icon";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { navLinks, siteConfig } from "@/lib/data";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  function goToSection(hash: string) {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    function handleOpenRequest() {
      setOpen(true);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("open-command-menu", handleOpenRequest);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("open-command-menu", handleOpenRequest);
    };
  }, []);

  function runCommand(command: () => void) {
    setOpen(false);
    command();
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section or run a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {navLinks.map((link) => (
            <CommandItem
              key={link.href}
              onSelect={() => runCommand(() => goToSection(link.href))}
            >
              <Compass className="h-4 w-4" />
              {link.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => runCommand(() => window.open(`mailto:${siteConfig.email}`))}>
            <Mail className="h-4 w-4" />
            Send an email
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open(siteConfig.linkedin, "_blank"))}>
            <LinkedinIcon className="h-4 w-4" />
            Open LinkedIn
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open(siteConfig.legacyPortfolio, "_blank"))}>
            <FileText className="h-4 w-4" />
            View legacy portfolio
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => goToSection("#about"))}>
            <User className="h-4 w-4" />
            About Ayman
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="h-4 w-4" />
            Light mode
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="h-4 w-4" />
            Dark mode
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function CommandMenuTrigger() {
  return (
    <button
      type="button"
      onClick={() => document.dispatchEvent(new Event("open-command-menu"))}
      className="hidden items-center gap-2 rounded-full border border-border bg-surface-muted px-4 py-2 text-xs font-mono text-muted-foreground transition-colors hover:border-electric/50 hover:text-foreground sm:flex"
    >
      Search
      <kbd className="ml-2 rounded border border-border bg-surface px-1.5 py-0.5 text-[10px]">⌘K</kbd>
    </button>
  );
}
