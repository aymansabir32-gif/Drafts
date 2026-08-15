import { finalCta } from "@/data/content";

export default function FinalCTA() {
  const marqueeItems = [...finalCta.marquee, ...finalCta.marquee];

  return (
    <section className="relative overflow-hidden py-section">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-page relative flex flex-col items-center gap-8 text-center">
        <p className="eyebrow">{finalCta.eyebrow}</p>
        <h2 className="max-w-3xl font-display text-h1 text-text-primary">{finalCta.headline}</h2>
        <p className="max-w-xl text-body text-text-secondary">{finalCta.subhead}</p>
        <a
          href={finalCta.cta.href}
          className="rounded-full bg-accent px-8 py-3.5 font-medium text-obsidian shadow-accent-glow transition-transform hover:scale-[1.02]"
        >
          {finalCta.cta.label}
        </a>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-border-hairline py-6">
        <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
          {marqueeItems.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="font-display text-h2 text-text-primary/20 whitespace-nowrap"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
