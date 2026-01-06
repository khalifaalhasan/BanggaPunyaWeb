"user server";
import { createClient } from "@/lib/supabase/server";
import { GetServicesResponse, Service } from "@/types/database";
import { Database } from "@/types/supabase";

type ServiceRaw = Database["public"]["Tables"]["services"]["Row"] & {
  service_categories: {
    name: string;
  } | null;
};

export async function getServices(): Promise<GetServicesResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("services")
      .select("*, service_categories(name)")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error (getServices):", error.message);
      return { success: false, error: "Gagal mengambil data layanan." };
    }

    const formattedData: Service[] = (data as unknown as ServiceRaw[]).map(
      (item) => ({
        ...item,
        category_name: item.service_categories?.name || null,
        service_categories: undefined as never,
      })
    );

    return { success: true, data: formattedData };
  } catch (err) {
    console.error("Server Error (getServices):", err);
    return { success: false, error: "Terjadi kesalahan pada server." };
  }
}
