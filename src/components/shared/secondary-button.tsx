"use client"; // Wajib use client

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends React.ComponentProps<typeof Button> {
  label: string;
  href: string;
}

export function SecondaryButton({
  label,
  href,
  className,
  ...props
}: SecondaryButtonProps) {
  // FUNGSI SCROLL MANUAL (Paling Ampuh)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Cek apakah href mengandung tanda pagar '#'
    if (href.includes("#")) {
      e.preventDefault(); // Matikan navigasi standar Next.js

      // Ambil ID dari href (misal "/#price" jadi "price")
      const targetId = href.split("#")[1];
      const elem = document.getElementById(targetId);

      // Lakukan scroll halus
      if (elem) {
        // Offset header (opsional, sesuaikan -100 dengan tinggi navbar Anda)
        const headerOffset = 100;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "rounded-full h-12 px-8 font-bold text-base transition-all duration-300",
        "bg-white text-slate-900 border-2 border-slate-900",
        "hover:bg-slate-100 hover:text-slate-900 hover:border-slate-900 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <Link href={href} onClick={handleScroll}>
        {label}
      </Link>
    </Button>
  );
}
