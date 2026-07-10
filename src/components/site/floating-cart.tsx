import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cartSubtotal, formatPrice, useCart } from "@/stores/cart";
import { onFlyToCart, type FlyPayload } from "@/lib/fly-to-cart";

type Flight = FlyPayload & { id: number; target: { x: number; y: number } };

export function FloatingCart() {
  const lines = useCart((s) => s.lines);
  const isOpen = useCart((s) => s.isOpen);
  const open = useCart((s) => s.open);
  const count = lines.reduce((a, l) => a + l.qty, 0);
  const subtotal = cartSubtotal(lines);
  const btnRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    return onFlyToCart((p) => {
      const el = btnRef.current ?? anchorRef.current;
      const r = el?.getBoundingClientRect();
      const target = r
        ? { x: r.left + r.width / 2, y: r.top + r.height / 2 }
        : { x: window.innerWidth - 60, y: window.innerHeight - 60 };
      const id = Date.now() + Math.random();
      setFlights((f) => [...f, { ...p, id, target }]);
    });
  }, []);

  const visible = count > 0 && !isOpen;

  return (
    <>
      {/* off-screen anchor used before first render of the button */}
      <div
        ref={anchorRef}
        aria-hidden
        className="pointer-events-none fixed bottom-8 right-8 h-1 w-1"
      />

      <AnimatePresence>
        {visible && (
          <motion.button
            ref={btnRef}
            key="floating-cart"
            type="button"
            onClick={open}
            aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}, ${formatPrice(subtotal)}`}
            initial={{ y: 40, opacity: 0, scale: 0.9 }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{ y: 40, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-white/30 bg-background/40 px-4 py-2.5 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150 transition-colors hover:bg-background/60 md:bottom-8 md:right-8 md:px-5 md:py-3"
          >
            <motion.span
              key={pulse}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-sage px-1 text-[10px] font-medium text-primary">
                {count}
              </span>
            </motion.span>
            <span className="flex flex-col items-start leading-tight">
              <span className="eyebrow text-[10px] text-muted-foreground">
                Your cart
              </span>
              <span className="font-serif text-sm tabular-nums text-foreground">
                {formatPrice(subtotal)}
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {flights.map((f) => (
          <motion.img
            key={f.id}
            src={f.imageUrl}
            alt=""
            aria-hidden
            initial={{
              left: f.fromRect.left,
              top: f.fromRect.top,
              width: f.fromRect.width,
              height: f.fromRect.height,
              opacity: 1,
              borderRadius: 6,
              rotate: 0,
            }}
            animate={{
              left: f.target.x - 22,
              top: f.target.y - 22,
              width: 44,
              height: 44,
              opacity: 0.15,
              borderRadius: 999,
              rotate: 14,
            }}
            transition={{ duration: 0.95, ease: [0.6, 0.05, 0.2, 1] }}
            onAnimationComplete={() => {
              setFlights((all) => all.filter((x) => x.id !== f.id));
              setPulse((p) => p + 1);
            }}
            style={{ position: "fixed", zIndex: 60, pointerEvents: "none" }}
            className="object-cover shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
          />
        ))}
      </AnimatePresence>
    </>
  );
}
