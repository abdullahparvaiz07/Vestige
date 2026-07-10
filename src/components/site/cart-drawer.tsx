import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { cartSubtotal, formatPrice, useCart } from "@/stores/cart";

export function CartDrawer() {
  const { isOpen, close, lines, remove, setQty } = useCart();
  const subtotal = cartSubtotal(lines);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-[2px]"
            onClick={close}
          />
          <motion.aside
            role="dialog"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-background"
          >
            <div className="flex items-center justify-between border-b hairline px-6 py-5">
              <p className="eyebrow">Your cart · {lines.length}</p>
              <button aria-label="Close cart" onClick={close}>
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                  <p className="font-serif text-2xl">Your cart is quiet.</p>
                  <p className="text-sm text-muted-foreground">
                    Every object begins with a single choice.
                  </p>
                  <Link
                    to="/shop"
                    onClick={close}
                    className="mt-4 border-b hairline pb-1 eyebrow"
                  >
                    Browse the collection
                  </Link>
                </div>
              ) : (
                <ul>
                  {lines.map((line) => (
                    <li key={line.variantId} className="flex gap-4 border-b hairline p-6">
                      <div className="aspect-[4/5] w-20 shrink-0 bg-muted">
                        {line.imageUrl && (
                          <img
                            src={line.imageUrl}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between gap-3">
                          <div>
                            <p className="font-serif text-base leading-tight">
                              {line.name}
                            </p>
                            {(line.finish || line.size) && (
                              <p className="mt-1 text-xs text-muted-foreground">
                                {[line.finish, line.size].filter(Boolean).join(" · ")}
                              </p>
                            )}
                          </div>
                          <p className="text-sm">{formatPrice(line.priceCents * line.qty)}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border hairline">
                            <button
                              aria-label="Decrease"
                              onClick={() => setQty(line.variantId, line.qty - 1)}
                              className="p-2"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-xs">{line.qty}</span>
                            <button
                              aria-label="Increase"
                              onClick={() => setQty(line.variantId, line.qty + 1)}
                              className="p-2"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => remove(line.variantId)}
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t hairline p-6">
                <div className="flex items-center justify-between pb-4">
                  <span className="eyebrow">Subtotal</span>
                  <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
                </div>
                <p className="pb-5 text-xs text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link
                  to="/checkout"
                  onClick={close}
                  className="flex w-full items-center justify-center bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Proceed to checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
