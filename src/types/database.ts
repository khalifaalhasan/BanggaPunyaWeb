export type Client = {
  id: string;
  nama: string;
  image_url: string | null;
  website_url: string | null;
};

export type GetClientsResponse = {
  success: boolean;
  data?: Client[];
  error?: string;
};

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

export type Portfolio = {
  id: string;
  judul: string;
  slug: string;
  kategori: string | null;
  client_name: string | null;
  image_url: string | null;
};

export type GetPortfoliosResponse = {
  success: boolean;
  data?: Portfolio[];
  error?: string;
};
