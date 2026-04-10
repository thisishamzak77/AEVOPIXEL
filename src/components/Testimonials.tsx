"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alex Rivera",
    role: "Indie Game Developer",
    text: "Aevopix transformed my Discord community's identity. The 3D logo they crafted is levels above anything else I've seen at this price point.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Fintech Startup Founder",
    text: "The WebGL integration on our landing page has boosted engagement by 40%. They truly understand the futuristic aesthetic.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "E-Sports Org Owner",
    text: "Reliable, professional, and incredibly creative. They delivered a full branding kit that feels premium and unique.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-aevo-green font-mono text-xs tracking-[0.6em] uppercase mb-4 block"
          >
            // Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
             The <span className="text-stroke-green text-transparent">Echoes.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, ease: "easeOut" }}
              className="relative p-10 glass-morphism rounded-2xl group border border-white/5 hover:border-aevo-green/30 transition-all duration-700"
            >
              {/* Quote marks icon */}
              <div className="text-6xl font-serif text-aevo-green opacity-10 absolute top-4 left-4">“</div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-aevo-green text-xs">★</span>
                  ))}
                </div>
                
                <p className="text-white/80 italic mb-8 leading-relaxed">
                   &quot;{review.text}&quot;
                </p>
                
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white group-hover:text-aevo-green transition-colors">{review.name}</span>
                  <span className="text-xs font-mono text-white/40 tracking-wider uppercase mt-1">
                    {review.role}
                  </span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-aevo-green/0 via-transparent to-aevo-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
