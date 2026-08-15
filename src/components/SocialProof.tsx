import { socialProof } from "@/data/content";

export default function SocialProof() {
  return (
    <section className="container-page py-section">
      <dl className="grid grid-cols-1 gap-8 border-y border-border-hairline py-12 sm:grid-cols-3">
        {socialProof.stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <dd className="font-display text-h1 text-accent">{stat.value}</dd>
            <dt className="mt-2 font-mono text-mono-sm text-text-secondary">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-2">
        {socialProof.testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="mb-6 break-inside-avoid rounded-card border border-border-hairline bg-surface p-8"
          >
            <blockquote className="text-body text-text-primary">"{testimonial.quote}"</blockquote>
            <figcaption className="mt-6 font-mono text-mono-sm text-text-secondary">
              {testimonial.author} · {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
