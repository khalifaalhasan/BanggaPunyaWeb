import { ErrorLayout } from "@/components/shared/error-layout";
import { FileQuestion } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan (404)",
  description: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
};

export default function NotFound() {
  return (
    <ErrorLayout
      code="404"
      title="Halaman Tidak Ditemukan"
      description="Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin halaman telah dihapus, namanya diubah, atau sementara tidak tersedia."
      icon={<FileQuestion className="w-12 h-12" />}
      primaryCtaText="Kembali ke Beranda"
    />
  );
}
