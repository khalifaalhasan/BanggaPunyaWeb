"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { SectionHeader } from "../shared/section-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- 1. DATA FAQ & KATEGORI ---
const categories = ["All", "Umum", "Harga & Layanan", "Teknis"];

const faqs = [
  {
    question: "Apakah website yang dibuat sudah termasuk domain & hosting?",
    answer:
      "Ya, paket kami adalah All-in-One. Anda sudah mendapatkan Domain (.com/.id), Hosting Unlimited SSD, SSL Security, dan maintenance teknis. Anda terima beres tanpa pusing mikirin server.",
    category: "Harga & Layanan",
  },
  {
    question: "Berapa lama proses pembuatan websitenya?",
    answer:
      "Estimasi pengerjaan standar kami adalah 3-5 hari kerja setelah materi (foto, teks, logo) kami terima lengkap. Untuk website custom yang kompleks mungkin membutuhkan waktu lebih lama.",
    category: "Umum",
  },
  {
    question: "Apakah saya bisa update konten sendiri nanti?",
    answer:
      "Tentu saja! Kami membangun website menggunakan CMS yang user-friendly. Anda akan kami berikan akses ke panel admin untuk mengubah teks, gambar, atau artikel blog dengan mudah tanpa perlu coding.",
    category: "Teknis",
  },
  {
    question: "Apakah ada biaya perpanjangan tahunan?",
    answer:
      "Ya, ada. Website membutuhkan biaya sewa server (hosting) dan nama domain yang harus dibayar setiap tahun. Namun tenang saja, biaya perpanjangan di kami sangat terjangkau dan sudah termasuk maintenance.",
    category: "Harga & Layanan",
  },
  {
    question: "Apa perbedaan paket Company Profile dan Toko Online?",
    answer:
      "Company Profile fokus pada informasi perusahaan, jasa, dan portofolio (branding). Sedangkan Toko Online memiliki fitur e-commerce lengkap seperti keranjang belanja, hitung ongkir otomatis, dan payment gateway.",
    category: "Umum",
  },
  {
    question: "Bagaimana jika saya ingin revisi desain?",
    answer:
      "Kami memberikan kesempatan revisi desain sebanyak 2-3x (tergantung paket). Revisi mencakup perubahan warna, layout, font, atau penempatan gambar sebelum website dionlinekan.",
    category: "Teknis",
  },
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default item pertama terbuka

  // Filter Data
  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        {/* --- HEADER & BUTTON TOP RIGHT --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-slate-500 text-lg">
              Jawaban untuk pertanyaan umum seputar jasa kami.
            </p>
          </div>

          <Button className="rounded-full px-6 bg-primary hover:bg-red-700 shadow-lg shadow-red-500/20">
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </Button>
        </div>

        {/* --- CATEGORY TABS (Pills) --- */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null); // Reset accordion saat ganti kategori
              }}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-md" // Active Style
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50" // Inactive Style
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- ACCORDION LIST --- */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => toggleAccordion(index)}
                  className={cn(
                    "cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-blue-50/50 border-blue-100" // Style saat Terbuka (Biru Muda ala Referensi)
                      : "bg-slate-50 border-transparent hover:bg-slate-100" // Style saat Tertutup
                  )}
                >
                  {/* Accordion Header */}
                  <div className="flex items-center justify-between p-6">
                    <h3
                      className={cn(
                        "text-base md:text-lg font-bold pr-8 transition-colors",
                        isOpen ? "text-slate-900" : "text-slate-700"
                      )}
                    >
                      {faq.question}
                    </h3>

                    {/* Icon Plus/Minus */}
                    <div
                      className={cn(
                        "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors",
                        isOpen
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-400"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Accordion Content (Animation) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-blue-100/50 pt-4 mt-2 mx-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty State jika tidak ada hasil filter */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              Tidak ada pertanyaan di kategori ini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
