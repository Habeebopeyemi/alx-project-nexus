"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AddressFormData, AddressModalProps } from "@/domain/entities";

const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  initialData,
  onClose,
  onSave,
}) => {
  const [form, setForm] = useState<AddressFormData>({
    label: "",
    name: "",
    address: "",
    phone: "",
  });

  // populate form when editing
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-white text-black rounded-xl shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">
              {initialData ? "Edit Address" : "Add New Address"}
            </h2>

            <div className="grid gap-3 text-gray-900">
              <input
                name="label"
                placeholder="Label (HOME, WORK)"
                value={form.label}
                onChange={handleChange}
                className="border-[.5px] p-2 rounded"
              />
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="border-[.5px] p-2 rounded"
              />
              <input
                name="address"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
                className="border-[.5px] p-2 rounded"
              />
              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="border-[.5px] p-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={onClose}
                className="px-4 py-2 border rounded hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddressModal;
