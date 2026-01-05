"use client";

import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { SectionHeader } from "../shared/section-header"; // Pastikan path ini sesuai
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// --- DATA PAKET HARGA ---
const pricingPackages = [
  {
    id: "blog",
    title: "Blog Pribadi",
    subtitle: "Mulai Dari",
    price: "42.110",
    period: "/bln",
    description: "Cocok untuk hobi, penulis, atau portofolio personal.",
    features: [
      "Desain Profesional",
      "1x Revisi Desain",
      "SSD Storage 500 MB",
      "Free Setup 6 Konten",
      "Free G-Analytic",
      "Gratis Domain (.my.id)",
      "Gratis SSL Selamanya",
      "Mobile Friendly",
      "SEO Basic",
    ],
    recommended: false,
  },
  {
    id: "company",
    title: "Website Perusahaan",
    subtitle: "Mulai Dari",
    price: "105.000",
    period: "/bln",
    description: "Untuk bisnis yang ingin meningkatkan kredibilitas.",
    features: [
      "Desain Premium",
      "1x Revisi Desain",
      "Unlimited Email Bisnis",
      "Unlimited SSD Storage",
      "Gratis Maintenance",
      "Gratis Domain (.com)",
      "Gratis SSL Selamanya",
      "Mobile Friendly",
      "SEO Basic",
    ],
    recommended: true, // Highlight paket ini
  },
  {
    id: "ecommerce",
    title: "Toko Online",
    subtitle: "Mulai Dari",
    price: "237.500",
    period: "/bln",
    description: "Jual produk Anda dengan fitur e-commerce lengkap.",
    features: [
      "Desain Eksklusif",
      "2x Revisi Desain",
      "Unlimited SSD Storage",
      "Pembayaran Otomatis",
      "Integrasi Ongkir",
      "Gratis Domain (.com)",
      "Gratis SSL Selamanya",
      "Mobile Friendly",
      "SEO Advance",
    ],
    recommended: false,
  },
  {
    id: "donation",
    title: "Website Donasi",
    subtitle: "Mulai Dari",
    price: "187.083",
    period: "/bln",
    description: "Platform galang dana transparan dan terpercaya.",
    features: [
      "Desain Modern",
      "1x Revisi Desain",
      "Unlimited SSD Storage",
      "Pembayaran Otomatis",
      "Gratis Maintenance",
      "Gratis Domain (.org)",
      "Gratis SSL Selamanya",
      "Mobile Friendly",
      "Laporan Donasi",
    ],
    recommended: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <SectionHeader
          title="Harga Jasa Pembuatan Website"
          subtitle="Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Transparan tanpa biaya tersembunyi."
        />

        {/* Grid Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative",
                // Jika Recommended, border warna primary, jika tidak border biasa
                pkg.recommended
                  ? "border-primary/50 ring-2 ring-primary/20"
                  : "border-slate-100"
              )}
            >
              {/* Badge Popular (Opsional) */}
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wide">
                  Best Seller
                </div>
              )}

              {/* 1. CARD HEADER (Warna Brand) */}
              <div className="bg-primary p-6 text-center text-white relative">
                <h3 className="text-xl font-bold tracking-tight">
                  {pkg.title}
                </h3>
                <p className="text-white/80 text-xs mt-1 uppercase tracking-wider font-medium">
                  {pkg.subtitle}
                </p>
              </div>

              {/* 2. PRICE & CONTENT */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Harga */}
                <div className="text-center mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-start justify-center text-slate-800">
                    <span className="text-sm font-semibold mt-1">Rp</span>
                    <span className="text-4xl font-extrabold tracking-tight mx-1">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs font-medium">
                    {pkg.period} (Min. Kontrak 1 Thn)
                  </span>
                </div>

                {/* List Fitur */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      {/* Icon Check */}
                      <div className="mt-0.5 min-w-[18px]">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    className={cn(
                      "w-full rounded-full font-bold transition-all shadow-md",
                      pkg.recommended
                        ? "bg-secondary text-secondary-foreground hover:bg-amber-400" // Tombol Emas untuk Best Seller
                        : "bg-slate-800 text-white hover:bg-slate-700" // Tombol Gelap untuk Biasa
                    )}
                  >
                    Pilih Paket
                  </Button>

                  <p className="text-[10px] text-center text-slate-400 mt-3 leading-tight">
                    Cocok untuk {pkg.description.toLowerCase()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 bg-white inline-block px-4 py-2 rounded-full shadow-sm border border-slate-100">
            * <strong>Daftar domain gratis:</strong> .com, .net, .org, .info,
            .sch.id, .or.id, .ac.id, .web.id, .xyz, .website
          </p>
        </div>
      </div>
    </section>
  );
}
