import { lazy, Suspense, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ProductListItem } from "@/lib/catalog";
import { productImage } from "@/components/site/product-card";
import { formatPrice } from "@/stores/cart";
import { useHydrated } from "@/hooks/use-hydrated";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const GalleryCanvas = lazy(() => import("./gallery-canvas"));

export function GallerySignature({ products }: { products: ProductListItem[] }) {
  const picks = products.slice(0, 3);
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const useCanvas = hydrated && !reduced && picks.length >= 3;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-[#0a0908] text-[#f5eeda]">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 md:px-10 md:pt-32">
        <p className="eyebrow mb-4 opacity-60">Signature — The gallery</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          A room, three plinths, one glaze.
        </h2>
        <p className="mt-6 max-w-lg text-sm opacity-75 md:text-base">
          Scroll to walk the corridor. Each piece is lifted from its plinth as you approach.
        </p>
      </div>

      <div ref={containerRef} className="relative mt-14 h-[220vh]">
        {useCanvas ? (
          <Suspense fallback={<GalleryFallback picks={picks} />}>
            <div className="sticky top-0 h-screen w-full">
              <GalleryCanvas products={picks} containerRef={containerRef} />
            </div>
          </Suspense>
        ) : (
          <GalleryFallback picks={picks} />
        )}
      </div>
    </section>
  );
}

function GalleryFallback({ picks }: { picks: ProductListItem[] }) {
  return (
    <div className="mx-auto grid max-w-[1440px] gap-6 px-6 pb-24 md:grid-cols-3 md:gap-10 md:px-10">
      {picks.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1512]">
              <img
                src={productImage(p.slug, p.hero_image_url)}
                alt={p.name}
                className="h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent" />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <p className="font-serif text-xl">{p.name}</p>
              <p className="text-sm opacity-70">{formatPrice(p.min_price_cents)}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
