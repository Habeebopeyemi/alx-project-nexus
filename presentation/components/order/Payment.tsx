"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Summary from "@/presentation/components/order/payment/Summary";
import PaymentCardDetails from "@/presentation/components/order/payment/PaymentCardDetails";
import { SummaryCardProduct } from "@/domain/entities";

// Example data for demonstration
const products: SummaryCardProduct[] = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
    image: "/assets/images/Iphone_14_pro_hash.png",
    price: 900,
    quantity: 2,
  },
  {
    id: 2,
    title: "Apple iPhone 14 Pro Max 128Gb vibrant white",
    image: "/assets/images/Iphone_14_pro_white.png",
    price: 1200,
    quantity: 1,
  },
];

const totals = {
  subtotal: 2347,
  tax: 50,
  shipping: 29,
  total: 2426,
};

const Payment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePaymentSubmit = async (formData: {
    cardNumber: string;
    cardHolder: string;
    expiry: string;
    cvv: string;
    sameAsBilling: boolean;
  }) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert(`Payment successful ✅ for card: ${formData.cardNumber}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[65vh] w-full flex flex-col md:flex-row justify-center items-start gap-6 px-4">
      {/* Summary Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full max-w-[600px]">
        <Summary
          products={products}
          address="1131 Dusty Townline, Jacksonville, TX 40322"
          shippingMethod="Free Regular Shipping"
          totals={totals}
        />
      </motion.div>

      {/* Payment Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full max-w-[500px]">
        <PaymentCardDetails
          onSubmit={handlePaymentSubmit}
          isSubmitting={isSubmitting}
        />
      </motion.div>
    </motion.div>
  );
};

export default Payment;
