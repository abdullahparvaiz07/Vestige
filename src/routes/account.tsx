import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { useSession } from "@/hooks/use-session";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Account — Vestige" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { user, loading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth", replace: true });
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out.");
    navigate({ to: "/", replace: true });
  };

  if (loading || !user) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-3xl px-6 py-32 text-center text-muted-foreground">
          Loading…
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="eyebrow mb-4 text-muted-foreground">Members</p>
        <h1 className="font-serif text-5xl leading-none">Your atelier.</h1>
        <p className="mt-4 text-muted-foreground">Signed in as {user.email}.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Card title="Orders" body="Review shipment status and repair history." to="/shop" cta="Coming soon" />
          <Card title="Saved objects" body="Pieces you've kept close." to="/shop" cta="Browse the collection" />
          <Card title="Details" body="Manage addresses and dispatches." to="/account" cta="Manage" />
        </div>

        <button
          onClick={handleSignOut}
          className="mt-16 link-underline eyebrow text-muted-foreground"
        >
          Sign out
        </button>
      </section>
    </SiteLayout>
  );
}

function Card({ title, body, to, cta }: { title: string; body: string; to: string; cta: string }) {
  return (
    <div className="border hairline p-8">
      <p className="eyebrow mb-3 text-muted-foreground">{title}</p>
      <p className="font-serif text-2xl leading-tight">{body}</p>
      <Link to={to} className="mt-6 inline-block link-underline eyebrow">
        {cta}
      </Link>
    </div>
  );
}
