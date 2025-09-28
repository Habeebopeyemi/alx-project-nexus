import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { container } from "tsyringe";
import { GetProductsUseCase } from "@/application/usecases/Product/GetProductsUseCase";
import ProductMenu from "@/presentation/components/home/ProductMenu";

const ProductsPage = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    console.log(token);
  }, []);
  return (
    <div>
      <>
        <ProductMenu />
      </>
    </div>
  );
};

export default ProductsPage;
