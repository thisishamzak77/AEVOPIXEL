"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "The Brief",
    description: "Aligning on your vision, technical requirements, and core message. We set the foundation for a futuristic result.",
    id: "01"
  },
  {
    title: "Conceptualization",
    description: "Drafting the first 3D logic, wireframes, and aesthetic moodboards. Bridging your brand with our creative matrix.",
    id: "02"
  },
  {
    title: "Production & Refine",
    description: "The execution phase where designs are polished, code is optimized, and animations are synchronized for high-end impact.",
    id: "03"
  },
  {
    title: "The Launch",
    description: "Deploying your digital asset to the world. We ensure everything is flawless across all viewports and community hubs.",
    id: "04"
  }
];

export default function Process() {
  return (
    <section className="py-24 md:py-48 relative border-t border-white/5">
      <div className="section-container">
        <div className="max-w-2xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-aevo-green" />
            <span className="text-aevo-green font-mono text-sm tracking-[0.4em] uppercase">
              // The Protocol
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
             Engineering <span className="text-stroke-green text-transparent">Excellence.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Progress connector line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-aevo-green/0 via-aevo-green/20 to-aevo-green/0 hidden lg:block -translate-y-12" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group p-8 rounded-xl border border-white/5 hover:border-aevo-green transition-all glass-morphism duration-500"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-aevo-green rounded-full flex items-center justify-center font-mono text-aevo-green text-glow-green z-20">
                {step.id}
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-extrabold mb-4 group-hover:text-aevo-green transition-colors text-center">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm text-center">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line for mobile/vertical */}
              {i < steps.length - 1 && (
                <div className="absolute bottom-[-3rem] left-1/2 w-[1px] h-[3rem] bg-aevo-green opacity-20 lg:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
