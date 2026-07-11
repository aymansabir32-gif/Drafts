export const siteConfig = {
  name: "Ayman Sabir",
  role: "Marketing Strategy & AI Consultant",
  shortRole: "Marketing & AI Consultant",
  location: "Antony, France",
  email: "aymansabir32@gmail.com",
  phone: "+33 7 80 86 75 15",
  linkedin: "https://linkedin.com/in/sabirayman/",
  legacyPortfolio: "https://aymansabir.my.canva.site/",
  tagline:
    "I help organizations turn AI ambition into adopted, governed, everyday practice — while keeping marketing strategy sharp and commercially grounded.",
  availability: "Open to full-time roles from December 2026",
  url: "https://ayman-sabir.vercel.app",
  description:
    "Portfolio of Ayman Sabir — Marketing Strategy & AI Consultant specializing in generative AI adoption, prompt engineering, AI agents, digital transformation and marketing operations.",
};

export const rotatingTitles = [
  "Marketing Strategy & AI Consultant",
  "Generative AI Specialist",
  "Prompt Engineer",
  "AI Adoption Consultant",
  "Digital Transformation Professional",
];

export const heroStats = [
  { label: "B2B clients acquired", value: 50, suffix: "+" },
  { label: "Client retention rate", value: 90, suffix: "%" },
  { label: "Revenue growth delivered", value: 25, suffix: "%" },
  { label: "Customer satisfaction", value: 92, suffix: "%" },
];

export const about = {
  kicker: "About",
  heading: "Bridging boardroom strategy and applied AI",
  paragraphs: [
    "I'm currently completing a Master's in Marketing Strategy & Business Development at ICN Business School in Paris, with a research focus on user adoption of generative AI inside strictly-regulated financial services organizations.",
    "For the past six months I've worked inside Amundi Asset Management — Europe's leading asset manager — co-piloting AI adoption for the Marketing & Products business line directly alongside the COO. My day-to-day sits at the intersection of prompt engineering, AI agent deployment, and change management: designing accelerators, training colleagues, and turning experimentation into governed, repeatable practice.",
    "Before AI became my focus, I built a foundation in commercial marketing and B2B growth — running CRM-driven acquisition, managing client portfolios, and shaping social content strategy across import-export, telecom and travel businesses in Morocco.",
    "What drives me is the same question in every context: how do you make a powerful new tool actually get used, safely and well, by people who didn't ask for it? I'm looking for a full-time role from December 2026 where I can keep answering that question at scale.",
  ],
  highlights: [
    {
      title: "AI Adoption",
      description: "Prompt catalogs, agent deployment, governance and KPI tracking for a regulated enterprise.",
    },
    {
      title: "Marketing Craft",
      description: "CRM, campaign management, content strategy and lead generation across four organizations.",
    },
    {
      title: "Business Acumen",
      description: "M.Sc in Strategy & Business Development, plus hands-on P&L-adjacent client growth.",
    },
    {
      title: "Change Management",
      description: "Training, documentation and stakeholder alignment that make new tools stick.",
    },
  ],
};

export type Experience = {
  role: string;
  company: string;
  companyDescription: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Assistant Chief Operating Officer & AI Genius",
    company: "Amundi Asset Management",
    companyDescription: "Europe's leading asset manager",
    location: "Paris, France",
    period: "April 2026 – October 2026",
    current: true,
    summary:
      "Co-piloting AI adoption for the Marketing & Products business line directly with the COO — from accelerator design to governance and enablement.",
    highlights: [
      "Designed AI accelerators: prompt catalogs, AI agent configuration and deployment, playbooks and ready-to-use content generation templates",
      "Drove user adoption of the internal LLM (ALTO Studio AI): training sessions, hands-on workshops, user documentation, colleague support and FAQ",
      "Steered AI adoption strategy: defined KPIs, tracked usage, and formalized governance and usage rules",
      "Built and shared a best-practice repository — a reusable use-case library and deployment kit for other business lines",
    ],
    tags: ["Prompt Engineering", "AI Agents", "AI Governance", "Change Management", "LLM Enablement"],
  },
  {
    role: "Junior Account Manager",
    company: "MATI Services",
    companyDescription: "Import-export & trading company",
    location: "Tangier, Morocco",
    period: "September 2023 – August 2025",
    summary:
      "Owned end-to-end B2B relationships for a portfolio of import-export SMEs, from acquisition through renewal.",
    highlights: [
      "Grew portfolio revenue by +25% across 22 months",
      "Acquired 50+ new B2B clients through targeted prospecting and structured CRM follow-up (Salesforce, HubSpot)",
      "Sustained a 90% client retention rate through personalized account management and systematic follow-up",
      "Managed the full client lifecycle: onboarding, contract renewal and upselling",
    ],
    tags: ["CRM", "B2B Sales", "Salesforce", "HubSpot", "Client Retention"],
  },
  {
    role: "Telesales Advisor",
    company: "Tingis Group",
    companyDescription: "Multilingual call center",
    location: "Tangier, Morocco",
    period: "July 2023 – August 2023",
    summary: "Handled high-volume client calls in a multilingual, high-standards contact center environment.",
    highlights: [
      "Managed 2,400 client calls with a 92% satisfaction rate",
      "Closed 260 sales at a 14% conversion rate, generating €12,500 in revenue in 2 months",
      "Maintained strict adherence to quality standards and internal procedures under high call volume",
    ],
    tags: ["Sales Performance", "Customer Satisfaction", "Conversion"],
  },
  {
    role: "Social Media Marketing Manager",
    company: "Inclusive Morocco",
    companyDescription: "Travel agency",
    location: "Tangier, Morocco",
    period: "May 2023 – July 2023",
    summary: "Owned social strategy end-to-end, from editorial calendar to paid targeting and lead conversion.",
    highlights: [
      "Grew the social community by +35% through organic content strategy and paid targeting",
      "Generated 200+ qualified leads, converting 40 into confirmed bookings",
      "Designed and executed the full editorial calendar and campaign briefs across Instagram and Facebook",
    ],
    tags: ["Social Media", "Content Strategy", "Lead Generation", "Audience Growth"],
  },
];

