"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import HollowCube from "./HollowCube";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 5, 20], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Cinematic Cinematic Lighting */}
          <ambientLight intensity={0.1} color="#ffffff" />
          <spotLight
            position={[15, 25, 15]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
            color="#00ff6a"
          />
          <pointLight position={[-15, -15, -15]} intensity={1} color="#00ff6a" />
          <directionalLight position={[0, -10, 0]} intensity={0.5} color="#222" />

          {/* Interactive Hollow Cube Rebuild */}
          <HollowCube />

          {/* Built-in Environment fallback */}
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
