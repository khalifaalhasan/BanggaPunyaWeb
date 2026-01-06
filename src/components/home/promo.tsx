"use client";

import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";

export function PromoSection() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      {/* --- INJECT STYLE CSS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        
        /* PAUSE ANIMATION ON HOVER */
        .hover-container:hover .animate-float,
        .hover-container:hover .animate-float-delayed {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- KOLOM KIRI: TEKS --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Sekedar punya website Aja <br />
              <span className="text-slate-900">Gak Cukup</span>
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify">
              <p>
                Bayangkan Anda memiliki sebuah toko fisik di lokasi yang
                terpencil, dengan etalase yang kusam, dan layout yang
                membingungkan. Apakah pengunjung akan tertarik masuk? Mungkin
                beberapa orang, tetapi kebanyakan akan beralih ke toko lain yang
                terlihat lebih menarik dan mudah diakses.
              </p>
              <p>
                Begitu juga dengan dunia online. Website yang hanya ada tanpa
                strategi yang matang dan desain yang user-friendly akan sulit
                menarik perhatian. Nuhaweb akan mengubah website biasa menjadi
                mesin konversi.
              </p>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: VISUAL INTERAKTIF --- */}
          {/* --- KOLOM KANAN: VISUAL INTERAKTIF --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl hover-container group cursor-pointer"
          >
            {/* 1. BACKGROUND GELAP */}
            <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2805&auto=format&fit=crop"
                alt="Background Texture"
                fill
                className="object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600" />
            </div>

            {/* --- ITEM 1: DESKTOP CARD --- */}
            <div className="absolute top-12 right-[-20px] md:right-8 w-3/4 h-64 bg-white rounded-xl shadow-2xl border border-slate-700/50 p-4 animate-float z-10 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:translate-y-2 group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]">
              {/* Browser Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="bg-slate-100 rounded text-[10px] px-2 py-0.5 text-slate-400 font-mono ml-2">
                  bisnisanda.com
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-3 relative">
                <div className="w-1/2 h-4 bg-slate-200 rounded animate-pulse" />
                <div className="w-full h-20 bg-slate-50 rounded border-2 border-dashed border-slate-200 flex items-center justify-center text-xs text-slate-400">
                  Hero Section Area
                </div>
                <div className="flex gap-2">
                  <div className="w-1/3 h-12 bg-slate-100 rounded" />
                  <div className="w-1/3 h-12 bg-slate-100 rounded" />
                  <div className="w-1/3 h-12 bg-slate-100 rounded" />
                </div>

                {/* --- PERBAIKAN POSISI KURSOR --- 
                      Kita pindahkan kursor ke dalam area konten (bukan di luar kartu) 
                      agar tidak tertutup oleh kartu Mobile yang ada di layer depan.
                  */}
                <div className="absolute top-10 right-20 z-50 pointer-events-none">
                  {/* Badge "Nuhawebteam" */}
                  <div className="absolute -top-8 -left-2 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                    <div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-md ring-2 ring-white whitespace-nowrap">
                      BanggapunyawebTeam
                    </div>
                  </div>

                  {/* Icon Mouse */}
                  <div className="drop-shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.4] group-hover:translate-x-2 group-hover:translate-y-2">
                    {/* Menggunakan fill-green-600 dan stroke-white agar kontras */}
                    <MousePointer2
                      className="w-6 h-6 text-white fill-primary"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* --- ITEM 2: MOBILE CARD (Layer Depan / Z-20) --- */}
            <div className="absolute bottom-[-40px] left-8 md:left-12 w-48 md:w-56 h-80 bg-slate-200 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white p-3 animate-float-delayed z-20 transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-4">
              <div className="w-1/3 h-2 bg-slate-400 rounded-full mb-4 mx-auto opacity-50" />
              <div className="space-y-3">
                <div className="w-full h-24 bg-white rounded-lg shadow-sm" />
                <div className="flex gap-2">
                  <div className="w-1/2 h-20 bg-white rounded-lg shadow-sm" />
                  <div className="w-1/2 h-20 bg-white rounded-lg shadow-sm" />
                </div>
                <div className="w-full h-4 bg-slate-300/50 rounded w-3/4" />
              </div>
            </div>

            {/* Decoration Lines */}
            <svg
              className="absolute inset-0 pointer-events-none z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
              width="100%"
              height="100%"
            >
              <line
                x1="20%"
                y1="80%"
                x2="60%"
                y2="40%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <circle cx="20%" cy="80%" r="4" fill="white" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
