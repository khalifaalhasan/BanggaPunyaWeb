import { z } from "zod";
import { ContactInput } from "@/types/database";

export const ContactSchema = z.object({
  nama: z.string().min(3, { message: "Nama harus diisi minimal 3 karakter" }),

  email: z.string().email({ message: "Format email tidak valid" }),

  nomor_telepon: z
    .string()
    .min(10, { message: "Nomor telepon minimal 10 digit" })
    .regex(/^[0-9]+$/, { message: "Nomor telepon hanya boleh angka" }),

  judul: z.string().min(3, { message: "Judul harus diisi minimal 3 karakter" }),

  pesan: z
    .string()
    .min(10, { message: "Pesan terlalu pendek (minimal 10 karakter)" }),
});



