"use client"; // Wajib untuk error boundary

import { useEffect } from "react";
import { ErrorLayout } from "@/components/shared/error-layout";
import { ServerCrash } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Opsional: Log error ke layanan tracking (Sentry, dll)
  useEffect(() => {
    console.error("System Error:", error);
  }, [error]);

  return (
    <ErrorLayout
      code="500"
      title="Terjadi Kesalahan Sistem"
      description="Maaf, server kami sedang mengalami masalah teknis yang tidak terduga. Tim kami telah dinotifikasi. Silakan coba muat ulang beberapa saat lagi."
      icon={<ServerCrash className="w-12 h-12" />}
      primaryCtaText="Coba Muat Ulang"
      onPrimaryClick={reset} // Menggunakan fungsi reset dari Next.js
    />
  );
}
