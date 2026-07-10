import { o as __toESM } from "../_runtime.mjs";
import { i as fetchRelated } from "./catalog-Bl-5k0Rf.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { c as formatPrice, l as productImage, n as SiteLayout, s as flyFromElement, t as ProductCard, u as useCart } from "./site-layout-1yjzWDLm.mjs";
import { t as Route } from "./product._slug-Cwik9jNS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-BmG2fge4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PDP() {
	const product = Route.useLoaderData().product;
	const { data: related } = useSuspenseQuery({
		queryKey: [
			"related",
			product.category_id,
			product.id
		],
		queryFn: () => product.category_id ? fetchRelated(product.category_id, product.id) : Promise.resolve([])
	});
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants[0]?.id ?? "");
	const [qty, setQty] = (0, import_react.useState)(1);
	const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0];
	const add = useCart((s) => s.add);
	const img = productImage(product.slug, product.hero_image_url);
	const heroImgRef = (0, import_react.useRef)(null);
	const handleAdd = () => {
		if (!variant) return;
		flyFromElement(heroImgRef.current, img);
		add({
			variantId: variant.id,
			productId: product.id,
			slug: product.slug,
			name: product.name,
			finish: variant.option_finish,
			size: variant.option_size,
			priceCents: variant.price_cents,
			qty,
			imageUrl: img
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 pt-8 md:px-10 md:pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-10 flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-foreground",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					product.category && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections/$slug",
						params: { slug: product.category.slug },
						className: "hover:text-foreground",
						children: product.category.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: 1,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "aspect-[4/5] overflow-hidden bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: product.name,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center md:sticky md:top-24 md:self-start",
					children: [
						product.tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4 text-muted-foreground",
							children: product.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl leading-tight md:text-6xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-serif text-2xl",
							children: formatPrice(variant?.price_cents ?? product.base_price_cents)
						}),
						product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-base leading-relaxed text-muted-foreground",
							children: product.description
						}),
						product.variants.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-3",
								children: "Finish"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setVariantId(v.id),
									className: `border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${v.id === variantId ? "border-primary bg-primary text-primary-foreground" : "hairline hover:border-primary"}`,
									children: v.option_finish ?? v.option_size ?? v.sku
								}, v.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-stretch gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border hairline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "px-4 py-3",
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm tabular-nums",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "px-4 py-3",
										onClick: () => setQty((q) => q + 1),
										children: "+"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleAdd,
								className: "flex-1 bg-primary py-4 eyebrow text-primary-foreground transition-opacity hover:opacity-90",
								children: ["Add to cart — ", formatPrice((variant?.price_cents ?? 0) * qty)]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-4 border-t hairline pt-8 text-sm",
							children: [
								product.material && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
									label: "Material",
									value: product.material
								}),
								product.dimensions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
									label: "Dimensions",
									value: product.dimensions
								}),
								product.origin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
									label: "Origin",
									value: product.origin
								}),
								product.care && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
									label: "Care",
									value: product.care
								})
							]
						})
					]
				})]
			}),
			product.story && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-32 max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6 text-muted-foreground",
					children: "The making"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl",
					children: [
						"\"",
						product.story,
						"\""
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-32 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-8 text-muted-foreground",
					children: "Also considered"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i
					}, p.id))
				})]
			})
		]
	}) });
}
function DetailRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-6 border-b hairline pb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right text-foreground/85",
			children: value
		})]
	});
}
//#endregion
export { PDP as component };
