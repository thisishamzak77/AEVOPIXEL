"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import HollowCube from "./HollowCube";
import LoadingScreen from "./LoadingScreen";

export default function Scene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <LoadingScreen />
      <Canvas
        camera={{ position: [0, 5, 20], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
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

          <group scale={isMobile ? 0.65 : 1}>
            <HollowCube />
          </group>

          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
