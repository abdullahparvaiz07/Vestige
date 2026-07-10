import { r as fetchProducts, t as fetchCategories } from "./catalog-Bl-5k0Rf.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BYgSB02O.js
var $$splitComponentImporter = () => import("./shop-DBKKyp8r.mjs");
var searchSchema = objectType({
	sort: enumType([
		"featured",
		"price-asc",
		"price-desc",
		"newest"
	]).optional(),
	q: stringType().optional()
});
var Route = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "Shop all — Vestige" },
			{
				name: "description",
				content: "Every object in the Vestige collection. Ceramics, furniture, textiles."
			},
			{
				property: "og:title",
				content: "Shop all — Vestige"
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	}),
	validateSearch: (s) => searchSchema.parse(s),
	loaderDeps: ({ search }) => ({
		sort: search.sort,
		q: search.q
	}),
	loader: ({ context, deps }) => Promise.all([context.queryClient.ensureQueryData({
		queryKey: ["products", deps],
		queryFn: () => fetchProducts({
			sort: deps.sort,
			search: deps.q
		})
	}), context.queryClient.ensureQueryData({
		queryKey: ["categories"],
		queryFn: () => fetchCategories()
	})]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
