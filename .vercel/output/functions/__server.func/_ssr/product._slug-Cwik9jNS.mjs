import { i as fetchRelated, n as fetchProductBySlug } from "./catalog-Bl-5k0Rf.mjs";
import { N as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-Cwik9jNS.js
var $$splitNotFoundComponentImporter = () => import("./product._slug-V9f59UJH.mjs");
var $$splitComponentImporter = () => import("./product._slug-BmG2fge4.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: async ({ context, params }) => {
		const product = await context.queryClient.ensureQueryData({
			queryKey: ["product", params.slug],
			queryFn: () => fetchProductBySlug(params.slug)
		});
		if (!product) throw notFound();
		await context.queryClient.ensureQueryData({
			queryKey: [
				"related",
				product.category_id,
				product.id
			],
			queryFn: () => product.category_id ? fetchRelated(product.category_id, product.id) : Promise.resolve([])
		});
		return { product };
	},
	head: ({ loaderData, params }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.product.name} — Vestige` },
			{
				name: "description",
				content: loaderData.product.tagline ?? loaderData.product.description?.slice(0, 155) ?? ""
			},
			{
				property: "og:title",
				content: `${loaderData.product.name} — Vestige`
			},
			{
				property: "og:description",
				content: loaderData.product.tagline ?? ""
			},
			{
				property: "og:type",
				content: "product"
			},
			{
				property: "og:url",
				content: `/product/${params.slug}`
			}
		] : [{ title: "Product — Vestige" }],
		links: [{
			rel: "canonical",
			href: `/product/${params.slug}`
		}],
		scripts: loaderData ? [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: loaderData.product.name,
				description: loaderData.product.description,
				brand: {
					"@type": "Brand",
					name: "Vestige"
				},
				offers: {
					"@type": "Offer",
					priceCurrency: loaderData.product.currency,
					price: (loaderData.product.base_price_cents / 100).toFixed(2),
					availability: "https://schema.org/InStock"
				}
			})
		}] : []
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
