import { useEffect, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useHydrated } from "@/hooks/use-hydrated";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!hydrated || reduced) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    let cancelled = false;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      const instance = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        instance.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);

      // sync with GSAP ScrollTrigger if present
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        instance.on("scroll", ScrollTrigger.update);
        gsap.ticker.lagSmoothing(0);
      } catch {
        /* ignore */
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, [hydrated, reduced]);

  return <>{children}</>;
}
