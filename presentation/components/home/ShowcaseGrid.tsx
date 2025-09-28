import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScreenWidth } from "@/presentation/hooks/useScreenWidth";
import PLAYSTATIONSMALL from "@/public/assets/images/PlayStation_phone.png";
import PLAYSTATIONLARGE from "@/public/assets/images/PlayStation.png";
import HEADPHONESMALL from "@/public/assets/images/apple_headset.png";
import HEADPHONELARGE from "@/public/assets/images/apple_headset_lg.png";
import APPLEVISIONSMALL from "@/public/assets/images/apple_vision_phone.png";
import APPLEVISIONLARGE from "@/public/assets/images/apple_vision.png";
import MACBOOKSMALL from "@/public/assets/images/Macbook_sm.png";
import MACBOOKLARGE from "@/public/assets/images/MacBook.png";
import Button from "../common/Button";
import Link from "next/link";

const ShowcaseGrid = () => {
  const width = useScreenWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768); // Example breakpoint for mobile
  }, [width]);
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* left flex */}
      <div className="w-full">
        <div className="w-full">
          <div className="text-center bg-white">
            <div className="text-black max-w-[400px] mx-auto p-5 md:flex gap-2 md:max-w-[600] md:pl-0 md:pb-0 md:pt-15 lg:pt-4 lg:ml-0">
              {/* Image animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} // ✅ ensures animation runs only once
                className="mx-auto">
                <Image
                  src={isMobile ? PLAYSTATIONSMALL : PLAYSTATIONLARGE}
                  alt="summer sale image"
                  className="object-cover"
                  width={isMobile ? 250 : undefined}
                />
              </motion.div>

              {/* Text animation */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-5">
                <h3 className="text-3xl text-gray-700">
                  Playstation <span className="font-bold text-black">5</span>
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center bg-[#EDEDED]">
            <motion.div
              className="text-black max-w-[400px] mx-auto p-5 md:flex gap-2 md:pl-0 md:pt-0 md:ml-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              {isMobile ? (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Image
                    src={HEADPHONESMALL}
                    alt="summer sale image"
                    className="mx-auto object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Image
                    src={HEADPHONELARGE}
                    alt="summer sale image"
                    className="object-cover lg:w-[70px]"
                  />
                </motion.div>
              )}

              <motion.div
                className="p-5 md:max-h-[150px] md:my-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                <h3 className="text-3xl text-gray-700 lg:text-2xl">
                  Apple AirPods{" "}
                  <span className="font-bold text-black">Max</span>
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Computational audio. Listen, it's powerful
                </p>
              </motion.div>
            </motion.div>
          </div>
          <div className="text-center bg-[#353535]">
            <motion.div
              className="text-black max-w-[400px] mx-auto p-5 md:flex gap-2 md:pl-0 md:ml-0 lg:pt-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              {isMobile ? (
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}>
                  <Image
                    src={APPLEVISIONSMALL}
                    alt="summer sale image"
                    className="mx-auto w-[250px] object-cover"
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: -60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}>
                  <Image
                    src={APPLEVISIONLARGE}
                    alt="summer sale image"
                    className="object-cover md:w-[250px] lg:w-[150px]"
                  />
                </motion.div>
              )}

              <motion.div
                className="p-5 text-white md:max-h-[150px] md:my-auto lg:p-3 lg:my-[2px] xl:my-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                <h3 className="text-3xl lg:text-2xl">
                  Apple Vision <span className="font-bold">Pro</span>
                </h3>
                <p className="text-sm mt-2">
                  An immersive way to experience entertainment
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* right flex */}
      <div className="text-center p-5 bg-[#EDEDED] md:flex items-center md:text-right md:pr-0 lg:text-left">
        {/* Image */}
        <motion.div
          className="text-black mx-auto md:mr-0 md:order-2"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          {isMobile ? (
            <Image
              src={MACBOOKSMALL}
              alt="summer sale image"
              className="mx-auto object-cover"
              width={250}
            />
          ) : (
            <Image
              src={MACBOOKLARGE}
              alt="summer sale image"
              className="object-cover md:w-[170px] lg:w-[200px]"
            />
          )}
        </motion.div>

        {/* Text */}
        <motion.div
          className="max-w-[400px] pb-5 mx-auto text-black md:leading-5 lg:max-w-[350px]"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
          <h3 className="font-extralight text-3xl md:mb-3">
            Macbook <span className="font-bold">Air</span>
          </h3>
          <p className="text-gray-600">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>

          {/* Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}>
            <Link href={"/products"}>
              <Button
                label="Shop Now"
                variant="outline"
                className="w-[70%] mt-10 border-gray-500 text-gray-500 hover:bg-black hover:text-white"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShowcaseGrid;
