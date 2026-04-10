"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    title: "Artwork",
    description: "High-fidelity abstract visual components and geometric assets for modern brands.",
    icon: "◇",
    features: ["Custom Textures", "Lighting & Scene", "4K Renders"],
    previewImage: "/assets/portfolio/artwork/chibi_Art.jpeg"
  },
  {
    title: "Web & App Development",
    description: "High-performance architectures built with Next.js, Framer Motion, and WebGL integration.",
    icon: "⚡",
    features: ["React/Next.js", "Three.js Ready", "Responsive UX"],
    previewImage: "/assets/web/corah.png"
  },
  {
    title: "Twitch Branding",
    description: "Complete visual storytelling that aligns your stream with a luxury futuristic aesthetic.",
    icon: "◈",
    features: ["Visual Strategy", "Overlays & Alerts", "Type Systems"],
    previewImage: "/assets/portfolio/twitch/Twitch_logo(3).jpeg"
  },
  {
    title: "Comics",
    description: "Conceptualization and creation of custom characters and narrative sequences.",
    icon: "👤",
    features: ["Character Sheets", "Storyboarding", "Stylized Art"],
    previewImage: "/assets/portfolio/comics/comics(1).jpeg"
  },
  {
    title: "Digital Publishing",
    description: "Interactive editorials and digital content that redefine how users consume information.",
    icon: "▤",
    features: ["E-Books", "Landing Pages", "Social Content"],
    previewImage: "/assets/portfolio/publishing/ekbookcover.png"
  },
  {
    title: "Animation",
    description: "Fluid physics-based animations that bring static designs to life with cinematic motion.",
    icon: "≋",
    features: ["Particle Systems", "Physics Simulation", "Looping Vis"],
    previewImage: "/assets/portfolio/animation/animation_preview.png"
  }
];

function ServiceCard({ service, index }: { service: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-10 border border-white/5 hover:border-aevo-green/30 transition-all duration-500 overflow-hidden bg-[#0a0a0a]"
    >
      {/* 3D Content Container */}
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {/* Background preview image with deeper greenish overlay */}
        <div className="absolute inset-0 z-[-1] opacity-[0.15] grayscale group-hover:grayscale-0 group-hover:opacity-[0.25] transition-all duration-700 -m-10">
          <Image
            src={service.previewImage}
            alt={service.title}
            fill
            className="object-cover scale-125 group-hover:scale-110 transition-transform duration-1000"
          />
          {/* Intense Greenish Overlay */}
          <div className="absolute inset-0 bg-aevo-green/40 mix-blend-color group-hover:bg-aevo-green/20 transition-colors" />
        </div>

        <div className="absolute top-0 right-0 -mt-2 -mr-2 opacity-10 group-hover:opacity-100 group-hover:text-aevo-green transition-all font-mono text-4xl">
          {service.icon}
        </div>

        <span className="font-mono text-[10px] text-aevo-green mb-6 block opacity-50 group-hover:opacity-100 tracking-[0.2em]">
          [ 0{index + 1} ]
        </span>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-aevo-green transition-colors">
          {service.title}
        </h3>
        <p className="text-white/60 mb-8 leading-relaxed group-hover:text-white/80 transition-colors h-24 overflow-hidden">
          {service.description}
        </p>

        <ul className="space-y-2 opacity-0 group-hover:opacity-60 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
          {service.features.map((feat: string) => (
            <li key={feat} className="text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 text-white">
               <span className="w-1.5 h-1.5 bg-aevo-green rounded-full shadow-[0_0_8px_rgba(0,255,106,0.6)]" /> {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Glossy Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Background accent */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-aevo-green/5 rounded-full blur-[80px] group-hover:bg-aevo-green/10 transition-all z-0" />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-48 relative overflow-hidden bg-[#050505]">
      <div className="section-container">
        {/* Header content ... same as before */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-aevo-green" />
              <span className="text-aevo-green font-mono text-sm tracking-[0.4em] uppercase">
                // Capabilities
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              Our <span className="text-stroke-green text-transparent">Creative Matrix.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/portfolio"
              className="px-8 py-3 bg-white/5 hover:bg-aevo-green/10 border border-white/10 hover:border-aevo-green/40 transition-all font-mono text-xs tracking-widest uppercase rounded inline-block"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1000px]">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
