import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import story from "@/assets/story-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Vestige" },
      { name: "description", content: "Vestige is a Copenhagen atelier and a Kyoto studio, working with a small circle of makers." },
      { property: "og:title", content: "The Atelier — Vestige" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24">
        <p className="eyebrow mb-4 text-muted-foreground">The Atelier</p>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl">
          A room, a wheel, a single glaze. This is our whole apparatus.
        </h1>
      </section>

      <section className="mx-auto mt-24 grid max-w-[1440px] gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={story} alt="Inside the atelier" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Vestige began in 2019 with a single conviction — that the most beautiful objects are the ones that ask nothing of you.</p>
          <p>We work with three ateliers: a ceramicist in Kyoto, a joinery in Copenhagen, and a linen weaver in Belgium. Every piece we sell is commissioned directly. There are no distributors, no white-labels, no third parties.</p>
          <p>Our objects arrive slowly, imperfectly, and only when they are finished. We think that's the whole point.</p>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-3xl px-6 text-center md:px-10">
        <p className="eyebrow mb-6 text-muted-foreground">Repair, always</p>
        <p className="font-serif text-3xl italic leading-relaxed md:text-4xl">
          "If it breaks, send it back. We'll repair it, refire it, or rebind it — at no cost, for the life of the object."
        </p>
        <Link to="/shop" className="mt-12 inline-block link-underline eyebrow">
          Enter the collection
        </Link>
      </section>
    </SiteLayout>
  );
}
