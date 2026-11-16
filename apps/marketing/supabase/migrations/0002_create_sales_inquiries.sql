create table if not exists public.sales_inquiries (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  name text not null,
  phone text not null,
  email text,
  message text not null,
  created_at timestamptz not null default now()
);
alter table public.sales_inquiries enable row level security;
