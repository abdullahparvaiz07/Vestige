import { r as fetchProducts } from "./catalog-Bl-5k0Rf.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BG4ViadD.js
var bestSellersQuery = queryOptions({
	queryKey: ["products", "best-sellers"],
	queryFn: () => fetchProducts({
		bestSellers: true,
		limit: 4
	})
});
//#endregion
export { bestSellersQuery as t };
