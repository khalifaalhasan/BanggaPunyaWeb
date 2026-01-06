"use server";
import { createClient } from "@/lib/supabase/server";
import {
  Post,
  GetPostsResponse,
  GetSinglePostResponse,
} from "@/types/database";

export async function getPosts(): Promise<GetPostsResponse> {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error (getPosts):", error.message);
      return { success: false, error: "Gagal mengambil data artikel." };
    }

    return { success: true, data: data as Post[] };
  } catch (err) {
    console.error("Server Error (getPosts):", err);
    return { success: false, error: "Terjadi kesalahan server." };
  }
}

export async function getPostBySlug(
  slug: string
): Promise<GetSinglePostResponse> {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) {
      return { success: false, error: "Artikel tidak ditemukan" };
    }

    return { success: true, data: data as Post };
  } catch (err) {
    console.error("Server error", err);
    return { success: false, error: "Terjadi kesalahan pada server" };
  }
}


