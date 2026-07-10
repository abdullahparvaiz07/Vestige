import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as SiteLayout } from "./site-layout-1yjzWDLm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CQ2TaZwl.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid min-h-[70dvh] max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-2 md:px-10 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl leading-none md:text-7xl",
				children: "Write to us."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-md text-lg leading-relaxed text-muted-foreground",
				children: "For press, trade, or commissioned work, we reply within two working days from Copenhagen."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-14 space-y-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "General"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: "atelier@vestige.co"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "Press"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: "press@vestige.co"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: "Refshalevej 163A, 1432 Copenhagen, DK"
					})] })
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-6",
			onSubmit: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Message",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 5,
						className: "w-full resize-none border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "w-full bg-primary py-4 eyebrow text-primary-foreground",
					children: "Send"
				})
			]
		})]
	}) });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow mb-1 block text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { Contact as component };
