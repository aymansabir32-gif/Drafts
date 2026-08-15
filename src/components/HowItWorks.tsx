import { useEffect, useRef, useState } from "react";
import { howItWorks } from "@/data/content";

export default function HowItWorks() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pinTarget = pinRef.current;
    if (!pinTarget || prefersReducedMotion) return;

    let mm: ReturnType<typeof import("gsap").default.matchMedia> | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: pinTarget,
          start: "top top",
          end: `+=${(howItWorks.length - 1) * 100}%`,
          pin: true,
          scrub: true,
          onUpdate: (self) => {
            const index = Math.min(howItWorks.length - 1, Math.floor(self.progress * howItWorks.length));
            setActiveIndex(index);
          },
        });

        return () => trigger.kill();
      });
    });

    return () => {
      cancelled = true;
      mm?.revert();
    };
  }, []);

  return (
    <section id="how-it-works" className="container-page py-section">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">Process</p>
        <h2 className="font-display text-h1 text-text-primary">How it works.</h2>
      </div>

      <div ref={pinRef} className="relative lg:h-[80svh]">
        {howItWorks.map((step, index) => (
          <div
            key={step.number}
            className={`grid grid-cols-1 items-center gap-10 py-12 transition-opacity duration-500 lg:absolute lg:inset-0 lg:grid-cols-2 lg:py-0 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            } ${index === activeIndex ? "lg:pointer-events-auto lg:opacity-100" : "lg:pointer-events-none lg:opacity-0"}`}
          >
            <div>
              <span className="font-display text-h1 text-accent/40">{step.number}</span>
              <h3 className="mt-4 font-display text-h2 text-text-primary">{step.title}</h3>
              <p className="mt-4 max-w-md text-body text-text-secondary">{step.description}</p>
            </div>
            <div
              className="aspect-[4/3] rounded-card border border-border-hairline bg-gradient-to-br from-accent-deep/40 via-surface to-transparent"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
