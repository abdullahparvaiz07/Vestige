
-- Lock down SECURITY DEFINER functions
revoke execute on function public.has_role(uuid, app_role) from public, anon;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.tg_touch_updated_at() from public, anon;

-- Replace permissive newsletter/contact inserts with column-scoped checks
drop policy if exists "newsletter public insert" on public.newsletter_subscribers;
create policy "newsletter public insert" on public.newsletter_subscribers
  for insert to anon, authenticated
  with check (email is not null and length(email) between 3 and 320 and email like '%_@_%');

drop policy if exists "contact public insert" on public.contact_messages;
create policy "contact public insert" on public.contact_messages
  for insert to anon, authenticated
  with check (
    name is not null and length(name) between 1 and 120
    and email is not null and length(email) between 3 and 320 and email like '%_@_%'
    and message is not null and length(message) between 1 and 4000
  );
