import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Vessel() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { pointer } = useThree();

  useFrame((_, delta) => {
    target.current.x = pointer.y * 0.25;
    target.current.y = pointer.x * 0.45;
    if (!group.current) return;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      target.current.x,
      3,
      delta,
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      target.current.y,
      3,
      delta,
    );
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={group}>
        {/* body */}
        <mesh position={[0, 0.1, 0]} castShadow>
          <latheGeometry
            args={[
              [
                new THREE.Vector2(0.02, -1.1),
                new THREE.Vector2(0.55, -1.05),
                new THREE.Vector2(0.9, -0.6),
                new THREE.Vector2(1.05, 0.0),
                new THREE.Vector2(0.95, 0.55),
                new THREE.Vector2(0.65, 0.95),
                new THREE.Vector2(0.55, 1.05),
                new THREE.Vector2(0.6, 1.15),
              ],
              128,
            ]}
          />
          <meshPhysicalMaterial
            color="#1a1512"
            roughness={0.55}
            metalness={0.05}
            clearcoat={0.35}
            clearcoatRoughness={0.6}
            sheen={0.3}
            sheenColor="#6b5f52"
          />
        </mesh>
        {/* rim highlight ring */}
        <mesh position={[0, 1.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.012, 16, 96]} />
          <meshStandardMaterial color="#c9b99a" roughness={0.3} metalness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

function CursorLight() {
  const light = useRef<THREE.SpotLight>(null);
  const { pointer, viewport } = useThree();
  useFrame((_, delta) => {
    if (!light.current) return;
    light.current.position.x = THREE.MathUtils.damp(
      light.current.position.x,
      pointer.x * viewport.width * 0.6,
      4,
      delta,
    );
    light.current.position.y = THREE.MathUtils.damp(
      light.current.position.y,
      pointer.y * viewport.height * 0.4 + 3,
      4,
      delta,
    );
  });
  return (
    <spotLight
      ref={light}
      position={[0, 4, 4]}
      angle={0.55}
      penumbra={0.9}
      intensity={35}
      distance={12}
      color="#f5eeda"
    />
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.2, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#0f0d0b"]} />
      <fog attach="fog" args={["#0f0d0b", 4, 9]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[-3, 2, 2]} intensity={0.4} color="#f5eeda" />
      <CursorLight />
      <Suspense fallback={null}>
        <Vessel />
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.5}
          scale={6}
          blur={2.4}
          far={2}
          color="#000000"
        />
        <Environment preset="warehouse" environmentIntensity={0.35} />
      </Suspense>
    </Canvas>
  );
}
