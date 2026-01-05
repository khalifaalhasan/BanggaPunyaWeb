"use server";

import { createClient } from "@/lib/supabase/server";
import { GetPortfoliosResponse, Portfolio } from "@/types/database";
import { Database } from "@/types/supabase"; // Import Database utama buat ambil definisi Row asli

// 1. Buat Tipe Khusus untuk Data Mentah (Hasil Join)
// Ini merepresentasikan: "Semua kolom Portfolio + Object portfolio_categories"
type PortfolioRaw = Database["public"]["Tables"]["portfolios"]["Row"] & {
  portfolio_categories: {
    name: string;
  } | null; // Bisa null kalau kategorinya dihapus/kosong
};

export async function getPortfolios(): Promise<GetPortfoliosResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("portfolios")
      .select("*, portfolio_categories(name)") // Query Join
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error (getPortfolios):", error.message);
      return { success: false, error: "Gagal mengambil data portfolio." };
    }

    // 2. Gunakan Tipe 'PortfolioRaw' saat mapping
    // Kita lakukan casting (as unknown as ...) biar TypeScript percaya sama struktur data kita
    const formattedData: Portfolio[] = (data as unknown as PortfolioRaw[]).map(
      (item) => ({
        ...item, // Copy semua field asli (id, slug, image, dll)

        // Flattening: Ambil string namenya saja
        kategori: item.portfolio_categories?.name || null,

        // Optional: Kita set undefined biar properti nested ini hilang dari object final
        // (Biar bersih sesuai tipe 'Portfolio')
        portfolio_categories: undefined as never,
      })
    );

    return { success: true, data: formattedData };
  } catch (err) {
    console.error("Server Error (getPortfolios):", err);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
