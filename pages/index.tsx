import Image from "next/image";
import HERO from "@/public/assets/images/svgs/hero.svg";
import { ProductList } from "@/presentation/components/product/ProductList";
import { GetServerSideProps } from "next";
import { container } from "tsyringe";
import { GetProductsUseCase } from "@/application/usecases/Product/GetProductsUseCase";

// Server-side rendering to fetch products at request time
// export const getServerSideProps: GetServerSideProps = async () => {
//   const useCase = container.resolve(GetProductsUseCase);
//   const products = await useCase.execute();

//   return {
//     props: { products },
//   };
// };


export default function Home() {
  return (
    <main className="w-full px-5">
      <div className="relative w-full h-[400px] lg:h-[500px] aspect-square mb-3 md:mb-4 overflow-hidden rounded-lg">
        <Image
          src={HERO}
          alt="hero image"
          className="w-full h-full object-cover rounded-t-md"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2 text-center p-5">
          <h1 className="text-white text-[40px] md:text-[32px] font-bold">
            Find your favourite place here!
          </h1>
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
}
