"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  MessageSquare,
  FileText,
  Layout,
  Rocket,
} from "lucide-react";
import branding from "@/data/branding.json";
import { cn } from "@/lib/utils";

// --- DATA FLOW ORDER (Disesuaikan untuk WhatsApp) ---
const steps = [
  {
    id: 1,
    title: "Konsultasi & Order via WhatsApp",
    description: `Silahkan pilih paket yang Anda butuhkan, lalu klik tombol order. Anda akan terhubung ke WhatsApp admin kami untuk diskusi kebutuhan dan konfirmasi harga.`,
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Pembayaran & Kirim Materi",
    description:
      "Setelah deal, lakukan pembayaran DP (Down Payment). Kemudian kirimkan materi website (Logo, Teks, Foto) kepada tim kami via WA atau Email.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Proses Desain & Development",
    description:
      "Tim kami akan mulai mengerjakan website Anda sesuai materi yang diberikan. Estimasi waktu pengerjaan 3-5 hari kerja (tergantung kerumitan).",
    icon: <Layout className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Revisi & Website Tayang",
    description:
      "Kami kirimkan link preview. Anda berhak mengajukan revisi. Setelah semua oke dan pelunasan selesai, website akan kami online-kan dengan domain pilihan Anda.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);

  // Opsional: Auto-play slide setiap 5 detik jika user tidak klik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- KOLOM KIRI: TEKS & ACCORDION --- */}
          {/* (Saya tukar posisi Kiri/Kanan agar beda dikit dari section sebelumnya, tapi flow tetap enak dibaca) */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Bagaimana Proses Bikin Website di{" "}
              <span className="text-primary">{branding.brandName}</span>?
            </h2>

            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "cursor-pointer rounded-xl border transition-all duration-300 overflow-hidden",
                    activeStep === step.id
                      ? "bg-white border-primary/20 shadow-lg scale-[1.02]" // Active Style
                      : "bg-slate-50 border-transparent hover:bg-slate-100" // Inactive Style
                  )}
                >
                  <div className="flex items-center gap-4 p-4 md:p-5">
                    {/* Icon Check/Number */}
                    <div
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        activeStep === step.id
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-slate-200 text-slate-500"
                      )}
                    >
                      {activeStep === step.id ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="font-bold text-sm">{step.id}</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={cn(
                        "font-bold text-base md:text-lg transition-colors",
                        activeStep === step.id
                          ? "text-slate-900"
                          : "text-slate-600"
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description (Slide Down Animation) */}
                  <AnimatePresence>
                    {activeStep === step.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pl-[4.5rem] text-slate-500 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* --- KOLOM KANAN: MOCKUP ILUSTRASI (CSS ONLY) --- */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

            {/* BROWSER WINDOW MOCKUP */}
            <motion.div
              key={activeStep} // Re-animate when step changes
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Browser Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 flex-1 bg-white h-6 rounded-md border border-slate-200 shadow-sm flex items-center px-3">
                  <span className="text-[10px] text-slate-400">
                    https://namadomainanda.com
                  </span>
                </div>
              </div>

              {/* Browser Body (Dynamic Content based on Step) */}
              <div className="p-8 aspect-[4/3] bg-slate-50/50 flex flex-col items-center justify-center relative">
                {/* Visualisasi Berubah Sesuai Step */}
                {activeStep === 1 && (
                  <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-2">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <div className="w-40 h-4 bg-slate-200 rounded-full"></div>
                    <div className="w-24 h-4 bg-slate-200 rounded-full"></div>
                    <div className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-green-500/20">
                      Chat via WhatsApp
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                    <div className="w-full max-w-[200px] space-y-3">
                      <div className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
                      </div>
                      <div className="flex gap-3 items-center p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-2">
                      Uploading Assets...
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full h-full p-4 grid grid-cols-2 gap-4 animate-in fade-in zoom-in duration-500">
                    <div className="col-span-2 h-20 bg-white rounded-lg shadow-sm border border-slate-200 animate-pulse"></div>
                    <div className="h-32 bg-white rounded-lg shadow-sm border border-slate-200 animate-pulse"></div>
                    <div className="h-32 bg-white rounded-lg shadow-sm border border-slate-200 animate-pulse"></div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl shadow-amber-500/30 mb-4">
                      <Rocket className="w-10 h-10" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">
                      Website Live!
                    </h4>
                    <p className="text-xs text-slate-500">www.bisnisanda.com</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
