export const brand = {
  name: "HYLIOX",
  monogram: "HX",
  tagline: "Premium templates for AI builders",
};

export const nav = [
  { label: "Templates", href: "#templates" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "8 templates · Cursor · v0 · Lovable",
  headline: "Ship a site that doesn't feel like AI made it.",
  subhead:
    "Production-grade templates engineered for AI builders — drop them into Cursor, v0 or Lovable and ship a page that looks hand-crafted, not generated.",
  primaryCta: { label: "Browse templates", href: "#templates" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  stats: [
    { value: "8", label: "Templates" },
    { value: "3", label: "AI tools supported" },
    { value: "40+", label: "Components" },
  ],
};

export interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  size: "lg" | "md" | "sm";
}

export const templates: Template[] = [
  {
    id: "obsidian-saas",
    name: "Obsidian SaaS",
    category: "SaaS",
    description: "Dark, cinematic landing page with animated product showcase.",
    size: "lg",
  },
  {
    id: "founder-portfolio",
    name: "Founder Portfolio",
    category: "Portfolio",
    description: "A minimal, type-driven personal site for solo builders.",
    size: "md",
  },
  {
    id: "studio-agency",
    name: "Studio Agency",
    category: "Agency",
    description: "Bold grid layout for creative and design studios.",
    size: "md",
  },
  {
    id: "launch-waitlist",
    name: "Launch Waitlist",
    category: "Pre-launch",
    description: "Countdown-driven waitlist page with email capture.",
    size: "sm",
  },
  {
    id: "docs-starter",
    name: "Docs Starter",
    category: "Documentation",
    description: "Clean, searchable documentation shell with sidebar nav.",
    size: "sm",
  },
  {
    id: "commerce-edge",
    name: "Commerce Edge",
    category: "E-commerce",
    description: "Product-first storefront template with cart drawer.",
    size: "md",
  },
  {
    id: "changelog-feed",
    name: "Changelog Feed",
    category: "Product",
    description: "Timeline-style changelog with version filtering.",
    size: "sm",
  },
  {
    id: "creator-hub",
    name: "Creator Hub",
    category: "Media",
    description: "Video-forward hub for creators and newsletter writers.",
    size: "sm",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const howItWorks: Step[] = [
  {
    number: "01",
    title: "Pick a template",
    description:
      "Browse 8 production-ready templates, each built for a different kind of launch. Preview the full page before you commit.",
  },
  {
    number: "02",
    title: "Drop it into your AI tool",
    description:
      "Paste the template prompt into Cursor, v0 or Lovable. Every template ships with tuned prompts so the output matches the preview.",
  },
  {
    number: "03",
    title: "Ship in an afternoon",
    description:
      "Swap in your copy, brand colors and content. Deploy — no rebuilding component-by-component, no generic AI look.",
  },
];

export const socialProof = {
  stats: [
    { value: "2,400+", label: "Builders shipped with HYLIOX" },
    { value: "8", label: "Templates, zero filler" },
    { value: "4.9/5", label: "Average rating" },
  ],
  testimonials: [
    {
      quote:
        "I stopped fighting with generic AI layouts. Dropped Obsidian SaaS into v0 and had a real landing page in an hour.",
      author: "Maya Chen",
      role: "Founder, Loopwork",
    },
    {
      quote:
        "The prompts are tuned so well that what Cursor generates actually matches the preview. That never happens.",
      author: "Daniel Ortiz",
      role: "Indie hacker",
    },
    {
      quote:
        "Finally a template pack that doesn't scream 'built with AI.' Worth it for the bento grid alone.",
      author: "Priya Rao",
      role: "Design lead, Fieldnote",
    },
    {
      quote:
        "Shipped three client sites off HYLIOX templates this quarter. Clients think we hand-coded every one.",
      author: "Tom Whitfield",
      role: "Freelance developer",
    },
  ],
};

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricing: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    period: "one-time",
    description: "For a single launch.",
    features: [
      "1 template of your choice",
      "Cursor, v0 & Lovable prompts",
      "Lifetime access to updates",
      "Community support",
    ],
    cta: "Get Starter",
    highlighted: false,
  },
  {
    name: "Builder",
    price: "$129",
    period: "one-time",
    description: "For builders shipping more than once.",
    features: [
      "All 8 templates",
      "Cursor, v0 & Lovable prompts",
      "Lifetime access to updates",
      "Priority support",
      "Commercial license",
    ],
    cta: "Get Builder",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$349",
    period: "one-time",
    description: "For teams shipping for clients.",
    features: [
      "All 8 templates",
      "Cursor, v0 & Lovable prompts",
      "Lifetime access to updates",
      "Priority support",
      "Unlimited client projects",
      "White-label rights",
    ],
    cta: "Get Agency",
    highlighted: false,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faq: FAQItem[] = [
  {
    question: "Which AI tools do the templates work with?",
    answer:
      "Every template ships with tuned prompts for Cursor, v0 and Lovable. The prompts are written specifically for each tool's generation model so the output matches the preview.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. You paste the prompt into your AI tool of choice and it generates the page. Basic familiarity with editing text and swapping content helps, but no coding required to get started.",
  },
  {
    question: "Can I use these for client work?",
    answer:
      "The Builder plan includes a commercial license for your own projects. The Agency plan adds white-label rights and unlimited client projects.",
  },
  {
    question: "What if I want to customize beyond the prompt?",
    answer:
      "Every template also includes the underlying design source, so you can hand-edit components, swap the color system, or extend the layout beyond what the prompt generates.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes — if a template doesn't work for your use case within 14 days of purchase, we'll refund it in full.",
  },
];

export const finalCta = {
  eyebrow: "Ready when you are",
  headline: "Stop shipping sites that look AI-made.",
  subhead: "8 templates, 3 AI tools, one afternoon to launch.",
  cta: { label: "Browse templates", href: "#templates" },
  marquee: [
    "Obsidian SaaS",
    "Founder Portfolio",
    "Studio Agency",
    "Launch Waitlist",
    "Docs Starter",
    "Commerce Edge",
    "Changelog Feed",
    "Creator Hub",
  ],
};

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        { label: "Templates", href: "#templates" },
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Support", href: "mailto:hello@hyliox.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "License", href: "#" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} HYLIOX. All rights reserved.`,
};
