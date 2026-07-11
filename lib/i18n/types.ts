export type Locale = "en" | "fr";

export type NavLink = { label: string; href: string };

export type HeroStat = { label: string; value: number; suffix: string };

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

export type SkillItem = { name: string; level: number };
export type SkillCategory = { title: string; description: string; items: SkillItem[] };

export type Project = {
  title: string;
  category: string;
  overview: string;
  tech: string[];
  challenge: string;
  solution: string;
  impact: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  research: string;
};

export type Certification = { title: string; issuer: string; date: string };
export type LanguageItem = { name: string; level: string; proficiency: number };

export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  siteConfig: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    legacyPortfolio: string;
    tagline: string;
    availability: string;
    url: string;
  };
  nav: {
    links: NavLink[];
    searchLabel: string;
    talkCta: string;
    languageLabel: string;
  };
  hero: {
    rotatingTitles: string[];
    ctaWork: string;
    ctaContact: string;
    stats: HeroStat[];
    currentlyLabel: string;
    currentlyValue: string;
    basedInLabel: string;
    scrollAria: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    highlights: { title: string; description: string }[];
  };
  experience: {
    kicker: string;
    heading: string;
    subheading: string;
    currentBadge: string;
    items: Experience[];
  };
  skills: {
    kicker: string;
    heading: string;
    subheading: string;
    categories: SkillCategory[];
  };
  projects: {
    kicker: string;
    heading: string;
    subheading: string;
    items: Project[];
    viewCaseStudy: string;
    challengeLabel: string;
    solutionLabel: string;
    impactLabel: string;
  };
  education: {
    kicker: string;
    heading: string;
    educationLabel: string;
    certificationsLabel: string;
    languagesLabel: string;
    items: EducationItem[];
    certifications: Certification[];
    languages: LanguageItem[];
    researchFocusLabel: string;
    researchFocusText: string;
  };
  contact: {
    kicker: string;
    heading: string;
    subheading: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    status: {
      success: string;
      notConfigured: string;
      error: string;
      invalid: string;
    };
    validation: {
      nameMin: string;
      nameMax: string;
      emailInvalid: string;
      companyMax: string;
      subjectMin: string;
      subjectMax: string;
      messageMin: string;
      messageMax: string;
    };
  };
  footer: {
    sectionsLabel: string;
    elsewhereLabel: string;
    contactLabel: string;
    linkedinLink: string;
    legacyPortfolioLink: string;
    rights: string;
    builtWith: string;
  };
  commandMenu: {
    placeholder: string;
    empty: string;
    navigateGroup: string;
    actionsGroup: string;
    themeGroup: string;
    emailAction: string;
    linkedinAction: string;
    portfolioAction: string;
    aboutAction: string;
    lightMode: string;
    darkMode: string;
  };
};
