"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages as LanguagesIcon } from "lucide-react";

import { useDictionary } from "@/contexts/locale-context";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";

export function Education() {
  const { education } = useDictionary();

  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-electric">{education.kicker}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {education.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap className="h-4 w-4 text-electric" /> {education.educationLabel}
              </div>
            </Reveal>
            <div className="relative mt-6 space-y-6 border-l border-border pl-6">
              {education.items.map((item, index) => (
                <Reveal key={item.school} delay={index * 0.1}>
                  <div className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-electric" />
                    <div className="font-mono text-xs text-muted-foreground">{item.period}</div>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug">{item.degree}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.school} · {item.location}
                    </div>
                    <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">{item.research}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-12 flex items-center gap-2 text-sm font-semibold">
                <Award className="h-4 w-4 text-electric" /> {education.certificationsLabel}
              </div>
            </Reveal>
            <RevealGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {education.certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={revealItem}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-electric/40"
                >
                  <div className="text-sm font-semibold">{cert.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{cert.issuer}</div>
                  <div className="mt-1 font-mono text-xs text-electric">{cert.date}</div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>

          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <LanguagesIcon className="h-4 w-4 text-electric" /> {education.languagesLabel}
              </div>
            </Reveal>
            <div className="mt-6 space-y-5">
              {education.languages.map((lang, index) => (
                <Reveal key={lang.name} delay={index * 0.08}>
                  <div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium">{lang.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-cyan),var(--color-violet))]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
                <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {education.researchFocusLabel}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{education.researchFocusText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
