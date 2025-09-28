import React from "react";
import SummaryCard from "./SummaryCard";
import { SummaryProps } from "@/domain/entities";
import { motion } from "framer-motion";

const Summary: React.FC<SummaryProps> = ({
  products,
  address,
  shippingMethod,
  totals,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[600px] mx-auto border rounded-xl border-gray-200 shadow p-5">
      <h3 className="text-black font-bold mb-5">Summary</h3>

      {/* Product Summary */}
      <div className="mb-6">
        {products.map(p => (
          <SummaryCard
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            quantity={p.quantity}
          />
        ))}
      </div>

      {/* Billing details */}
      <div className="text-gray-500 text-sm grid mb-5">
        <h4>Address</h4>
        <p className="text-black">{address}</p>
      </div>

      <div className="text-gray-500 text-sm grid mb-5">
        <h4>Shipping method</h4>
        <p className="text-black">{shippingMethod}</p>
      </div>

      {/* Totals */}
      <div>
        <div className="flex justify-between text-black mb-3">
          <p className="text-sm">Subtotal</p>
          <span className="font-bold">${totals.subtotal}</span>
        </div>
        <div className="flex justify-between text-black mb-3">
          <p className="text-sm">Estimated tax</p>
          <span className="font-bold">${totals.tax}</span>
        </div>
        <div className="flex justify-between text-black mb-3">
          <p className="text-sm">Estimated shipping & handling</p>
          <span className="font-bold">${totals.shipping}</span>
        </div>
        <div className="flex justify-between text-black border-t border-gray-300 pt-3">
          <p className="text-sm">Total</p>
          <span className="font-bold text-lg">${totals.total}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
