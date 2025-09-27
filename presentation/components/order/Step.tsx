import React, { useState, ReactNode } from "react";
import { Button, message } from "antd";
import {
  AiOutlineHome,
  AiOutlineCar,
  AiOutlineCreditCard,
} from "react-icons/ai";

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
      <div className="p-6 border border-gray-300 rounded-lg text-center min-h-[140px]">
        <h2 className="text-lg font-medium">{steps[current].title}</h2>
        <p className="text-gray-500 mt-2">
          Content for {steps[current].title} step
        </p>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center gap-3">
        {current > 0 && <Button onClick={prev}>Previous</Button>}
        {current < steps.length - 1 ? (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={() => message.success("Checkout complete!")}>
            Done
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
