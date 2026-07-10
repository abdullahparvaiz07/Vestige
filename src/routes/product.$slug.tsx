import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/site-layout";
import { ProductCard, productImage } from "@/components/site/product-card";
import { fetchProductBySlug, fetchRelated, type ProductDetail } from "@/lib/catalog";
import { formatPrice, useCart } from "@/stores/cart";
import { flyFromElement } from "@/lib/fly-to-cart";

export const Route = createFileRoute("/product/$slug")({
  loader: async ({ context, params }) => {
    const product = await context.queryClient.ensureQueryData({
      queryKey: ["product", params.slug],
      queryFn: () => fetchProductBySlug(params.slug),
    });
    if (!product) throw notFound();
    await context.queryClient.ensureQueryData({
      queryKey: ["related", product.category_id, product.id],
      queryFn: () =>
        product.category_id ? fetchRelated(product.category_id, product.id) : Promise.resolve([]),
    });
    return { product };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Vestige` },
          {
            name: "description",
            content: loaderData.product.tagline ?? loaderData.product.description?.slice(0, 155) ?? "",
          },
          { property: "og:title", content: `${loaderData.product.name} — Vestige` },
          {
            property: "og:description",
            content: loaderData.product.tagline ?? "",
          },
          { property: "og:type", content: "product" },
          { property: "og:url", content: `/product/${params.slug}` },
        ]
      : [{ title: "Product — Vestige" }],
    links: [{ rel: "canonical", href: `/product/${params.slug}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.product.name,
              description: loaderData.product.description,
              brand: { "@type": "Brand", name: "Vestige" },
              offers: {
                "@type": "Offer",
                priceCurrency: loaderData.product.currency,
                price: (loaderData.product.base_price_cents / 100).toFixed(2),
                availability: "https://schema.org/InStock",
              },
            }),
          },
        ]
      : [],
  }),
  component: PDP,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <h1 className="font-serif text-4xl">Object not found</h1>
        <Link to="/shop" className="mt-6 inline-block link-underline eyebrow">
          Return to the collection
        </Link>
      </div>
    </SiteLayout>
  ),
});

function PDP() {
  const data = Route.useLoaderData() as { product: ProductDetail };
  const product = data.product;
  const { data: related } = useSuspenseQuery({
    queryKey: ["related", product.category_id, product.id],
    queryFn: () =>
      product.category_id ? fetchRelated(product.category_id, product.id) : Promise.resolve([]),
  });
  const [variantId, setVariantId] = useState<string>(product.variants[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const add = useCart((s) => s.add);
  const img = productImage(product.slug, product.hero_image_url);
  const heroImgRef = useRef<HTMLImageElement>(null);

  const handleAdd = () => {
    if (!variant) return;
    flyFromElement(heroImgRef.current, img);
    add({
      variantId: variant.id,
      productId: product.id,
      slug: product.slug,
      name: product.name,
      finish: variant.option_finish,
      size: variant.option_size,
      priceCents: variant.price_cents,
      qty,
      imageUrl: img,
    });
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pt-8 md:px-10 md:pt-12">
        <nav className="mb-10 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          {product.category && (
            <>
              <Link
                to="/collections/$slug"
                params={{ slug: product.category.slug }}
                className="hover:text-foreground"
              >
                {product.category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span>{product.name}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="aspect-[4/5] overflow-hidden bg-muted"
          >
            <img src={img} alt={product.name} className="h-full w-full object-cover" />
          </motion.div>

          <div className="flex flex-col justify-center md:sticky md:top-24 md:self-start">
            {product.tagline && (
              <p className="eyebrow mb-4 text-muted-foreground">{product.tagline}</p>
            )}
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">{product.name}</h1>
            <p className="mt-6 font-serif text-2xl">
              {formatPrice(variant?.price_cents ?? product.base_price_cents)}
            </p>
            {product.description && (
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            )}

            {product.variants.length > 1 && (
              <div className="mt-10">
                <p className="eyebrow mb-3">Finish</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setVariantId(v.id)}
                      className={`border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                        v.id === variantId
                          ? "border-primary bg-primary text-primary-foreground"
                          : "hairline hover:border-primary"
                      }`}
                    >
                      {v.option_finish ?? v.option_size ?? v.sku}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex items-stretch gap-3">
              <div className="flex items-center border hairline">
                <button className="px-4 py-3" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
                <button className="px-4 py-3" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
              >
                Add to cart — {formatPrice((variant?.price_cents ?? 0) * qty)}
              </button>
            </div>

            <div className="mt-10 space-y-4 border-t hairline pt-8 text-sm">
              {product.material && <DetailRow label="Material" value={product.material} />}
              {product.dimensions && <DetailRow label="Dimensions" value={product.dimensions} />}
              {product.origin && <DetailRow label="Origin" value={product.origin} />}
              {product.care && <DetailRow label="Care" value={product.care} />}
            </div>
          </div>
        </div>

        {product.story && (
          <div className="mx-auto mt-32 max-w-3xl text-center">
            <p className="eyebrow mb-6 text-muted-foreground">The making</p>
            <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              "{product.story}"
            </p>
          </div>
        )}

        {related.length > 0 && (
          <section className="mt-32 pb-8">
            <p className="eyebrow mb-8 text-muted-foreground">Also considered</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </section>
    </SiteLayout>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 border-b hairline pb-4">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <span className="text-right text-foreground/85">{value}</span>
    </div>
  );
}
