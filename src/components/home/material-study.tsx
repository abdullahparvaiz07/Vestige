import { useRef, useEffect } from "react";
import ceramics from "@/assets/cat-ceramics.jpg";
import furniture from "@/assets/cat-furniture.jpg";
import textiles from "@/assets/cat-textiles.jpg";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const PANELS = [
  { n: "01", label: "Clay", body: "Iron-rich stoneware fired to 1260°C. Every vessel is single-throw, unsigned but for the maker's kiln mark.", img: ceramics },
  { n: "02", label: "Oak", body: "European oak, blackened with a soy-and-vinegar ebonising wash. Grain rises, colour deepens with age.", img: furniture },
  { n: "03", label: "Flax", body: "Undyed Belgian flax, stone-washed until it drapes like paper. It softens with every wash for a decade.", img: textiles },
];

export function MaterialStudy() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const created = gsap.context(() => {
        const track = trackRef.current;
        const wrap = wrapRef.current;
        if (!track || !wrap) return;
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      }, wrapRef);
      ctx = created as unknown as { revert: () => void };
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reduced]);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden bg-[#0f0d0b] text-[#f5eeda]"
    >
      <div className="mx-auto max-w-[1440px] px-6 pt-24 md:px-10 md:pt-32">
        <p className="eyebrow mb-4 opacity-60">A study in materials</p>
        <h2 className="font-serif text-4xl md:text-5xl">Three surfaces, held to the light.</h2>
      </div>

      <div className="mt-16 h-[80vh]">
        <div
          ref={trackRef}
          className="flex h-full gap-6 pl-6 md:gap-10 md:pl-10"
          style={{ width: reduced ? "100%" : "max-content" }}
        >
          {PANELS.map((p) => (
            <article
              key={p.n}
              className={`relative flex h-full shrink-0 flex-col justify-between overflow-hidden ${
                reduced ? "w-full" : "w-[85vw] md:w-[70vw]"
              }`}
            >
              <div className="relative flex-1 overflow-hidden bg-[#1a1512]">
                <img
                  src={p.img}
                  alt={p.label}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-transparent to-transparent" />
                <div className="absolute left-8 top-8 font-serif text-[18vw] leading-none opacity-90 md:text-[10vw]">
                  {p.n}
                </div>
              </div>
              <div className="grid gap-6 border-t border-[#f5eeda]/15 p-8 md:grid-cols-[1fr,2fr] md:p-10">
                <p className="font-serif text-3xl md:text-4xl">{p.label}</p>
                <p className="max-w-md text-sm leading-relaxed opacity-80 md:text-base">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
          {!reduced && <div className="w-[10vw] shrink-0" />}
        </div>
      </div>
    </section>
  );
}
