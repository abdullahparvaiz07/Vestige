import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  DollarSign,
  ShoppingBag,
  Users,
  AlertCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/site/site-layout";
import { getAdminStats, grantSelfAdmin, type AdminStats } from "@/lib/admin.functions";
import { formatPrice } from "@/stores/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Vestige" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const fetchStats = useServerFn(getAdminStats);
  const claim = useServerFn(grantSelfAdmin);
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["admin", "stats"],
    queryFn: () => fetchStats(),
  });

  const claimMutation = useMutation({
    mutationFn: () => claim(),
    onSuccess: (r) => {
      if (r.ok) {
        toast.success("You are now the atelier admin.");
        refetch();
        router.invalidate();
      } else if (r.reason === "admin_exists") {
        toast.error("An admin already exists. Ask them to grant you access.");
      } else {
        toast.error("Could not grant admin.");
      }
    },
  });

  if (isLoading || !data) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-muted-foreground md:px-10">
          Loading…
        </div>
      </SiteLayout>
    );
  }

  if (!data.isAdmin) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
          <AlertCircle className="mx-auto h-8 w-8 text-muted-foreground" />
          <p className="eyebrow mt-6 text-muted-foreground">Restricted</p>
          <h1 className="mt-4 font-serif text-4xl leading-none">
            Admin access required.
          </h1>
          <p className="mt-6 text-muted-foreground">
            You're signed in, but not marked as an atelier admin. If this is a fresh
            install, you can claim the role now — it's granted only when no admin
            exists yet.
          </p>
          <button
            onClick={() => claimMutation.mutate()}
            disabled={claimMutation.isPending}
            className="mt-10 bg-primary px-8 py-4 eyebrow text-primary-foreground disabled:opacity-60"
          >
            {claimMutation.isPending ? "Granting…" : "Claim admin role"}
          </button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
          <div>
            <p className="eyebrow mb-3 text-muted-foreground">Atelier — Admin</p>
            <h1 className="font-serif text-5xl leading-none md:text-6xl">
              Dashboard.
            </h1>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated{" "}
            {new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Stat widgets */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            index={0}
            icon={<DollarSign className="h-4 w-4" />}
            label="Revenue"
            value={formatPrice(data.revenueCents)}
            sub={`${formatPrice(data.revenueThisMonthCents)} this month`}
          />
          <StatCard
            index={1}
            icon={<ShoppingBag className="h-4 w-4" />}
            label="Orders"
            value={data.ordersTotal.toLocaleString()}
            sub={`${data.ordersThisMonth} this month`}
          />
          <StatCard
            index={2}
            icon={<Users className="h-4 w-4" />}
            label="Customers"
            value={data.customersTotal.toLocaleString()}
            sub="Registered profiles"
          />
          <StatCard
            index={3}
            icon={<Boxes className="h-4 w-4" />}
            label="Products"
            value={data.productsActive.toLocaleString()}
            sub={`${data.productsOutOfStock} variants out of stock`}
            warning={data.productsOutOfStock > 0}
          />
        </div>

        {/* Two-column: recent orders + top products */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr,1fr]">
          <Panel
            title="Recent orders"
            action={
              <Link to="/admin" className="link-underline eyebrow">
                View all
              </Link>
            }
          >
            {data.recentOrders.length === 0 ? (
              <EmptyState
                title="No orders yet"
                body="Orders will appear here as customers check out."
              />
            ) : (
              <ul className="divide-y hairline">
                {data.recentOrders.map((o) => (
                  <li key={o.id} className="flex items-center justify-between py-4">
                    <div>
                      <p className="font-serif text-base">{o.order_number}</p>
                      <p className="text-xs text-muted-foreground">
                        {o.email ?? "Guest"} ·{" "}
                        {new Date(o.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm tabular-nums">
                        {formatPrice(o.total_cents)}
                      </p>
                      <p className="eyebrow mt-1 text-muted-foreground">
                        {o.status}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <Panel title="Product overview">
            {data.topProducts.length === 0 ? (
              <EmptyState title="No products" body="Seed a catalog to begin." />
            ) : (
              <ul className="divide-y hairline">
                {data.topProducts.map((p) => (
                  <li key={p.id} className="flex items-center justify-between py-4">
                    <div>
                      <Link
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        className="font-serif text-base link-underline"
                      >
                        {p.name}
                      </Link>
                      {p.best_seller && (
                        <p className="eyebrow mt-1 text-muted-foreground">
                          Best seller
                        </p>
                      )}
                    </div>
                    <p className="text-sm tabular-nums">
                      {formatPrice(p.base_price_cents)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>
      </section>
    </SiteLayout>
  );
}

function StatCard({
  index,
  icon,
  label,
  value,
  sub,
  warning,
}: {
  index: number;
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  warning?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="border hairline bg-card p-6"
    >
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="eyebrow">{label}</span>
        {icon}
      </div>
      <p className="mt-6 font-serif text-4xl tracking-tight">{value}</p>
      <p
        className={`mt-2 text-xs ${warning ? "text-destructive" : "text-muted-foreground"}`}
      >
        {sub}
      </p>
    </motion.div>
  );
}

function Panel({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="border hairline bg-card p-8">
      <div className="mb-4 flex items-center justify-between border-b hairline pb-4">
        <p className="eyebrow text-muted-foreground">{title}</p>
        {action}
      </div>
      {children}
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="py-12 text-center">
      <ArrowUpRight className="mx-auto h-6 w-6 text-muted-foreground" />
      <p className="mt-4 font-serif text-xl">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
