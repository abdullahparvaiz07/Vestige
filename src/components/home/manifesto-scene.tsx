import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import story from "@/assets/story-craft.jpg";

export function ManifestoScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const bodyY = useTransform(scrollYProgress, [0, 1], ["40%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] w-full overflow-hidden bg-[#0f0d0b] text-[#f5eeda]"
    >
      <motion.div className="absolute inset-0 -top-[10%] h-[130%]" style={{ y: bgY }}>
        <img
          src={story}
          alt="Inside the atelier"
          className="h-full w-full object-cover opacity-55"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-[#0f0d0b]/30 to-[#0f0d0b]" />
      </motion.div>

      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-6 md:flex-row md:items-end md:justify-between md:px-10">
          <motion.h2
            style={{ y: titleY }}
            className="font-serif text-[13vw] leading-[0.9] tracking-tight md:text-[9vw]"
          >
            Made<br />
            <em className="italic text-sage">slowly.</em>
          </motion.h2>
          <motion.div style={{ y: bodyY }} className="max-w-sm">
            <p className="eyebrow mb-6 opacity-60">Manifesto — 01</p>
            <p className="text-base leading-relaxed opacity-85 md:text-lg">
              A small circle of ateliers. One maker, one material, one intention. We
              commission in editions of no more than one hundred, and every object
              ships with a lifetime repair guarantee.
            </p>
            <p className="mt-8 font-serif text-xl italic opacity-90">
              "We would rather make one bowl a week than ten a day."
            </p>
            <p className="mt-3 eyebrow opacity-60">— Aiko Ono, Kyoto</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
