import { r as fetchProducts, t as fetchCategories } from "./catalog-Bl-5k0Rf.mjs";
import { f as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { n as SiteLayout, t as ProductCard } from "./site-layout-1yjzWDLm.mjs";
import { t as Route } from "./shop-BYgSB02O.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DBKKyp8r.js
var import_jsx_runtime = require_jsx_runtime();
function Shop() {
	const { sort, q } = Route.useSearch();
	const navigate = Route.useNavigate();
	const { data: products } = useSuspenseQuery({
		queryKey: ["products", {
			sort,
			q
		}],
		queryFn: () => fetchProducts({
			sort,
			search: q
		})
	});
	const { data: categories } = useSuspenseQuery({
		queryKey: ["categories"],
		queryFn: () => fetchCategories()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "The collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl leading-none md:text-7xl",
				children: "All objects."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-6 border-b hairline pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-wrap items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "eyebrow border-b hairline pb-1",
						children: "All"
					}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections/$slug",
						params: { slug: c.slug },
						className: "eyebrow text-muted-foreground hover:text-foreground",
						children: c.name
					}, c.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: sort ?? "featured",
					onChange: (e) => navigate({ search: (prev) => ({
						...prev,
						sort: e.target.value
					}) }),
					className: "border hairline bg-transparent px-4 py-2 text-xs uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "featured",
							children: "Sort — Featured"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "newest",
							children: "Sort — Newest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-asc",
							children: "Sort — Price low to high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price-desc",
							children: "Sort — Price high to low"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-6 py-14 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:grid-cols-4",
				children: [products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id)), products.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "col-span-full py-24 text-center text-muted-foreground",
					children: "No objects found."
				})]
			})
		]
	}) });
}
//#endregion
export { Shop as component };
