"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeader } from "../shared/section-header";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SecondaryButton } from "../shared/secondary-button";

// --- 1. TIPE DATA (Sesuai dengan Action Anda) ---
// Nanti ini bisa dipindah ke file @/types/database
export interface Portfolio {
  id: string;
  judul: string;
  slug: string;
  image_url: string;
  client_name: string; // Opsional: kadang judul = client name
  kategori: string | null;
}

interface PortfolioSectionProps {
  // Tambahkan ini agar komponen menerima prop 'id' (opsional/tanda tanya)
  id?: string;
  className?: string; // Opsional: jika ingin tambah class dari luar
}

// --- 2. DUMMY DATA (Sesuai Structure Action) ---
const dummyPortfolios: Portfolio[] = [
  {
    id: "1",
    judul: "JLD Tools Indonesia",
    slug: "jld-tools",
    image_url: "https://placehold.co/600x400/2a2a2a/FFF?text=JLD+Tools", // Ganti dengan gambar asli nanti
    client_name: "PT JLD Tools",
    kategori: "Company Profile",
  },
  {
    id: "2",
    judul: "FEM IT Solutions",
    slug: "fem-it-solutions",
    image_url: "https://placehold.co/600x400/0f172a/FFF?text=FEM+IT",
    client_name: "FEM IT Solutions",
    kategori: "Corporate Website",
  },
  {
    id: "3",
    judul: "Meena Beauty Skincare",
    slug: "meena-beauty",
    image_url: "https://placehold.co/600x400/e11d48/FFF?text=Meena+Beauty",
    client_name: "Meena Beauty",
    kategori: "Toko Online",
  },
  {
    id: "4",
    judul: "ConstruX Bali",
    slug: "construx-bali",
    image_url: "https://placehold.co/600x400/0891b2/FFF?text=ConstruX",
    client_name: "ConstruX Bali",
    kategori: "Property & Real Estate",
  },
  {
    id: "5",
    judul: "Inovata Systems",
    slug: "inovata",
    image_url: "https://placehold.co/600x400/4f46e5/FFF?text=Inovata",
    client_name: "PT Inovata",
    kategori: "Technology",
  },
  {
    id: "6",
    judul: "PT Krisan Ciptakreasi",
    slug: "krisan-cipta",
    image_url: "https://placehold.co/600x400/d97706/FFF?text=Krisan+Cipta",
    client_name: "PT Krisan Ciptakreasi",
    kategori: "Construction",
  },
];

export function PortofolioSection({ id, className }: PortfolioSectionProps) {
  // Nanti: const { data: portfolios } = await getPortfolios();
  const portfolios = dummyPortfolios;

  return (
    <section
      id={id}
      className={`py-20 scroll-mt-28 bg-white ${className || ""}`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title="Portfolio Hasil Karya Kami"
          subtitle="Lihat bagaimana kami membantu berbagai bisnis berkembang melalui website profesional."
        />

        {/* Grid Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={item.image_url}
                  alt={item.judul}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Hover Effect (Opsional: Tombol Lihat Detail) */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/portfolio/${item.slug}`}>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full font-bold"
                    >
                      Lihat Detail <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Badge Kategori */}
                {item.kategori && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-slate-700 shadow-sm">
                    {item.kategori}
                  </div>
                )}
              </div>

              {/* TEXT CONTENT */}
              <div className="p-5 text-center relative z-10 bg-white">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-1">
                  {item.judul}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {item.client_name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button "Lihat Semua" */}
        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <SecondaryButton
              label="lihat Portfolio selengkapnya"
              href="/portfolio"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
