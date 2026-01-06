"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAButton } from "../shared/CTA-button";
import { WhatsAppButton } from "../shared/whatsapp-button";

// --- 1. DATA PORTFOLIO (MOCK JSON) ---
// Nanti bisa diganti dengan props atau fetch dari database
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Fashion",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-500", // Aksen dekoratif
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Company Profile",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "bg-orange-500",
  },
];

export function AboutIntro() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- KOLOM KIRI: VISUAL INTERAKTIF --- */}
          {/* Kita gunakan 'group' pada container ini untuk trigger animasi anak-anaknya */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative h-[450px] w-full bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600 rounded-3xl flex items-center justify-center p-8 overflow-hidden shadow-2xl"
          >
            {/* Background Texture (Opsional) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            {/* Lighting Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* --- 3 KARTU PORTFOLIO --- */}
            <div className="relative w-full max-w-md h-64 flex items-center justify-center">
              {portfolioData.map((item, index) => {
                // Logic Posisi Kartu
                // Index 0: Kiri, Index 1: Tengah (Atas), Index 2: Kanan

                // Variabel animasi
                const isFirst = index === 0;
                const isLast = index === portfolioData.length - 1;
                const isMiddle = index === 1;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-48 md:w-56 aspect-[3/4] bg-white rounded-xl shadow-2xl border-4 border-slate-800 overflow-hidden origin-bottom"
                    // --- ANIMASI MAGIC ---
                    initial="rest"
                    whileInView="rest" // Default state saat muncul
                    whileHover="hover" // State saat kartu di-hover (bisa juga pake group-hover via variants)
                    animate="rest" // Reset
                    variants={{
                      rest: {
                        // Posisi Bertumpuk (Deck)
                        x: isFirst ? -40 : isLast ? 40 : 0,
                        y: isMiddle ? -20 : 0,
                        rotate: isFirst ? -10 : isLast ? 10 : 0,
                        scale: isMiddle ? 1.1 : 0.9,
                        zIndex: isMiddle ? 20 : 10,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                      // Posisi Terbuka (Spread & Lurus) - Dipicu oleh Parent Hover (group)
                    }}
                  >
                    {/* Kita overide animasi via Parent Group Hover agar sinkron */}
                    <motion.div
                      className="w-full h-full relative"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      style={{ transformOrigin: "bottom center" }}
                      // Gunakan class Tailwind untuk transform group-hover karena lebih ringan untuk layout fix
                      // Tapi karena user minta Framer, kita set animate prop berdasarkan state parent
                    >
                      {/* Trik: Karena Framer Motion sulit mendeteksi hover parent untuk sibling varian kompleks, 
                           kita gunakan CSS Transform untuk pergerakan layout utamanya agar performant, 
                           atau logic variants sederhana.
                           
                           Disini saya gunakan logic variants khusus pada elemen ini yang mendengarkan parent "group".
                        */}
                    </motion.div>

                    {/* Image Mockup */}
                    <div className="relative w-full h-full bg-slate-100">
                      {/* Header Browser Kecil */}
                      <div className="h-6 bg-slate-100 border-b flex items-center gap-1 px-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      </div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover mt-6" // mt-6 untuk kompensasi header
                      />

                      {/* Overlay Gradient saat tumpuk */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </motion.div>
                );
              })}

              {/* REVISI ANIMASI: Menggunakan Style Inject agar lebih presisi untuk case "Spread" */}
              {/* Card 1 (Kiri) */}
              <motion.div
                className="absolute w-48 md:w-56 aspect-[3/4] bg-white rounded-xl shadow-2xl border-[3px] border-slate-700 overflow-hidden z-10 transition-all duration-500 ease-out group-hover:-translate-x-32 group-hover:rotate-0 group-hover:scale-100 group-hover:z-30"
                style={{
                  transform: "translateX(-30px) rotate(-12deg) scale(0.9)",
                }}
              >
                <Image
                  src={portfolioData[0].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Card 2 (Tengah) */}
              <motion.div
                className="absolute w-48 md:w-56 aspect-[3/4] bg-white rounded-xl shadow-2xl border-[3px] border-slate-700 overflow-hidden z-20 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-110 group-hover:z-40 group-hover:shadow-2xl"
                style={{ transform: "translateY(-10px) rotate(0deg) scale(1)" }}
              >
                <Image
                  src={portfolioData[1].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Card 3 (Kanan) */}
              <motion.div
                className="absolute w-48 md:w-56 aspect-[3/4] bg-white rounded-xl shadow-2xl border-[3px] border-slate-700 overflow-hidden z-0 transition-all duration-500 ease-out group-hover:translate-x-32 group-hover:rotate-0 group-hover:scale-100 group-hover:z-30 z-10"
                style={{
                  transform: "translateX(30px) rotate(12deg) scale(0.9)",
                }}
              >
                <Image
                  src={portfolioData[2].image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: TEKS --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Bisnis Anda Butuh <br />
              <span className="text-primary">Website Profesional</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Website yang profesional adalah investasi terpenting bagi
                perkembangan bisnis Anda. Mengapa? Karena di dunia digital yang
                sangat kompetitif, website bukan hanya menjadi tempat informasi,
                tapi juga etalase virtual yang mewakili brand Anda.
              </p>
              <p>
                Website yang profesional mampu memberi kesan pertama yang kuat,
                mengarahkan pengunjung untuk lebih memahami produk atau layanan
                Anda, dan akhirnya membuat mereka percaya pada bisnis Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton label="Konsultasi Sekarang" mode="consult" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
