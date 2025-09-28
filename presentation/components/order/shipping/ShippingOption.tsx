import React from "react";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { ShippingOptionProps } from "@/domain/entities";

const ShippingOption: React.FC<ShippingOptionProps> = ({
  id,
  label,
  description,
  date,
  selected,
  onSelect,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className={`flex justify-between items-center border-[.5px] rounded-lg p-2 mb-3 cursor-pointer ${
        selected ? "border-black bg-gray-50" : "border-gray-300"
      }`}
      onClick={() => onSelect(id)}>
      <div className="flex items-center gap-3 text-black">
        <input
          type="radio"
          name="shipping"
          checked={selected}
          onChange={() => onSelect(id)}
          className="accent-black focus:ring-black focus:outline-none"
        />
        <label className="flex flex-col">
          <span className="text-[.75rem] text-gray-700">{label}</span>
          <span className="text-[.7rem] text-gray-500">{description}</span>
        </label>
      </div>
      {date && <div className="text-gray-700 text-[.75rem]">{date}</div>}
    </motion.div>
  );
};
export default ShippingOption;
