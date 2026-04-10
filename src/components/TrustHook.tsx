"use client";

import { motion } from "framer-motion";

export default function TrustHook() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-aevo-green font-mono text-sm tracking-[0.4em] uppercase">
              // Immediate Impact
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 max-w-4xl"
          >
            We transform <span className="text-aevo-green text-glow-green italic">Discord-native</span> creators into digital powerhouses.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl font-light tracking-wide max-w-2xl text-white leading-relaxed"
          >
            Elite design doesn&apos;t have to be out of reach. We bridge the gap between community-driven creativity and high-end aesthetic standards. Affordable. High-quality. Uncompromising.
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-aevo-green opacity-50 mt-12 mb-12"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40">
            {["3D NATIVE", "WEB3 READY", "DISCORD CRAFTED", "PIXEL PERFECT"].map((text, i) => (
              <motion.span
                key={text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aevo-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aevo-green/20 to-transparent" />
    </section>
  );
}
