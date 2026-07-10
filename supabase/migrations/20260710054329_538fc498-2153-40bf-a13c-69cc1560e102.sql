
-- ============ ENUMS ============
create type public.app_role as enum ('customer','admin');
create type public.order_status as enum ('pending','paid','packed','shipped','delivered','cancelled','refunded');
create type public.coupon_type as enum ('percent','fixed');

-- ============ PROFILES ============
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  phone text,
  marketing_opt_in boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "profiles self read" on public.profiles for select to authenticated using (auth.uid() = id);
create policy "profiles self upsert" on public.profiles for insert to authenticated with check (auth.uid() = id);
create policy "profiles self update" on public.profiles for update to authenticated using (auth.uid() = id);

-- ============ USER ROLES ============
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "roles self read" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- ============ SIGNUP TRIGGER ============
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''));
  insert into public.user_roles (user_id, role) values (new.id, 'customer') on conflict do nothing;
  return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============ UPDATED_AT HELPER ============
create or replace function public.tg_touch_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end;
$$;

-- ============ CATEGORIES ============
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  image_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.categories to anon, authenticated;
grant all on public.categories to service_role;
alter table public.categories enable row level security;
create policy "categories public read" on public.categories for select to anon, authenticated using (true);
create policy "categories admin write" on public.categories for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ BRANDS ============
create table public.brands (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  logo_url text,
  created_at timestamptz not null default now()
);
grant select on public.brands to anon, authenticated;
grant all on public.brands to service_role;
alter table public.brands enable row level security;
create policy "brands public read" on public.brands for select to anon, authenticated using (true);
create policy "brands admin write" on public.brands for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ PRODUCTS ============
create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  description text,
  story text,
  category_id uuid references public.categories(id) on delete set null,
  brand_id uuid references public.brands(id) on delete set null,
  base_price_cents int not null check (base_price_cents >= 0),
  currency text not null default 'USD',
  status text not null default 'active' check (status in ('active','draft','archived')),
  featured boolean not null default false,
  best_seller boolean not null default false,
  seo_title text,
  seo_description text,
  hero_image_url text,
  material text,
  origin text,
  care text,
  dimensions text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger touch_products before update on public.products for each row execute function public.tg_touch_updated_at();
create index products_category_idx on public.products(category_id);
create index products_featured_idx on public.products(featured) where featured;
create index products_best_seller_idx on public.products(best_seller) where best_seller;
grant select on public.products to anon, authenticated;
grant all on public.products to service_role;
alter table public.products enable row level security;
create policy "products public read active" on public.products for select to anon, authenticated using (status = 'active' or has_role(auth.uid(),'admin'));
create policy "products admin write" on public.products for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ PRODUCT IMAGES ============
create table public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  url text not null,
  alt text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create index product_images_product_idx on public.product_images(product_id);
grant select on public.product_images to anon, authenticated;
grant all on public.product_images to service_role;
alter table public.product_images enable row level security;
create policy "product_images public read" on public.product_images for select to anon, authenticated using (true);
create policy "product_images admin write" on public.product_images for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ PRODUCT VARIANTS ============
create table public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  sku text unique not null,
  option_finish text,
  option_size text,
  price_cents int not null check (price_cents >= 0),
  stock int not null default 0 check (stock >= 0),
  created_at timestamptz not null default now()
);
create index product_variants_product_idx on public.product_variants(product_id);
grant select on public.product_variants to anon, authenticated;
grant all on public.product_variants to service_role;
alter table public.product_variants enable row level security;
create policy "variants public read" on public.product_variants for select to anon, authenticated using (true);
create policy "variants admin write" on public.product_variants for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ ADDRESSES ============
create table public.addresses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  label text,
  full_name text not null,
  line1 text not null,
  line2 text,
  city text not null,
  region text,
  postal_code text not null,
  country text not null default 'US',
  phone text,
  is_default boolean not null default false,
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.addresses to authenticated;
grant all on public.addresses to service_role;
alter table public.addresses enable row level security;
create policy "addresses self all" on public.addresses for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ CARTS ============
create table public.carts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  session_token text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index carts_user_idx on public.carts(user_id);
create trigger touch_carts before update on public.carts for each row execute function public.tg_touch_updated_at();
grant select, insert, update, delete on public.carts to anon, authenticated;
grant all on public.carts to service_role;
alter table public.carts enable row level security;
-- Guests carts are keyed by session_token; server functions enforce token match. RLS: user-owned rows visible to owner; guest rows accessible to anon (row-level enforcement by opaque token guessing is impractical, so we scope tightly).
create policy "carts owner read" on public.carts for select to authenticated using (auth.uid() = user_id);
create policy "carts owner write" on public.carts for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id or user_id is null);
create policy "carts anon insert" on public.carts for insert to anon with check (user_id is null);

