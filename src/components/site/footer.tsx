import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t hairline bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-[1.4fr,1fr,1fr,1fr] md:px-10">
        <div>
          <Link to="/" className="font-serif text-2xl">
            Vestige<span className="text-sage">.</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Objects made to outlast the season. Every piece is sourced or commissioned
            from a single atelier and shipped from our warehouse in Copenhagen.
          </p>
          <form
            className="mt-8 flex max-w-sm items-center border-b hairline pb-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email — for occasional dispatches"
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button type="submit" className="eyebrow text-foreground">
              Subscribe
            </button>
          </form>
        </div>

        <FooterCol title="Shop">
          <Link to="/shop">All objects</Link>
          <Link to="/collections/ceramics">Ceramics</Link>
          <Link to="/collections/furniture">Furniture</Link>
          <Link to="/collections/textiles">Textiles</Link>
        </FooterCol>

        <FooterCol title="Atelier">
          <Link to="/about">Our story</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/contact">Contact</Link>
        </FooterCol>

        <FooterCol title="Support">
          <Link to="/shipping">Shipping & returns</Link>
          <Link to="/care">Care guide</Link>
          <Link to="/account">Account</Link>
        </FooterCol>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Vestige Atelier. Copenhagen · Kyoto.</span>
          <span className="eyebrow">Made slowly</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-6 text-muted-foreground">{title}</p>
      <ul className="space-y-3 text-sm">
        {Array.isArray(children)
          ? children.map((c, i) => <li key={i}>{c}</li>)
          : <li>{children}</li>}
      </ul>
    </div>
  );
}
