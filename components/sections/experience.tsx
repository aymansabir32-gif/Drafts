"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

import { experiences } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-electric">Career</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Professional experience
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            From AI adoption inside a regulated enterprise to hands-on B2B growth — four roles, one throughline:
            making new systems work for the people who use them.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" />

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={exp.company} delay={index * 0.06}>
                  <div className="relative pl-10 sm:pl-14">
                    <span
                      className={`absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10 ${
                        exp.current
                          ? "border-electric bg-electric/10 text-electric"
                          : "border-border bg-surface-muted text-muted-foreground"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full rounded-2xl border border-border bg-surface p-6 text-left transition-colors hover:border-electric/40"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                            {exp.current && (
                              <Badge variant="cyan" className="uppercase">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {exp.company} · {exp.companyDescription}
                          </div>
                        </div>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
                        <span>{exp.period}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {exp.location}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                              {exp.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-2.5 text-sm text-muted-foreground">
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric" />
                                  <span className="leading-relaxed">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {exp.tags.map((tag) => (
                                <Badge key={tag}>{tag}</Badge>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
