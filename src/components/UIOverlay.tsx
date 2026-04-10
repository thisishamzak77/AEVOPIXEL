"use client";

import { useAppContext, ServiceType } from "./AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function UIOverlay() {
  const { hoverNode, activeFace } = useAppContext();

  const nodeData: Record<ServiceType, { title: string; subtext: string }> = {
    none: { title: "", subtext: "" },
    "3d_design": { title: "Artwork", subtext: "Abstract Visual Components" },
    "web_dev": { title: "Web & App Development", subtext: "High-Performance Next.js Architectures" },
    "creative": { title: "Twitch Branding", subtext: "Complete Visual Identity for Creators" },
    "animation": { title: "Animation", subtext: "Fluid Kinetic Storytelling" },
    "publishing": { title: "Digital Publishing", subtext: "Minimalist Interactive Editorials" },
    "character": { title: "Comics", subtext: "Character & Narrative Development" },
  };

  const activeId = activeFace !== "none" ? activeFace : hoverNode;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-8 overflow-hidden">
      {/* Top Section */}
      <div className="flex w-full justify-between items-start">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-extrabold tracking-[0.2em] text-[#00ff6a] text-glow-green"
        >
          AEVOPIX
        </motion.h1>
      </div>

      {/* Center Interactive Node Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          {activeId !== "none" && (
            <motion.div 
              key={activeId}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.1 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-[0.3em] text-[#00ff6a] text-glow-green opacity-90 drop-shadow-[0_0_30px_rgba(0,255,106,0.6)] uppercase">
                {nodeData[activeId].title}
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-[1px] bg-[#00ff6a] opacity-30 my-6 max-w-md"
              />
              <p className="text-lg md:text-2xl tracking-[0.2em] text-[#ffffff] font-mono opacity-60 uppercase">
                {nodeData[activeId].subtext}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Section - Cleaned up to only show brand tagline or kept empty */}
      <div className="flex w-full justify-between items-end opacity-20 font-mono text-[10px] text-[#00ff6a] tracking-[0.4em] uppercase">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}>
          AEVOPIX STUDIO // CREATIVE UNIT
        </motion.p>
        <p>REV 4.5</p>
      </div>

      {/* Visual background noise/frame */}
      <div className="absolute inset-4 border border-[#00ff6a] opacity-5 pointer-events-none" />
    </div>
  );
}
