import { o as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatPrice, n as SiteLayout, r as cartSubtotal, u as useCart } from "./site-layout-1yjzWDLm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-j-Zl4JeB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { lines, clear } = useCart();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const subtotal = cartSubtotal(lines);
	const shipping = subtotal > 0 ? subtotal > 15e3 ? 0 : 1500 : 0;
	const total = subtotal + shipping;
	const handlePlace = async (e) => {
		e.preventDefault();
		if (lines.length === 0) return;
		setBusy(true);
		await new Promise((r) => setTimeout(r, 900));
		toast.success("Order received. A confirmation is on its way.");
		clear();
		setBusy(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-[1.4fr,1fr] md:px-10 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-4xl leading-none md:text-5xl",
				children: "Complete your order."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handlePlace,
				className: "mt-12 space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Email",
							type: "email",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Shipping",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "First name",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Last name",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Address",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "City",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Postal code",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										label: "Country",
										required: true,
										defaultValue: "United States"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Payment",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Card entry is provided securely by Stripe on the next screen."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || lines.length === 0,
						className: "w-full bg-primary py-5 eyebrow text-primary-foreground disabled:opacity-50",
						children: busy ? "Processing…" : `Place order — ${formatPrice(total)}`
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border hairline bg-secondary p-8 md:sticky md:top-24 md:self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow mb-6 text-muted-foreground",
				children: ["Order — ", lines.length]
			}), lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl",
					children: "Your cart is empty."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-4 inline-block link-underline eyebrow",
					children: "Browse"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-5",
				children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-base",
						children: l.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"Qty ",
							l.qty,
							l.finish ? ` · ${l.finish}` : ""
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular-nums",
						children: formatPrice(l.priceCents * l.qty)
					})]
				}, l.variantId))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-2 border-t hairline pt-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Subtotal",
						value: formatPrice(subtotal)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Shipping",
						value: shipping === 0 ? "Complimentary" : formatPrice(shipping)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline justify-between border-t hairline pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Total"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl",
							children: formatPrice(total)
						})]
					})
				]
			})] })]
		})]
	}) });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "eyebrow mb-5 text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children
	})] });
}
function Input({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow mb-1 block text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...rest,
			className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { CheckoutPage as component };
