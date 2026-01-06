"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navItems } from "./nav-data";
import { usePathname } from "next/navigation";

interface DesktopNavProps {
  scrolled: boolean;
}

export function DesktopNav({ scrolled }: DesktopNavProps) {
  const pathname = usePathname(); // Ambil path aktif
  // 1. BASE STYLE (Bentuk dasar tombol nav)
  const baseTriggerStyle =
    "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 outline-none disabled:pointer-events-none disabled:opacity-50";

  // 2. STATE STYLES (Warna berubah sesuai scroll)
  const navStyles = scrolled
    ? // SCROLLED (Background Putih): Teks Abu -> Hover Merah (Primary)
      "text-slate-600 hover:text-primary hover:bg-slate-50 focus:bg-slate-50 data-[active]:text-primary data-[state=open]:bg-slate-50"
    : // TOP (Background Merah): Teks Putih -> Hover Putih Transparan
      "text-white/90 hover:text-white hover:bg-white/10 focus:bg-white/10 data-[active]:text-white data-[state=open]:bg-white/10";

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const finalClass = cn(baseTriggerStyle, navStyles);

  return (
    <div className="hidden md:flex items-center gap-1">
      <NavigationMenu>
        <NavigationMenuList>
          {/* --- BERANDA --- */}
          <NavigationMenuItem>
            {/* PENTING: Gunakan asChild di NavigationMenuLink */}
            <NavigationMenuLink asChild>
              <Link href="/" onClick={handleHomeClick} className={finalClass}>
                Beranda
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(baseTriggerStyle, navStyles, "bg-transparent")}
            >
              Layanan
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* HAPUS: bg-white rounded-2xl shadow-xl ring-1 ring-slate-100
                 GANTI JADI: class layout murni saja
              */}
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-3xl p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 focus:bg-red-50 group"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-slate-400 group-hover:text-primary transition-colors">
                            {item.icon}
                          </span>
                          <div className="text-sm font-bold leading-none text-slate-700 group-hover:text-primary">
                            {item.title}
                          </div>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500 font-medium">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* --- PORTFOLIO --- */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/portfolio" className={finalClass}>
                Portfolio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
