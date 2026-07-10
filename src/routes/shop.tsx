import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/site-layout";
import { ProductCard } from "@/components/site/product-card";
import { fetchCategories, fetchProducts } from "@/lib/catalog";
import { z } from "zod";
import { Link } from "@tanstack/react-router";

const searchSchema = z.object({
  sort: z.enum(["featured", "price-asc", "price-desc", "newest"]).optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all — Vestige" },
      {
        name: "description",
        content: "Every object in the Vestige collection. Ceramics, furniture, textiles.",
      },
      { property: "og:title", content: "Shop all — Vestige" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  validateSearch: (s) => searchSchema.parse(s),
  loaderDeps: ({ search }) => ({ sort: search.sort, q: search.q }),
  loader: ({ context, deps }) =>
    Promise.all([
      context.queryClient.ensureQueryData({
        queryKey: ["products", deps],
        queryFn: () => fetchProducts({ sort: deps.sort, search: deps.q }),
      }),
      context.queryClient.ensureQueryData({
        queryKey: ["categories"],
        queryFn: () => fetchCategories(),
      }),
    ]),
  component: Shop,
});

function Shop() {
  const { sort, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const { data: products } = useSuspenseQuery({
    queryKey: ["products", { sort, q }],
    queryFn: () => fetchProducts({ sort, search: q }),
  });
  const { data: categories } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow mb-4 text-muted-foreground">The collection</p>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">All objects.</h1>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-b hairline pb-6">
          <nav className="flex flex-wrap items-center gap-6">
            <Link to="/shop" className="eyebrow border-b hairline pb-1">All</Link>
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                className="eyebrow text-muted-foreground hover:text-foreground"
              >
                {c.name}
              </Link>
            ))}
          </nav>
          <select
            value={sort ?? "featured"}
            onChange={(e) =>
              navigate({
                search: (prev: Record<string, unknown>) => ({ ...prev, sort: e.target.value as never }),
              })
            }
            className="border hairline bg-transparent px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="featured">Sort — Featured</option>
            <option value="newest">Sort — Newest</option>
            <option value="price-asc">Sort — Price low to high</option>
            <option value="price-desc">Sort — Price high to low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6 py-14 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
          {products.length === 0 && (
            <p className="col-span-full py-24 text-center text-muted-foreground">
              No objects found.
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
