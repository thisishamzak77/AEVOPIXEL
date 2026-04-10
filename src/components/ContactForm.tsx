"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="py-24 md:py-48 relative border-t border-white/5 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-aevo-green font-mono text-xs tracking-[0.6em] uppercase mb-4 block"
            >
              // Next Phase
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-none"
            >
               Ready to <span className="text-aevo-green text-glow-green italic">Evolve?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed max-w-md mb-12"
            >
              Whether it&apos;s a 3D logo or a complete web ecosystem, we build it with the attention to detail your project deserves. Let&apos;s create something remarkable together.
            </motion.p>
            
            <div className="space-y-6 opacity-40">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-aevo-green" />
                <span className="font-mono text-xs tracking-widest uppercase">Discord: @AevoPix_Studio</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-aevo-green" />
                <span className="font-mono text-xs tracking-widest uppercase">Email: connect@aevopix.com</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-10 glass-morphism rounded-3xl relative border border-aevo-green/10"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase font-mono tracking-widest text-aevo-green opacity-70">
                    Operator Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/5 focus:border-aevo-green/50 outline-none p-4 rounded text-white transition-all font-mono"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-[10px] uppercase font-mono tracking-widest text-aevo-green opacity-70">
                    Project Type
                  </label>
                  <input
                    id="project"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/5 focus:border-aevo-green/50 outline-none p-4 rounded text-white transition-all font-mono"
                    placeholder="e.g. 3D Logo / Web App"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="text-[10px] uppercase font-mono tracking-widest text-aevo-green opacity-70">
                  Investment Bracket (Optional)
                </label>
                <input
                  id="budget"
                  type="text"
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 focus:border-aevo-green/50 outline-none p-4 rounded text-white transition-all font-mono"
                  placeholder="e.g. $500 - $2000"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase font-mono tracking-widest text-aevo-green opacity-70">
                  Mission Specifics
                </label>
                <textarea
                  id="message"
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/5 focus:border-aevo-green/50 outline-none p-4 rounded text-white h-40 transition-all font-mono resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button className="w-full py-5 bg-aevo-green text-black font-bold tracking-[0.2em] uppercase rounded hover:bg-white hover:text-black transition-all group relative overflow-hidden">
                <span className="relative z-10">Initiate Communication</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500"
                />
              </button>
            </form>
            
            {/* Background scanlines */}
            <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h20v1H0z%22 fill=%22%2300ff6a%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] bg-[length:100%_4px]" />
          </motion.div>
        </div>
      </div>
      
      {/* Visual background element */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] border border-aevo-green/5 rounded-full select-none pointer-events-none scale-150 rotate-45" />
    </section>
  );
}
