import React, { useState, ReactNode } from "react";
import { message } from "antd";
import {
  AiOutlineHome,
  AiOutlineCar,
  AiOutlineCreditCard,
} from "react-icons/ai";
import Address from "./Address";
import Shipping from "./Shipping";
import Payment from "./Payment";
import Button from "../common/Button";

interface Step {
  title: string | ReactNode;
  icon: ReactNode;
}

const steps: Step[] = [
  { title: "Address", icon: <AiOutlineHome size={24} /> },
  { title: "Shipping", icon: <AiOutlineCar size={24} /> },
  { title: "Payment", icon: <AiOutlineCreditCard size={24} /> },
];

const CheckoutSteps: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(prev => prev + 1);
  const prev = () => setCurrent(prev => prev - 1);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Stepper */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer transition-colors ${
                isActive ? "text-black font-semibold" : "text-gray-400"
              }`}
              onClick={() => setCurrent(index)}>
              <div className="mb-1">{step.icon}</div>
              <span className="text-sm">{step.title}</span>
            </div>
          );
        })}
      </div>

      {/* Step content */}
      {steps[current].title === "Address" && <Address />}
      {steps[current].title === "Shipping" && <Shipping />}
      {steps[current].title === "Payment" && <Payment />}

      {/* Controls */}
      <div className="mt-6 flex justify-center md:justify-end gap-3">
        {current > 0 && (
          <Button
            label="Back"
            variant="outline"
            className="basis-[30%] border-[.25px]"
            onClick={prev}
          />
        )}
        {current < steps.length - 1 ? (
          <Button
            label=" Next"
            variant="primary"
            className="basis-[30%]"
            onClick={next}
          />
        ) : (
          <Button
            label="Done"
            variant="primary"
            onClick={() => message.success("Checkout complete!")}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
