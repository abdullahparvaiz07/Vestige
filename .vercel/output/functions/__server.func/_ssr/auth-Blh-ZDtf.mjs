import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-DhIMy7t3.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteLayout } from "./site-layout-1yjzWDLm.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Blh-ZDtf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		redirect_uri: opts?.redirect_uri,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const handleGoogle = async () => {
		setBusy(true);
		try {
			const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
			if (result.error) toast.error(result.error.message ?? "Google sign-in failed.");
		} finally {
			setBusy(false);
		}
	};
	const handleForgot = async () => {
		if (!email) {
			toast.error("Enter your email above, then tap Forgot password.");
			return;
		}
		setBusy(true);
		try {
			const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
			if (error) throw error;
			toast.success("Password reset link sent. Check your inbox.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not send reset email.");
		} finally {
			setBusy(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin,
						data: { full_name: name }
					}
				});
				if (error) throw error;
				toast.success("Welcome to Vestige. Check your email to confirm.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Welcome back.");
				navigate({ to: "/account" });
			}
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Something went wrong.");
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid min-h-[80dvh] max-w-md items-center px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-muted-foreground",
					children: "Members"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-4xl leading-tight md:text-5xl",
					children: mode === "signin" ? "Welcome back." : "Create an account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: mode === "signin" ? "Sign in to review orders and saved objects." : "Access order history, saved objects, and early dispatches."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleGoogle,
					disabled: busy,
					className: "mt-10 flex w-full items-center justify-center gap-3 border hairline py-4 eyebrow transition-colors hover:bg-secondary",
					children: "Continue with Google"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-8 flex items-center gap-4 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t hairline" }),
						"or",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t hairline" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								minLength: 8,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "w-full border-b hairline bg-transparent py-3 focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: busy,
							className: "mt-4 w-full bg-primary py-4 eyebrow text-primary-foreground disabled:opacity-60",
							children: mode === "signin" ? "Sign in" : "Create account"
						}),
						mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleForgot,
							disabled: busy,
							className: "mt-3 w-full text-center eyebrow text-muted-foreground link-underline",
							children: "Forgot password?"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [mode === "signin" ? "New to Vestige? " : "Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "link-underline text-foreground",
						children: mode === "signin" ? "Create an account" : "Sign in"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-muted-foreground link-underline",
						children: "Return to Vestige"
					})
				})
			]
		})
	}) });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow mb-1 block text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { AuthPage as component };
