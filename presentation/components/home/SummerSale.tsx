import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScreenWidth } from "@/presentation/hooks/useScreenWidth";
import SUMMERSALELARGE from "@/public/assets/images/banner_summer_sale_bg.jpg";
import SUMMERSALESMALL from "@/public/assets/images/banner_summer_sale_sm.jpg";
import Button from "../common/Button";
import Link from "next/link";

const SummerSale = () => {
  const width = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768); // Example breakpoint for mobile
  }, [width]);
  return (
    <div className="relative w-full h-[1000px] lg:h-[500px] aspect-square overflow-hidden">
      {/* Background Image */}
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

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2 text-center p-5">
        <motion.div
          className="w-[80%] mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}>
          {/* Heading */}
          <motion.h1
            className="text-white text-[60px] md:text-[70px] font-[10]"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}>
            Big Summer <span className="font-bold">Sale</span>
            <motion.span
              className="block text-[16px] font-normal text-gray-500 mt-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              Best summer deal is here, get exclusive discount at company price!
            </motion.span>
          </motion.h1>

          {/* Button */}
          <motion.div
            className="mt-10"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}>
            <Link href={"/products"}>
              <Button
                label="Shop Now"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SummerSale;
