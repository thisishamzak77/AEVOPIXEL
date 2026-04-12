"use client";

import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { progress, active } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!active || progress >= 95) {
      setShow(false);
    }
  }, [progress, active]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center font-mono overflow-hidden"
        >
          {/* Scanning background effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
          
          <div className="relative flex flex-col items-center gap-12 max-w-sm w-full px-8">
             {/* Logo / Title */}
             <div className="flex flex-col items-center gap-2">
                <motion.div 
                  animate={{ opacity: [1, 0.5, 1] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-[1px] bg-aevo-green mb-4" 
                />
                <h1 className="text-4xl font-extrabold tracking-tighter text-white">
                   AEVO<span className="text-aevo-green">PIX</span>
                </h1>
                <span className="text-[10px] text-aevo-green/50 tracking-[0.5em] uppercase">
                   Sys Initializing
                </span>
             </div>

             {/* Progress Bar Container */}
             <div className="w-full space-y-4">
                <div className="flex justify-between items-end">
                   <span className="text-[9px] text-white/40 tracking-widest uppercase">
                      Neural Interface Loading
                   </span>
                   <span className="text-aevo-green text-sm font-bold">
                      {Math.round(progress)}%
                   </span>
                </div>
                
                <div className="h-1 w-full bg-white/5 relative rounded-full overflow-hidden">
                   <motion.div 
                      className="absolute inset-y-0 left-0 bg-aevo-green shadow-[0_0_15px_rgba(0,255,106,0.6)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 30, damping: 10 }}
                   />
                </div>
             </div>

             {/* Bottom Status Info */}
             <div className="flex flex-col gap-2 w-full pt-8 border-t border-white/5">
                {[
                   "AUTHENTICATING_GEOMETRY",
                   "OPTIMIZING_MESH_ARRAYS",
                   "STABILIZING_DYNAMICS"
                ].map((status, i) => (
                   <div key={status} className="flex items-center gap-3 text-[8px] tracking-[0.2em] font-mono">
                      <motion.div 
                        animate={{ 
                           backgroundColor: progress > (30 * (i+1)) ? "#00ff6a" : "rgba(255,255,255,0.1)",
                           boxShadow: progress > (30 * (i+1)) ? "0 0 8px #00ff6a" : "none"
                        }}
                        className="w-1.5 h-1.5 rounded-full" 
                      />
                      <span className={progress > (30 * (i+1)) ? "text-white" : "text-white/20"}>
                         {status}
                      </span>
                   </div>
                ))}
             </div>
          </div>

          <div className="absolute top-10 right-10 text-white/5 text-[100px] font-black pointer-events-none select-none">
             AEVO
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
