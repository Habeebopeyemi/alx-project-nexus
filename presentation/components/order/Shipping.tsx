import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ShippingOption from "./shipping/ShippingOption";
import ShippingScheduleOption from "./shipping/ShippingScheduleOptionProps";

const Shipping = () => {
  const [selectedId, setSelectedId] = useState("free");
  const [scheduleDate, setScheduleDate] = useState<Date | null>(null);

  return (
    <div className="md:mb-30">
      <h2 className="text-xl text-black font-bold mb-4">Shipping Method</h2>
      <div>
        <ShippingOption
          id="free"
          label="Free Regular Shipping"
          description="Arrives on standard time"
          date="17 Oct, 2025"
          selected={selectedId === "free"}
          onSelect={setSelectedId}
        />

        <ShippingOption
          id="express"
          label="$8.50 Express Delivery"
          description="Get your delivery as soon as possible"
          date="1 Oct, 2025"
          selected={selectedId === "express"}
          onSelect={setSelectedId}
        />

        <ShippingScheduleOption
          id="schedule"
          label="Schedule Delivery"
          description="Pick a date when you want your delivery"
          selected={selectedId === "schedule"}
          onSelect={setSelectedId}
          scheduleDate={scheduleDate}
          onDateChange={setScheduleDate}
        />
      </div>
    </div>
  );
};

export default Shipping;
