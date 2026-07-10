import { o as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { D as isRedirect, _ as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { d as DollarSign, f as CircleAlert, h as ArrowUpRight, i as ShoppingBag, m as Boxes, n as Users } from "../_libs/lucide-react.mjs";
import { i as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as formatPrice, n as SiteLayout } from "./site-layout-1yjzWDLm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-BFFE07zL.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BpCcyRg7.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-1xD4wXPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-ihN0hKK_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getAdminStats = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("4fec70c92c2624b017310f557d52373f6e45b4f5283a3272a864213d4d65e68d"));
var grantSelfAdmin = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("c579e6cf81462f6a2bea1160758f9416a190d3246ad7147937aa785904bea01e"));
function AdminDashboard() {
	const fetchStats = useServerFn(getAdminStats);
	const claim = useServerFn(grantSelfAdmin);
	const router = useRouter();
	const { data, isLoading, refetch } = useQuery({
		queryKey: ["admin", "stats"],
		queryFn: () => fetchStats()
	});
	const claimMutation = useMutation({
		mutationFn: () => claim(),
		onSuccess: (r) => {
			if (r.ok) {
				toast.success("You are now the atelier admin.");
				refetch();
				router.invalidate();
			} else if (r.reason === "admin_exists") toast.error("An admin already exists. Ask them to grant you access.");
			else toast.error("Could not grant admin.");
		}
	});
	if (isLoading || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[1440px] px-6 py-20 text-muted-foreground md:px-10",
		children: "Loading…"
	}) });
	if (!data.isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl px-6 py-24 text-center md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-6 text-muted-foreground",
				children: "Restricted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif text-4xl leading-none",
				children: "Admin access required."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted-foreground",
				children: "You're signed in, but not marked as an atelier admin. If this is a fresh install, you can claim the role now — it's granted only when no admin exists yet."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => claimMutation.mutate(),
				disabled: claimMutation.isPending,
				className: "mt-10 bg-primary px-8 py-4 eyebrow text-primary-foreground disabled:opacity-60",
				children: claimMutation.isPending ? "Granting…" : "Claim admin role"
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 text-muted-foreground",
					children: "Atelier — Admin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl leading-none md:text-6xl",
					children: "Dashboard."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"Last updated",
						" ",
						(/* @__PURE__ */ new Date()).toLocaleString("en-US", {
							hour: "numeric",
							minute: "numeric",
							month: "short",
							day: "numeric"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 0,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" }),
						label: "Revenue",
						value: formatPrice(data.revenueCents),
						sub: `${formatPrice(data.revenueThisMonthCents)} this month`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 1,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }),
						label: "Orders",
						value: data.ordersTotal.toLocaleString(),
						sub: `${data.ordersThisMonth} this month`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 2,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
						label: "Customers",
						value: data.customersTotal.toLocaleString(),
						sub: "Registered profiles"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						index: 3,
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-4 w-4" }),
						label: "Products",
						value: data.productsActive.toLocaleString(),
						sub: `${data.productsOutOfStock} variants out of stock`,
						warning: data.productsOutOfStock > 0
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-8 lg:grid-cols-[1.4fr,1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Recent orders",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "link-underline eyebrow",
						children: "View all"
					}),
					children: data.recentOrders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: "No orders yet",
						body: "Orders will appear here as customers check out."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y hairline",
						children: data.recentOrders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base",
								children: o.order_number
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									o.email ?? "Guest",
									" ·",
									" ",
									new Date(o.created_at).toLocaleDateString()
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm tabular-nums",
									children: formatPrice(o.total_cents)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-1 text-muted-foreground",
									children: o.status
								})]
							})]
						}, o.id))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Product overview",
					children: data.topProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						title: "No products",
						body: "Seed a catalog to begin."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y hairline",
						children: data.topProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/product/$slug",
								params: { slug: p.slug },
								className: "font-serif text-base link-underline",
								children: p.name
							}), p.best_seller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mt-1 text-muted-foreground",
								children: "Best seller"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm tabular-nums",
								children: formatPrice(p.base_price_cents)
							})]
						}, p.id))
					})
				})]
			})
		]
	}) });
}
function StatCard({ index, icon, label, value, sub, warning }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: index * .06,
			duration: .6,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "border hairline bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: label
				}), icon]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-serif text-4xl tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-2 text-xs ${warning ? "text-destructive" : "text-muted-foreground"}`,
				children: sub
			})
		]
	});
}
function Panel({ title, action, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border hairline bg-card p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between border-b hairline pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: title
			}), action]
		}), children]
	});
}
function EmptyState({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mx-auto h-6 w-6 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: body
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
