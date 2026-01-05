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

interface DesktopNavProps {
  scrolled: boolean;
}

export function DesktopNav({ scrolled }: DesktopNavProps) {
  // Styles helper agar tidak berantakan
  const linkStyles = cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 outline-none",
    scrolled
      ? "text-slate-600 hover:text-primary hover:bg-slate-100"
      : "text-white/90 hover:text-white"
  );

  const triggerStyles = cn(
    "bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10",
    scrolled
      ? "text-slate-600 hover:text-primary hover:bg-slate-100 data-[state=open]:bg-slate-100"
      : "text-white/90 hover:text-white"
  );

  return (
    <div className="hidden md:flex items-center">
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {/* Beranda */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={linkStyles}>
                Beranda
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Dropdown Layanan */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={triggerStyles}>
              Layanan
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {item.icon}
                          <div className="text-sm font-medium leading-none text-slate-900">
                            {item.title}
                          </div>
                        </div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-500">
                          {item.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Portofolio */}
          <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref>
              <NavigationMenuLink className={linkStyles}>
                Portofolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
