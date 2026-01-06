"use server";

import { createClient } from "@/lib/supabase/server";
import { GetPortfoliosResponse, Portfolio } from "@/types/database";
import { Database } from "@/types/supabase";

type PortfolioRaw = Database["public"]["Tables"]["portfolios"]["Row"] & {
  portfolio_categories: {
    name: string;
  } | null;
};

export async function getPortfolios(): Promise<GetPortfoliosResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("portfolios")
      .select("*, portfolio_categories(name)")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error (getPortfolios):", error.message);
      return { success: false, error: "Gagal mengambil data portfolio." };
    }

    const formattedData: Portfolio[] = (data as unknown as PortfolioRaw[]).map(
      (item) => ({
        ...item,

        kategori: item.portfolio_categories?.name || null,

        portfolio_categories: undefined as never,
      })
    );

    return { success: true, data: formattedData };
  } catch (err) {
    console.error("Server Error (getPortfolios):", err);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
