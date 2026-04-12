"use client";

import dynamic from "next/dynamic";
import UIOverlay from "./UIOverlay";

// Dynamically scale 3D scene so it works flawlessly with Next.js SSR
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#050505]" />
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* WebGPU/WebGL Canvas layer */}
      <Scene />
      
      {/* The Overlay HUD */}
      <UIOverlay />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-[0.4em] text-aevo-green font-mono">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-aevo-green to-transparent" />
      </div>
    </section>
  );
}
