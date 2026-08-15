import { useEffect, useRef } from "react";
import { templates } from "@/data/content";

const SIZE_CLASSES: Record<(typeof templates)[number]["size"], string> = {
  lg: "md:col-span-4 md:row-span-2",
  md: "md:col-span-2 md:row-span-2",
  sm: "md:col-span-2 md:row-span-1",
};

export default function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = grid.querySelectorAll<HTMLElement>("[data-bento-card]");
        gsap.set(cards, { opacity: 0, y: 32 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            once: true,
          },
        });
      }, grid);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section id="templates" className="container-page py-section">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">The lineup</p>
        <h2 className="font-display text-h1 text-text-primary">8 templates, built for AI builders.</h2>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[180px]">
        {templates.map((template) => (
          <article
            key={template.id}
            data-bento-card
            className={`group relative flex flex-col justify-end overflow-hidden rounded-card border border-border-hairline bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-hover ${SIZE_CLASSES[template.size]}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <p className="font-mono text-mono-sm uppercase tracking-eyebrow text-accent">{template.category}</p>
              <h3 className="mt-2 font-display text-h3 text-text-primary">{template.name}</h3>
              <p className="mt-2 text-body text-text-secondary">{template.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
