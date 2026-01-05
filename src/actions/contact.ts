"use server";

import { createClient } from "@/lib/supabase/server";
import { ContactSchema } from "@/schemas/contact";
import { ActionResponse } from "@/types/database";

export async function submitContact(
  formData: FormData
): Promise<ActionResponse> {
  // Mulai Blok TRY (Coba jalankan ini...)
  try {
    const supabase = await createClient();

    // 1. Ambil Data Mentah
    const rawData = {
      nama: formData.get("nama"),
      email: formData.get("email"),
      nomor_telepon: formData.get("nomor_telepon"),
      judul: formData.get("judul"),
      pesan: formData.get("pesan"),
    };

    // 2. Validasi Zod
    // (Ini tidak akan throw error karena pakai safeParse, tapi tetap di dalam try biar rapi)
    const result = ContactSchema.safeParse(rawData);

    if (!result.success) {
      return {
        success: false,
        message: "Mohon periksa kembali inputan Anda.",
        error: result.error.flatten().fieldErrors,
      };
    }

    // 3. Simpan ke Database
    const { error } = await supabase.from("contacts").insert({
      nama: result.data.nama,
      email: result.data.email,
      nomor_telepon: result.data.nomor_telepon,
      judul: result.data.judul,
      pesan: result.data.pesan,
      status: "unread",
    });

    // Cek Error spesifik dari Supabase (Misal: Tabel tidak ditemukan/koneksi DB putus)
    if (error) {
      console.error("Supabase Error:", error.message);
      // Kita throw error agar ditangkap oleh blok catch di bawah (opsional),
      // atau langsung return error disini juga boleh.
      // Di sini kita return langsung biar spesifik:
      return {
        success: false,
        message: "Gagal menyimpan pesan ke database. Silakan coba lagi.",
      };
    }

    // 4. Jika semua lancar
    return {
      success: true,
      message:
        "Pesan Anda berhasil dikirim! Tim kami akan segera menghubungi Anda.",
    };
  } catch (err) {
    // --- Blok CATCH (Tangkap error tak terduga) ---
    // Ini akan jalan kalau ada codingan yang crash, memori penuh, atau error tak dikenal.

    console.error("Unexpected Server Error:", err);

    return {
      success: false,
      message: "Terjadi kesalahan fatal pada server. Silakan hubungi admin.",
    };
  }
}
