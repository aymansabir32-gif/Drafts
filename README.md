# Ayman Sabir — Portfolio

A premium, highly interactive portfolio site for Ayman Sabir — Marketing Strategy & AI Consultant — built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## Stack

- **Next.js 15** (App Router, Server Actions)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals, parallax, magnetic buttons and page transitions
- **Supabase** for storing contact form submissions
- **shadcn/ui**-style primitives (hand-rolled on Radix UI)
- **React Hook Form + Zod** for contact form validation
- **cmdk** for the ⌘K command menu
- **Lucide React** for iconography

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project credentials:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Without these set, the contact form still renders and validates correctly, but submissions will show a friendly "not configured" message instead of writing to Supabase.

## Supabase setup

Run `supabase/schema.sql` in your Supabase project's SQL editor. It creates the `contact_submissions` table with row-level security enabled — public `insert` is allowed for the contact form, but `select`/`update`/`delete` are not exposed to the anon key. Review submissions from the Supabase dashboard.

## Project structure

```
app/
  actions/contact.ts    Server Action that validates and inserts contact form submissions
  layout.tsx             Root layout: fonts, metadata, JSON-LD, theme/chrome providers
  page.tsx                Composes all portfolio sections
  sitemap.ts, robots.ts   SEO
components/
  layout/                 Navbar, footer, theme toggle, command menu, scroll progress, cursor glow, page loader
  sections/                Hero, About, Experience, Skills, Projects, Education, Contact
  motion/                  Reusable Framer Motion primitives (Reveal, AnimatedCounter, Magnetic)
  ui/                      shadcn-style primitives (Button, Card, Badge, Input, Dialog, Command, ...)
lib/
  data.ts                  All resume/site content in one place
  supabase/                Browser + server Supabase clients
  validations/contact.ts   Zod schema shared by the client form and the server action
supabase/schema.sql        Table + RLS policies
```

## Content

All resume content lives in `lib/data.ts` — update it there to change copy across the site.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new). Set the two Supabase environment variables in your Vercel project settings before deploying.
