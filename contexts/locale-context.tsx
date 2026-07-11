"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Dictionary } from "@/lib/i18n/types";

const LocaleContext = createContext<Dictionary | null>(null);

export function LocaleProvider({ dictionary, children }: { dictionary: Dictionary; children: ReactNode }) {
  return <LocaleContext.Provider value={dictionary}>{children}</LocaleContext.Provider>;
}

export function useDictionary(): Dictionary {
  const dictionary = useContext(LocaleContext);
  if (!dictionary) {
    throw new Error("useDictionary must be used within a LocaleProvider");
  }
  return dictionary;
}
