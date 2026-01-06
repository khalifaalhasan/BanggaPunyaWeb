"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import brandingData from "@/data/branding.json";

// ... (Type & Interface tetap sama) ...
type WhatsAppMode = "default" | "order" | "consult";

interface WhatsAppButtonProps extends React.ComponentProps<typeof Button> {
  phone?: string;
  message?: string;
  label?: string;
  mode?: WhatsAppMode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function WhatsAppButton({
  phone = brandingData.contact.whatsapp,
  mode = "default",
  message,
  label,
  className,
  icon,
  onClick,
  ...props // Best Practice: spread sisa props ke Button
}: WhatsAppButtonProps) {
  // 1. Logic Pesan
  const finalMessage = message || brandingData.whatsapp_messages[mode];

  // 2. Logic Label
  const defaultLabels: Record<WhatsAppMode, string> = {
    default: "Hubungi Kami",
    order: "Pesan Sekarang",
    consult: "Konsultasi Gratis",
  };
  const finalLabel = label || defaultLabels[mode];

  // 3. Generate URL
  const sanitizedPhone = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(
    finalMessage
  )}`;

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        // Base Styles
        "rounded-full h-12 px-8 font-bold text-base shadow-lg transition-all duration-300 cursor-pointer", // Tambah cursor-pointer eksplisit

        // Default State
        "bg-gold-gradient text-slate-900",

        // Hover State
        "hover:bg-amber-50 hover:shadow-xl hover:-translate-y-1 hover:scale-105",

        className
      )}
      onClick={onClick}
      {...props}
    >
      {/* Link adalah SATU-SATUNYA direct child dari Button */}
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        {/* Konten (Icon + Teks) sekarang ada di dalam Link */}
        {icon && <span className="mr-2 flex items-center">{icon}</span>}

        {/* Gunakan finalLabel (sudah menghandle fallback), hapus {label} duplikat */}
        {finalLabel}
      </Link>
    </Button>
  );
}
