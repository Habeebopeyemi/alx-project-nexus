import React, { useState } from "react";
import Image from "next/image";
const CARD = "/assets/images/debit_card.png";
import { PaymentCardDetailsProps } from "@/domain/entities";
import { motion } from "framer-motion";
import { InputField } from "../../common/InputField";

const PaymentCardDetails: React.FC<PaymentCardDetailsProps> = ({
  defaultValues,
  showAddressOption = true,
  onSubmit,
  isSubmitting,
}) => {
  const [cardHolder, setCardholder] = useState(defaultValues?.cardholder || "");
  const [cardNumber, setCardNumber] = useState(defaultValues?.cardNumber || "");
  const [expiry, setExpiry] = useState(defaultValues?.expiry || "");
  const [cvv, setCvv] = useState(defaultValues?.cvv || "");
  const [sameAsBilling, setSameAsBilling] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ cardHolder, cardNumber, expiry, cvv, sameAsBilling });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[600px] mx-auto text-sm p-5">
      <h3 className="text-black font-bold mb-5">Credit Card</h3>

      {/* card image */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-5 max-w-[300px] mx-auto">
        <Image src={CARD} alt="debit card" width={300} height={200} />
      </motion.div>

      {/* card details */}
      <InputField
        label="Cardholder Name"
        name="cardholder"
        placeholder="Cardholder Name"
        value={cardHolder}
        onChange={e => setCardholder(e.target.value)}
      />

      <InputField
        label="Card Number"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
      />

      <div className="flex gap-3">
        <InputField
          label="Expiry Date"
          name="expiry"
          placeholder="MM/YY"
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          className="flex-1"
        />
        <InputField
          label="CVV"
          name="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={e => setCvv(e.target.value)}
          className="flex-1"
        />
      </div>

      {/* optional address checkbox */}
      {showAddressOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-gray-700 text-sm my-5">
          <input
            id="sameAsBilling"
            type="checkbox"
            checked={sameAsBilling}
            onChange={e => setSameAsBilling(e.target.checked)}
            className="accent-black"
          />
          <label htmlFor="sameAsBilling">Same as billing address</label>
        </motion.div>
      )}

      {/* submit button */}
      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        className="w-full bg-black text-white py-2 px-4 rounded-lg font-medium mt-4">
        Save Card
      </motion.button>
    </motion.form>
  );
};

export default PaymentCardDetails;
