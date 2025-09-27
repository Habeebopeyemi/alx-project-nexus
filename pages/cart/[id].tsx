"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import CartCard from "@/presentation/components/cart/CartCard";
import Button from "@/presentation/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";

const IPHONE = "/assets/images/Iphone_14_pro_hash.png";
const IPHONE_WHITE = "/assets/images/Iphone_14_pro_white.png";

const Cart = () => {
  const router = useRouter();
  const { id } = router.query; // userId to fetch respective cart

  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      sku: "#23446383278926",
      price: 900,
      quantity: 1,
      image: IPHONE,
    },
    {
      id: "2",
      title: "Apple iPhone 14 Pro Max 128Gb White",
      sku: "#23446383278926",
      price: 1500,
      quantity: 1,
      image: IPHONE_WHITE,
    },
  ]);

  const [discountCode, setDiscountCode] = useState("");
  const [bonusCard, setBonusCard] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0); // percentage e.g. 10 = 10%
  const [appliedBonus, setAppliedBonus] = useState(0); // fixed amount

  // Handle item updates
  const handleIncrease = (id: string) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: string) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  // Discount + Bonus methods
  const applyDiscountCode = () => {
    if (discountCode.toLowerCase() === "summer10") {
      setAppliedDiscount(10); // 10% discount
    } else {
      setAppliedDiscount(0);
    }
  };

  const applyBonusCard = () => {
    if (bonusCard === "12345") {
      setAppliedBonus(50); // flat $50 off
    } else {
      setAppliedBonus(0);
    }
  };

  // Calculations
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const tax = subtotal * 0.05; // 5% tax
  const shipping = subtotal > 2000 ? 0 : 29;
  const total = subtotal - discountAmount - appliedBonus + tax + shipping;

  return (
    <div className="mt-19 p-5">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-2xl text-black font-bold mb-4">Shopping Cart</h1>
        <div className="lg:flex gap-5">
          {/* Cart Items */}
          <div className="mx-auto">
            <AnimatePresence>
              {cartItems.map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}>
                  <CartCard
                    {...item}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    onRemove={handleRemove}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.div
            className="max-w-[600px] lg:basis-[50%] mx-auto border rounded-xl border-gray-400 shadow p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h3 className="text-black font-bold mb-5">Order Summary</h3>

            {/* Discount Code */}
            <div className="text-gray-500 text-sm grid mb-5">
              <label htmlFor="discount">Discount code / Promo code</label>
              <div className="flex gap-2">
                <input
                  name="discount"
                  placeholder="Code"
                  value={discountCode}
                  onChange={e => setDiscountCode(e.target.value)}
                  className="outline-0 p-2 border rounded-lg flex-1"
                />
                <Button
                  label="Apply"
                  size="sm"
                  variant="outline"
                  onClick={applyDiscountCode}
                  className="font-bold hover:text-white"
                />
              </div>
            </div>

            {/* Bonus Card */}
            <div className="text-gray-500 text-sm grid mb-5">
              <label htmlFor="bonus">Your bonus card number</label>
              <div className="flex gap-2">
                <input
                  name="bonus"
                  placeholder="Card No."
                  value={bonusCard}
                  onChange={e => setBonusCard(e.target.value)}
                  className="outline-0 p-2 border rounded-lg flex-1"
                />
                <Button
                  label="Apply"
                  size="sm"
                  variant="outline"
                  onClick={applyBonusCard}
                  className="font-bold hover:text-white"
                />
              </div>
            </div>

            {/* Totals */}
            <motion.div
              key={total}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}>
              <div className="flex justify-between text-black mb-2">
                <p className="text-sm">Subtotal</p>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-green-600 mb-2">
                  <p className="text-sm">Discount ({appliedDiscount}%)</p>
                  <span>- ${discountAmount.toFixed(2)}</span>
                </div>
              )}
              {appliedBonus > 0 && (
                <div className="flex justify-between text-green-600 mb-2">
                  <p className="text-sm">Bonus Applied</p>
                  <span>- ${appliedBonus.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-black mb-2">
                <p className="text-sm">Estimated Tax (5%)</p>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-black mb-2">
                <p className="text-sm">Shipping</p>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between text-black text-lg font-bold mt-3">
                <p>Total</p>
                <span>${total.toFixed(2)}</span>
              </div>
            </motion.div>

            <Button
              label="Checkout"
              variant="primary"
              size="md"
              className="border-none rounded-md w-full mt-6"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
