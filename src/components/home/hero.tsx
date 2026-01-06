"use client";

import Image from "next/image";
import branding from "@/data/branding.json";
import { Button } from "@/components/ui/button";
import { FileText, ChevronRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CTAButton } from "../shared/CTA-button";
import { WhatsAppButton } from "../shared/WhatsappButton";
import { SecondaryButton } from "../shared/secondary-button";

interface HeroSectionProps {
  id?: string;
  className?: string;
}
// --- DATA SERVICES ---
const services = [
  {
    title: "Website Profil Perusahaan",
    image: "/images/profile-perusahaan.png",
  },
  { title: "Toko Online / eCommerce", image: "/images/toko-online.png" },
  { title: "Blog Pribadi / Personal", image: "/images/blog.png" },
  { title: "Website Donasi Online", image: "/images/donasi.png" },
];

// --- SUB-COMPONENT: SERVICE ITEM ---
function ServiceItem({
  item,
  index,
}: {
  item: (typeof services)[0];
  index: number;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center text-center cursor-pointer",
        "p-3 md:p-4 lg:p-6",
        "rounded-2xl transition-all duration-500 ease-out",
        "border border-transparent", // Default border invisible

        // --- HOVER EFFECT PERBAIKAN ---
        // 1. Background: Merah sangat tipis (Primary/5) agar sesuai brand
        // 2. Border: Merah tipis (Primary/10)
        // 3. Shadow: Red Glow (Bayangan merah lembut)
        "hover:bg-primary/5 hover:border-primary/10 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.15)]",
        "hover:-translate-y-2" // Lift up effect
      )}
    >
      {/* Gambar */}
      <div className="relative mb-2 md:mb-3 lg:mb-5 w-16 h-12 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-36 lg:h-28 shrink-0 z-10">
        {/* Wrapper Image untuk scaling effect */}
        <div className="w-full h-full relative transition-transform duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 150px, 300px"
            className="object-contain origin-bottom"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/150x150/png?text=Icon";
            }}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-slate-700 text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight group-hover:text-primary transition-colors duration-300 px-1">
        {item.title}
      </h3>

      {/* Tombol Aksi "Lihat" - Slide Up & Fade In */}
      <div className="h-0 overflow-hidden group-hover:h-6 transition-all duration-300 ease-out mt-1">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] font-bold text-white bg-primary px-3 py-0.5 rounded-full flex items-center justify-center gap-1 w-fit mx-auto shadow-sm">
            Lihat <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export function HeroSection({ id, className }: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`relative bg-white flex flex-col justify-start overflow-hidden ${
        className || ""
      }`}
    >
      {/* 1. BACKGROUND & TEXT HERO */}
      <div className="relative bg-primary pt-28 pb-32 md:pt-36 md:pb-40 lg:pt-40 lg:pb-48 w-full">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay"></div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight drop-shadow-md">
              Jasa Pembuatan Website <br className="hidden md:block" />
              <span className="text-secondary inline-block min-w-[200px]">
                <TypeAnimation
                  sequence={[
                    "Profesional",
                    2000,
                    "Toko Online",
                    2000,
                    "Perusahaan",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </h1>

            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed px-4">
              {branding.description} Solusi website modern, cepat, dan
              terjangkau untuk bisnis Anda.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
              <WhatsAppButton mode="default" label="Bikin Website" />
              <SecondaryButton
                href="/#price"
                label="Lihat Paket Kami"
                className="w-full sm:w-auto rounded-full border-gold-gradient text-white bg-transparent border-white/30 bg-white/5 hover:bg-white/10 hover:border-white hover:text-primary hover:bg-white px-6 py-6 backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* SVG Curve */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-0">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px] lg:h-[80px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 L1200,120 L1200,0 C1000,80 200,80 0,0 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>

      {/* 2. SERVICES CARD (COMPACT & MODERN) */}
      <div className="container max-w-5xl lg:max-w-6xl mx-auto px-4 relative z-20 -mt-16 md:-mt-20 lg:-mt-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
          {/* Container dibuat lebih ramping di laptop (max-w-5xl) */}
          <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 p-2 md:p-3 lg:p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
              {services.map((service, idx) => (
                <ServiceItem key={idx} item={service} index={idx} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
