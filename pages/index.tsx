import { useState, useEffect } from "react";
import Image from "next/image";
import HEROLAPTOP from "@/public/assets/images/Iphone_bg_laptop.png";
import HEROMOBILE from "@/public/assets/images/Iphone_bg_phone.png";
import SUMMERSALELARGE from "@/public/assets/images/banner_summer_sale_bg.jpg";
import SUMMERSALESMALL from "@/public/assets/images/banner_summer_sale_sm.jpg";
import { ProductList } from "@/presentation/components/product/ProductList";
import { useScreenWidth } from "@/presentation/hooks/useScreenWidth";
import Button from "@/presentation/components/common/Button";
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
  const width = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768); // Example breakpoint for mobile
  }, [width]);

  return (
    <main className="w-full bg-black mt-15">
      {/* Hero section */}
      <div className="lg:max-w-[1100px] max-h-[500px] mx-auto px-5 pt-5">
        <div className="w-full md:flex justify-center gap-3 lg:gap-1">
          <div className="w-full h-full md:basis-[50%] text-center md:text-start p-10 md:p-5 md:my-auto lg:max-w-[600px]">
            <h1 className="text-gray-500 text-[2rem] md:text-[32px]">
              Pro.Beyond
            </h1>
            <h1 className="text-white text-[60px] md:text-[70px] font-[10]">
              IPhone 14 <span className="font-bold">Pro</span>
              <span className="block text-[16px] font-normal text-gray-500 mt-2">
                Created to change everything for the better. For everyone
              </span>
            </h1>
            <div>
              <Button
                label="Shop Now"
                variant="outline"
                className="mt-10 border-white text-white hover:bg-white hover:text-black"
              />
            </div>
          </div>
          <div className="max-w-[400px] md:max-w-full md:basis-[45%] mx-auto">
            {isMobile ? (
              <Image
                src={HEROMOBILE}
                alt="hero image"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={HEROLAPTOP}
                alt="hero image"
                className="w-full max-w-[500px] max-h-[500px] object-cover"
              />
            )}
          </div>
        </div>
      </div>
      {/* Summer sale section */}
      <div className="relative w-full h-[1000px] lg:h-[500px] aspect-square overflow-hidden">
        {isMobile ? (
          <Image
            src={SUMMERSALESMALL}
            alt="summer sale image"
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={SUMMERSALELARGE}
            alt="summer sale image"
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2 text-center p-5">
          <div className="w-[80%] mx-auto">
            <h1 className="text-white text-[60px] md:text-[70px] font-[10]">
              Big Summer <span className="font-bold">Sale</span>
              <span className="block text-[16px] font-normal text-gray-500 mt-2">
                Best summer deal is here, get exclusive discount at company
                price!
              </span>
            </h1>
            <div>
              <Button
                label="Shop Now"
                variant="outline"
                className="mt-10 border-white text-white hover:bg-white hover:text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
