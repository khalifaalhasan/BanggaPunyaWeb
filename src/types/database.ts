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
