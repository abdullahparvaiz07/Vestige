import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Heart, Eye } from "lucide-react";
import { useRef } from "react";
import { formatPrice } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";
import { useQuickView } from "@/stores/quick-view";
import { cn } from "@/lib/utils";
import type { ProductListItem } from "@/lib/catalog";
import ceramicsImg from "@/assets/cat-ceramics.jpg";
import furnitureImg from "@/assets/cat-furniture.jpg";
import textilesImg from "@/assets/cat-textiles.jpg";
import candleImg from "@/assets/pdp-candle.jpg";

const FALLBACK: Record<string, string> = {
  "fossil-essence-candle": candleImg,
  "oblique-stool": furnitureImg,
  "obsidian-pitcher": ceramicsImg,
  "sandstone-basin": ceramicsImg,
  "aether-glass-vessel": ceramicsImg,
  "monolith-candle-base": ceramicsImg,
  "plinth-side-table": furnitureImg,
  "brushed-steel-tray": furnitureImg,
  "raw-flax-pillow": textilesImg,
  "stone-wash-throw": textilesImg,
  "atelier-apron": textilesImg,
  "unbleached-tea-towel-set": textilesImg,
};

export function productImage(slug: string, hero?: string | null): string {
  if (hero && hero.startsWith("http")) return hero;
  return FALLBACK[slug] ?? ceramicsImg;
}

export function ProductCard({
  product,
  index = 0,
}: {
  product: ProductListItem;
  index?: number;
}) {
  const wishHas = useWishlist((s) => s.ids.includes(product.id));
  const toggleWish = useWishlist((s) => s.toggle);

  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: [0.19, 1, 0.22, 1] }}
    >
      <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
        <motion.div
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ perspective: 900 }}
          className="relative aspect-[4/5] overflow-hidden bg-muted"
        >
          <motion.img
            src={productImage(product.slug, product.hero_image_url)}
            alt={product.name}
            loading="lazy"
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
          />
          {/* sage glow ring */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(150,175,145,0.25)]" />
          </div>
          {/* deepening shadow */}
          <div className="pointer-events-none absolute inset-x-4 -bottom-4 h-8 rounded-[100%] bg-black/0 blur-2xl transition-all duration-500 group-hover:bottom-2 group-hover:bg-black/25" />

          {product.best_seller && (
            <span className="absolute left-4 top-4 eyebrow bg-background/90 px-2 py-1 backdrop-blur">
              Best seller
            </span>
          )}

          {/* Wishlist */}
          <button
            type="button"
            aria-label={wishHas ? "Remove from wishlist" : "Add to wishlist"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWish(product.id);
            }}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-background/85 opacity-0 backdrop-blur transition-all duration-500 hover:bg-background group-hover:opacity-100"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-all",
                wishHas ? "fill-primary text-primary scale-110" : "text-foreground/70",
              )}
            />
          </button>

          {/* Quick View */}
          <div className="absolute inset-x-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              aria-label={`Quick view ${product.name}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                useQuickView.getState().open(product.slug);
              }}
              className="mx-4 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 bg-background/90 py-3 eyebrow text-foreground backdrop-blur transition-colors hover:bg-background"
            >
              <Eye className="h-3.5 w-3.5" /> Quick view
            </button>
          </div>
        </motion.div>

        <div className="relative overflow-hidden pt-5">
          <div className="flex items-baseline justify-between gap-4 transition-transform duration-500 group-hover:-translate-y-1">
            <div>
              <p className="font-serif text-lg leading-tight">{product.name}</p>
              {product.tagline && (
                <p className="mt-1 text-xs italic text-muted-foreground">{product.tagline}</p>
              )}
            </div>
            <p className="text-sm tabular-nums">{formatPrice(product.min_price_cents)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
