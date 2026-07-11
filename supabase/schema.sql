-- Contact form submissions for the Ayman Sabir portfolio site.
-- Run this in the Supabase SQL editor (or via the CLI) for your project.

create extension if not exists "pgcrypto";

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  subject text not null,
  message text not null
);

alter table public.contact_submissions enable row level security;

-- Anyone (anon or authenticated) may submit the public contact form.
create policy "Allow public inserts"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- No one can read, update or delete via the public API.
-- Submissions are reviewed from the Supabase dashboard or via the
-- service role key from a trusted server context only.
