import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DhIMy7t3.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout } from "./site-layout-1yjzWDLm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-BpCBAbAL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPasswordPage() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
		});
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) setReady(true);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password.length < 8) return toast.error("Password must be at least 8 characters.");
		if (password !== confirm) return toast.error("Passwords don't match.");
		setBusy(true);
		try {
			const { error } = await supabase.auth.updateUser({ password });
			if (error) throw error;
			toast.success("Password updated. You're signed in.");
			navigate({
				to: "/account",
				replace: true
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not update password.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid min-h-[70dvh] max-w-md items-center px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-muted-foreground",
					children: "Members"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl leading-tight md:text-5xl",
					children: "Set a new password."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: ready ? "Choose a new password for your Vestige account." : "Verifying your reset link…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-10 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow mb-1 block text-muted-foreground",
								children: "New password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								minLength: 8,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow mb-1 block text-muted-foreground",
								children: "Confirm password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								minLength: 8,
								value: confirm,
								onChange: (e) => setConfirm(e.target.value),
								className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy || !ready,
							className: "mt-4 w-full bg-primary py-4 eyebrow text-primary-foreground disabled:opacity-60",
							children: "Update password"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/auth",
						className: "text-muted-foreground link-underline",
						children: "Back to sign in"
					})
				})
			]
		})
	}) });
}
//#endregion
export { ResetPasswordPage as component };
