// pages/products/index.tsx
import { GetServerSideProps } from "next";
import { container } from "tsyringe";
import { GetProductsUseCase } from "@/application/usecases/Product/GetProductsUseCase";
import { Product } from "@/domain/entities/Product";
export const getServerSideProps: GetServerSideProps = async () => {
  const useCase = container.resolve(GetProductsUseCase);
  const products = await useCase.execute();

  return {
    props: { products },
  };
};

export const ProductsPage: React.FC<Product[]> = products => {
  return (
    <div>
      <h1>All Products</h1>
      {products.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
};
