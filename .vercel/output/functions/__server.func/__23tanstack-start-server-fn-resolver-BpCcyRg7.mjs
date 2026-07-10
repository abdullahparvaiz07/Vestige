//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BpCcyRg7.js
var manifest = {
	"4fec70c92c2624b017310f557d52373f6e45b4f5283a3272a864213d4d65e68d": {
		functionName: "getAdminStats_createServerFn_handler",
		importer: () => import("./_ssr/admin.functions-DX8tbTUp.mjs")
	},
	"c579e6cf81462f6a2bea1160758f9416a190d3246ad7147937aa785904bea01e": {
		functionName: "grantSelfAdmin_createServerFn_handler",
		importer: () => import("./_ssr/admin.functions-DX8tbTUp.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
