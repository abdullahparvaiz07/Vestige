import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DhIMy7t3.mjs";
import { n as fetchProductBySlug } from "./catalog-Bl-5k0Rf.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as motion, n as useTransform, o as AnimatePresence, r as useMotionValue, t as useSpring } from "../_libs/framer-motion.mjs";
import { a as Search, c as Menu, h as ArrowUpRight, i as ShoppingBag, l as Heart, o as Plus, p as Check, r as User, s as Minus, t as X, u as Eye } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-1yjzWDLm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var useCart = create()(persist((set) => ({
	lines: [],
	isOpen: false,
	couponCode: null,
	add: (line) => set((s) => {
		if (s.lines.find((l) => l.variantId === line.variantId)) return { lines: s.lines.map((l) => l.variantId === line.variantId ? {
			...l,
			qty: l.qty + line.qty
		} : l) };
		return { lines: [...s.lines, line] };
	}),
	remove: (variantId) => set((s) => ({ lines: s.lines.filter((l) => l.variantId !== variantId) })),
	setQty: (variantId, qty) => set((s) => ({ lines: s.lines.map((l) => l.variantId === variantId ? {
		...l,
		qty: Math.max(1, qty)
	} : l).filter((l) => l.qty > 0) })),
	clear: () => set({
		lines: [],
		couponCode: null
	}),
	setCoupon: (code) => set({ couponCode: code }),
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
	toggle: () => set((s) => ({ isOpen: !s.isOpen }))
}), { name: "vestige-cart-v1" }));
function cartSubtotal(lines) {
	return lines.reduce((acc, l) => acc + l.priceCents * l.qty, 0);
}
function formatPrice(cents, currency = "USD") {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency
	}).format(cents / 100);
}
var useWishlist = create()(persist((set, get) => ({
	ids: [],
	toggle: (id) => set((s) => s.ids.includes(id) ? { ids: s.ids.filter((x) => x !== id) } : { ids: [...s.ids, id] }),
	has: (id) => get().ids.includes(id)
}), { name: "vestige-wishlist-v1" }));
var useQuickView = create((set) => ({
	slug: null,
	open: (slug) => set({ slug }),
	close: () => set({ slug: null })
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var cat_ceramics_default = "/assets/cat-ceramics-CEe6zXYt.jpg";
var cat_furniture_default = "/assets/cat-furniture-Cs6gJBuZ.jpg";
var cat_textiles_default = "/assets/cat-textiles-BXQVvwLj.jpg";
var FALLBACK = {
	"fossil-essence-candle": "/assets/pdp-candle-CRhgq2uM.jpg",
	"oblique-stool": cat_furniture_default,
	"obsidian-pitcher": cat_ceramics_default,
	"sandstone-basin": cat_ceramics_default,
	"aether-glass-vessel": cat_ceramics_default,
	"monolith-candle-base": cat_ceramics_default,
	"plinth-side-table": cat_furniture_default,
	"brushed-steel-tray": cat_furniture_default,
	"raw-flax-pillow": cat_textiles_default,
	"stone-wash-throw": cat_textiles_default,
	"atelier-apron": cat_textiles_default,
	"unbleached-tea-towel-set": cat_textiles_default
};
function productImage(slug, hero) {
	if (hero && hero.startsWith("http")) return hero;
	return FALLBACK[slug] ?? "/assets/cat-ceramics-CEe6zXYt.jpg";
}
function ProductCard({ product, index = 0 }) {
	const wishHas = useWishlist((s) => s.ids.includes(product.id));
	const toggleWish = useWishlist((s) => s.toggle);
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-.5, .5], [4, -4]), {
		stiffness: 180,
		damping: 20
	});
	const ry = useSpring(useTransform(mx, [-.5, .5], [-6, 6]), {
		stiffness: 180,
		damping: 20
	});
	const handleMove = (e) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	};
	const handleLeave = () => {
		mx.set(0);
		my.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay: index % 4 * .06,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "group block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				ref,
				onMouseMove: handleMove,
				onMouseLeave: handleLeave,
				style: { perspective: 900 },
				className: "relative aspect-[4/5] overflow-hidden bg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: productImage(product.slug, product.hero_image_url),
						alt: product.name,
						loading: "lazy",
						style: {
							rotateX: rx,
							rotateY: ry,
							transformStyle: "preserve-3d"
						},
						className: "h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 shadow-[inset_0_0_80px_rgba(150,175,145,0.25)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-4 -bottom-4 h-8 rounded-[100%] bg-black/0 blur-2xl transition-all duration-500 group-hover:bottom-2 group-hover:bg-black/25" }),
					product.best_seller && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 eyebrow bg-background/90 px-2 py-1 backdrop-blur",
						children: "Best seller"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": wishHas ? "Remove from wishlist" : "Add to wishlist",
						onClick: (e) => {
							e.preventDefault();
							e.stopPropagation();
							toggleWish(product.id);
						},
						className: "absolute right-3 top-3 grid h-9 w-9 place-items-center bg-background/85 opacity-0 backdrop-blur transition-all duration-500 hover:bg-background group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4 transition-all", wishHas ? "fill-primary text-primary scale-110" : "text-foreground/70") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-label": `Quick view ${product.name}`,
							onClick: (e) => {
								e.preventDefault();
								e.stopPropagation();
								useQuickView.getState().open(product.slug);
							},
							className: "mx-4 mb-4 flex w-[calc(100%-2rem)] items-center justify-center gap-2 bg-background/90 py-3 eyebrow text-foreground backdrop-blur transition-colors hover:bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" }), " Quick view"]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden pt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4 transition-transform duration-500 group-hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg leading-tight",
						children: product.name
					}), product.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs italic text-muted-foreground",
						children: product.tagline
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tabular-nums",
						children: formatPrice(product.min_price_cents)
					})]
				})
			})]
		})
	});
}
function useSession() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		supabase.auth.getSession().then(({ data }) => {
			if (!mounted) return;
			setUser(data.session?.user ?? null);
			setLoading(false);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null);
		});
		return () => {
			mounted = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	return {
		user,
		loading
	};
}
var NAV = [
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/collections/ceramics",
		label: "Ceramics"
	},
	{
		to: "/collections/furniture",
		label: "Furniture"
	},
	{
		to: "/collections/textiles",
		label: "Textiles"
	},
	{
		to: "/journal",
		label: "Journal"
	},
	{
		to: "/about",
		label: "Atelier"
	}
];
function Header() {
	const { lines, open } = useCart();
	const { user } = useSession();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const count = lines.reduce((a, l) => a + l.qty, 0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 w-full border-b hairline transition-[background,backdrop-filter] duration-500", scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-8 px-6 md:h-20 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Open menu",
					className: "flex items-center justify-center md:hidden",
					onClick: () => setMobileOpen((v) => !v),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "font-serif text-xl tracking-tight md:text-2xl",
					"aria-label": "Vestige — home",
					children: ["Vestige", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sage",
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden flex-1 items-center justify-center gap-9 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "eyebrow link-underline text-foreground/75 transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 md:gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							"aria-label": "Search",
							className: "hidden text-foreground/70 transition-colors hover:text-foreground md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: user ? "/account" : "/auth",
							"aria-label": user ? "Account" : "Sign in",
							className: "text-foreground/70 transition-colors hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: open,
							"aria-label": `Cart, ${count} items`,
							className: "relative text-foreground/70 transition-colors hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center bg-primary px-1 text-[10px] font-medium text-primary-foreground",
								children: count
							})]
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t hairline bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col p-6",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setMobileOpen(false),
					className: "border-b hairline py-4 font-serif text-2xl",
					children: item.label
				}, item.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-32 border-t hairline bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-[1.4fr,1fr,1fr,1fr] md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "font-serif text-2xl",
						children: ["Vestige", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sage",
							children: "."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "Objects made to outlast the season. Every piece is sourced or commissioned from a single atelier and shipped from our warehouse in Copenhagen."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 flex max-w-sm items-center border-b hairline pb-3",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Your email — for occasional dispatches",
							className: "w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "eyebrow text-foreground",
							children: "Subscribe"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Shop",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: "All objects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections/ceramics",
							children: "Ceramics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections/furniture",
							children: "Furniture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections/textiles",
							children: "Textiles"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Atelier",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: "Our story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							children: "Journal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FooterCol, {
					title: "Support",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shipping",
							children: "Shipping & returns"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/care",
							children: "Care guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							children: "Account"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Vestige Atelier. Copenhagen · Kyoto."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Made slowly"
				})]
			})
		})]
	});
}
function FooterCol({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow mb-6 text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3 text-sm",
		children: Array.isArray(children) ? children.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c }, i)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children })
	})] });
}
function CartDrawer() {
	const { isOpen, close, lines, remove, setQty } = useCart();
	const subtotal = cartSubtotal(lines);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .3 },
		className: "fixed inset-0 z-50 bg-primary/40 backdrop-blur-[2px]",
		onClick: close
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		role: "dialog",
		"aria-label": "Shopping cart",
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			duration: .5,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b hairline px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow",
					children: ["Your cart · ", lines.length]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close cart",
					onClick: close,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto",
				children: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col items-center justify-center gap-4 p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl",
							children: "Your cart is quiet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Every object begins with a single choice."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: close,
							className: "mt-4 border-b hairline pb-1 eyebrow",
							children: "Browse the collection"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 border-b hairline p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] w-20 shrink-0 bg-muted",
						children: line.imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: line.imageUrl,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-base leading-tight",
								children: line.name
							}), (line.finish || line.size) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [line.finish, line.size].filter(Boolean).join(" · ")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: formatPrice(line.priceCents * line.qty)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": "Decrease",
										onClick: () => setQty(line.variantId, line.qty - 1),
										className: "p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 text-center text-xs",
										children: line.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										"aria-label": "Increase",
										onClick: () => setQty(line.variantId, line.qty + 1),
										className: "p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => remove(line.variantId),
								className: "text-xs text-muted-foreground hover:text-foreground",
								children: "Remove"
							})]
						})]
					})]
				}, line.variantId)) })
			}),
			lines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t hairline p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Subtotal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-xl",
							children: formatPrice(subtotal)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-5 text-xs text-muted-foreground",
						children: "Shipping and taxes calculated at checkout."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						onClick: close,
						className: "flex w-full items-center justify-center bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90",
						children: "Proceed to checkout"
					})
				]
			})
		]
	})] }) });
}
var listeners = /* @__PURE__ */ new Set();
function flyToCart(p) {
	listeners.forEach((l) => l(p));
}
function onFlyToCart(l) {
	listeners.add(l);
	return () => {
		listeners.delete(l);
	};
}
function flyFromElement(el, imageUrl) {
	if (!el || typeof window === "undefined") return;
	const r = el.getBoundingClientRect();
	flyToCart({
		imageUrl,
		fromRect: {
			left: r.left,
			top: r.top,
			width: r.width,
			height: r.height
		}
	});
}
function FloatingCart() {
	const lines = useCart((s) => s.lines);
	const isOpen = useCart((s) => s.isOpen);
	const open = useCart((s) => s.open);
	const count = lines.reduce((a, l) => a + l.qty, 0);
	const subtotal = cartSubtotal(lines);
	const btnRef = (0, import_react.useRef)(null);
	const anchorRef = (0, import_react.useRef)(null);
	const [flights, setFlights] = (0, import_react.useState)([]);
	const [pulse, setPulse] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		return onFlyToCart((p) => {
			const r = (btnRef.current ?? anchorRef.current)?.getBoundingClientRect();
			const target = r ? {
				x: r.left + r.width / 2,
				y: r.top + r.height / 2
			} : {
				x: window.innerWidth - 60,
				y: window.innerHeight - 60
			};
			const id = Date.now() + Math.random();
			setFlights((f) => [...f, {
				...p,
				id,
				target
			}]);
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: anchorRef,
			"aria-hidden": true,
			className: "pointer-events-none fixed bottom-8 right-8 h-1 w-1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: count > 0 && !isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			ref: btnRef,
			type: "button",
			onClick: open,
			"aria-label": `Open cart, ${count} item${count === 1 ? "" : "s"}, ${formatPrice(subtotal)}`,
			initial: {
				y: 40,
				opacity: 0,
				scale: .9
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			exit: {
				y: 40,
				opacity: 0,
				scale: .9
			},
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 24
			},
			className: "group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-white/30 bg-background/40 px-4 py-2.5 shadow-[0_10px_50px_-10px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150 transition-colors hover:bg-background/60 md:bottom-8 md:right-8 md:px-5 md:py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				initial: { scale: 1 },
				animate: { scale: [
					1,
					1.18,
					1
				] },
				transition: {
					duration: .5,
					ease: [
						.19,
						1,
						.22,
						1
					]
				},
				className: "relative grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-sage px-1 text-[10px] font-medium text-primary",
					children: count
				})]
			}, pulse), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col items-start leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-[10px] text-muted-foreground",
					children: "Your cart"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-sm tabular-nums text-foreground",
					children: formatPrice(subtotal)
				})]
			})]
		}, "floating-cart") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: flights.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src: f.imageUrl,
			alt: "",
			"aria-hidden": true,
			initial: {
				left: f.fromRect.left,
				top: f.fromRect.top,
				width: f.fromRect.width,
				height: f.fromRect.height,
				opacity: 1,
				borderRadius: 6,
				rotate: 0
			},
			animate: {
				left: f.target.x - 22,
				top: f.target.y - 22,
				width: 44,
				height: 44,
				opacity: .15,
				borderRadius: 999,
				rotate: 14
			},
			transition: {
				duration: .95,
				ease: [
					.6,
					.05,
					.2,
					1
				]
			},
			onAnimationComplete: () => {
				setFlights((all) => all.filter((x) => x.id !== f.id));
				setPulse((p) => p + 1);
			},
			style: {
				position: "fixed",
				zIndex: 60,
				pointerEvents: "none"
			},
			className: "object-cover shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
		}, f.id)) })
	] });
}
var EASE = [
	.19,
	1,
	.22,
	1
];
function QuickViewDialog() {
	const slug = useQuickView((s) => s.slug);
	const close = useQuickView((s) => s.close);
	(0, import_react.useEffect)(() => {
		if (!slug) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => e.key === "Escape" && close();
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [slug, close]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: slug && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewInner, {
		slug,
		onClose: close
	}, slug) });
}
function QuickViewInner({ slug, onClose }) {
	const { data, isLoading } = useQuery({
		queryKey: ["product", slug],
		queryFn: () => fetchProductBySlug(slug),
		staleTime: 6e4
	});
	const add = useCart((s) => s.add);
	const wishHas = useWishlist((s) => data && s.ids.includes(data.id));
	const toggleWish = useWishlist((s) => s.toggle);
	const [variantId, setVariantId] = (0, import_react.useState)(null);
	const [added, setAdded] = (0, import_react.useState)(false);
	const [wishBurst, setWishBurst] = (0, import_react.useState)(0);
	const imgRef = (0, import_react.useRef)(null);
	const variant = data?.variants.find((v) => v.id === variantId) ?? data?.variants[0] ?? null;
	const img = data ? productImage(data.slug, data.hero_image_url) : "";
	const handleAdd = () => {
		if (!data || !variant) return;
		flyFromElement(imgRef.current, img);
		add({
			variantId: variant.id,
			productId: data.id,
			slug: data.slug,
			name: data.name,
			finish: variant.option_finish,
			size: variant.option_size,
			priceCents: variant.price_cents,
			qty: 1,
			imageUrl: img
		});
		setAdded(true);
		setTimeout(() => setAdded(false), 1600);
	};
	const handleWish = () => {
		if (!data) return;
		toggleWish(data.id);
		setWishBurst((n) => n + 1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
			type: "button",
			"aria-label": "Close quick view",
			onClick: onClose,
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .35,
				ease: EASE
			},
			className: "absolute inset-0 h-full w-full cursor-default bg-primary/50 backdrop-blur-md"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 grid place-items-center p-4 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Product quick view",
				initial: {
					opacity: 0,
					y: 30,
					scale: .98
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: 20,
					scale: .98
				},
				transition: {
					duration: .55,
					ease: EASE
				},
				className: "pointer-events-auto relative flex max-h-[90dvh] w-full max-w-5xl overflow-hidden border hairline bg-background shadow-[0_40px_120px_-30px_rgba(0,0,0,0.55)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close",
					onClick: onClose,
					className: "absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/85 backdrop-blur transition-colors hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full grid-cols-1 md:grid-cols-[1.05fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/5] w-full bg-muted md:aspect-auto md:h-[560px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								transition: { duration: .3 },
								className: "absolute inset-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-full w-full" })
							}, "sk-img") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								ref: imgRef,
								src: img,
								alt: data.name,
								initial: {
									opacity: 0,
									scale: 1.04
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: { opacity: 0 },
								transition: {
									duration: .7,
									ease: EASE
								},
								className: "absolute inset-0 h-full w-full object-cover"
							}, "img")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex max-h-[90dvh] flex-col overflow-y-auto p-6 md:p-10",
						children: isLoading || !data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonDetails, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "visible",
							variants: { visible: { transition: {
								staggerChildren: .06,
								delayChildren: .1
							} } },
							className: "flex h-full flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: data.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/collections/$slug",
									params: { slug: data.category.slug },
									onClick: onClose,
									className: "eyebrow text-muted-foreground hover:text-foreground",
									children: data.category.name
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-serif text-3xl leading-tight md:text-4xl",
									children: data.name
								}) }),
								data.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm italic text-muted-foreground",
									children: data.tagline
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 font-serif text-2xl tabular-nums",
									children: formatPrice(variant?.price_cents ?? data.base_price_cents)
								}) }),
								data.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 line-clamp-4 text-sm leading-relaxed text-muted-foreground",
									children: data.description
								}) }),
								data.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mb-3 text-muted-foreground",
										children: "Finish"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: data.variants.map((v) => {
											const active = (variantId ?? data.variants[0].id) === v.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
												type: "button",
												onClick: () => setVariantId(v.id),
												whileTap: { scale: .95 },
												transition: {
													type: "spring",
													stiffness: 400,
													damping: 22
												},
												className: cn("border px-4 py-2 text-xs uppercase tracking-widest transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "hairline hover:border-primary"),
												children: v.option_finish ?? v.option_size ?? v.sku
											}, v.id);
										})
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Fade, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex items-stretch gap-3 pt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										type: "button",
										"aria-label": wishHas ? "Remove from wishlist" : "Add to wishlist",
										onClick: handleWish,
										whileTap: { scale: .9 },
										className: "relative grid w-14 shrink-0 place-items-center border hairline transition-colors hover:border-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4 transition-all duration-300", wishHas ? "fill-primary text-primary scale-110" : "text-foreground/70") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: wishBurst > 0 && wishHas && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											"aria-hidden": true,
											initial: {
												opacity: .6,
												scale: .6
											},
											animate: {
												opacity: 0,
												scale: 2.2
											},
											exit: { opacity: 0 },
											transition: {
												duration: .7,
												ease: "easeOut"
											},
											className: "pointer-events-none absolute inset-0 rounded-full bg-primary/25"
										}, wishBurst) })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
										type: "button",
										onClick: handleAdd,
										disabled: !variant,
										whileTap: { scale: .98 },
										className: "relative flex-1 overflow-hidden bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
											mode: "wait",
											initial: false,
											children: added ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
												initial: {
													y: 20,
													opacity: 0
												},
												animate: {
													y: 0,
													opacity: 1
												},
												exit: {
													y: -20,
													opacity: 0
												},
												transition: {
													duration: .35,
													ease: EASE
												},
												className: "flex items-center justify-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }), " Added to cart"]
											}, "added") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
												initial: {
													y: 20,
													opacity: 0
												},
												animate: {
													y: 0,
													opacity: 1
												},
												exit: {
													y: -20,
													opacity: 0
												},
												transition: {
													duration: .35,
													ease: EASE
												},
												className: "block",
												children: [
													"Add to cart —",
													" ",
													formatPrice(variant?.price_cents ?? 0)
												]
											}, "add")
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/product/$slug",
									params: { slug: data.slug },
									onClick: onClose,
									className: "mt-4 inline-flex items-center gap-2 self-start eyebrow text-muted-foreground transition-colors hover:text-foreground",
									children: ["View full details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								})] })
							]
						})
					})]
				})]
			})
		})]
	});
}
function Fade({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		variants: {
			hidden: {
				opacity: 0,
				y: 14
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: .6,
					ease: EASE
				}
			}
		},
		children
	});
}
function Shimmer({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-muted", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": true,
			initial: { x: "-100%" },
			animate: { x: "100%" },
			transition: {
				duration: 1.4,
				repeat: Infinity,
				ease: "linear"
			},
			className: "absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-background/60 to-transparent"
		})
	});
}
function SkeletonDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-3 w-24" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-8 w-3/4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-4 w-1/2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "mt-4 h-7 w-32" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "mt-6 h-3 w-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-3 w-5/6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-3 w-4/6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-9 w-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-9 w-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-9 w-20" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-12 w-14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shimmer, { className: "h-12 flex-1" })]
			})
		]
	});
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const onChange = (e) => setReduced(e.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return reduced;
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function SmoothScrollProvider({ children }) {
	const hydrated = useHydrated();
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (!hydrated || reduced) return;
		let lenis = null;
		let rafId = 0;
		let cancelled = false;
		(async () => {
			const { default: Lenis } = await import("../_libs/lenis.mjs").then((n) => n.t);
			if (cancelled) return;
			const instance = new Lenis({
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true
			});
			lenis = instance;
			const loop = (time) => {
				instance.raf(time);
				rafId = requestAnimationFrame(loop);
			};
			rafId = requestAnimationFrame(loop);
			try {
				const { default: gsap } = await import("../_libs/gsap.mjs").then((n) => n.t);
				const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
				gsap.registerPlugin(ScrollTrigger);
				instance.on("scroll", ScrollTrigger.update);
				gsap.ticker.lagSmoothing(0);
			} catch {}
		})();
		return () => {
			cancelled = true;
			cancelAnimationFrame(rafId);
			lenis?.destroy();
		};
	}, [hydrated, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScrollProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingCart, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickViewDialog, {})
		]
	}) });
}
//#endregion
export { cat_furniture_default as a, formatPrice as c, useHydrated as d, usePrefersReducedMotion as f, cat_ceramics_default as i, productImage as l, SiteLayout as n, cat_textiles_default as o, useSession as p, cartSubtotal as r, flyFromElement as s, ProductCard as t, useCart as u };
