"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { skillCategories } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = skillCategories[activeCategory];

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-electric">Capabilities</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills, organized like a toolkit
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Five clusters that cover the full loop — from AI experimentation to marketing execution to the
            business case that justifies it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === index ? "text-white" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {activeCategory === index && (
                  <motion.span
                    layoutId="skills-pill"
                    className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,var(--color-electric),var(--color-violet))]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-10"
        >
          <p className="max-w-md text-sm text-muted-foreground">{category.description}</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {category.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group rounded-xl border border-border bg-surface-muted p-4 transition-colors hover:border-electric/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-electric">
                    {item.level}%
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-electric),var(--color-cyan))]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
