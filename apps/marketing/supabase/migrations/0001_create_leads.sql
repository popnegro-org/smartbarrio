create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  business_slug text not null,
  business_name text not null,
  name text not null,
  phone text not null,
  email text,
  message text not null,
  created_at timestamptz not null default now()
);
alter table public.leads enable row level security;
