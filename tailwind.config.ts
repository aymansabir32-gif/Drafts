import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: "#060B16",
        accent: "#0092D0",
        "accent-deep": "#00294D",
        "text-primary": "#F5F7FA",
        "text-secondary": "rgba(245,247,250,0.64)",
        "border-hairline": "rgba(255,255,255,0.08)",
        surface: "rgba(255,255,255,0.03)",
        "surface-hover": "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        display: ["Instrument Serif", "serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["clamp(48px, 7vw, 88px)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        h1: ["clamp(36px, 5vw, 64px)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        h2: ["clamp(24px, 3vw, 32px)", { lineHeight: "1.2" }],
        h3: ["clamp(20px, 2.5vw, 28px)", { lineHeight: "1.25" }],
        body: ["16px", { lineHeight: "1.6" }],
        "mono-sm": ["13px", { lineHeight: "1.7" }],
      },
      letterSpacing: {
        eyebrow: "0.4em",
      },
      borderRadius: {
        DEFAULT: "16px",
        card: "16px",
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        section: "clamp(80px, 10vw, 160px)",
        container: "24px",
      },
      backdropBlur: {
        xl: "24px",
      },
      boxShadow: {
        "accent-glow": "0 0 60px rgba(0,146,208,0.24)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
