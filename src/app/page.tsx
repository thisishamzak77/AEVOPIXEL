"use client";

import { AppProvider } from "@/components/AppContext";
import Hero from "@/components/Hero";
import TrustHook from "@/components/TrustHook";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen w-screen bg-[#050505]" />;
  }

  return (
    <AppProvider>
      <main className="relative min-h-screen bg-[#050505] selection:bg-aevo-green selection:text-black">
        {/* Concrete procedural texture (Fixed) */}
        <div className="concrete-bg" />
        
        {/* Hero Section */}
        <Hero />

        {/* Following sections will be added here */}
        <div className="relative z-10">
          <TrustHook />
          <div id="services">
            <ServicesSection />
          </div>
          <Testimonials />
          <div id="contact">
            <ContactForm />
          </div>
          <Footer />
        </div>

        <FloatingCTA />
      </main>
    </AppProvider>
  );
}
