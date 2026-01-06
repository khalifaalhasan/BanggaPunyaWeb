import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Sesuaikan font Anda
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

// --- KONFIGURASI METADATA SEO ---
export const metadata: Metadata = {
  // 1. Base URL (PENTING: Ganti dengan domain asli Anda saat deploy)
  // Ini agar gambar OG Image (thumbnail WA) bisa muncul
  metadataBase: new URL("https://juraganweb.com"),

  // 2. Judul Halaman
  title: {
    default: "Jasa Pembuatan Website Profesional No #1 | Juraganweb",
    template: "%s | Juraganweb", // Nanti di page lain jadi: "Kontak | Juraganweb"
  },

  // 3. Deskripsi untuk Google Search
  description:
    "Jasa pembuatan website profesional, murah, dan cepat. Spesialis Company Profile, Toko Online, dan Web Custom. Konsultasi gratis sekarang!",

  // 4. Kata Kunci (Keywords)
  keywords: [
    "Jasa Pembuatan Website",
    "Jasa Website Murah",
    "Web Developer Indonesia",
    "Bikin Website Toko Online",
    "Company Profile",
    "Jasa SEO",
    "Juraganweb",
  ],

  // 5. Penulis & Creator
  authors: [{ name: "Juraganweb Team", url: "https://juraganweb.com" }],
  creator: "Juraganweb",

  // 6. Konfigurasi Open Graph (Tampilan saat share di FB/WA/LinkedIn)
  openGraph: {
    title: "Jasa Pembuatan Website Profesional & Terpercaya",
    description:
      "Tingkatkan kredibilitas bisnis Anda dengan website profesional. Harga mulai 650rb, pengerjaan cepat, gratis domain & SSL.",
    url: "https://juraganweb.com",
    siteName: "Juraganweb",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "Preview Juraganweb",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 7. Konfigurasi Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Profesional",
    description: "Solusi website bisnis terbaik dengan harga terjangkau.",
    images: ["/og-image.jpg"], // Menggunakan gambar yang sama
    creator: "@juraganweb", // Username sosmed (opsional)
  },

  // 8. Robots (Agar Google meng-index website)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 9. Icons (Favicon)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
