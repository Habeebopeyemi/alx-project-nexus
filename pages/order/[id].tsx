import React from "react";
import { useRouter } from "next/router";
import CheckoutSteps from "@/presentation/components/order/Step";

const Checkout = () => {
  const router = useRouter();

  return (
    <div className="mt-18 lg:mt-25">
      <CheckoutSteps />
    </div>
  );
};

export default Checkout;
