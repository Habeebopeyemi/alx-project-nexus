import "reflect-metadata";
import { container } from "tsyringe";
import { GetProductsUseCase } from "@/application/usecases/Product/GetProductsUseCase";

describe("DI Container", () => {
  it("resolves GetProductsUseCase with ProductRepositoryImpl", () => {
    const useCase = container.resolve(GetProductsUseCase);

    expect(useCase).toBeInstanceOf(GetProductsUseCase);
    expect(
      Reflect.getMetadata("design:paramtypes", GetProductsUseCase)[0].name
    ).toContain("Object"); // means it's bound
  });
});
