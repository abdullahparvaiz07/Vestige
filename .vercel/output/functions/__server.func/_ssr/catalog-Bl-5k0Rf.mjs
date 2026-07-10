import { t as supabase } from "./client-DhIMy7t3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-Bl-5k0Rf.js
async function fetchCategories() {
	const { data, error } = await supabase.from("categories").select("*").order("sort_order", { ascending: true });
	if (error) throw error;
	return data ?? [];
}
async function fetchProducts(opts) {
	let query = supabase.from("products").select("*").eq("status", "active");
	if (opts?.bestSellers) query = query.eq("best_seller", true);
	if (opts?.featured) query = query.eq("featured", true);
	if (opts?.search) query = query.ilike("name", `%${opts.search}%`);
	if (opts?.categorySlug) {
		const { data: cat } = await supabase.from("categories").select("id").eq("slug", opts.categorySlug).maybeSingle();
		if (cat) query = query.eq("category_id", cat.id);
	}
	switch (opts?.sort) {
		case "price-asc":
			query = query.order("base_price_cents", { ascending: true });
			break;
		case "price-desc":
			query = query.order("base_price_cents", { ascending: false });
			break;
		case "newest":
			query = query.order("created_at", { ascending: false });
			break;
		default: query = query.order("best_seller", { ascending: false }).order("featured", { ascending: false });
	}
	if (opts?.limit) query = query.limit(opts.limit);
	const { data, error } = await query;
	if (error) throw error;
	return (data ?? []).map((p) => ({
		...p,
		min_price_cents: p.base_price_cents
	}));
}
async function fetchProductBySlug(slug) {
	const { data, error } = await supabase.from("products").select("*, product_variants(*), categories(slug, name)").eq("slug", slug).eq("status", "active").maybeSingle();
	if (error) throw error;
	if (!data) return null;
	const { product_variants, categories, ...rest } = data;
	return {
		...rest,
		variants: (product_variants ?? []).sort((a, b) => a.price_cents - b.price_cents),
		category: categories
	};
}
async function fetchRelated(categoryId, excludeId, limit = 4) {
	const { data, error } = await supabase.from("products").select("*").eq("status", "active").eq("category_id", categoryId).neq("id", excludeId).limit(limit);
	if (error) throw error;
	return (data ?? []).map((p) => ({
		...p,
		min_price_cents: p.base_price_cents
	}));
}
//#endregion
export { fetchRelated as i, fetchProductBySlug as n, fetchProducts as r, fetchCategories as t };
