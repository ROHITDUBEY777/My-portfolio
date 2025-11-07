import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useRef } from "react";

export default function Hero3D() {
  const meshRef = useRef();

  return (
    <div className="hidden  md:h-[100vh] absolute  cursor-pointer inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-gray-950">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        {/* 🌟 Background stars */}
        <Stars radius={80} depth={50} count={4000} factor={4} fade />

        {/* 💡 Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#ff00ff" />

        {/* ✨ Floating 3D shape */}
        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.8}>
          <mesh ref={meshRef} rotation={[0.5, 0.5, 0]}>
            <icosahedronGeometry args={[1.2, 1]} />
            <meshStandardMaterial
              color="#00ffff"
              metalness={0.6}
              roughness={0.3}
              emissive="#00ffff"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>

        {/* 🎮 Orbit Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
