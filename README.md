# Ayman Sabir — Portfolio

A premium, highly interactive portfolio site for Ayman Sabir — Marketing Strategy & AI Consultant — built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion. Available in English and French.

## Stack

- **Next.js 15** (App Router, Server Actions, `[locale]` routing + middleware)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals, parallax, magnetic buttons and page transitions
- **Resend** for contact form email notifications
- **Supabase** for optionally storing contact form submissions
- **shadcn/ui**-style primitives (hand-rolled on Radix UI)
- **React Hook Form + Zod** for localized contact form validation
- **cmdk** for the ⌘K command menu
- **Lucide React** for iconography

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en` (or `/fr`, based on your browser's language / a previously chosen locale).

## Environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

### Email notifications (`RESEND_API_KEY`) — do this to actually receive messages

The contact form does **not** send email by itself — without `RESEND_API_KEY` set, submissions have nowhere to go and the form shows a "not configured" message instead of silently failing.

1. Create a free account at [resend.com](https://resend.com) and grab an API key
2. Set `RESEND_API_KEY` in `.env.local` (and in your Vercel project's environment variables for production)
3. By default, emails are sent to `aymansabir32@gmail.com` from `onboarding@resend.dev`. Override with `CONTACT_TO_EMAIL` / `RESEND_FROM_EMAIL` — verifying your own domain in Resend and using it as the `RESEND_FROM_EMAIL` sender is recommended for reliable inbox delivery.

### Database backup (optional, `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

If set, every submission is also stored in a Supabase table (see below) as a CRM-style record — independent of email delivery.

The form only shows "not configured" if **neither** Resend nor Supabase is set up. If only one is configured, submissions still go through via that channel.

## Supabase setup

Run `supabase/schema.sql` in your Supabase project's SQL editor. It creates the `contact_submissions` table with row-level security enabled — public `insert` is allowed for the contact form, but `select`/`update`/`delete` are not exposed to the anon key. Review submissions from the Supabase dashboard.

## Internationalization

The site is served at `/en` and `/fr`. `middleware.ts` redirects `/` to the browser's preferred language (falling back to English), and remembers the choice in a `NEXT_LOCALE` cookie. The `EN | FR` switcher in the navbar (and mobile menu) swaps locale on the current page.

All copy lives in `lib/i18n/en.ts` and `lib/i18n/fr.ts`, typed against `lib/i18n/types.ts`. Components read strings via the `useDictionary()` hook (`contexts/locale-context.tsx`) rather than importing content directly — edit the dictionary files to change copy in either language.

## Project structure

```
app/
  [locale]/
    layout.tsx            Root layout per locale: fonts, metadata, JSON-LD, theme/chrome providers
    page.tsx                Composes all portfolio sections
  actions/contact.ts       Server Action: validates, emails via Resend, optionally stores in Supabase
  sitemap.ts, robots.ts    SEO (includes both locales)
middleware.ts               Locale detection + redirect
components/
  layout/                  Navbar, footer, theme toggle, command menu, language switcher, scroll progress, cursor glow, page loader
  sections/                 Hero, About, Experience, Skills, Projects, Education, Contact
  motion/                   Reusable Framer Motion primitives (Reveal, AnimatedCounter, Magnetic)
  ui/                       shadcn-style primitives (Button, Card, Badge, Input, Dialog, Command, ...)
contexts/locale-context.tsx  React context exposing the active dictionary via useDictionary()
lib/
  i18n/                     en.ts / fr.ts dictionaries, types.ts, config.ts (locale list + loader)
  supabase/                 Browser + server Supabase clients
  validations/contact.ts    Zod schema factory (localized messages) shared by the form and the server action
supabase/schema.sql          Table + RLS policies
```

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new). Set `RESEND_API_KEY` (required for the contact form to notify you) and, optionally, the Supabase variables in your Vercel project settings before deploying.
