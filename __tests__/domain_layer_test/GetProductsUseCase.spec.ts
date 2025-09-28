import "reflect-metadata";
import { GetProductsUseCase } from "@/application/usecases/Product/GetProductsUseCase";
import { IProductRepository } from "@/domain/repositories/IProductRepository";
import { Product } from "@/domain/entities/Product";

/**
 * @description Mock implementation of IProductRepository for testing
 * Domain Layer (Entities + UseCases)
  Test pure logic in isolation (no API, no React, no RTK Query).
  Mock repositories to isolate use cases.
 */
class MockProductRepo implements IProductRepository {
  /**
   * @description Mock implementation of getProductById
   * @param id
   * @returns Promise<Product>
   */
  async getProductById(id: string): Promise<Product> {
    // Return a mock product if the id matches, otherwise throw an error
    if (id === "1") {
      return {
        id: "1",
        title: "Mock Product",
        price: 100,
        sku: "SKU-001",
        description: "Mock product description",
        stock: 10,
        in_stock: true
      };
    }
    throw new Error("Product not found");
  }

  useGetProducts(): { data?: Product[]; isLoading: boolean; error?: unknown } {
    throw new Error("Method not implemented.");
  }

  useGetProductById(id: string): {
    data?: Product;
    isLoading: boolean;
    error?: unknown;
  } {
    return {
      data: {
        id: "1",
        title: "Mock Product",
        price: 100,
        sku: "SKU-001",
        description: "Mock product description",
        stock: 10,
        in_stock: true
      },
      isLoading: false,
      error: undefined
    };
  }

  /**
   * @description Mock implementation of getProducts
   * @returns Promise<Product[]>
   */
  async getProducts(): Promise<Product[]> {
    return [{
      id: "1",
      title: "Mock Product",
      price: 100,
      sku: "SKU-001",
      description: "Mock product description",
      stock: 10,
      in_stock: true
    }];
  }
}

describe("GetProductsUseCase", () => {
  it("returns products from repository", async () => {
    const repo = new MockProductRepo();
    const useCase = new GetProductsUseCase(repo);

    const products = await useCase.execute();

    expect(products).toHaveLength(1);
    expect(products[0].title).toBe("Mock Product");
  });
});
