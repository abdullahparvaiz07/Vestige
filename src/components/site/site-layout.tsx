import type { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CartDrawer } from "./cart-drawer";
import { FloatingCart } from "./floating-cart";
import { QuickViewDialog } from "./quick-view-dialog";
import { SmoothScrollProvider } from "./smooth-scroll-provider";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="flex min-h-dvh flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <FloatingCart />
        <QuickViewDialog />
      </div>
    </SmoothScrollProvider>
  );
}
