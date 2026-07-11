"use client";

import { motion } from "framer-motion";

import { useDictionary } from "@/contexts/locale-context";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";

export function About() {
  const { about } = useDictionary();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-electric">{about.kicker}</span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-electric/40"
              >
                <div className="h-8 w-8 rounded-full bg-[linear-gradient(135deg,var(--color-electric),var(--color-violet))] opacity-80 transition-opacity group-hover:opacity-100" />
                <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
