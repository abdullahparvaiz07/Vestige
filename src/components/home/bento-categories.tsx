import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ceramics from "@/assets/cat-ceramics.jpg";
import furniture from "@/assets/cat-furniture.jpg";
import textiles from "@/assets/cat-textiles.jpg";
import story from "@/assets/story-craft.jpg";

type Tile = {
  key: string;
  eyebrow: string;
  title: string;
  desc?: string;
  img: string;
  to: string;
  params?: Record<string, string>;
  area: string;
  tone?: "dark" | "light";
};

const TILES: Tile[] = [
  {
    key: "furniture",
    eyebrow: "Collection · 02",
    title: "Furniture",
    desc: "Blackened oak, cast iron, patinated brass.",
    img: furniture,
    to: "/collections/$slug",
    params: { slug: "furniture" },
    area: "hero",
    tone: "dark",
  },
  {
    key: "ceramics",
    eyebrow: "Collection · 01",
    title: "Ceramics",
    img: ceramics,
    to: "/collections/$slug",
    params: { slug: "ceramics" },
    area: "top",
    tone: "dark",
  },
  {
    key: "textiles",
    eyebrow: "Collection · 03",
    title: "Textiles",
    img: textiles,
    to: "/collections/$slug",
    params: { slug: "textiles" },
    area: "mid",
    tone: "dark",
  },
  {
    key: "otw",
    eyebrow: "Object of the week",
    title: "Obsidian Pitcher",
    desc: "Thrown by Aiko in Kyoto.",
    img: ceramics,
    to: "/product/$slug",
    params: { slug: "obsidian-pitcher" },
    area: "small",
    tone: "dark",
  },
  {
    key: "new",
    eyebrow: "New arrivals",
    title: "Winter dispatch",
    desc: "Twenty-four new pieces, in editions of one hundred.",
    img: story,
    to: "/shop",
    area: "wide",
    tone: "dark",
  },
];

export function BentoCategories() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-28 md:px-10 md:pb-40">
      <div className="mb-14 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-4 text-muted-foreground">Collections</p>
          <h2 className="font-serif text-4xl md:text-5xl">Three ways of quiet.</h2>
        </div>
        <Link to="/shop" className="hidden link-underline eyebrow md:inline-block">
          All objects
        </Link>
      </div>

      <div
        className="grid gap-4 md:gap-5"
        style={{
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          gridTemplateRows: "repeat(4, minmax(140px, 1fr))",
          gridTemplateAreas: `
            "hero hero hero hero top top"
            "hero hero hero hero top top"
            "hero hero hero hero mid mid"
            "small small wide wide wide wide"
          `,
        }}
      >
        {TILES.map((t, i) => (
          <BentoTile key={t.key} tile={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function BentoTile({ tile, index }: { tile: Tile; index: number }) {
  const inner = (
    <div className="group relative h-full w-full overflow-hidden bg-muted">
      <img
        src={tile.img}
        alt={tile.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-700 group-hover:from-black/85" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-[#f5eeda] md:p-8">
        <p className="eyebrow mb-3 opacity-80">{tile.eyebrow}</p>
        <div className="flex items-end justify-between gap-4">
          <div className="translate-y-1 transition-transform duration-500 group-hover:translate-y-0">
            <p className="font-serif text-2xl leading-tight md:text-4xl">{tile.title}</p>
            {tile.desc && (
              <p className="mt-2 max-w-xs text-xs opacity-80 md:text-sm">{tile.desc}</p>
            )}
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 -translate-y-1 opacity-70 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
      style={{ gridArea: tile.area }}
      className="min-h-[220px]"
    >
      {tile.to.includes("$slug") && tile.params ? (
        <Link
          to={tile.to as "/collections/$slug"}
          params={tile.params as { slug: string }}
          className="block h-full w-full"
        >
          {inner}
        </Link>
      ) : (
        <Link to={tile.to as "/shop"} className="block h-full w-full">
          {inner}
        </Link>
      )}
    </motion.div>
  );
}
