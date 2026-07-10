import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Vestige" },
      { name: "description", content: "Sign in or create a Vestige account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = async () => {
    setBusy(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) toast.error(result.error.message ?? "Google sign-in failed.");
    } finally {
      setBusy(false);
    }
  };

  const handleForgot = async () => {
    if (!email) {
      toast.error("Enter your email above, then tap Forgot password.");
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      toast.success("Password reset link sent. Check your inbox.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Could not send reset email.");
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("Welcome to Vestige. Check your email to confirm.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate({ to: "/account" });
      }
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto grid min-h-[80dvh] max-w-md items-center px-6 py-20">
        <div className="w-full">
          <p className="eyebrow mb-4 text-muted-foreground">Members</p>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            {mode === "signin" ? "Welcome back." : "Create an account."}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to review orders and saved objects."
              : "Access order history, saved objects, and early dispatches."}
          </p>

          <button
            onClick={handleGoogle}
            disabled={busy}
            className="mt-10 flex w-full items-center justify-center gap-3 border hairline py-4 eyebrow transition-colors hover:bg-secondary"
          >
            Continue with Google
          </button>

          <div className="my-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex-1 border-t hairline" />
            or
            <span className="flex-1 border-t hairline" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <Field label="Name">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
                />
              </Field>
            )}
            <Field label="Email">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
              />
            </Field>
            <Field label="Password">
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              disabled={busy}
              className="mt-4 w-full bg-primary py-4 eyebrow text-primary-foreground disabled:opacity-60"
            >
              {mode === "signin" ? "Sign in" : "Create account"}
            </button>
            {mode === "signin" && (
              <button
                type="button"
                onClick={handleForgot}
                disabled={busy}
                className="mt-3 w-full text-center eyebrow text-muted-foreground link-underline"
              >
                Forgot password?
              </button>
            )}
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {mode === "signin" ? "New to Vestige? " : "Already have an account? "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="link-underline text-foreground"
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
          <p className="mt-6 text-center text-xs">
            <Link to="/" className="text-muted-foreground link-underline">
              Return to Vestige
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-1 block text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
