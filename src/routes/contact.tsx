import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vestige" },
      { name: "description", content: "Reach the Vestige atelier." },
      { property: "og:title", content: "Contact — Vestige" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto grid min-h-[70dvh] max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="eyebrow mb-4 text-muted-foreground">Contact</p>
          <h1 className="font-serif text-5xl leading-none md:text-7xl">Write to us.</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            For press, trade, or commissioned work, we reply within two working days from Copenhagen.
          </p>
          <dl className="mt-14 space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-muted-foreground">General</dt>
              <dd className="mt-1">atelier@vestige.co</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Press</dt>
              <dd className="mt-1">press@vestige.co</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Studio</dt>
              <dd className="mt-1">Refshalevej 163A, 1432 Copenhagen, DK</dd>
            </div>
          </dl>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Field label="Name">
            <input required className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary" />
          </Field>
          <Field label="Email">
            <input type="email" required className="w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary" />
          </Field>
          <Field label="Message">
            <textarea
              required
              rows={5}
              className="w-full resize-none border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
            />
          </Field>
          <button className="w-full bg-primary py-4 eyebrow text-primary-foreground">Send</button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-1 block text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
