import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type AdminStats = {
  isAdmin: boolean;
  revenueCents: number;
  revenueThisMonthCents: number;
  ordersTotal: number;
  ordersThisMonth: number;
  customersTotal: number;
  productsActive: number;
  productsOutOfStock: number;
  recentOrders: Array<{
    id: string;
    order_number: string;
    total_cents: number;
    status: string;
    email: string | null;
    created_at: string;
  }>;
  topProducts: Array<{
    id: string;
    name: string;
    slug: string;
    base_price_cents: number;
    best_seller: boolean;
  }>;
};

export const getAdminStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<AdminStats> => {
    const { supabase, userId } = context;

    const { data: isAdminData } = await supabase.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    const isAdmin = Boolean(isAdminData);

    if (!isAdmin) {
      return {
        isAdmin: false,
        revenueCents: 0,
        revenueThisMonthCents: 0,
        ordersTotal: 0,
        ordersThisMonth: 0,
        customersTotal: 0,
        productsActive: 0,
        productsOutOfStock: 0,
        recentOrders: [],
        topProducts: [],
      };
    }

    const monthStart = new Date();
    monthStart.setUTCDate(1);
    monthStart.setUTCHours(0, 0, 0, 0);
    const monthIso = monthStart.toISOString();

    const [
      ordersAll,
      ordersMonth,
      customers,
      productsActive,
      outOfStock,
      recent,
      top,
    ] = await Promise.all([
      supabase
        .from("orders")
        .select("total_cents,status", { count: "exact" })
        .in("status", ["paid", "packed", "shipped", "delivered"]),
      supabase
        .from("orders")
        .select("total_cents", { count: "exact" })
        .in("status", ["paid", "packed", "shipped", "delivered"])
        .gte("created_at", monthIso),
      supabase.from("profiles").select("id", { count: "exact", head: true }),
      supabase
        .from("products")
        .select("id", { count: "exact", head: true })
        .eq("status", "active"),
      supabase
        .from("product_variants")
        .select("id", { count: "exact", head: true })
        .eq("stock", 0),
      supabase
        .from("orders")
        .select("id,order_number,total_cents,status,email,created_at")
        .order("created_at", { ascending: false })
        .limit(5),
      supabase
        .from("products")
        .select("id,name,slug,base_price_cents,best_seller")
        .eq("status", "active")
        .order("best_seller", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(5),
    ]);

    const sum = (rows: { total_cents: number }[] | null) =>
      (rows ?? []).reduce((a, r) => a + (r.total_cents ?? 0), 0);

    return {
      isAdmin: true,
      revenueCents: sum(ordersAll.data as { total_cents: number }[] | null),
      revenueThisMonthCents: sum(
        ordersMonth.data as { total_cents: number }[] | null,
      ),
      ordersTotal: ordersAll.count ?? 0,
      ordersThisMonth: ordersMonth.count ?? 0,
      customersTotal: customers.count ?? 0,
      productsActive: productsActive.count ?? 0,
      productsOutOfStock: outOfStock.count ?? 0,
      recentOrders: (recent.data ?? []) as AdminStats["recentOrders"],
      topProducts: (top.data ?? []) as AdminStats["topProducts"],
    };
  });

export const grantSelfAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    // Bootstrap-friendly: only allow if no admin exists yet.
    const { data: existing } = await supabase
      .from("user_roles")
      .select("user_id")
      .eq("role", "admin")
      .limit(1);
    if (existing && existing.length > 0) {
      return { ok: false, reason: "admin_exists" as const };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: userId, role: "admin" });
    if (error) return { ok: false, reason: "insert_failed" as const, error: error.message };
    return { ok: true as const };
  });
