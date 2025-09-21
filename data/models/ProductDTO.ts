export type ProductDTO = {
  id: string | number;
  name: string;
  description?: string;
  price: number | string;
  image_url?: string;
  sku?: string;
  category?: string;
};
