import { o as __toESM } from "../_runtime.mjs";
import { a as Canvas, f as require_jsx_runtime, i as Html, n as Environment, o as useFrame, p as require_react, s as useLoader } from "../_libs/@react-three/drei+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatPrice, l as productImage } from "./site-layout-1yjzWDLm.mjs";
import { A as TextureLoader, D as SRGBColorSpace, v as MathUtils } from "../_libs/monogrid__gainmap-js+three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-canvas-jqZqsp9t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Plinth({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position,
		receiveShadow: true,
		castShadow: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
			1.1,
			1.5,
			1.1
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#1c1815",
			roughness: .9,
			metalness: .03
		})]
	});
}
function ProductPiece({ url, position, hovered }) {
	const tex = useLoader(TextureLoader, url);
	tex.colorSpace = SRGBColorSpace;
	const ref = (0, import_react.useRef)(null);
	useFrame((state, delta) => {
		if (!ref.current) return;
		const baseY = position[1];
		const targetY = hovered ? baseY + .35 : baseY;
		ref.current.position.y = MathUtils.damp(ref.current.position.y, targetY, 4, delta);
		ref.current.rotation.y += delta * (hovered ? .4 : .14);
		const s = hovered ? 1.08 : 1;
		ref.current.scale.setScalar(MathUtils.damp(ref.current.scale.x, s, 5, delta));
		ref.current.position.y += Math.sin(state.clock.elapsedTime * .8 + position[0]) * .004;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref,
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.95, 1.25] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: tex,
				roughness: .7,
				metalness: .02,
				side: 2
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				0,
				-.02
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1, 1.3] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#0a0908" })]
		})]
	});
}
function Corridor({ products, containerRef }) {
	const spacing = 4;
	const stops = (0, import_react.useMemo)(() => products.map((_, i) => i * spacing), [products, spacing]);
	const [activeIdx, setActiveIdx] = (0, import_react.useState)(0);
	const [hoveredIdx, setHoveredIdx] = (0, import_react.useState)(null);
	const navigate = useNavigate();
	const progressRef = (0, import_react.useRef)(0);
	useFrame(({ camera }, delta) => {
		const el = containerRef.current;
		if (el) {
			const rect = el.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const raw = total > 0 ? -rect.top / total : 0;
			progressRef.current = Math.max(0, Math.min(1, raw));
		}
		const t = progressRef.current;
		const targetZ = 6 - t * ((products.length - 1) * spacing + 6);
		camera.position.x = MathUtils.damp(camera.position.x, Math.sin(t * Math.PI) * .35, 3, delta);
		camera.position.y = MathUtils.damp(camera.position.y, 1.4, 3, delta);
		camera.position.z = MathUtils.damp(camera.position.z, targetZ, 3, delta);
		camera.lookAt(0, 1.2, camera.position.z - 3);
		let nearest = 0;
		let best = Infinity;
		for (let i = 0; i < stops.length; i++) {
			const d = Math.abs(camera.position.z - -stops[i]);
			if (d < best) {
				best = d;
				nearest = i;
			}
		}
		if (nearest !== activeIdx) setActiveIdx(nearest);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				0,
				-6
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [24, 60] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#131110",
				roughness: .95
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				3.5,
				-stops[stops.length - 1] - 5
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [24, 12] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#0f0d0b",
				roughness: 1
			})]
		}),
		products.map((p, i) => {
			const z = -stops[i];
			const imgUrl = productImage(p.slug, p.hero_image_url);
			const hovered = hoveredIdx === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					0,
					z
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plinth, { position: [
						0,
						.75,
						0
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
						position: [
							0,
							4.6,
							.6
						],
						angle: .5,
						penumbra: .7,
						intensity: hovered ? 55 : 26,
						distance: 8,
						color: "#f5eeda",
						castShadow: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
						onPointerOver: (e) => {
							e.stopPropagation();
							setHoveredIdx(i);
							document.body.style.cursor = "pointer";
						},
						onPointerOut: () => {
							setHoveredIdx(null);
							document.body.style.cursor = "";
						},
						onClick: (e) => {
							e.stopPropagation();
							navigate({
								to: "/product/$slug",
								params: { slug: p.slug }
							});
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPiece, {
							url: imgUrl,
							position: [
								0,
								2.1,
								0
							],
							hovered
						})
					})
				]
			}, p.id);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
			position: [
				1.8,
				1.9,
				-stops[activeIdx]
			],
			prepend: true,
			zIndexRange: [10, 0],
			style: { pointerEvents: "none" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-64 -translate-y-1/2 text-[#f5eeda]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mb-2 opacity-60",
						children: [
							String(activeIdx + 1).padStart(2, "0"),
							" / ",
							String(products.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl leading-tight",
						children: products[activeIdx].name
					}),
					products[activeIdx].tagline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs italic opacity-70",
						children: products[activeIdx].tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm tabular-nums opacity-80",
						children: formatPrice(products[activeIdx].min_price_cents)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 eyebrow opacity-60",
						children: "Click plinth to view →"
					})
				]
			})
		})
	] });
}
function GalleryCanvas({ products, containerRef }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		shadows: true,
		dpr: [1, 1.5],
		camera: {
			position: [
				0,
				1.4,
				6
			],
			fov: 40
		},
		gl: { antialias: true },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#0a0908"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
				attach: "fog",
				args: [
					"#0a0908",
					4,
					20
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .09 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: null,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corridor, {
					products,
					containerRef
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Environment, {
					preset: "apartment",
					environmentIntensity: .15
				})]
			})
		]
	});
}
//#endregion
export { GalleryCanvas as default };
