"use client";

import * as React from "react";
import Link from "next/link";
import branding from "@/data/branding.json";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import komponen yang sudah dipisah
import { DesktopNav } from "./dekstop-nav";
import { MobileNav } from "./mobile-nav";

export function FloatingHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out",
        scrolled ? "pt-4" : "pt-0"
      )}
    >
      <header
        className={cn(
          "flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          scrolled
            ? "w-[90%] max-w-5xl justify-between rounded-full bg-white/90 backdrop-blur-md border border-white/20 shadow-xl shadow-black/5 py-3 px-6 text-slate-800"
            : "w-full max-w-7xl justify-between bg-transparent border-transparent shadow-none py-6 px-4 text-white"
        )}
      >
        {/* 1. BRAND LOGO */}
        <Link href="/" className="flex items-center gap-2 z-10">
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            {branding.brandName}
          </span>
        </Link>

        {/* 2. DESKTOP NAV */}
        <DesktopNav scrolled={scrolled} />

        {/* 3. CTA & MOBILE TRIGGER */}
        <div className="flex items-center gap-3 z-10">
          <Button
            size="lg" // Agar terlihat 'fat' seperti di gambar
            className={cn(
              "rounded-full font-bold transition-all duration-300 shadow-md hover:-translate-y-0.5",
              scrolled
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg" // SCROLLED: Kuning (image_b8583e.png)
                : "bg-white text-primary hover:bg-white/90 hover:text-red-700 hover:shadow-white/20" // TOP: Putih Teks Merah (image_b85845.png)
            )}
          >
            Order Sekarang
          </Button>

          {/* Mobile Nav Component */}
          <MobileNav scrolled={scrolled} />
        </div>
      </header>
    </div>
  );
}
