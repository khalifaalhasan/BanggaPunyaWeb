// export type ContactInput = {
//   nama: string;
//   email: string;
//   nomor_telepon: string;
//   judul: string;
//   pesan: string;
// };

import { z } from "zod";
import { ContactSchema } from "@/schemas/contact";

// atau bisa dengan
export type ContactInput = z.infer<typeof ContactSchema>;

export type ActionResponse = {
  success: boolean;
  message: string;
  error?: {
    [key: string]: string[];
  };
};
