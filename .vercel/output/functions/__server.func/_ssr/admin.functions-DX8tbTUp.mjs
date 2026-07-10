import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BFFE07zL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-1xD4wXPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-DX8tbTUp.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getAdminStats_createServerFn_handler = createServerRpc({
	id: "4fec70c92c2624b017310f557d52373f6e45b4f5283a3272a864213d4d65e68d",
	name: "getAdminStats",
	filename: "src/lib/admin.functions.ts"
}, (opts) => getAdminStats.__executeServer(opts));
var getAdminStats = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getAdminStats_createServerFn_handler, async ({ context }) => {
	const { supabase, userId } = context;
	const { data: isAdminData } = await supabase.rpc("has_role", {
		_user_id: userId,
		_role: "admin"
	});
	if (!Boolean(isAdminData)) return {
		isAdmin: false,
		revenueCents: 0,
		revenueThisMonthCents: 0,
		ordersTotal: 0,
		ordersThisMonth: 0,
		customersTotal: 0,
		productsActive: 0,
		productsOutOfStock: 0,
		recentOrders: [],
		topProducts: []
	};
	const monthStart = /* @__PURE__ */ new Date();
	monthStart.setUTCDate(1);
	monthStart.setUTCHours(0, 0, 0, 0);
	const monthIso = monthStart.toISOString();
	const [ordersAll, ordersMonth, customers, productsActive, outOfStock, recent, top] = await Promise.all([
		supabase.from("orders").select("total_cents,status", { count: "exact" }).in("status", [
			"paid",
			"packed",
			"shipped",
			"delivered"
		]),
		supabase.from("orders").select("total_cents", { count: "exact" }).in("status", [
			"paid",
			"packed",
			"shipped",
			"delivered"
		]).gte("created_at", monthIso),
		supabase.from("profiles").select("id", {
			count: "exact",
			head: true
		}),
		supabase.from("products").select("id", {
			count: "exact",
			head: true
		}).eq("status", "active"),
		supabase.from("product_variants").select("id", {
			count: "exact",
			head: true
		}).eq("stock", 0),
		supabase.from("orders").select("id,order_number,total_cents,status,email,created_at").order("created_at", { ascending: false }).limit(5),
		supabase.from("products").select("id,name,slug,base_price_cents,best_seller").eq("status", "active").order("best_seller", { ascending: false }).order("created_at", { ascending: false }).limit(5)
	]);
	const sum = (rows) => (rows ?? []).reduce((a, r) => a + (r.total_cents ?? 0), 0);
	return {
		isAdmin: true,
		revenueCents: sum(ordersAll.data),
		revenueThisMonthCents: sum(ordersMonth.data),
		ordersTotal: ordersAll.count ?? 0,
		ordersThisMonth: ordersMonth.count ?? 0,
		customersTotal: customers.count ?? 0,
		productsActive: productsActive.count ?? 0,
		productsOutOfStock: outOfStock.count ?? 0,
		recentOrders: recent.data ?? [],
		topProducts: top.data ?? []
	};
});
var grantSelfAdmin_createServerFn_handler = createServerRpc({
	id: "c579e6cf81462f6a2bea1160758f9416a190d3246ad7147937aa785904bea01e",
	name: "grantSelfAdmin",
	filename: "src/lib/admin.functions.ts"
}, (opts) => grantSelfAdmin.__executeServer(opts));
var grantSelfAdmin = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(grantSelfAdmin_createServerFn_handler, async ({ context }) => {
	const { supabase, userId } = context;
	const { data: existing } = await supabase.from("user_roles").select("user_id").eq("role", "admin").limit(1);
	if (existing && existing.length > 0) return {
		ok: false,
		reason: "admin_exists"
	};
	const { supabaseAdmin } = await import("./client.server-CY55BFxG.mjs");
	const { error } = await supabaseAdmin.from("user_roles").insert({
		user_id: userId,
		role: "admin"
	});
	if (error) return {
		ok: false,
		reason: "insert_failed",
		error: error.message
	};
	return { ok: true };
});
//#endregion
export { getAdminStats_createServerFn_handler, grantSelfAdmin_createServerFn_handler };
