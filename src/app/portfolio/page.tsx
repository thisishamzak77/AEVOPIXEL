"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
  {
    title: "Web Development",
    slug: "web-development",
    items: [
      { 
        title: "Corah AI", 
        desc: "Next.js, Node.js, TypeScript, Tailwind CSS, Framer Motion", 
        link: "https://corahai.vercel.app/", 
        image: "/assets/web/corah.png" 
      },
      // ... same as before
      { title: "Opera Copper", desc: "Next.js, HTML, CSS", link: "https://operacopperrecycling.vercel.app/", image: "/assets/web/copper.png" },
      { title: "3D Shirt Visualizer", desc: "Three.js, Valtio, React.js, TailwindCSS", link: "https://3d-shirt-viewer-2.vercel.app/", image: "/assets/web/shirt.png" },
      { title: "Clario Systems", desc: "React.js, Next.js, Typescript", link: "https://clariosystemsdev.vercel.app/", image: "/assets/web/clario.png" },
    ]
  },
  {
    title: "Twitch Branding",
    slug: "twitch-branding",
    items: [
      { title: "Aevo Stream Identity", desc: "Custom Twitch Overlays", image: "/assets/portfolio/twitch/Twitch_overlays (5).PNG" },
      { title: "Creator Logo v4", desc: "Luxury Gaming Branding", image: "/assets/portfolio/twitch/Twitch_logo(4).jpeg" },
      { title: "Creator Logo v5", desc: "Minimalist Stream Mark", image: "/assets/portfolio/twitch/Twitch_logo(5).jpeg" },
      { title: "Twitch Alertbox", desc: "Custom Dynamic HUD", image: "/assets/portfolio/twitch/twitch_alertbox.PNG" },
      { title: "Custom Emote Pack", desc: "Pixel/Vector Stickers", image: "/assets/portfolio/twitch/twitch_emotes(3).PNG" },
      { title: "Voxel Overlay", desc: "3D Perspective HUD", image: "/assets/portfolio/twitch/Twitch_overlays (4).PNG" },
    ]
  },
  {
    title: "Artwork",
    slug: "artwork",
    items: [
      { title: "Chibi Unit 01", desc: "High-Fidelity Chibi Art", image: "/assets/portfolio/artwork/chibi_Art.jpeg" },
      { title: "Concept 01", desc: "Artwork Character Design", image: "/assets/portfolio/artwork/artwork_charachter_design (1).webp" },
      { title: "Chibi Unit 02", desc: "Custom Avatar Illustration", image: "/assets/portfolio/artwork/chibi_art2.jpeg" },
      { title: "Concept 02", desc: "Stylized Protagonist Sheet", image: "/assets/portfolio/artwork/artwork_charachter_design (2).jpeg" },
      { title: "Cyber Chibi", desc: "Experimental Mascot Art", image: "/assets/portfolio/artwork/chibi_art(3).JPG" },
      { title: "Vanguard Design", desc: "Weapon & Gear Concepts", image: "/assets/portfolio/artwork/artwork_charachter_design (3).jpeg" },
    ]
  },
  {
    title: "Comics",
    slug: "comics",
    items: [
      { title: "Manga Layout 01", desc: "Sequential Narrative Panel", image: "/assets/portfolio/comics/manga_panel.jpeg" },
      { title: "Comic Sequence A", desc: "Action Narrative Art", image: "/assets/portfolio/comics/comics(1).jpeg" },
      { title: "Hero's Journey", desc: "Dynamic Panel Composition", image: "/assets/portfolio/comics/manga_panel2.jpeg" },
      { title: "Shadow Verse", desc: "Noir Inking Style", image: "/assets/portfolio/comics/comics(2).jpeg" },
      { title: "Night Walk", desc: "Atmospheric Manga Art", image: "/assets/portfolio/comics/manga_panel3.jpeg" },
      { title: "Final Duel", desc: "Climactic Comic Sequence", image: "/assets/portfolio/comics/comics(3).png" },
    ]
  },
  {
    title: "Animation",
    slug: "animation",
    items: [
      { title: "Kinetic Pulse 01", desc: "2D Fluid Animation", image: "/assets/portfolio/animation/animation_preview.png", video: "/assets/portfolio/animation/2danimation.mp4" },
      { title: "Abstract Motion", desc: "Visual Rhythm & Flow", image: "/assets/portfolio/animation/animation_preview(2).png", video: "/assets/portfolio/animation/animation2d(1).mp4" },
      { title: "Cyber Sequence", desc: "Frame-by-Frame Motion", image: "/assets/portfolio/animation/animation_preview(3).png", video: "/assets/portfolio/animation/animation2d (2).mp4" },
    ]
  },
  {
    title: "Digital Publishing",
    slug: "digital-publishing",
    items: [
      { title: "The Girl Between Us", desc: "Wattpad Series / Exclusive", link: "https://www.wattpad.com/story/355047214-the-girl-between-us", image: "/assets/portfolio/publishing/ebook(1)_thegirlbetweenus.jpeg" },
      { title: "Aevo Editorial", desc: "Minimalist Book Design", image: "/assets/portfolio/publishing/ebook(2).png" },
      { title: "Future Narrative", desc: "Digital Interactive Covers", image: "/assets/portfolio/publishing/ebook(3).jpeg" },
    ]
  }
];

