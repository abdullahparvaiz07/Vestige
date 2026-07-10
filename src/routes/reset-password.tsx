import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset password — Vestige" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase places the recovery token in the URL hash on landing;
    // detectSessionInUrl exchanges it and fires PASSWORD_RECOVERY.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) return toast.error("Password must be at least 8 characters.");
    if (password !== confirm) return toast.error("Passwords don't match.");
    setBusy(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast.success("Password updated. You're signed in.");
      navigate({ to: "/account", replace: true });
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Could not update password.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto grid min-h-[70dvh] max-w-md items-center px-6 py-20">
        <div className="w-full">
          <p className="eyebrow mb-4 text-muted-foreground">Members</p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">Set a new password.</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {ready
              ? "Choose a new password for your Vestige account."
              : "Verifying your reset link…"}
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <label className="block">
              <span className="eyebrow mb-1 block text-muted-foreground">New password</span>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
              />
            </label>
            <label className="block">
              <span className="eyebrow mb-1 block text-muted-foreground">Confirm password</span>
              <input
                type="password"
                required
                minLength={8}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
              />
            </label>
            <button
              type="submit"
              disabled={busy || !ready}
              className="mt-4 w-full bg-primary py-4 eyebrow text-primary-foreground disabled:opacity-60"
            >
              Update password
            </button>
          </form>

          <p className="mt-6 text-center text-xs">
            <Link to="/auth" className="text-muted-foreground link-underline">
              Back to sign in
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
