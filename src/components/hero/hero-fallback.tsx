import { motion } from "framer-motion";
import hero from "@/assets/hero-vestige.jpg";

export function HeroFallback() {
  return (
    <motion.img
      src={hero}
      alt="A quiet still-life of hand-thrown ceramics on a stone plinth"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.4, ease: [0.19, 1, 0.22, 1] }}
      className="absolute inset-0 h-full w-full object-cover"
      fetchPriority="high"
    />
  );
}
