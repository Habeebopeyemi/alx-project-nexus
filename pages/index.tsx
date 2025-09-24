import { useState, useEffect } from "react";
import Image from "next/image";
import HEROLAPTOP from "@/public/assets/images/Iphone_bg_laptop.png";
import HEROMOBILE from "@/public/assets/images/Iphone_bg_phone.png";

import { motion } from "framer-motion";
import { useScreenWidth } from "@/presentation/hooks/useScreenWidth";
import Button from "@/presentation/components/common/Button";
import ShowcaseGrid from "@/presentation/components/home/ShowcaseGrid";
import SummerSale from "@/presentation/components/home/SummerSale";
import ProductMenu from "@/presentation/components/home/ProductMenu";
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
      <div className="lg:max-w-[1100px] lg:max-h-[500px] mx-auto px-5 pt-5">
        <div className="w-full md:flex justify-center gap-3 lg:gap-1">
          {/* Hero Text */}
          <motion.div
            className="w-full h-full md:basis-[50%] text-center md:text-start p-10 md:p-5 md:my-auto lg:max-w-[600px]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-gray-500 text-[2rem] md:text-[32px]">
              Pro.Beyond
            </h1>
            <h1 className="text-white text-[60px] md:text-[70px] font-[10]">
              IPhone 14 <span className="font-bold">Pro</span>
              <span className="block text-[16px] font-normal text-gray-500 mt-2">
                Created to change everything for the better. For everyone
              </span>
            </h1>
            <Button
              label="Shop Now"
              variant="outline"
              className="mt-10 border-white text-white hover:bg-white hover:text-black"
            />
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="max-w-[400px] md:max-w-full md:basis-[45%] mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}>
            <Image
              src={isMobile ? HEROMOBILE : HEROLAPTOP}
              alt="hero image"
              className="w-full max-w-[500px] max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* Product showcase grid */}
      <>
        {/* left flex */}
        <ShowcaseGrid />
      </>
      {/* Product menu */}
      <>
        <ProductMenu />
      </>
      {/* Summer sale section */}
      <>
        <SummerSale />
      </>
    </main>
  );
}
