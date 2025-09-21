import { IProductRepository } from "@/domain/repositories/IProductRepository";
import { Product } from "@/domain/entities/Product";

export class GetProductByIdUseCase {
  constructor(private repo: IProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return this.repo.getProductById(id);
  }
}
