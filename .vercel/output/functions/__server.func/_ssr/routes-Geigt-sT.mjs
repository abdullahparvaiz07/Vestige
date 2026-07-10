import { o as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@react-three/drei+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as motion, i as useScroll, n as useTransform } from "../_libs/framer-motion.mjs";
import { g as ArrowRight, h as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { a as cat_furniture_default, c as formatPrice, d as useHydrated, f as usePrefersReducedMotion, i as cat_ceramics_default, l as productImage, n as SiteLayout, o as cat_textiles_default, t as ProductCard } from "./site-layout-1yjzWDLm.mjs";
import { t as story_craft_default } from "./story-craft-CCOpce7f.mjs";
import { t as bestSellersQuery } from "./routes-BG4ViadD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Geigt-sT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_vestige_default = "/assets/hero-vestige-iYWUJ6JL.jpg";
function HeroFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
		src: hero_vestige_default,
		alt: "A quiet still-life of hand-thrown ceramics on a stone plinth",
		initial: { scale: 1.08 },
		animate: { scale: 1 },
		transition: {
			duration: 2.4,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "absolute inset-0 h-full w-full object-cover",
		fetchPriority: "high"
	});
}
var HeroCanvas = (0, import_react.lazy)(() => import("./hero-canvas-HetvJm7F.mjs"));
function CinematicHero() {
	const hydrated = useHydrated();
	const reduced = usePrefersReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[92dvh] min-h-[640px] w-full overflow-hidden bg-[#0f0d0b]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: hydrated && !reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCanvas, {})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFallback, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay",
				style: {
					backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
					backgroundSize: "240px 240px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_40%,#000_120%)] opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0f0d0b]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 text-[#f5eeda] md:px-10 md:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: 1
						},
						className: "eyebrow mb-6",
						children: "Volume 01 — Winter dispatch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .55,
							duration: 1.1,
							ease: [
								.19,
								1,
								.22,
								1
							]
						},
						className: "max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[86px]",
						children: [
							"Objects made to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-sage",
								children: "outlast"
							}),
							" the season."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1,
							duration: 1
						},
						className: "mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							className: "inline-flex items-center gap-3 border border-[#f5eeda]/40 bg-[#f5eeda] px-8 py-4 eyebrow text-[#1a1512] transition-colors hover:bg-transparent hover:text-[#f5eeda]",
							children: ["Enter the collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							className: "link-underline eyebrow text-[#f5eeda]/85",
							children: "Read the journal"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
					duration: 1
				},
				className: "pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-[#f5eeda]/60",
				children: "Scroll"
			})
		]
	});
}
var TILES = [
	{
		key: "furniture",
		eyebrow: "Collection · 02",
		title: "Furniture",
		desc: "Blackened oak, cast iron, patinated brass.",
		img: cat_furniture_default,
		to: "/collections/$slug",
		params: { slug: "furniture" },
		area: "hero",
		tone: "dark"
	},
	{
		key: "ceramics",
		eyebrow: "Collection · 01",
		title: "Ceramics",
		img: cat_ceramics_default,
		to: "/collections/$slug",
		params: { slug: "ceramics" },
		area: "top",
		tone: "dark"
	},
	{
		key: "textiles",
		eyebrow: "Collection · 03",
		title: "Textiles",
		img: cat_textiles_default,
		to: "/collections/$slug",
		params: { slug: "textiles" },
		area: "mid",
		tone: "dark"
	},
	{
		key: "otw",
		eyebrow: "Object of the week",
		title: "Obsidian Pitcher",
		desc: "Thrown by Aiko in Kyoto.",
		img: cat_ceramics_default,
		to: "/product/$slug",
		params: { slug: "obsidian-pitcher" },
		area: "small",
		tone: "dark"
	},
	{
		key: "new",
		eyebrow: "New arrivals",
		title: "Winter dispatch",
		desc: "Twenty-four new pieces, in editions of one hundred.",
		img: story_craft_default,
		to: "/shop",
		area: "wide",
		tone: "dark"
	}
];
function BentoCategories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-6 pb-28 md:px-10 md:pb-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-14 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 text-muted-foreground",
				children: "Collections"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-4xl md:text-5xl",
				children: "Three ways of quiet."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "hidden link-underline eyebrow md:inline-block",
				children: "All objects"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:gap-5",
			style: {
				gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
				gridTemplateRows: "repeat(4, minmax(140px, 1fr))",
				gridTemplateAreas: `
            "hero hero hero hero top top"
            "hero hero hero hero top top"
            "hero hero hero hero mid mid"
            "small small wide wide wide wide"
          `
			},
			children: TILES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
				tile: t,
				index: i
			}, t.key))
		})]
	});
}
function BentoTile({ tile, index }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative h-full w-full overflow-hidden bg-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: tile.img,
				alt: tile.title,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-700 group-hover:from-black/85" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-end p-6 text-[#f5eeda] md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-3 opacity-80",
					children: tile.eyebrow
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "translate-y-1 transition-transform duration-500 group-hover:translate-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl leading-tight md:text-4xl",
							children: tile.title
						}), tile.desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xs text-xs opacity-80 md:text-sm",
							children: tile.desc
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 -translate-y-1 opacity-70 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:opacity-100" })]
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 40
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .9,
			delay: index * .08,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		style: { gridArea: tile.area },
		className: "min-h-[220px]",
		children: tile.to.includes("$slug") && tile.params ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: tile.to,
			params: tile.params,
			className: "block h-full w-full",
			children: inner
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: tile.to,
			className: "block h-full w-full",
			children: inner
		})
	});
}
function ManifestoScene() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	const titleY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
	const bodyY = useTransform(scrollYProgress, [0, 1], ["40%", "-10%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative h-[120vh] w-full overflow-hidden bg-[#0f0d0b] text-[#f5eeda]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "absolute inset-0 -top-[10%] h-[130%]",
			style: { y: bgY },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: story_craft_default,
				alt: "Inside the atelier",
				className: "h-full w-full object-cover opacity-55",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0f0d0b]/60 via-[#0f0d0b]/30 to-[#0f0d0b]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex h-screen items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-6 md:flex-row md:items-end md:justify-between md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					style: { y: titleY },
					className: "font-serif text-[13vw] leading-[0.9] tracking-tight md:text-[9vw]",
					children: [
						"Made",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-sage",
							children: "slowly."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { y: bodyY },
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6 opacity-60",
							children: "Manifesto — 01"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed opacity-85 md:text-lg",
							children: "A small circle of ateliers. One maker, one material, one intention. We commission in editions of no more than one hundred, and every object ships with a lifetime repair guarantee."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-serif text-xl italic opacity-90",
							children: "\"We would rather make one bowl a week than ten a day.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 eyebrow opacity-60",
							children: "— Aiko Ono, Kyoto"
						})
					]
				})]
			})
		})]
	});
}
var PANELS = [
	{
		n: "01",
		label: "Clay",
		body: "Iron-rich stoneware fired to 1260°C. Every vessel is single-throw, unsigned but for the maker's kiln mark.",
		img: cat_ceramics_default
	},
	{
		n: "02",
		label: "Oak",
		body: "European oak, blackened with a soy-and-vinegar ebonising wash. Grain rises, colour deepens with age.",
		img: cat_furniture_default
	},
	{
		n: "03",
		label: "Flax",
		body: "Undyed Belgian flax, stone-washed until it drapes like paper. It softens with every wash for a decade.",
		img: cat_textiles_default
	}
];
function MaterialStudy() {
	const wrapRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		let ctx = null;
		let cancelled = false;
		(async () => {
			const { default: gsap } = await import("../_libs/gsap.mjs").then((n) => n.t);
			const { ScrollTrigger } = await import("../_libs/gsap.mjs").then((n) => n.n);
			if (cancelled) return;
			gsap.registerPlugin(ScrollTrigger);
			ctx = gsap.context(() => {
				const track = trackRef.current;
				const wrap = wrapRef.current;
				if (!track || !wrap) return;
				const distance = () => track.scrollWidth - window.innerWidth;
				gsap.to(track, {
					x: () => -distance(),
					ease: "none",
					scrollTrigger: {
						trigger: wrap,
						start: "top top",
						end: () => `+=${distance()}`,
						pin: true,
						scrub: .8,
						invalidateOnRefresh: true
					}
				});
			}, wrapRef);
		})();
		return () => {
			cancelled = true;
			ctx?.revert();
		};
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: wrapRef,
		className: "relative overflow-hidden bg-[#0f0d0b] text-[#f5eeda]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 pt-24 md:px-10 md:pt-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4 opacity-60",
				children: "A study in materials"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-4xl md:text-5xl",
				children: "Three surfaces, held to the light."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 h-[80vh]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: trackRef,
				className: "flex h-full gap-6 pl-6 md:gap-10 md:pl-10",
				style: { width: reduced ? "100%" : "max-content" },
				children: [PANELS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `relative flex h-full shrink-0 flex-col justify-between overflow-hidden ${reduced ? "w-full" : "w-[85vw] md:w-[70vw]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 overflow-hidden bg-[#1a1512]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.label,
								className: "h-full w-full object-cover opacity-80",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-8 top-8 font-serif text-[18vw] leading-none opacity-90 md:text-[10vw]",
								children: p.n
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 border-t border-[#f5eeda]/15 p-8 md:grid-cols-[1fr,2fr] md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl md:text-4xl",
							children: p.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed opacity-80 md:text-base",
							children: p.body
						})]
					})]
				}, p.n)), !reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[10vw] shrink-0" })]
			})
		})]
	});
}
var GalleryCanvas = (0, import_react.lazy)(() => import("./gallery-canvas-jqZqsp9t.mjs"));
function GallerySignature({ products }) {
	const picks = products.slice(0, 3);
	const hydrated = useHydrated();
	const reduced = usePrefersReducedMotion();
	const useCanvas = hydrated && !reduced && picks.length >= 3;
	const containerRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-[#0a0908] text-[#f5eeda]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 pt-24 md:px-10 md:pt-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 opacity-60",
					children: "Signature — The gallery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl md:text-5xl",
					children: "A room, three plinths, one glaze."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-sm opacity-75 md:text-base",
					children: "Scroll to walk the corridor. Each piece is lifted from its plinth as you approach."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			className: "relative mt-14 h-[220vh]",
			children: useCanvas ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryFallback, { picks }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky top-0 h-screen w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCanvas, {
						products: picks,
						containerRef
					})
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryFallback, { picks })
		})]
	});
}
function GalleryFallback({ picks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-[1440px] gap-6 px-6 pb-24 md:grid-cols-3 md:gap-10 md:px-10",
		children: picks.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: {
				duration: 1,
				delay: i * .1,
				ease: [
					.19,
					1,
					.22,
					1
				]
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: p.slug },
				className: "group block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/4] overflow-hidden bg-[#1a1512]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: productImage(p.slug, p.hero_image_url),
						alt: p.name,
						className: "h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-out group-hover:scale-105",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-70",
						children: formatPrice(p.min_price_cents)
					})]
				})]
			})
		}, p.id))
	});
}
function Home() {
	const { data: bestSellers } = useSuspenseQuery(bestSellersQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CinematicHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoCategories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManifestoScene, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialStudy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySignature, { products: bestSellers }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4 text-muted-foreground",
					children: "Kept close"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl md:text-5xl",
					children: "The objects we can't keep in the atelier."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "hidden link-underline eyebrow md:inline-block",
					children: "The whole collection"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8",
				children: bestSellers.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})]
		})
	] });
}
//#endregion
export { Home as component };
