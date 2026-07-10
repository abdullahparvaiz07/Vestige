import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DhIMy7t3.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout, p as useSession } from "./site-layout-1yjzWDLm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-Dx7pOEjY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPage() {
	const { user, loading } = useSession();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!loading && !user) navigate({
			to: "/auth",
			replace: true
		});
	}, [
		user,
		loading,
		navigate
	]);
	const handleSignOut = async () => {
		await supabase.auth.signOut();
		toast.success("Signed out.");
		navigate({
			to: "/",
			replace: true
		});
	};
	if (loading || !user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-6 py-32 text-center text-muted-foreground",
		children: "Loading…"
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-6 py-20 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Members"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-serif text-5xl leading-none",
				children: "Your atelier."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted-foreground",
				children: [
					"Signed in as ",
					user.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Orders",
						body: "Review shipment status and repair history.",
						to: "/shop",
						cta: "Coming soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Saved objects",
						body: "Pieces you've kept close.",
						to: "/shop",
						cta: "Browse the collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						title: "Details",
						body: "Manage addresses and dispatches.",
						to: "/account",
						cta: "Manage"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleSignOut,
				className: "mt-16 link-underline eyebrow text-muted-foreground",
				children: "Sign out"
			})
		]
	}) });
}
function Card({ title, body, to, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border hairline p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-3 text-muted-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-2xl leading-tight",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to,
				className: "mt-6 inline-block link-underline eyebrow",
				children: cta
			})
		]
	});
}
//#endregion
export { AccountPage as component };
