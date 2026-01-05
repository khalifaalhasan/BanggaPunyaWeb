import { Database } from "@/types/supabase"; // Import kamus database kita
import { z } from "zod";
import { ContactSchema } from "@/schemas/contact";

// --- 1. HELPER (Biar kodingan bersih) ---
type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

// --- 2. TIPE DATA UTAMA (Ambil langsung dari Supabase) ---

export type Client = Tables<"our_clients">;
// ^ Otomatis tau isinya: id, nama, image_url, dll.

export type Service = Tables<"services"> & {
  category_name?: string | null; // Kolom tambahan dari join
};

export type Portfolio = Tables<"portfolios"> & {
  kategori?: string | null; // Kolom tambahan dari join
};

// INI DIA BINTANG UTAMA KITA: BLOG POST
export type Post = Tables<"blog_posts">;
// ^ Otomatis tau isinya: id, title, slug, content, thumbnail_url, dll.

// --- 3. TIPE DATA RESPONSE API ---

export type GetClientsResponse = {
  success: boolean;
  data?: Client[];
  error?: string;
};

export type GetServicesResponse = {
  success: boolean;
  data?: Service[];
  error?: string;
};

export type GetPortfoliosResponse = {
  success: boolean;
  data?: Portfolio[];
  error?: string;
};

export type GetPostsResponse = {
  success: boolean;
  data?: Post[];
  error?: string;
};

// --- 4. TIPE DATA INPUT (FORM) ---

export type ContactInput = z.infer<typeof ContactSchema>;

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string[];
  };
};
