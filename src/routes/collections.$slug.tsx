import { createFileRoute, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/site-layout";
import { ProductCard } from "@/components/site/product-card";
import { fetchCategories, fetchProducts } from "@/lib/catalog";

export const Route = createFileRoute("/collections/$slug")({
  loader: async ({ context, params }) => {
    const cats = await context.queryClient.ensureQueryData({
      queryKey: ["categories"],
      queryFn: () => fetchCategories(),
    });
    const category = cats.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    await context.queryClient.ensureQueryData({
      queryKey: ["products", { category: params.slug }],
      queryFn: () => fetchProducts({ categorySlug: params.slug }),
    });
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} — Vestige` },
          { name: "description", content: loaderData.category.description ?? "" },
          { property: "og:title", content: `${loaderData.category.name} — Vestige` },
          { property: "og:url", content: `/collections/${loaderData.category.slug}` },
        ]
      : [{ title: "Collection — Vestige" }],
    links: loaderData
      ? [{ rel: "canonical", href: `/collections/${loaderData.category.slug}` }]
      : [],
  }),
  component: CollectionPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <h1 className="font-serif text-4xl">Collection not found</h1>
      </div>
    </SiteLayout>
  ),
});

function CollectionPage() {
  const { category } = Route.useLoaderData();
  const { slug } = Route.useParams();
  const { data: products } = useSuspenseQuery({
    queryKey: ["products", { category: slug }],
    queryFn: () => fetchProducts({ categorySlug: slug }),
  });

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow mb-4 text-muted-foreground">Collection</p>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">{category.name}.</h1>
        {category.description && (
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        )}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
