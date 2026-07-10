import { t as supabase } from "./client-DhIMy7t3.mjs";
import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { A as redirect, _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Route$11 } from "./collections._slug-DwSFvJva.mjs";
import { t as Route$12 } from "./product._slug-Cwik9jNS.mjs";
import { t as Route$13 } from "./shop-BYgSB02O.mjs";
import { t as bestSellersQuery } from "./routes-BG4ViadD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-hulSYDnJ.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CoepOG85.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vestige — Objects made to outlast the season" },
			{
				name: "description",
				content: "A minimalist noir editorial collection of hand-thrown ceramics, blackened oak furniture and undyed linen. Sourced from single ateliers. Shipped from Copenhagen."
			},
			{
				name: "author",
				content: "Vestige Atelier"
			},
			{
				property: "og:site_name",
				content: "Vestige"
			},
			{
				property: "og:title",
				content: "Vestige — Objects made to outlast the season"
			},
			{
				property: "og:description",
				content: "Hand-thrown ceramics, blackened oak furniture, undyed linen."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Vestige",
				description: "Editorial e-commerce for hand-crafted objects.",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Copenhagen",
					addressCountry: "DK"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./reset-password-BpCBAbAL.mjs");
var Route$9 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [{ title: "Reset password — Vestige" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./journal-D0biQlpV.mjs");
var Route$8 = createFileRoute("/journal")({
	head: () => ({
		meta: [
			{ title: "Journal — Vestige" },
			{
				name: "description",
				content: "Notes from the atelier. Craft, material, and slowness."
			},
			{
				property: "og:title",
				content: "Journal — Vestige"
			},
			{
				property: "og:url",
				content: "/journal"
			}
		],
		links: [{
			rel: "canonical",
			href: "/journal"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-CQ2TaZwl.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Vestige" },
			{
				name: "description",
				content: "Reach the Vestige atelier."
			},
			{
				property: "og:title",
				content: "Contact — Vestige"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./checkout-j-Zl4JeB.mjs");
var Route$6 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Vestige" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./auth-Blh-ZDtf.mjs");
var Route$5 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign in — Vestige" },
		{
			name: "description",
			content: "Sign in or create a Vestige account."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./account-Dx7pOEjY.mjs");
var Route$4 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "Account — Vestige" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-D8C7IOXH.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "The Atelier — Vestige" },
			{
				name: "description",
				content: "Vestige is a Copenhagen atelier and a Kyoto studio, working with a small circle of makers."
			},
			{
				property: "og:title",
				content: "The Atelier — Vestige"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./route-Di7iQBCH.mjs");
var Route$2 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-Geigt-sT.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ links: [{
		rel: "canonical",
		href: "/"
	}] }),
	loader: ({ context }) => context.queryClient.ensureQueryData(bestSellersQuery),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin-ihN0hKK_.mjs");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [{ title: "Admin — Vestige" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ShopRoute = Route$13.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$10
});
var ResetPasswordRoute = Route$9.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$10
});
var JournalRoute = Route$8.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var CheckoutRoute = Route$6.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$10
});
var AuthRoute = Route$5.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$10
});
var AccountRoute = Route$4.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var AuthenticatedRouteRoute = Route$2.update({
	id: "/_authenticated",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var ProductSlugRoute = Route$12.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$10
});
var CollectionsSlugRoute = Route$11.update({
	id: "/collections/$slug",
	path: "/collections/$slug",
	getParentRoute: () => Route$10
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AccountRoute,
	AuthRoute,
	CheckoutRoute,
	ContactRoute,
	JournalRoute,
	ResetPasswordRoute,
	ShopRoute,
	CollectionsSlugRoute,
	ProductSlugRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
