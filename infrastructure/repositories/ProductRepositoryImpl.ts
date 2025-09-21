import { injectable } from "tsyringe";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { Product } from "../../domain/entities/Product";
import {
  productApi,
  useGetProductsQuery,
  useGetProductByIdQuery,
} from "../api/productApi";
import store from "../../store";

@injectable()
export class ProductRepositoryImpl implements IProductRepository {
  // ===== Promise-based (SSR, use cases, tests) =====
  async getProducts(): Promise<Product[]> {
    const result = await store.dispatch(
      productApi.endpoints.getProducts.initiate()
    );
    if ("error" in result) throw result.error;
    return result.data ?? [];
  }

  async getProductById(id: string): Promise<Product> {
    const result = await store.dispatch(
      productApi.endpoints.getProductById.initiate(id)
    );
    if ("error" in result) throw result.error;
    return result.data!;
  }

  // ===== Hook-based (UI with caching) =====
  useGetProducts() {
    const { data, isLoading, error } = useGetProductsQuery();
    return { data, isLoading, error };
  }

  useGetProductById(id: string) {
    const { data, isLoading, error } = useGetProductByIdQuery(id);
    return { data, isLoading, error };
  }
}
