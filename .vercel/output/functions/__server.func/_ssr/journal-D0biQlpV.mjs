import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cat_furniture_default, i as cat_ceramics_default, n as SiteLayout, o as cat_textiles_default } from "./site-layout-1yjzWDLm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-D0biQlpV.js
var import_jsx_runtime = require_jsx_runtime();
var ENTRIES = [
	{
		slug: "on-slowness",
		date: "December 2025",
		title: "On slowness, and why the wheel still turns by hand.",
		excerpt: "Aiko Okuma throws twelve pieces a week. Not because she can't produce more — but because she won't.",
		image: cat_ceramics_default
	},
	{
		slug: "blackened-oak",
		date: "November 2025",
		title: "Blackened oak, and the language of grain.",
		excerpt: "A conversation with the joinery behind The Oblique Stool.",
		image: cat_furniture_default
	},
	{
		slug: "raw-flax",
		date: "October 2025",
		title: "Raw flax: a fibre that softens for a lifetime.",
		excerpt: "Why we refuse to dye a single thread.",
		image: cat_textiles_default
	}
];
function Journal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl leading-none md:text-7xl",
				children: "Field notes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 divide-y hairline border-y hairline",
				children: ENTRIES.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/journal",
					className: "group grid gap-10 py-12 md:grid-cols-[1fr,2fr] md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/5] overflow-hidden bg-muted md:aspect-[3/4]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.image,
							alt: "",
							className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-3 text-muted-foreground",
								children: e.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl leading-tight md:text-5xl",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
								children: e.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-8 link-underline eyebrow",
								children: "Read the note"
							})
						]
					})]
				}, e.slug))
			})
		]
	}) });
}
//#endregion
export { Journal as component };
