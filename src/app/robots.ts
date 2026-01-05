import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Ganti domain ini sesuai domain asli
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*", // Berlaku untuk semua bot (Google, Bing, dll)
      allow: "/", // Boleh akses semua
      disallow: ["/admin", "/dashboard", "/api/*"], // Dilarang masuk ke sini
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Memberitahu bot lokasi sitemap kita
  };
}
