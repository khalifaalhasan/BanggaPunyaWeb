import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Under Maintenance | BanggaPunyaWeb",
  description: "Website sedang dalam peningkatan performa.",
};

export default function MaintenancePage() {
  return (
    // Background Putih Bersih (bg-white)
    // Teks Gelap (text-slate-900)
    // h-screen & overflow-hidden = Kunci Anti-Scroll
    <div className="relative h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-sans text-slate-900">
      
      {/* Dekorasi Background: Bias Merah Halus */}
      {/* Memberikan nuansa branding tanpa mengganggu teks */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-50/50 to-transparent pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[50vh] h-[50vh] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center text-center max-w-3xl px-6">
        
        {/* Badge Status - Aksen Merah */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className="text-red-600 text-[10px] font-extrabold tracking-[0.25em] uppercase">
            Maintenance Mode
          </span>
        </div>

        {/* Headline Tipografi Besar */}
        {/* Menggunakan kontras Hitam & Merah */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          Koding <span className="text-red-600">Dulu</span>, <br />
          Keren <span className="relative inline-block">
            Kemudian.
            {/* Garis bawah dekoratif */}
            <span className="absolute bottom-2 left-0 w-full h-[10px] bg-red-600/10 -z-10 skew-x-12"></span>
          </span>
        </h1>

        {/* Subtext - Abu-abu agar mata tidak lelah */}
        <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed max-w-lg mx-auto mb-12">
          Kami sedang meracik ulang sistem agar performa website bisnis Anda makin ngebut dan maksimal.
        </p>

        {/* Footer Brand - Minimalis */}
        <div className="flex flex-col items-center gap-3 group cursor-default">
          {/* Garis Pemisah Merah Kecil */}
          <div className="h-[2px] w-12 bg-red-600 transition-all duration-300 group-hover:w-20"></div>
          <p className="text-slate-400 text-[10px] tracking-[0.4em] font-bold uppercase">
            BanggaPunyaWeb Agency
          </p>
        </div>

      </main>
    </div>
  );
}