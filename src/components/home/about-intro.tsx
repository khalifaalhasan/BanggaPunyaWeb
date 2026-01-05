"use client";

import branding from "@/data/branding.json";

export function AboutIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* HEADLINE */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          Jasa Pembuatan Website Terbaik No #1{" "}
          <br className="hidden md:block" />
          di Palembang
        </h2>

        {/* PARAGRAF 1 */}
        <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
          <strong className="text-primary">{branding.brandName}</strong> adalah
          perusahaan yang memberikan layanan jasa pembuatan website nomor 1.
          Kami membantu pelaku bisnis, UMKM, instansi perusahaan, dan pendidikan
          untuk membangun website sesuai keinginan yang diharapkan secara
          sederhana, cepat, aman, dan hemat biaya. Dengan banyaknya pengalaman
          yang dimiliki, kami hadir guna menunjang pertumbuhan bisnis Anda.
          Sudah lebih dari <strong>500+ mitra</strong> yang bekerjasama dengan
          kami.
        </p>

        {/* PARAGRAF 2 */}
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          Kami menawarkan Jasa Pembuatan Website Company Profile perusahaan,
          Toko Online / Jual Beli, Blog Pribadi / Personal, hingga Website
          Donasi Crowdfunding. Jika Anda ingin bisa bersaing dan tidak ingin
          tertinggal dari para pebisnis lainnya, Anda harus memaksimalkan semua
          sumber daya yang ada secara online.{" "}
          <span className="font-semibold text-slate-800">
            {branding.brandName}
          </span>{" "}
          hadir di sini untuk membantu Anda memaksimalkannya!
        </p>
      </div>
    </section>
  );
}
