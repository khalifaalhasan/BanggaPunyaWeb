export type Service = {
  id: string;
  nama_layanan: string; // Dulu title
  slug: string;
  harga: number; // Dulu price_estimate
  deskripsi: string | null;
  image_url: string | null;
};

export type GetServicesResponse = {
  success: boolean;
  data?: Service[];
  error?: string;
};
