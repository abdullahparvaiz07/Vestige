import { r as fetchProducts, t as fetchCategories } from "./catalog-Bl-5k0Rf.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._slug-DwSFvJva.js
var $$splitNotFoundComponentImporter = () => import("./collections._slug-0dPhlwpi.mjs");
var $$splitComponentImporter = () => import("./collections._slug-1RSEp8mI.mjs");
var Route = createFileRoute("/collections/$slug")({
	loader: async ({ context, params }) => {
		const category = (await context.queryClient.ensureQueryData({
			queryKey: ["categories"],
			queryFn: () => fetchCategories()
		})).find((c) => c.slug === params.slug);
		if (!category) throw notFound();
		await context.queryClient.ensureQueryData({
			queryKey: ["products", { category: params.slug }],
			queryFn: () => fetchProducts({ categorySlug: params.slug })
		});
		return { category };
	},
	head: ({ loaderData }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.category.name} — Vestige` },
			{
				name: "description",
				content: loaderData.category.description ?? ""
			},
			{
				property: "og:title",
				content: `${loaderData.category.name} — Vestige`
			},
			{
				property: "og:url",
				content: `/collections/${loaderData.category.slug}`
			}
		] : [{ title: "Collection — Vestige" }],
		links: loaderData ? [{
			rel: "canonical",
			href: `/collections/${loaderData.category.slug}`
		}] : []
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
