import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ProductRow = Database["public"]["Tables"]["products"]["Row"];
type CategoryRow = Database["public"]["Tables"]["categories"]["Row"];
type VariantRow = Database["public"]["Tables"]["product_variants"]["Row"];

export type ProductListItem = ProductRow & { min_price_cents: number };

export async function fetchCategories(): Promise<CategoryRow[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function fetchProducts(opts?: {
  categorySlug?: string;
  bestSellers?: boolean;
  featured?: boolean;
  limit?: number;
  search?: string;
  sort?: "featured" | "price-asc" | "price-desc" | "newest";
}): Promise<ProductListItem[]> {
  let query = supabase.from("products").select("*").eq("status", "active");
  if (opts?.bestSellers) query = query.eq("best_seller", true);
  if (opts?.featured) query = query.eq("featured", true);
  if (opts?.search) query = query.ilike("name", `%${opts.search}%`);
  if (opts?.categorySlug) {
    const { data: cat } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", opts.categorySlug)
      .maybeSingle();
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
    default:
      query = query.order("best_seller", { ascending: false }).order("featured", { ascending: false });
  }
  if (opts?.limit) query = query.limit(opts.limit);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []).map((p) => ({ ...p, min_price_cents: p.base_price_cents }));
}

export type ProductDetail = ProductRow & {
  variants: VariantRow[];
  category: { slug: string; name: string } | null;
};

export async function fetchProductBySlug(slug: string): Promise<ProductDetail | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*, product_variants(*), categories(slug, name)")
    .eq("slug", slug)
    .eq("status", "active")
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  const { product_variants, categories, ...rest } = data as ProductRow & {
    product_variants: VariantRow[];
    categories: { slug: string; name: string } | null;
  };
  return {
    ...(rest as ProductRow),
    variants: (product_variants ?? []).sort(
      (a, b) => a.price_cents - b.price_cents,
    ),
    category: categories,
  };
}

export async function fetchRelated(categoryId: string, excludeId: string, limit = 4) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("status", "active")
    .eq("category_id", categoryId)
    .neq("id", excludeId)
    .limit(limit);
  if (error) throw error;
  return (data ?? []).map((p) => ({ ...p, min_price_cents: p.base_price_cents }));
}
