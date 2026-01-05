"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Client } from "@/types/database";

interface ClientMarqueeProps {
  clients: Client[];
}

export function ClientMarquee({ clients }: ClientMarqueeProps) {
  return (
    <div className="relative w-full mt-10">
      {/* 1. GRADASI SUPER MODERN (CSS MASK) 
        Ini membuat efek fade kiri-kanan yang smooth dan tembus pandang (bukan layer putih).
      */}
      <div
        className="
          flex flex-col gap-6 
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          md:[mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
        "
      >
        <Marquee
          gradient={false}
          speed={35}
          pauseOnHover={true}
          className="py-4 overflow-hidden"
        >
          {clients.map((client) => (
            <div key={client.id} className="mx-4 md:mx-8">
              <Link
                href={client.website_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                {/* 2. MODERN GLASS PILL STYLE
                  - Tanpa Border Tebal
                  - Background tipis banget (Glass)
                  - Hover Effect: Glow & Color
                */}
                <div
                  className="
                    relative w-[160px] h-[80px] md:w-[200px] md:h-[100px]
                    flex items-center justify-center 
                    rounded-2xl 
                    bg-slate-50/50 backdrop-blur-sm 
                    border border-white/60 shadow-sm
                    group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(0,0,0,0.05)] 
                    group-hover:scale-105 group-hover:border-primary/10
                    transition-all duration-500 ease-out
                  "
                >
                  {/* Gambar Logo */}
                  <div className="relative w-24 h-12 md:w-32 md:h-16 transition-all duration-500">
                    <Image
                      src={client.image_url || "/placeholder.png"}
                      alt={client.nama}
                      fill
                      className="
                        object-contain 
                        filter grayscale opacity-60 
                        group-hover:grayscale-0 group-hover:opacity-100 
                        transition-all duration-500
                      "
                      sizes="200px"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
