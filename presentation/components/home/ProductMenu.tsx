import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Arrival from "./tabs/Arrival";
import BestSeller from "./tabs/BestSeller";
import Featured from "./tabs/Featured";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "New Arrival",
    children: <Arrival />,
  },
  // {
  //   key: "2",
  //   label: "Bestseller",
  //   children: <BestSeller />,
  // },
  // {
  //   key: "3",
  //   label: "Featured Products",
  //   children: <Featured />,
  // },
];

const ProductMenu = () => {
  return (
    <div className="max-w-[300px] mt-20 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1024px] mx-auto">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default ProductMenu;
