export type ProductDTO ={
  product_id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  stock: number;
  in_stock: boolean;
}

export interface GetAllProductsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductDTO[];
}
