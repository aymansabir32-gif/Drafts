import { brand, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border-hairline">
      <div className="container-page grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-h3 text-text-primary">{brand.name}</span>
          <p className="mt-3 max-w-xs text-body text-text-secondary">{brand.tagline}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <h3 className="font-mono text-mono-sm uppercase tracking-eyebrow text-text-secondary">
              {column.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page border-t border-border-hairline py-6">
        <p className="font-mono text-mono-sm text-text-secondary">{footer.copyright}</p>
      </div>
    </footer>
  );
}
