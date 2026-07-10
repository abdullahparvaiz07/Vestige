import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout } from "./site-layout-1yjzWDLm.mjs";
import { t as story_craft_default } from "./story-craft-CCOpce7f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D8C7IOXH.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "The Atelier"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl",
				children: "A room, a wheel, a single glaze. This is our whole apparatus."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-24 grid max-w-[1440px] gap-16 px-6 md:grid-cols-2 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/5] overflow-hidden bg-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: story_craft_default,
					alt: "Inside the atelier",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center space-y-6 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vestige began in 2019 with a single conviction — that the most beautiful objects are the ones that ask nothing of you." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We work with three ateliers: a ceramicist in Kyoto, a joinery in Copenhagen, and a linen weaver in Belgium. Every piece we sell is commissioned directly. There are no distributors, no white-labels, no third parties." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our objects arrive slowly, imperfectly, and only when they are finished. We think that's the whole point." })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-32 max-w-3xl px-6 text-center md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6 text-muted-foreground",
					children: "Repair, always"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl italic leading-relaxed md:text-4xl",
					children: "\"If it breaks, send it back. We'll repair it, refire it, or rebind it — at no cost, for the life of the object.\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-12 inline-block link-underline eyebrow",
					children: "Enter the collection"
				})
			]
		})
	] });
}
//#endregion
export { About as component };
