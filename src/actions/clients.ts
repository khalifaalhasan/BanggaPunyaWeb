"use server";

import { createClient } from "@/lib/supabase/server";
import { Client, GetClientsResponse } from "@/types/database";

export async function getClients(): Promise<GetClientsResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("our_clients")
      .select("id, nama, image_url, website_url")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error:", error.message);
      return { success: false, error: "Gagal mengambil data klien." };
    }

    return { success: true, data: data as Client[] };
  } catch (err) {
    console.error("Server Error:", err);
    return { success: false, error: "Terjadi kesalahan server." };
  }
}
