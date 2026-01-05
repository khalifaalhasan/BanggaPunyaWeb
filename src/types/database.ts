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
