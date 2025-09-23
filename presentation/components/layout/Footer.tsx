"use client";

import React from "react";
import { FooterData, PolicyData } from "@/constants";
import LOGO from "@/public/assets/images/svgs/Logo_white.svg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Footer: React.FC = () => {
  return (
    <motion.div
      className="w-full bg-black text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      <div className="w-full max-w-[1100px] mx-auto px-5">
        <div className="md:flex md:gap-6">
          {/* Logo & Description */}
          <motion.div
            variants={itemVariants}
            className="w-[50%] md:basis-[30%] mx-auto md:my-6 text-center lg:text-start">
            <Image
              src={LOGO}
              alt="company logo"
              className="my-4 mx-auto lg:mx-0"
            />
            <p className="max-w-[16rem] text-[14px] mb-5">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than.
            </p>
          </motion.div>

          {/* FooterData Sections */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 md:basis-[70%] md:my-6">
            {FooterData.map(footer => (
              <motion.div
                key={footer.title}
                variants={itemVariants}
                className="mb-4 mx-auto text-center sm:text-start">
                <h3 className="font-extrabold mb-2">{footer.title}</h3>
                <p className="text-[14px] mb-4">{footer.description}</p>
                <ul className="text-[14px]">
                  {footer.links.map(link => (
                    <motion.li
                      key={link.name}
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="mb-2">
                      <a href={link.href}>{link.name}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Policy / Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center text-center py-4 md:flex-row md:justify-between">
          <ul className="flex flex-wrap justify-center gap-4 text-[14px]">
            {PolicyData.links.map(link => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-2">
                <a href={link.href}>
                  <Image
                    src={link.name}
                    alt="social_pages"
                    width={20}
                    height={10}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
