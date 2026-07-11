"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";

import { projects, type Project } from "@/lib/data";
import { Reveal, RevealGroup, revealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-electric">Selected work</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured projects & case studies
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Real initiatives from AI adoption at Amundi and commercial growth work before it — each one built to
            solve a specific business problem.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <motion.button
              key={project.title}
              variants={revealItem}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 text-left transition-colors hover:border-electric/40"
            >
              <Badge variant="cyan" className="w-fit">
                {project.category}
              </Badge>
              <h3 className="mt-4 font-display text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-electric opacity-0 transition-opacity group-hover:opacity-100">
                View case study <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.button>
          ))}
        </RevealGroup>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto p-8">
          {selected && (
            <>
              <Badge variant="cyan" className="w-fit">
                {selected.category}
              </Badge>
              <DialogTitle className="mt-4 text-2xl">{selected.title}</DialogTitle>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{selected.overview}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex gap-3">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                  <div>
                    <div className="text-sm font-semibold">Challenge</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.challenge}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-violet" />
                  <div>
                    <div className="text-sm font-semibold">Solution</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.solution}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                  <div>
                    <div className="text-sm font-semibold">Business impact</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{selected.impact}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
