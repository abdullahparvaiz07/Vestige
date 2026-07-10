import { o as __toESM } from "../_runtime.mjs";
import { a as Canvas, c as useThree, f as require_jsx_runtime, n as Environment, o as useFrame, p as require_react, r as Float, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { M as Vector2, v as MathUtils } from "../_libs/monogrid__gainmap-js+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hero-canvas-HetvJm7F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Vessel() {
	const group = (0, import_react.useRef)(null);
	const target = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const { pointer } = useThree();
	useFrame((_, delta) => {
		target.current.x = pointer.y * .25;
		target.current.y = pointer.x * .45;
		if (!group.current) return;
		group.current.rotation.x = MathUtils.damp(group.current.rotation.x, target.current.x, 3, delta);
		group.current.rotation.y = MathUtils.damp(group.current.rotation.y, target.current.y, 3, delta);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
		speed: 1.2,
		rotationIntensity: .15,
		floatIntensity: .6,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			ref: group,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.1,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("latheGeometry", { args: [[
					new Vector2(.02, -1.1),
					new Vector2(.55, -1.05),
					new Vector2(.9, -.6),
					new Vector2(1.05, 0),
					new Vector2(.95, .55),
					new Vector2(.65, .95),
					new Vector2(.55, 1.05),
					new Vector2(.6, 1.15)
				], 128] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#1a1512",
					roughness: .55,
					metalness: .05,
					clearcoat: .35,
					clearcoatRoughness: .6,
					sheen: .3,
					sheenColor: "#6b5f52"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.16,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.6,
					.012,
					16,
					96
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c9b99a",
					roughness: .3,
					metalness: .4
				})]
			})]
		})
	});
}
function CursorLight() {
	const light = (0, import_react.useRef)(null);
	const { pointer, viewport } = useThree();
	useFrame((_, delta) => {
		if (!light.current) return;
		light.current.position.x = MathUtils.damp(light.current.position.x, pointer.x * viewport.width * .6, 4, delta);
		light.current.position.y = MathUtils.damp(light.current.position.y, pointer.y * viewport.height * .4 + 3, 4, delta);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
		ref: light,
		position: [
			0,
			4,
			4
		],
		angle: .55,
		penumbra: .9,
		intensity: 35,
		distance: 12,
		color: "#f5eeda"
	});
}
function HeroCanvas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		shadows: true,
		dpr: [1, 1.5],
		camera: {
			position: [
				0,
				.2,
				4.2
			],
			fov: 32
		},
		gl: {
			antialias: true,
			alpha: true
		},
		style: { background: "transparent" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#0f0d0b"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					"#0f0d0b",
					4,
					9
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .15 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					-3,
					2,
					2
				],
				intensity: .4,
				color: "#f5eeda"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorLight, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vessel, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
						position: [
							0,
							-1.15,
							0
						],
						opacity: .5,
						scale: 6,
						blur: 2.4,
						far: 2,
						color: "#000000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, {
						preset: "warehouse",
						environmentIntensity: .35
					})
				]
			})
		]
	});
}
//#endregion
export { HeroCanvas as default };
