import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { brand } from "@/data/content";

const LOADER_DURATION_MS = 3000;

export default function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => setVisible(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <span
            className="bg-gradient-to-r from-text-primary/30 via-text-primary to-text-primary/30 bg-[length:200%_100%] bg-clip-text font-display text-[64px] text-transparent animate-shimmer"
          >
            {brand.monogram}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
