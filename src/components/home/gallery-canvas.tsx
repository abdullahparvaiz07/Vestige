import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";
import { useNavigate } from "@tanstack/react-router";
import type { ProductListItem } from "@/lib/catalog";
import { productImage } from "@/components/site/product-card";
import { formatPrice } from "@/stores/cart";

function Plinth({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} receiveShadow castShadow>
      <boxGeometry args={[1.1, 1.5, 1.1]} />
      <meshStandardMaterial color="#1c1815" roughness={0.9} metalness={0.03} />
    </mesh>
  );
}

function ProductPiece({
  url,
  position,
  hovered,
}: {
  url: string;
  position: [number, number, number];
  hovered: boolean;
}) {
  const tex = useLoader(THREE.TextureLoader, url);
  tex.colorSpace = THREE.SRGBColorSpace;
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    const baseY = position[1];
    const targetY = hovered ? baseY + 0.35 : baseY;
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, targetY, 4, delta);
    ref.current.rotation.y += delta * (hovered ? 0.4 : 0.14);
    const s = hovered ? 1.08 : 1;
    ref.current.scale.setScalar(THREE.MathUtils.damp(ref.current.scale.x, s, 5, delta));
    ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.004;
  });
  return (
    <group ref={ref} position={position}>
      <mesh castShadow>
        <planeGeometry args={[0.95, 1.25]} />
        <meshStandardMaterial map={tex} roughness={0.7} metalness={0.02} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -0.02]}>
        <planeGeometry args={[1, 1.3]} />
        <meshBasicMaterial color="#0a0908" />
      </mesh>
    </group>
  );
}

function Corridor({
  products,
  containerRef,
}: {
  products: ProductListItem[];
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  const spacing = 4;
  const stops = useMemo(() => products.map((_, i) => i * spacing), [products, spacing]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navigate = useNavigate();
  const progressRef = useRef(0);

  useFrame(({ camera }, delta) => {
    const el = containerRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const raw = total > 0 ? -rect.top / total : 0;
      progressRef.current = Math.max(0, Math.min(1, raw));
    }
    const t = progressRef.current;
    const maxZ = (products.length - 1) * spacing;
    const targetZ = 6 - t * (maxZ + 6);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, Math.sin(t * Math.PI) * 0.35, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 1.4, 3, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 3, delta);
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

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -6]} receiveShadow>
        <planeGeometry args={[24, 60]} />
        <meshStandardMaterial color="#131110" roughness={0.95} />
      </mesh>
      <mesh position={[0, 3.5, -stops[stops.length - 1] - 5]}>
        <planeGeometry args={[24, 12]} />
        <meshStandardMaterial color="#0f0d0b" roughness={1} />
      </mesh>

      {products.map((p, i) => {
        const z = -stops[i];
        const imgUrl = productImage(p.slug, p.hero_image_url);
        const hovered = hoveredIdx === i;
        return (
          <group key={p.id} position={[0, 0, z]}>
            <Plinth position={[0, 0.75, 0]} />
            <spotLight
              position={[0, 4.6, 0.6]}
              angle={0.5}
              penumbra={0.7}
              intensity={hovered ? 55 : 26}
              distance={8}
              color="#f5eeda"
              castShadow
            />
            <group
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredIdx(i);
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                setHoveredIdx(null);
                document.body.style.cursor = "";
              }}
              onClick={(e) => {
                e.stopPropagation();
                navigate({ to: "/product/$slug", params: { slug: p.slug } });
              }}
            >
              <ProductPiece url={imgUrl} position={[0, 2.1, 0]} hovered={hovered} />
            </group>
          </group>
        );
      })}

      <Html
        position={[1.8, 1.9, -stops[activeIdx]]}
        prepend
        zIndexRange={[10, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div className="w-64 -translate-y-1/2 text-[#f5eeda]">
          <p className="eyebrow mb-2 opacity-60">
            {String(activeIdx + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
          <p className="font-serif text-2xl leading-tight">{products[activeIdx].name}</p>
          {products[activeIdx].tagline && (
            <p className="mt-1 text-xs italic opacity-70">{products[activeIdx].tagline}</p>
          )}
          <p className="mt-3 text-sm tabular-nums opacity-80">
            {formatPrice(products[activeIdx].min_price_cents)}
          </p>
          <p className="mt-4 eyebrow opacity-60">Click plinth to view →</p>
        </div>
      </Html>
    </group>
  );
}

export default function GalleryCanvas({
  products,
  containerRef,
}: {
  products: ProductListItem[];
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.4, 6], fov: 40 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0a0908"]} />
      <fog attach="fog" args={["#0a0908", 4, 20]} />
      <ambientLight intensity={0.09} />
      <Suspense fallback={null}>
        <Corridor products={products} containerRef={containerRef} />
        <Environment preset="apartment" environmentIntensity={0.15} />
      </Suspense>
    </Canvas>
  );
}
