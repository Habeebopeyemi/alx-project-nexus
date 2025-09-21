export interface CreateProductCategoryResponseDTO {
  category_id: string;
  name: string;
  slug: string;
  products: ProductInCategoryDTO[];
}

export interface ProductInCategoryDTO {
  product_id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  stock: number;
  in_stock: boolean;
}

export interface GetProductCategoriesResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductCategoryDTO[];
}

export interface ProductCategoryDTO {
  category_id: string;
  name: string;
  slug: string;
  products: ProductInCategoryDTO[];
}