export type SkillItem = { name: string; level: number };
export type SkillCategory = { title: string; description: string; items: SkillItem[] };

export const skillCategories: SkillCategory[] = [
  {
    title: "Artificial Intelligence",
    description: "Prompt engineering, agents and enterprise LLM enablement",
    items: [
      { name: "Prompt Engineering", level: 95 },
      { name: "AI Agents", level: 88 },
      { name: "Claude (Code, Cowork, Design)", level: 92 },
      { name: "OpenAI / LLMs", level: 85 },
      { name: "Workflow Automation", level: 80 },
      { name: "n8n", level: 75 },
      { name: "Zapier", level: 78 },
    ],
  },
  {
    title: "Marketing",
    description: "Strategy, acquisition and campaign execution",
    items: [
      { name: "Marketing Strategy", level: 90 },
      { name: "CRM (Salesforce, HubSpot)", level: 85 },
      { name: "SEO / SEA", level: 75 },
      { name: "Campaign Management", level: 85 },
      { name: "Content Marketing", level: 88 },
      { name: "Lead Generation", level: 85 },
    ],
  },
  {
    title: "Data",
    description: "Analytics, reporting and decision support",
    items: [
      { name: "Google Analytics", level: 82 },
      { name: "IBM SPSS", level: 75 },
      { name: "Excel", level: 90 },
      { name: "KPI Analysis", level: 88 },
      { name: "Dashboarding", level: 80 },
    ],
  },
  {
    title: "Design",
    description: "Rapid prototyping and content production",
    items: [
      { name: "Figma", level: 78 },
      { name: "Canva", level: 90 },
      { name: "Readymag", level: 72 },
    ],
  },
  {
    title: "Business",
    description: "Consulting posture and organizational change",
    items: [
      { name: "Digital Transformation", level: 88 },
      { name: "Consulting", level: 85 },
      { name: "Stakeholder Management", level: 90 },
      { name: "Business Strategy", level: 85 },
      { name: "Change Management", level: 88 },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  overview: string;
  tech: string[];
  challenge: string;
  solution: string;
  impact: string;
};

export const projects: Project[] = [
  {
    title: "AI Prompt Catalog & Playbooks",
    category: "AI Adoption",
    overview:
      "A structured, ready-to-use library of prompts and content-generation templates for Amundi's Marketing & Products business line.",
    tech: ["Prompt Engineering", "ALTO Studio AI", "Documentation"],
    challenge:
      "Teams experimented with the internal LLM inconsistently, with no shared vocabulary for what a 'good' prompt looked like, causing duplicated effort and uneven output quality.",
    solution:
      "Designed a categorized prompt catalog and reusable playbooks mapped to real marketing workflows, packaged with guidance on iteration and evaluation.",
    impact:
      "Gave the business line a repeatable starting point for AI-assisted work, reducing ramp-up time for new use cases and standardizing output quality.",
  },
  {
    title: "AI Agent Deployment Framework",
    category: "AI Agents",
    overview:
      "Configuration and rollout of task-specific AI agents to automate recurring marketing and reporting workflows.",
    tech: ["AI Agents", "Workflow Automation", "Governance"],
    challenge:
      "Agent use cases were high-potential but high-risk in a regulated environment — deployment needed to be safe, auditable and reversible.",
    solution:
      "Built a deployment kit combining agent configuration templates with governance checkpoints, usage rules and KPI tracking baked in from day one.",
    impact:
      "Enabled controlled agent rollout across teams with clear ownership, usage visibility and a documented path to scale to other business lines.",
  },
  {
    title: "Internal AI Adoption Framework",
    category: "Change Management",
    overview:
      "An end-to-end enablement program — training, workshops, documentation and support — for internal LLM adoption at scale.",
    tech: ["Training Design", "Documentation", "Stakeholder Management"],
    challenge:
      "Rolling out a new internal LLM to non-technical marketing and product teams required more than access — it required trust and habit change.",
    solution:
      "Ran hands-on workshops and produced user documentation and FAQs tailored to real workflows, working directly with the COO to align on priorities and messaging.",
    impact:
      "Measurably increased tool adoption and usage confidence across the business line, laying the groundwork for formal AI governance.",
  },
  {
    title: "AI Governance & KPI Framework",
    category: "AI Governance",
    overview:
      "A lightweight governance model defining usage rules, ownership and success metrics for AI initiatives inside a regulated enterprise.",
    tech: ["KPI Design", "Governance", "Usage Analytics"],
    challenge:
      "Without shared KPIs, it was impossible to tell which AI use cases were actually delivering value versus generating noise.",
    solution:
      "Defined adoption and impact KPIs, set up usage tracking, and formalized rules of use aligned with compliance requirements.",
    impact:
      "Gave leadership a clear, ongoing view of AI adoption health and a defensible basis for prioritizing future investment.",
  },
  {
    title: "B2B CRM Growth Program",
    category: "Marketing Operations",
    overview:
      "A structured CRM-driven acquisition and retention program for a portfolio of import-export SME clients.",
    tech: ["Salesforce", "HubSpot", "CRM Strategy"],
    challenge:
      "A growing client portfolio needed consistent follow-up and a repeatable process to avoid revenue leakage from churn.",
    solution:
      "Implemented structured CRM tracking, targeted prospecting cadences and systematic renewal follow-ups across the full client lifecycle.",
    impact: "+25% portfolio revenue growth and a 90% client retention rate over 22 months, with 50+ new B2B clients acquired.",
  },
  {
    title: "Social Growth & Lead Engine",
    category: "Digital Marketing",
    overview:
      "An organic-plus-paid social strategy and editorial system built to convert community growth into qualified bookings.",
    tech: ["Instagram", "Facebook", "Content Calendar", "Paid Targeting"],
    challenge:
      "The brand had an audience but no repeatable system connecting content to qualified leads and confirmed bookings.",
    solution:
      "Designed a full editorial calendar and campaign briefs, pairing organic storytelling with targeted paid campaigns.",
    impact: "+35% community growth and 200+ qualified leads generated, converting into 40 confirmed bookings.",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  research: string;
};

export const education: EducationItem[] = [
  {
    degree: "Double Degree — DESSMI & M.Sc, Strategy, Marketing & Business Development",
    school: "ICN Business School",
    location: "Puteaux (La Défense), France",
    period: "Sept. 2025 – Nov. 2026",
    research:
      "Research: \"User Adoption of Generative AI within a strictly-regulated financial services organization — Marketing & Products Business Line case study\"",
  },
  {
    degree: "Grande École Program (Master), International Trade",
    school: "École Nationale de Commerce et de Gestion (ENCG)",
    location: "Tangier, Morocco",
    period: "Sept. 2018 – Sept. 2023",
    research:
      "Research: \"Digitalization of foreign trade in the face of new technologies (AI, IoT, Blockchain)\"",
  },
];

export type Certification = { title: string; issuer: string; date: string };

export const certifications: Certification[] = [
  { title: "Web Design", issuer: "ICN Business School, Paris", date: "December 2025" },
  { title: "Nouveau Retail", issuer: "ICN Business School, Paris", date: "April 2026" },
  { title: "Virtual Assistant", issuer: "African Leadership eXperience (ALX)", date: "October 2024" },
  { title: "AI Career Essentials", issuer: "African Leadership eXperience (ALX)", date: "June 2024" },
];

export type LanguageItem = { name: string; level: string; proficiency: number };

export const languages: LanguageItem[] = [
  { name: "French", level: "C1 — TCF, July 2025", proficiency: 90 },
  { name: "English", level: "C1 — IELTS, September 2024", proficiency: 90 },
  { name: "Arabic", level: "Native / Bilingual", proficiency: 100 },
  { name: "Spanish", level: "B1 — Intermediate", proficiency: 55 },
  { name: "German", level: "A1 — Beginner", proficiency: 20 },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
