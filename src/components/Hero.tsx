import { useRef } from "react";
import { motion } from "framer-motion";
import { useHls } from "@/hooks/useHls";
import { hero, nav, brand } from "@/data/content";

const HERO_VIDEO_SRC = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useHls(videoRef, HERO_VIDEO_SRC);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/70 to-obsidian" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" />

      <header className="container-page relative z-10 flex items-center justify-between py-8">
        <a href="#" className="font-display text-h3 tracking-tight text-text-primary">
          {brand.name}
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-mono-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full border border-border-hairline px-5 py-2 font-mono text-mono-sm text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          Get access
        </a>
      </header>

      <motion.div
        className="container-page relative z-10 flex flex-1 flex-col justify-center gap-8 pb-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="eyebrow">
          {hero.eyebrow}
        </motion.p>
        <motion.h1 variants={item} className="max-w-4xl font-display text-display text-text-primary">
          {hero.headline}
        </motion.h1>
        <motion.p variants={item} className="max-w-xl text-body text-text-secondary">
          {hero.subhead}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-accent px-7 py-3 font-medium text-obsidian shadow-accent-glow transition-transform hover:scale-[1.02]"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-border-hairline px-7 py-3 font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
        <motion.dl variants={item} className="flex flex-wrap gap-10 pt-8">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-h2 text-text-primary">{stat.value}</dd>
              <dt className="font-mono text-mono-sm text-text-secondary">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
