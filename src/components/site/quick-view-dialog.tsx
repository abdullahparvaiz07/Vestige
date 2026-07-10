import { AnimatePresence, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { Heart, X, Check, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchProductBySlug } from "@/lib/catalog";
import { formatPrice, useCart } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";
import { useQuickView } from "@/stores/quick-view";
import { flyFromElement } from "@/lib/fly-to-cart";
import { productImage } from "@/components/site/product-card";
import { cn } from "@/lib/utils";

const EASE = [0.19, 1, 0.22, 1] as const;

export function QuickViewDialog() {
  const slug = useQuickView((s) => s.slug);
  const close = useQuickView((s) => s.close);

  // Lock body scroll while open
  useEffect(() => {
    if (!slug) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [slug, close]);

  return (
    <AnimatePresence>
      {slug && <QuickViewInner key={slug} slug={slug} onClose={close} />}
    </AnimatePresence>
  );
}

function QuickViewInner({ slug, onClose }: { slug: string; onClose: () => void }) {
  const { data, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProductBySlug(slug),
    staleTime: 60_000,
  });

  const add = useCart((s) => s.add);
  const wishHas = useWishlist((s) => data && s.ids.includes(data.id));
  const toggleWish = useWishlist((s) => s.toggle);
  const [variantId, setVariantId] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [wishBurst, setWishBurst] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const variant =
    data?.variants.find((v) => v.id === variantId) ?? data?.variants[0] ?? null;
  const img = data ? productImage(data.slug, data.hero_image_url) : "";

  const handleAdd = () => {
    if (!data || !variant) return;
    flyFromElement(imgRef.current, img);
    add({
      variantId: variant.id,
      productId: data.id,
      slug: data.slug,
      name: data.name,
      finish: variant.option_finish,
      size: variant.option_size,
      priceCents: variant.price_cents,
      qty: 1,
      imageUrl: img,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleWish = () => {
    if (!data) return;
    toggleWish(data.id);
    setWishBurst((n) => n + 1);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Scrim */}
      <motion.button
        type="button"
        aria-label="Close quick view"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute inset-0 h-full w-full cursor-default bg-primary/50 backdrop-blur-md"
      />

      <div className="pointer-events-none absolute inset-0 grid place-items-center p-4 md:p-8">
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Product quick view"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="pointer-events-auto relative flex max-h-[90dvh] w-full max-w-5xl overflow-hidden border hairline bg-background shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)]"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition-colors hover:bg-background"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid w-full grid-cols-1 md:grid-cols-[1.05fr_1fr]">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full bg-muted md:aspect-auto md:h-[560px]">
              <AnimatePresence mode="wait">
                {isLoading || !data ? (
                  <motion.div
                    key="sk-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Shimmer className="h-full w-full" />
                  </motion.div>
                ) : (
                  <motion.img
                    key="img"
                    ref={imgRef}
                    src={img}
                    alt={data.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Details */}
            <div className="relative flex max-h-[90dvh] flex-col overflow-y-auto p-6 md:p-10">
              {isLoading || !data ? (
                <SkeletonDetails />
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                  }}
                  className="flex h-full flex-col"
                >
                  <Fade>
                    {data.category && (
                      <Link
                        to="/collections/$slug"
                        params={{ slug: data.category.slug }}
                        onClick={onClose}
                        className="eyebrow text-muted-foreground hover:text-foreground"
                      >
                        {data.category.name}
                      </Link>
                    )}
                  </Fade>
                  <Fade>
                    <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                      {data.name}
                    </h2>
                  </Fade>
                  {data.tagline && (
                    <Fade>
                      <p className="mt-3 text-sm italic text-muted-foreground">
                        {data.tagline}
                      </p>
                    </Fade>
                  )}
                  <Fade>
                    <p className="mt-6 font-serif text-2xl tabular-nums">
                      {formatPrice(variant?.price_cents ?? data.base_price_cents)}
                    </p>
                  </Fade>

                  {data.description && (
                    <Fade>
                      <p className="mt-6 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                        {data.description}
                      </p>
                    </Fade>
                  )}

                  {data.variants.length > 1 && (
                    <Fade>
                      <div className="mt-8">
                        <p className="eyebrow mb-3 text-muted-foreground">Finish</p>
                        <div className="flex flex-wrap gap-2">
                          {data.variants.map((v) => {
                            const active = (variantId ?? data.variants[0].id) === v.id;
                            return (
                              <motion.button
                                key={v.id}
                                type="button"
                                onClick={() => setVariantId(v.id)}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                                className={cn(
                                  "border px-4 py-2 text-xs uppercase tracking-widest transition-colors",
                                  active
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "hairline hover:border-primary",
                                )}
                              >
                                {v.option_finish ?? v.option_size ?? v.sku}
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    </Fade>
                  )}

                  <Fade>
                    <div className="mt-auto flex items-stretch gap-3 pt-10">
                      <motion.button
                        type="button"
                        aria-label={wishHas ? "Remove from wishlist" : "Add to wishlist"}
                        onClick={handleWish}
                        whileTap={{ scale: 0.9 }}
                        className="relative grid w-14 shrink-0 place-items-center border hairline transition-colors hover:border-primary"
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4 transition-all duration-300",
                            wishHas
                              ? "fill-primary text-primary scale-110"
                              : "text-foreground/70",
                          )}
                        />
                        <AnimatePresence>
                          {wishBurst > 0 && wishHas && (
                            <motion.span
                              key={wishBurst}
                              aria-hidden
                              initial={{ opacity: 0.6, scale: 0.6 }}
                              animate={{ opacity: 0, scale: 2.2 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                              className="pointer-events-none absolute inset-0 rounded-full bg-primary/25"
                            />
                          )}
                        </AnimatePresence>
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={handleAdd}
                        disabled={!variant}
                        whileTap={{ scale: 0.98 }}
                        className="relative flex-1 overflow-hidden bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          {added ? (
                            <motion.span
                              key="added"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="flex items-center justify-center gap-2"
                            >
                              <Check className="h-4 w-4" /> Added to cart
                            </motion.span>
                          ) : (
                            <motion.span
                              key="add"
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="block"
                            >
                              Add to cart —{" "}
                              {formatPrice(variant?.price_cents ?? 0)}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>

                    <Link
                      to="/product/$slug"
                      params={{ slug: data.slug }}
                      onClick={onClose}
                      className="mt-4 inline-flex items-center gap-2 self-start eyebrow text-muted-foreground transition-colors hover:text-foreground"
                    >
                      View full details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </Fade>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Fade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        className,
      )}
    >
      <motion.div
        aria-hidden
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-background/60 to-transparent"
      />
    </div>
  );
}

function SkeletonDetails() {
  return (
    <div className="flex flex-col gap-4">
      <Shimmer className="h-3 w-24" />
      <Shimmer className="h-8 w-3/4" />
      <Shimmer className="h-4 w-1/2" />
      <Shimmer className="mt-4 h-7 w-32" />
      <Shimmer className="mt-6 h-3 w-full" />
      <Shimmer className="h-3 w-5/6" />
      <Shimmer className="h-3 w-4/6" />
      <div className="mt-8 flex gap-2">
        <Shimmer className="h-9 w-20" />
        <Shimmer className="h-9 w-20" />
        <Shimmer className="h-9 w-20" />
      </div>
      <div className="mt-10 flex gap-3">
        <Shimmer className="h-12 w-14" />
        <Shimmer className="h-12 flex-1" />
      </div>
    </div>
  );
}
