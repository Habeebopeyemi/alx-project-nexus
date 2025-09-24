import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "New Arrival",
    key: "arrival",
  },
  {
    label: "Bestseller",
    key: "seller",
  },
  {
    key: "products",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Featured Products
      </a>
    ),
  },
];

const ProductMenu = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = e => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default ProductMenu;
