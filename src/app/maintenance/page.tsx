import Image from "next/image";

export const metadata = {
  title: "Under Development | BanggaPunyaWeb",
  description: "Kami sedang merancang sesuatu yang luar biasa untuk Anda.",
};

export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen bg-[#020617] flex flex-col items-center justify-center overflow-hidden font-sans">
      {/* Efek Cahaya Latar Belakang (Glow) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl">
        {/* GIF Container dengan Border Halus */}
        <div className="relative w-full max-w-[450px] aspect-video mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0f172a] rounded-2xl p-4 border border-white/10 shadow-2xl">
            <Image
              src="/gif/maintenance.json"
              alt="Development Illustration"
              width={500}
              height={500}
              className="rounded-lg object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 mb-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-[0.2em]">
            Status: Under Development
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            We are{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              Building
            </span>{" "}
            <br />
            Something Bold.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            BanggaPunyaWeb sedang melakukan pembaruan sistem untuk memberikan
            pengalaman digital terbaik bagi bisnis Anda. Sampai jumpa beberapa
            saat lagi!
          </p>
        </div>

        {/* Info Agency */}
        <div className="mt-16 flex items-center gap-4 text-white/40 text-sm tracking-widest">
          <span className="w-8 h-[1px] bg-white/20"></span>
          BANGGAPUNYAWEB AGENCY
          <span className="w-8 h-[1px] bg-white/20"></span>
        </div>
      </div>

      {/* Grid Pattern Background (Opsional) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </div>
  );
}
