import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/site-layout";
import { ProductCard } from "@/components/site/product-card";
import { fetchProducts } from "@/lib/catalog";
import { CinematicHero } from "@/components/hero/cinematic-hero";
import { BentoCategories } from "@/components/home/bento-categories";
import { ManifestoScene } from "@/components/home/manifesto-scene";
import { MaterialStudy } from "@/components/home/material-study";
import { GallerySignature } from "@/components/home/gallery-signature";

const bestSellersQuery = queryOptions({
  queryKey: ["products", "best-sellers"],
  queryFn: () => fetchProducts({ bestSellers: true, limit: 4 }),
});

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(bestSellersQuery),
  component: Home,
});

function Home() {
  const { data: bestSellers } = useSuspenseQuery(bestSellersQuery);

  return (
    <SiteLayout>
      <CinematicHero />
      <BentoCategories />
      <ManifestoScene />
      <MaterialStudy />
      <GallerySignature products={bestSellers} />

      <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-4 text-muted-foreground">Kept close</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              The objects we can't keep in the atelier.
            </h2>
          </div>
          <Link to="/shop" className="hidden link-underline eyebrow md:inline-block">
            The whole collection
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {bestSellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
