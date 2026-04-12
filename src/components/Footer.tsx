"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-24 pb-12 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-glow-green mb-6 block">
              AEVOPIX
            </Link>
            <p className="text-white/40 font-mono text-sm leading-relaxed max-w-sm">
              Deploying high-fidelity creative solutions at the intersection of 3D, Web, and Narrative Media.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-aevo-green font-mono text-[10px] tracking-[0.4em] uppercase mb-8 opacity-60">
              // Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-white/60 hover:text-aevo-green transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-white/60 hover:text-aevo-green transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-white/60 hover:text-aevo-green transition-colors">Capabilities</Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/60 hover:text-aevo-green transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-aevo-green font-mono text-[10px] tracking-[0.4em] uppercase mb-8 opacity-60">
              // Connectivity
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/971547747726" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-aevo-green transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">
            © {currentYear} AEVOPIX AGENCY. All Rights Reserved.
          </span>
          <div className="flex gap-8">
            <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Privacy Protocol</span>
            <span className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Terms of Deployment</span>
          </div>
        </div>
      </div>

      {/* Background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-aevo-green/20 to-transparent blur-sm" />
    </footer>
  );
}
