"use server";

import { createClient } from "@/lib/supabase/server";
import { GetPortfoliosResponse, Portfolio } from "@/types/database";

export async function getPortfolios(): Promise<GetPortfoliosResponse> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("portfolios")
      .select(
        `
            id,
            judul,
            slug,
            image_url,
            client_name,
            created_at,
            portfolio_categories (name)
        `
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error:", error.message);
      return { success: false, error: "Gagal mengambil data portfolio." };
    }

    const formattedData: Portfolio[] = data.map((item: any) => ({
      id: item.id,
      judul: item.judul,
      slug: item.slug,
      image_url: item.image_url,
      client_name: item.client_name,
      kategori: item.portfolio_categories?.name || null,
    }));

    return { success: true, data: formattedData };
  } catch (err) {
    console.error("Server Error:", err);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
