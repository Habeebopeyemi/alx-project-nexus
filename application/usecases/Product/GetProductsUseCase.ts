import type { IProductRepository } from "@/domain/repositories/IProductRepository";
import { IProductRepositoryToken } from "@/domain/repositories/IProductRepository";

import { Product } from "@/domain/entities/Product";
import { injectable, inject } from "tsyringe";

@injectable()
export class GetProductsUseCase {
  private productRepo: IProductRepository;

  constructor(
    @inject(IProductRepositoryToken) productRepo: IProductRepository
  ) {
    this.productRepo = productRepo;
  }

  async execute(): Promise<Product[]> {
    return this.productRepo.getProducts();
  }
}
