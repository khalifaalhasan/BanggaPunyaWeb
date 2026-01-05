"use client";

import * as React from "react";
import Link from "next/link";
import branding from "@/data/branding.json";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Home, Briefcase, ChevronRight, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navItems } from "./nav-data";

interface MobileNavProps {
  scrolled: boolean;
}

export function MobileNav({ scrolled }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      
      {/* TRIGGER */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden transition-colors",
            open || scrolled 
              ? "text-slate-800" 
              : "text-white hover:bg-white/20"
          )}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      {/* CONTENT SIDEBAR */}
      <SheetContent 
        side="left" 
        className="w-[85vw] sm:w-[380px] p-0 border-r-0 flex flex-col bg-slate-50/90 backdrop-blur-xl" 
      >
        <div className="sr-only">
          <SheetTitle>Menu Navigasi</SheetTitle>
        </div>

        {/* 1. HEADER BRAND (LURUS & ADA TOMBOL WA) */}
        {/* Hapus rounded-b-[2rem] agar lurus */}
        <div className="bg-primary pt-10 pb-6 px-6 shadow-md relative overflow-hidden">
           {/* Hiasan Background */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
           
           <div className="relative z-10">
              {/* Profil Brand */}
              <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-white p-1 shadow-lg ring-2 ring-white/20">
                    <div className="h-full w-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                        <span className="text-xl font-bold text-primary">JP</span>
                    </div>
                  </div>
                  
                  <div className="text-white">
                    <h2 className="font-bold text-lg leading-tight">{branding.brandName}</h2>
                    <p className="text-white/80 text-xs">Jasa Pembuatan Website</p>
                  </div>
              </div>

              {/* TOMBOL KONSULTASI (WhatsApp) - DI ATAS */}
              <Button
                onClick={handleLinkClick}
                className="w-full bg-white text-primary hover:bg-slate-100 font-bold shadow-lg border-none"
              >
                <Phone className="w-4 h-4 mr-2" /> Konsultasi Gratis
              </Button>
           </div>
        </div>

        {/* 2. BODY MENU */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
           
           {/* GROUP 1: MENU UTAMA */}
           <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-100">
              <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-all group"
              >
                  <div className="bg-blue-50 text-blue-600 p-2 rounded-md group-hover:bg-blue-100 transition-colors">
                     <Home className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-700">Beranda</span>
              </Link>
              
              <Link
                  href="/portfolio"
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-all group"
              >
                  <div className="bg-purple-50 text-purple-600 p-2 rounded-md group-hover:bg-purple-100 transition-colors">
                     <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-700">Portofolio</span>
                  <span className="ml-auto text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">SOON</span>
              </Link>
           </div>

           {/* GROUP 2: KATEGORI LAYANAN */}
           <div className="bg-white rounded-xl p-2 shadow-sm border border-slate-100">
              <h3 className="px-4 pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                 Layanan Kami
              </h3>
              
              <div className="flex flex-col mt-1">
                 {navItems.map((item, idx) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all group"
                    >
                       <div className="flex items-center gap-4">
                          <div className={cn(
                             "p-2 rounded-md transition-colors",
                             idx === 0 ? "bg-orange-50 text-orange-600" :
                             idx === 1 ? "bg-green-50 text-green-600" :
                             idx === 2 ? "bg-pink-50 text-pink-600" :
                             "bg-cyan-50 text-cyan-600"
                          )}>
                             {React.isValidElement(item.icon) 
                               ? React.cloneElement(
                                   item.icon as React.ReactElement<{ className?: string }>, 
                                   { className: "w-5 h-5" }
                                 ) 
                               : item.icon
                             }
                          </div>
                          <div className="flex flex-col">
                             <span className="font-semibold text-slate-700 text-sm">{item.title}</span>
                          </div>
                       </div>
                       
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                    </Link>
                 ))}
              </div>
           </div>

        </div>

        {/* FOOTER: Bisa diisi Copyright atau Kosong */}
        <div className="p-4 text-center">
            <p className="text-[10px] text-slate-400">
              &copy; {new Date().getFullYear()} {branding.brandName}
            </p>
        </div>

      </SheetContent>
    </Sheet>
  );
}