import { MetadataRoute } from "next";
import { getPortfolios } from "@/actions/portfolio"; // Import action portfolio Anda

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Ganti dengan domain asli Anda (tanpa slash di akhir)
  // Sebaiknya taruh di .env: process.env.NEXT_PUBLIC_BASE_URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // 2. Data Static (Halaman-halaman utama)
  const routes = [
    "",
    "/portfolio",
    // "/services", // Jika nanti ada halaman service terpisah
    // "/contact",  // Jika nanti ada halaman kontak terpisah
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8, // Halaman utama prioritas tertinggi
  }));

  // 3. Data Dinamis (Ambil dari Database Supabase)
  // Agar setiap portfolio baru langsung masuk Google
  let portfolioRoutes: MetadataRoute.Sitemap = [];
  
  try {
    const { data: portfolios } = await getPortfolios();
    
    if (portfolios && portfolios.length > 0) {
      portfolioRoutes = portfolios.map((item) => ({
        url: `${baseUrl}/portfolio/${item.slug}`, // Pastikan slug ada di database
        lastModified: new Date(), // Atau item.created_at jika ada
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Sitemap Error:", error);
  }

  // 4. Gabungkan Semuanya
  return [...routes, ...portfolioRoutes];
}