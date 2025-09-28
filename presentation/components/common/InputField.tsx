import React from "react";
import { InputFieldProps } from "@/domain/entities";
import { motion } from "framer-motion";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  className,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`text-gray-700 text-sm grid mb-4 p-2 border rounded-lg ${className}`}>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="outline-none flex-1 placeholder-gray-400"
    />
  </motion.div>
);
