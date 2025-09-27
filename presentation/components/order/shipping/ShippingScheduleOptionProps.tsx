import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { ShippingScheduleOptionProps } from "@/domain/entities";
import DatePicker from "react-datepicker";

const ShippingScheduleOption: React.FC<ShippingScheduleOptionProps> = ({
  id,
  label,
  description,
  selected,
  onSelect,
  scheduleDate,
  onDateChange,
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
        <label>
          <span className="p-1 text-gray-700 text-[.75rem]">{label}</span>
          <span className="block text-[.7rem] text-gray-500">
            {description}
          </span>
        </label>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}>
            <DatePicker
              selected={scheduleDate}
              onChange={onDateChange}
              placeholderText="Select Date"
              dateFormat="yyyy-MM-dd"
              className="text-[12px] text-center text-black bg-transparent border-gray-300 placeholder:text-gray-400 focus:outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default ShippingScheduleOption;
