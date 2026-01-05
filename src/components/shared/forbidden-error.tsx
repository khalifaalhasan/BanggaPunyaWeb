// Contoh: components/shared/forbidden-error.tsx
// Atau bisa langsung dipakai di page.tsx terkait.

import { ErrorLayout } from "@/components/shared/error-layout";
import { ShieldAlert } from "lucide-react";

export function ForbiddenError() {
  return (
    <ErrorLayout
      code="403"
      title="Akses Ditolak"
      description="Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Jika Anda yakin ini adalah kesalahan, silakan hubungi administrator sistem."
      icon={<ShieldAlert className="w-12 h-12" />}
      primaryCtaText="Kembali ke Beranda"
      // Opsional: Bisa diganti jadi tombol Login jika belum login
      // primaryHref="/login"
      // primaryCtaText="Silakan Login"
    />
  );
}