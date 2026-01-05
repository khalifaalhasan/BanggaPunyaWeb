"user server";
import { createClient } from "@/lib/supabase/server";
import { Service, GetServicesResponse } from "@/types/database";

export async function getServices(): Promise<GetServicesResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("services")
      .select("id, nama_layanan, slug, harga, deskripsi, image_url")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Supabase error:", error.message);
      return { success: false, error: "Gagal mengambil data layanan." };
    }

    return { success: true, data: data as Service[] };
  } catch (err) {
    console.error("Server Error:", err);
    return { success: false, error: "Terjadi kesalahan server." };
  }
}
