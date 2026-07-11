"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

import { useDictionary } from "@/contexts/locale-context";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimatedCounter } from "@/components/motion/animated-counter";

export function Hero() {
  const { siteConfig, hero } = useDictionary();
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    setTitleIndex(0);
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % hero.rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [hero.rotatingTitles.length]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20,
  });

  function handlePortraitMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePortraitLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-electric/30 blur-[100px] animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-violet/30 blur-[100px] animate-float"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan/20 blur-[100px] animate-float-slow"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-4 py-1.5 text-xs font-mono uppercase tracking-wide text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-electric" />
            {siteConfig.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <div className="mt-4 h-[2.6em] sm:h-[1.8em]">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl font-medium text-gradient sm:text-3xl"
              >
                {hero.rotatingTitles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button size="lg" variant="gradient" onClick={() => scrollTo("#projects")}>
                {hero.ctaWork}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#contact")}>
                {hero.ctaContact}
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
          style={{ perspective: 1000 }}
          onMouseMove={handlePortraitMove}
          onMouseLeave={handlePortraitLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border shadow-2xl shadow-black/20"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-electric)/15,var(--color-violet)/15)]" />
            <Image
              src="/images/ayman-sabir.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 768px) 320px, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass absolute -left-8 bottom-8 rounded-2xl border border-border px-4 py-3 shadow-lg animate-float"
          >
            <div className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {hero.currentlyLabel}
            </div>
            <div className="text-sm font-medium">{hero.currentlyValue}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="glass absolute -right-6 top-10 rounded-2xl border border-border px-4 py-3 shadow-lg animate-float-slow"
          >
            <div className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {hero.basedInLabel}
            </div>
            <div className="text-sm font-medium">{siteConfig.location}</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label={hero.scrollAria}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
