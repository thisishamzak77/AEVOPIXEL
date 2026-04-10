"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Corah AI",
    category: "Next.js, Node.js, TypeScript, Tailwind CSS, Framer Motion",
    image: "/assets/web/corah.png",
    link: "https://corahai.vercel.app/",
    color: "#00ff6a"
  },
  {
    id: 2,
    title: "Clario Systems",
    category: "React.js, Next.js, Typescript",
    image: "/assets/web/clario.png",
    link: "https://clariosystemsdev.vercel.app/",
    color: "#ffff00"
  },
  {
    id: 3,
    title: "3D Shirt Visualizer",
    category: "Three.js, Valtio, React.js, TailwindCSS",
    image: "/assets/web/shirt.png",
    link: "https://3d-shirt-viewer-2.vercel.app/",
    color: "#ff00ff"
  },
  {
    id: 4,
    title: "Opera Copper",
    category: "Next.js, HTML, CSS",
    image: "/assets/web/copper.png",
    link: "https://operacopperrecycling.vercel.app/",
    color: "#00ccff"
  }
];

function PortfolioCard({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
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
    <div className="flex flex-col gap-4 group">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d"
          }}
          className="relative h-64 md:h-80 w-full rounded-xl bg-[#111] overflow-hidden cursor-pointer border border-white/5 transition-colors group-hover:border-aevo-green/30"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-4 flex flex-col justify-end"
          >
            <span className="text-aevo-green font-mono text-[9px] tracking-[0.2em] mb-1 opacity-60 uppercase">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="h-[1px] w-0 bg-aevo-green transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="absolute inset-0 z-[-1] opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>

          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-aevo-green/20 group-hover:border-aevo-green/60 transition-colors" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-aevo-green/20 group-hover:border-aevo-green/60 transition-colors" />
        </motion.div>
      </a>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-aevo-green font-mono text-[11px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
      >
        View Project <span className="text-xs">↗</span>
      </a>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-aevo-green font-mono text-sm tracking-[0.4em] uppercase mb-4 block">
              // Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              High-fidelity creations for <span className="text-stroke-green text-transparent">pioneer builders.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-white/5 hover:bg-aevo-green/10 border border-white/10 hover:border-aevo-green/40 transition-all font-mono text-xs tracking-widest uppercase rounded"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 perspective-1000">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