function PortfolioContent() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (cat) {
      const element = document.getElementById(cat);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [cat]);

  return (
    <>
      <div className="space-y-40">
        {categories.map((catItem, idx) => (
          <section key={catItem.title} id={catItem.slug}>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-aevo-green" />
              <h2 className="text-aevo-green font-mono text-sm tracking-[0.6em] uppercase">
                {catItem.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {catItem.items.map((item, i) => {
                const needsContain = ["artwork", "comics", "animation", "digital-publishing", "twitch-branding"].includes(catItem.slug);
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/5 hover:border-aevo-green/20 transition-colors rounded-xl overflow-hidden"
                  >
                    <ProjectCard 
                      item={item} 
                      layout={catItem.slug === "digital-publishing" ? "portrait" : "landscape"} 
                      objectFit={needsContain ? "contain" : "cover"}
                      allowZoom={!(item as any).link && catItem.slug !== "animation"}
                      onZoom={() => setSelectedImage(item.image)}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full"
            >
              <Image 
                src={selectedImage}
                alt="Zoomed view"
                fill
                className="object-contain"
              />
              <div className="absolute top-0 right-0 p-8">
                 <button className="text-aevo-green font-mono text-xs tracking-widest uppercase bg-white/5 px-4 py-2 border border-white/10">
                    [ Close ]
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-24">
      <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')]" />
      
      <div className="section-container">
        <div className="mb-20">
          <Link href="/" className="text-aevo-green font-mono text-xs tracking-widest uppercase hover:opacity-100 transition-opacity flex items-center gap-2 mb-8 group">
            <span className="group-hover:-translate-x-2 transition-transform">←</span> Return to Base
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter"
          >
            Aevopix <span className="text-stroke-green text-transparent italic">Archives.</span>
          </motion.h1>
          <p className="text-white/40 font-mono text-sm tracking-[0.2em] mt-6 max-w-2xl">
            A comprehensive overview of our creative deployments across Web, 3D, and Digital Narrative environments.
          </p>
        </div>

        <Suspense fallback={<div className="text-aevo-green font-mono">Loading Neural Data...</div>}>
          <PortfolioContent />
        </Suspense>
      </div>

      <footer className="mt-40 border-t border-white/5 py-20 text-center">
        <Link href="/" className="text-4xl font-extrabold hover:text-aevo-green transition-colors text-glow-green">
           AEVOPIX
        </Link>
      </footer>
    </main>
  );
}

function ProjectCard({ item, layout = "landscape", objectFit = "cover", allowZoom = false, onZoom }: { item: any; layout?: "landscape" | "portrait"; objectFit?: "cover" | "contain"; allowZoom?: boolean; onZoom?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const content = (
    <div 
      className="flex flex-col gap-4 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${layout === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'} rounded-xl bg-white/[0.02] overflow-hidden border border-white/5 group-hover:border-aevo-green/40 transition-all duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
        
        {item.video ? (
          <>
            <video
              ref={videoRef}
              src={item.video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={`object-contain p-4 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
          </>
        ) : (
          <div className="absolute inset-0 cursor-zoom-in" onClick={(e) => { if(allowZoom) { e.preventDefault(); e.stopPropagation(); onZoom?.(); } }}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={`${objectFit === 'contain' ? 'object-contain p-4' : 'object-cover group-hover:scale-110'} transition-all duration-700`}
            />
            {allowZoom && (
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-aevo-green/20 backdrop-blur-md flex items-center justify-center border border-aevo-green/30">
                     <span className="text-aevo-green text-sm">＋</span>
                  </div>
               </div>
            )}
          </div>
        )}

        {item.link && (
          <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-aevo-green/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-aevo-green text-xs">↗</span>
          </div>
        )}
      </div>
      
      <div className="px-1 p-4 bg-[#0a0a0a]/50">
        <h3 className="text-xl font-bold tracking-tight group-hover:text-aevo-green transition-colors">
          {item.title}
        </h3>
        <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase mt-1">
          {item.desc}
        </p>
        
        {item.link && (
          <span className="inline-block text-aevo-green font-mono text-[10px] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity mt-4">
            View Project ↗
          </span>
        )}
      </div>
    </div>
  );

  if (item.link) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <div className="block">
      {content}
    </div>
  );
}
