import { r as fetchProducts } from "./catalog-Bl-5k0Rf.mjs";
import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as SiteLayout, t as ProductCard } from "./site-layout-1yjzWDLm.mjs";
import { t as Route } from "./collections._slug-DwSFvJva.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-1RSEp8mI.js
var import_jsx_runtime = require_jsx_runtime();
function CollectionPage() {
	const { category } = Route.useLoaderData();
	const { slug } = Route.useParams();
	const { data: products } = useSuspenseQuery({
		queryKey: ["products", { category: slug }],
		queryFn: () => fetchProducts({ categorySlug: slug })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-serif text-5xl leading-none md:text-7xl",
				children: [category.name, "."]
			}),
			category.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground",
				children: category.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4",
				children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})
		]
	}) });
}
//#endregion
export { CollectionPage as component };
