import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/site-layout";
import { cartSubtotal, formatPrice, useCart } from "@/stores/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Vestige" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { lines, clear } = useCart();
  const [busy, setBusy] = useState(false);
  const subtotal = cartSubtotal(lines);
  const shipping = subtotal > 0 ? (subtotal > 15000 ? 0 : 1500) : 0;
  const total = subtotal + shipping;

  const handlePlace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lines.length === 0) return;
    setBusy(true);
    // Placeholder: Stripe checkout wiring lands in Phase 2 alongside admin.
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Order received. A confirmation is on its way.");
    clear();
    setBusy(false);
  };

  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:px-10 md:py-24">
        <div>
          <p className="eyebrow mb-4 text-muted-foreground">Checkout</p>
          <h1 className="font-serif text-4xl leading-none md:text-5xl">Complete your order.</h1>

          <form onSubmit={handlePlace} className="mt-12 space-y-10">
            <Section title="Contact">
              <Input label="Email" type="email" required />
            </Section>
            <Section title="Shipping">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="First name" required />
                <Input label="Last name" required />
              </div>
              <Input label="Address" required />
              <div className="grid gap-4 md:grid-cols-3">
                <Input label="City" required />
                <Input label="Postal code" required />
                <Input label="Country" required defaultValue="United States" />
              </div>
            </Section>
            <Section title="Payment">
              <p className="text-sm text-muted-foreground">
                Card entry is provided securely by Stripe on the next screen.
              </p>
            </Section>
            <button
              type="submit"
              disabled={busy || lines.length === 0}
              className="w-full bg-primary py-5 eyebrow text-primary-foreground disabled:opacity-50"
            >
              {busy ? "Processing…" : `Place order — ${formatPrice(total)}`}
            </button>
          </form>
        </div>

        <aside className="border hairline bg-secondary p-8 md:sticky md:top-24 md:self-start">
          <p className="eyebrow mb-6 text-muted-foreground">Order — {lines.length}</p>
          {lines.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-2xl">Your cart is empty.</p>
              <Link to="/shop" className="mt-4 inline-block link-underline eyebrow">
                Browse
              </Link>
            </div>
          ) : (
            <>
              <ul className="space-y-5">
                {lines.map((l) => (
                  <li key={l.variantId} className="flex justify-between gap-4 text-sm">
                    <div>
                      <p className="font-serif text-base">{l.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Qty {l.qty}
                        {l.finish ? ` · ${l.finish}` : ""}
                      </p>
                    </div>
                    <p className="tabular-nums">{formatPrice(l.priceCents * l.qty)}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 border-t hairline pt-6 text-sm">
                <Row label="Subtotal" value={formatPrice(subtotal)} />
                <Row label="Shipping" value={shipping === 0 ? "Complimentary" : formatPrice(shipping)} />
                <div className="mt-4 flex items-baseline justify-between border-t hairline pt-4">
                  <span className="eyebrow">Total</span>
                  <span className="font-serif text-2xl">{formatPrice(total)}</span>
                </div>
              </div>
            </>
          )}
        </aside>
      </section>
    </SiteLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-5 text-muted-foreground">{title}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow mb-1 block text-muted-foreground">{label}</span>
      <input
        {...rest}
        className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
      />
    </label>
  );
}
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}
