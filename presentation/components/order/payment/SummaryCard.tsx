import React from "react";
import Image from "next/image";
import { SummaryCardProps } from "@/domain/entities";
import { motion } from "framer-motion";

const SummaryCard: React.FC<SummaryCardProps> = ({
  image,
  title,
  price,
  quantity = 1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-between items-center gap-2 mx-auto mb-3 p-2 border border-gray-200 rounded-xl bg-[#EFEFF6]">
      <div className="flex items-center gap-2">
        {/* Product Image */}
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-cover rounded-md"
        />

        {/* Product Info */}
        <h4 className="text-black text-sm max-w-[300px] line-clamp-2">
          {title}{" "}
          {quantity > 1 && (
            <span className="text-xs text-gray-500">x{quantity}</span>
          )}
        </h4>
      </div>

      <p className="text-lg text-gray-600">${price * quantity}</p>
    </motion.div>
  );
};

export default SummaryCard;
