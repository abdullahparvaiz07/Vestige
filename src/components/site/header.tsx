import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, User as UserIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/stores/cart";
import { useSession } from "@/hooks/use-session";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/collections/ceramics", label: "Ceramics" },
  { to: "/collections/furniture", label: "Furniture" },
  { to: "/collections/textiles", label: "Textiles" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "Atelier" },
];

export function Header() {
  const { lines, open } = useCart();
  const { user } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const count = lines.reduce((a, l) => a + l.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b hairline transition-[background,backdrop-filter] duration-500",
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-6 md:h-20 md:px-10">
        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center justify-center md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="font-serif text-xl tracking-tight md:text-2xl"
          aria-label="Vestige — home"
        >
          Vestige<span className="text-sage">.</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow link-underline text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <Link
            to="/shop"
            aria-label="Search"
            className="hidden text-foreground/70 transition-colors hover:text-foreground md:block"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            to={user ? "/account" : "/auth"}
            aria-label={user ? "Account" : "Sign in"}
            className="text-foreground/70 transition-colors hover:text-foreground"
          >
            <UserIcon className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={open}
            aria-label={`Cart, ${count} items`}
            className="relative text-foreground/70 transition-colors hover:text-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t hairline bg-background md:hidden">
          <nav className="flex flex-col p-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="border-b hairline py-4 font-serif text-2xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
