import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import ceramics from "@/assets/cat-ceramics.jpg";
import furniture from "@/assets/cat-furniture.jpg";
import textiles from "@/assets/cat-textiles.jpg";

const ENTRIES = [
  {
    slug: "on-slowness",
    date: "December 2025",
    title: "On slowness, and why the wheel still turns by hand.",
    excerpt: "Aiko Okuma throws twelve pieces a week. Not because she can't produce more — but because she won't.",
    image: ceramics,
  },
  {
    slug: "blackened-oak",
    date: "November 2025",
    title: "Blackened oak, and the language of grain.",
    excerpt: "A conversation with the joinery behind The Oblique Stool.",
    image: furniture,
  },
  {
    slug: "raw-flax",
    date: "October 2025",
    title: "Raw flax: a fibre that softens for a lifetime.",
    excerpt: "Why we refuse to dye a single thread.",
    image: textiles,
  },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Vestige" },
      { name: "description", content: "Notes from the atelier. Craft, material, and slowness." },
      { property: "og:title", content: "Journal — Vestige" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: Journal,
});

function Journal() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow mb-4 text-muted-foreground">Journal</p>
        <h1 className="font-serif text-5xl leading-none md:text-7xl">Field notes.</h1>

        <div className="mt-20 divide-y hairline border-y hairline">
          {ENTRIES.map((e) => (
            <Link
              to="/journal"
              key={e.slug}
              className="group grid gap-10 py-12 md:grid-cols-[1fr,2fr] md:gap-16"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted md:aspect-[3/4]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-3 text-muted-foreground">{e.date}</p>
                <h2 className="font-serif text-3xl leading-tight md:text-5xl">{e.title}</h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {e.excerpt}
                </p>
                <span className="mt-8 link-underline eyebrow">Read the note</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
