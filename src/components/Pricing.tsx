import { pricing } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="container-page py-section">
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">Pricing</p>
        <h2 className="font-display text-h1 text-text-primary">Pay once, ship forever.</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricing.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-card border p-8 ${
              tier.highlighted
                ? "border-accent bg-gradient-to-b from-accent-deep/40 to-surface shadow-accent-glow lg:-translate-y-4"
                : "border-border-hairline bg-surface"
            }`}
          >
            {tier.highlighted && (
              <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 font-mono text-mono-sm text-obsidian">
                Most popular
              </span>
            )}
            <h3 className="font-display text-h3 text-text-primary">{tier.name}</h3>
            <p className="mt-2 text-body text-text-secondary">{tier.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-h1 text-text-primary">{tier.price}</span>
              <span className="font-mono text-mono-sm text-text-secondary">{tier.period}</span>
            </div>
            <ul className="mt-8 flex flex-1 flex-col gap-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-body text-text-secondary">
                  <span aria-hidden="true" className="mt-1 text-accent">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#faq"
              className={`mt-8 rounded-full px-6 py-3 text-center font-medium transition-transform hover:scale-[1.02] ${
                tier.highlighted
                  ? "bg-accent text-obsidian"
                  : "border border-border-hairline text-text-primary hover:border-accent hover:text-accent"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
