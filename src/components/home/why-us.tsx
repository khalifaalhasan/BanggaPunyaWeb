"use client";

import branding from "@/data/branding.json";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, ShieldCheck, Clock, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- KOLOM KIRI: VISUAL CARD (ROCKET) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Card Biru ala Referensi */}
            <div className="relative w-full max-w-md bg-red-600 rounded-3xl p-8 shadow-2xl text-white overflow-hidden group">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

              <div className="relative z-10 flex flex-col h-full text-center">
                <p className="text-sm font-medium text-blue-100 uppercase tracking-wider mb-2">
                  Jasa Pembuatan Website
                </p>
                <h3 className="text-3xl font-bold mb-8">
                  {branding.brandName}
                </h3>

                {/* Ilustrasi Roket (Icon Besar) */}
                <div className="flex-1 flex items-center justify-center py-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-pulse"></div>
                    <Rocket className="w-32 h-32 text-yellow-400 drop-shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500" />
                  </div>
                </div>

                {/* Grid Keunggulan Kecil di Bawah Card */}
                <div className="grid grid-cols-2 gap-4 mt-8 text-left">
                  <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span className="text-xs font-semibold">Terpercaya</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-blue-300" />
                    <span className="text-xs font-semibold">Cepat</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-xs font-semibold">Profesional</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                    <Wrench className="w-5 h-5 text-orange-400" />
                    <span className="text-xs font-semibold">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- KOLOM KANAN: TEKS PENJELASAN --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Mengapa Harus Membuat Website di{" "}
              <span className="text-primary">{branding.brandName}</span>?
            </h2>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Tahukah Anda, bahwa tingkat kepercayaan pelanggan terhadap suatu
                perusahaan atau organisasi lebih meningkat jika memiliki
                website? Mungkin Anda pernah berpikir dapat membangun brand dari
                micro site atau social media saja. Namun tetap saja tidak
                maksimal, karena micro site atau sosial media tidak akan bisa
                mewakili brand itu sendiri secara utuh.
              </p>

              <p>
                Selain itu, dengan memiliki website akan mengoptimalkan promosi
                Anda secara online. Website akan memperkenalkan usaha yang Anda
                jalani ke seluruh dunia kapanpun, di manapun tanpa ada batasan
                waktu dan tempat. Website seperti alat marketing yang tak
                henti-hentinya berpromosi, meskipun Anda sedang tidur.
              </p>

              <div className="bg-white p-4 rounded-xl border-l-4 border-secondary shadow-sm">
                <p className="text-sm md:text-base font-medium text-slate-800">
                  Paket jasa pembuatan website kami adalah{" "}
                  <strong>paket all in one</strong>. Anda tidak perlu memikirkan
                  desain, domain, hosting, atau teknikal perawatan website. Kami
                  akan buatkan, merawat, dan mengoptimalkan website Anda.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold px-8 py-6 text-base shadow-lg transition-transform hover:-translate-y-1"
                onClick={() =>
                  window.open(
                    `https://wa.me/${branding.contact.whatsapp}`,
                    "_blank"
                  )
                }
              >
                Konsultasi Sekarang
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
