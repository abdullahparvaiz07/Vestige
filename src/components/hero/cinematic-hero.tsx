import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useHydrated } from "@/hooks/use-hydrated";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { HeroFallback } from "./hero-fallback";

const HeroCanvas = lazy(() => import("./hero-canvas"));

export function CinematicHero() {
  const hydrated = useHydrated();
  const reduced = usePrefersReducedMotion();
  const useCanvas = hydrated && !reduced;

  return (
    <section className="relative h-[92dvh] min-h-[640px] w-full overflow-hidden bg-[#0f0d0b]">
      {/* Backdrop */}
      <div className="absolute inset-0">
        {useCanvas ? (
          <Suspense fallback={<HeroFallback />}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />
      {/* Vignette + bottom fade for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_40%,#000_120%)] opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0f0d0b]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 text-[#f5eeda] md:px-10 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="eyebrow mb-6"
        >
          Volume 01 — Winter dispatch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[86px]"
        >
          Objects made to <em className="italic text-sage">outlast</em> the season.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10"
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 border border-[#f5eeda]/40 bg-[#f5eeda] px-8 py-4 eyebrow text-[#1a1512] transition-colors hover:bg-transparent hover:text-[#f5eeda]"
          >
            Enter the collection <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/journal" className="link-underline eyebrow text-[#f5eeda]/85">
            Read the journal
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#f5eeda]/60"
      >
        Scroll
      </motion.div>
    </section>
  );
}