create table public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references public.carts(id) on delete cascade,
  variant_id uuid not null references public.product_variants(id) on delete cascade,
  qty int not null default 1 check (qty > 0),
  created_at timestamptz not null default now(),
  unique (cart_id, variant_id)
);
create index cart_items_cart_idx on public.cart_items(cart_id);
grant select, insert, update, delete on public.cart_items to anon, authenticated;
grant all on public.cart_items to service_role;
alter table public.cart_items enable row level security;
create policy "cart_items owner all" on public.cart_items for all to authenticated
  using (exists (select 1 from public.carts c where c.id = cart_id and c.user_id = auth.uid()))
  with check (exists (select 1 from public.carts c where c.id = cart_id and c.user_id = auth.uid()));

-- ============ WISHLIST ============
create table public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);
grant select, insert, delete on public.wishlist_items to authenticated;
grant all on public.wishlist_items to service_role;
alter table public.wishlist_items enable row level security;
create policy "wishlist self all" on public.wishlist_items for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============ COUPONS ============
create table public.coupons (
  code text primary key,
  type coupon_type not null,
  value int not null check (value > 0),
  min_subtotal_cents int not null default 0,
  starts_at timestamptz,
  ends_at timestamptz,
  max_uses int,
  used_count int not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
grant select on public.coupons to anon, authenticated;
grant all on public.coupons to service_role;
alter table public.coupons enable row level security;
create policy "coupons public read active" on public.coupons for select to anon, authenticated using (active = true);
create policy "coupons admin write" on public.coupons for all to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ ORDERS ============
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text unique not null default ('VS-' || upper(substr(gen_random_uuid()::text, 1, 8))),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  status order_status not null default 'pending',
  subtotal_cents int not null default 0,
  discount_cents int not null default 0,
  shipping_cents int not null default 0,
  tax_cents int not null default 0,
  total_cents int not null default 0,
  currency text not null default 'USD',
  coupon_code text,
  stripe_session_id text,
  stripe_payment_intent text,
  shipping_address jsonb,
  billing_address jsonb,
  tracking_number text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger touch_orders before update on public.orders for each row execute function public.tg_touch_updated_at();
create index orders_user_idx on public.orders(user_id);
create index orders_email_idx on public.orders(email);
grant select on public.orders to authenticated;
grant insert on public.orders to anon, authenticated;
grant all on public.orders to service_role;
alter table public.orders enable row level security;
create policy "orders self read" on public.orders for select to authenticated using (auth.uid() = user_id or has_role(auth.uid(),'admin'));
create policy "orders admin write" on public.orders for update to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_snapshot jsonb not null,
  unit_price_cents int not null,
  qty int not null check (qty > 0),
  created_at timestamptz not null default now()
);
create index order_items_order_idx on public.order_items(order_id);
grant select on public.order_items to authenticated;
grant all on public.order_items to service_role;
alter table public.order_items enable row level security;
create policy "order_items self read" on public.order_items for select to authenticated
  using (exists (select 1 from public.orders o where o.id = order_id and (o.user_id = auth.uid() or has_role(auth.uid(),'admin'))));

-- ============ REVIEWS ============
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  rating int not null check (rating between 1 and 5),
  title text,
  body text,
  verified boolean not null default false,
  published boolean not null default true,
  created_at timestamptz not null default now()
);
create index reviews_product_idx on public.reviews(product_id);
grant select on public.reviews to anon, authenticated;
grant insert on public.reviews to authenticated;
grant update, delete on public.reviews to authenticated;
grant all on public.reviews to service_role;
alter table public.reviews enable row level security;
create policy "reviews public read published" on public.reviews for select to anon, authenticated using (published or user_id = auth.uid() or has_role(auth.uid(),'admin'));
create policy "reviews author insert" on public.reviews for insert to authenticated with check (auth.uid() = user_id);
create policy "reviews author update" on public.reviews for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "reviews admin update" on public.reviews for update to authenticated using (has_role(auth.uid(),'admin')) with check (has_role(auth.uid(),'admin'));

-- ============ NEWSLETTER + CONTACT ============
create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);
grant insert on public.newsletter_subscribers to anon, authenticated;
grant all on public.newsletter_subscribers to service_role;
alter table public.newsletter_subscribers enable row level security;
create policy "newsletter public insert" on public.newsletter_subscribers for insert to anon, authenticated with check (true);
create policy "newsletter admin read" on public.newsletter_subscribers for select to authenticated using (has_role(auth.uid(),'admin'));

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);
grant insert on public.contact_messages to anon, authenticated;
grant all on public.contact_messages to service_role;
alter table public.contact_messages enable row level security;
create policy "contact public insert" on public.contact_messages for insert to anon, authenticated with check (true);
create policy "contact admin read" on public.contact_messages for select to authenticated using (has_role(auth.uid(),'admin'));
