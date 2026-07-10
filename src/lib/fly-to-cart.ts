export type FlyRect = { left: number; top: number; width: number; height: number };
export type FlyPayload = { imageUrl: string; fromRect: FlyRect };
type Listener = (p: FlyPayload) => void;

const listeners = new Set<Listener>();

export function flyToCart(p: FlyPayload) {
  listeners.forEach((l) => l(p));
}

export function onFlyToCart(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

export function flyFromElement(el: Element | null | undefined, imageUrl: string) {
  if (!el || typeof window === "undefined") return;
  const r = el.getBoundingClientRect();
  flyToCart({
    imageUrl,
    fromRect: { left: r.left, top: r.top, width: r.width, height: r.height },
  });
}
