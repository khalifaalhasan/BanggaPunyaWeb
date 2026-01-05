"use client";

import Image from "next/image";
import branding from "@/data/branding.json";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function PromoSection() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- KOLOM KIRI (TEXT) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            {/* Subtitle Emas */}
            <h4 className="text-secondary font-bold text-sm md:text-base uppercase tracking-wide mb-4">
              Jasa Pembuatan Website Profesional
            </h4>

            {/* Headline Besar */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Bikin Website Baru Anda Hanya Dalam{" "}
              <span className="text-primary">24 Jam</span>
            </h2>

            {/* Deskripsi */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
              Jadikan bisnis Anda lebih berkembang dan menguntungkan bersama
              layanan kami yang menawarkan harga termurah serta didukung oleh
              tim profesional berpengalaman.
              <br />
              <br />
              Lebih dari <strong>500+ perusahaan</strong> telah mempercayakan
              pembuatan websitenya kepada {branding.brandName}. Sekarang giliran
              Anda!
            </p>

            {/* Tombol CTA (WhatsApp) */}
            <Button
              size="lg"
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold px-8 py-6 text-lg shadow-lg shadow-amber-500/20 transition-transform hover:-translate-y-1"
              onClick={() =>
                window.open(
                  `https://wa.me/${branding.contact.whatsapp}`,
                  "_blank"
                )
              }
            >
              <Phone className="mr-2 h-5 w-5" /> Konsultasi Gratis
            </Button>
          </motion.div>

          {/* --- KOLOM KANAN (GAMBAR PROMO) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Background Blob/Decoration (Opsional, agar tidak sepi) */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

            {/* Card Gambar Utama */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              {/* PLACEHOLDER IMAGE:
                   Ganti src ini dengan gambar banner promo Anda (misal: gambar laptop/diskon).
                   Untuk contoh, saya pakai placeholder dengan rasio 16:9 yang pas.
                */}
              <div className="relative aspect-video w-full bg-slate-100">
                <Image
                  src="" // Pastikan gambar ini ada di public/images
                  alt="Promo Pembuatan Website Murah"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback image jika file belum ada
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/800x500/9E3B3B/FFFFFF?text=Promo+Website+650k";
                  }}
                />

                {/* Overlay Gradient Halus (Biar teks di gambar terbaca jika ada) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Floating Badge (Pemanis UI) */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">
                  Garansi
                </p>
                <p className="text-slate-800 font-bold">Uang Kembali 100%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
