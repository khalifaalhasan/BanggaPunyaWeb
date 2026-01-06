"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Smartphone, Layout, Palette } from "lucide-react";

// --- DATA ---
const features = [
  // KIRI
  {
    id: "left-1",
    title: "SEO yang Teroptimasi",
    desc: "Memastikan bahwa bisnis Anda mudah ditemukan secara online. Website yang tidak dioptimalkan akan sulit muncul di halaman pertama pencarian, membuat bisnis Anda hampir tidak terlihat oleh calon pelanggan.",
    icon: <Search className="w-5 h-5 text-blue-600" />,
    col: "left",
  },
  {
    id: "left-2",
    title: "Struktur & Navigasi",
    desc: "memudahkan pengunjung menemukan apa yang mereka cari, dengan navigasi yang intuitif dan konten yang terstruktur dengan baik., ",
    icon: <Layout className="w-5 h-5 text-purple-600" />,
    col: "left",
  },
  // KANAN
  {
    id: "right-1",
    title: "Cepat & Responsif",
    desc: "Proses loading yang cepat dan dapat diakses dengan baik dari berbagai perangkat, termasuk mobile. Pengunjung akan dengan cepat meninggalkan website yang lambat. Website yang tidak responsif juga membuat frustrasi, terutama saat diakses lewat smartphone.",
    icon: <Smartphone className="w-5 h-5 text-green-600" />,
    col: "right",
  },
  {
    id: "right-2",
    title: "Visual Modern",
    desc: "Memiliki desain yang modern, bersih, dan mencerminkan identitas brand. Ini memberikan kesan bahwa bisnis Anda serius dan peduli dengan kualitas.",
    icon: <Palette className="w-5 h-5 text-orange-600" />,
    col: "right",
  },
];

export function FeatureScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // 1. DETEKSI LAYAR (Hanya aktifkan animasi jika lebar > 768px)
  useEffect(() => {
    const checkDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    checkDesktop(); // Cek awal
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- ANIMASI HANYA UNTUK DESKTOP ---
  // Jika mobile, nilai fallbacknya statis (misal opacity: 1, y: 0)
  const cardsOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.15, 0.35], [40, 0]);

  const wrapperScale = useTransform(scrollYProgress, [0.85, 1], [1, 0.9]);
  const wrapperOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      // MOBILE: h-auto (tinggi sesuai konten), py-20
      // DESKTOP: h-[250vh] (tinggi untuk scroll space)
      className="relative bg-white h-auto py-16 md:py-0 md:h-[250vh]"
    >
      {/* STICKY WRAPPER 
          - Mobile: relative (diam ditempat), h-auto
          - Desktop: sticky (ngikut scroll), h-screen
      */}
      <div className="relative h-auto md:sticky md:top-0 md:h-screen flex flex-col items-center justify-center overflow-hidden py-4 md:py-8">
        {/* WRAPPER ANIMASI 
            - Mobile: Style kosong {} (Animasi mati)
            - Desktop: Style motion (Scale & Opacity jalan)
        */}
        <motion.div
          style={
            isDesktop ? { scale: wrapperScale, opacity: wrapperOpacity } : {}
          }
          className="relative w-full max-w-[1200px] flex flex-col items-center px-4 md:px-6"
        >
          {/* HEADLINE */}
          <div className="text-center mb-8 md:mb-12 z-30 relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-3">
              Website Anda Perlu{" "}
              <span className="text-red-600">Kriteria Terbaik</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              Standar profesional untuk meningkatkan performa bisnis.
            </p>
          </div>

          {/* VISUAL AREA */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:items-stretch gap-6 md:gap-0">
            {/* --- DESKTOP LAYOUT (3 KOLOM) --- */}

            {/* KOLOM KIRI (Cards) */}
            <motion.div
              // Mobile: Style kosong (Langsung muncul)
              style={isDesktop ? { opacity: cardsOpacity, y: cardsY } : {}}
              className="hidden md:flex flex-col gap-6 w-[300px] z-20 justify-center"
            >
              {features
                .filter((f) => f.col === "left")
                .map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
            </motion.div>

            {/* KOLOM TENGAH (Laptop) */}
            <div className="relative z-10 w-full md:flex-1 md:-mx-12 lg:-mx-16 flex items-center justify-center">
              <div className="relative w-full md:w-full aspect-[16/10] shadow-2xl rounded-xl md:rounded-[1.5rem] border-[3px] md:border-4 border-slate-800 bg-slate-900 overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 z-20" />
                <div className="relative w-full h-full bg-slate-100 overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="Laptop Screen Dashboard"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </div>
                <div className="absolute bottom-0 w-full h-3 md:h-5 bg-slate-800" />
              </div>
            </div>

            {/* KOLOM KANAN (Cards) */}
            <motion.div
              style={isDesktop ? { opacity: cardsOpacity, y: cardsY } : {}}
              className="hidden md:flex flex-col gap-6 w-[300px] z-20 justify-center"
            >
              {features
                .filter((f) => f.col === "right")
                .map((item) => (
                  <CardItem key={item.id} item={item} />
                ))}
            </motion.div>

            {/* --- MOBILE LAYOUT: GRID --- */}
            {/* Hanya muncul di Mobile (md:hidden). Statis tanpa animasi. */}
            <div className="md:hidden grid grid-cols-1 gap-4 w-full mt-6">
              {features.map((item) => (
                <CardItem key={item.id} item={item} mobile />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// SUB-COMPONENT
function CardItem({
  item,
  mobile = false,
}: {
  item: (typeof features)[0];
  mobile?: boolean;
}) {
  return (
    <div
      className={`
      bg-white p-5 md:p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col gap-3 md:gap-4 transition-transform hover:scale-[1.02] duration-300
      ${mobile ? "w-full" : "w-full h-auto min-h-[160px] justify-center"} 
    `}
    >
      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-base md:text-lg mb-1.5">
          {item.title}
        </h3>
        <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
