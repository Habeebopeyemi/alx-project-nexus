import { Product } from "@/domain/entities/Product";

export const IProductRepositoryToken = Symbol("IProductRepository");

export interface IProductRepository {
  // Async methods (for use cases, SSR, tests)
  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;

  // Hook methods (for UI with caching)
  useGetProducts(): { data?: Product[]; isLoading: boolean; error?: unknown };
  useGetProductById(id: string): {
    data?: Product;
    isLoading: boolean;
    error?: unknown;
  };
}
