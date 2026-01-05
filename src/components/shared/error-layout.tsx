import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorLayoutProps {
  code: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  primaryCtaText?: string;
  onPrimaryClick?: () => void; // Untuk tombol reset di error 500
  primaryHref?: string; // Untuk link di 404/403
}

export function ErrorLayout({
  code,
  title,
  description,
  icon,
  primaryCtaText = "Kembali ke Beranda",
  onPrimaryClick,
  primaryHref = "/",
}: ErrorLayoutProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        
        {/* 1. Icon Wrapper dengan Aksen Merah Ringan */}
        <div className="relative mx-auto w-24 h-24 mb-8 flex items-center justify-center bg-red-50 rounded-full">
          <div className="text-primary">
            {icon}
          </div>
          {/* Efek Pulse Ringan */}
          <div className="absolute inset-0 rounded-full border-4 border-red-100 animate-ping opacity-30"></div>
        </div>

        {/* 2. Error Code (Warna Primary Merah) */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-primary tracking-tight mb-4 leading-none">
          {code}
        </h1>

        {/* 3. Headline & Deskripsi (Profesional) */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          {title}
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          {description}
        </p>

        {/* 4. CTAs (Emas & Outline) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA (Emas/Secondary) */}
          {onPrimaryClick ? (
            // Jika ada fungsi klik (untuk reset error 500)
            <Button
              onClick={onPrimaryClick}
              size="lg"
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold px-8 shadow-lg shadow-amber-500/20 min-w-[200px]"
            >
              {primaryCtaText}
            </Button>
          ) : (
            // Jika link biasa (untuk 404/403)
            <Link href={primaryHref}>
              <Button
                size="lg"
                className="rounded-full bg-secondary text-secondary-foreground hover:bg-amber-400 font-bold px-8 shadow-lg shadow-amber-500/20 min-w-[200px]"
              >
                <Home className="mr-2 h-5 w-5" /> {primaryCtaText}
              </Button>
            </Link>
          )}

          {/* Secondary CTA (Outline Merah/Primary) */}
          <Link href="/contact">
             <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-red-50 font-semibold px-8 min-w-[200px]"
              >
                Hubungi Support
              </Button>
          </Link>
          
        </div>
        
        {/* Link Balik Sederhana */}
        <div className="mt-12">
             <Link href="/" className="text-sm text-slate-500 hover:text-primary flex items-center justify-center gap-2 group transition-colors">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                Atau kembali ke halaman sebelumnya
             </Link>
        </div>

      </div>
    </div>
  );
}