import { FooterProps, PolicyProps } from "@/domain/entities";
import { Product } from "@/domain/entities/Product";
import { CartItem } from "@/domain/entities/Cart";
const ASSETPATH = "/assets/images";

export const FooterData: FooterProps[] = [
  {
    title: "Services",
    description: "",
    links: [
      { name: "Bonus program", href: "#" },
      { name: "Gift cards", href: "#" },
      { name: "Credit and payment", href: "#" },
      { name: "Service contracts", href: "#" },
      { name: "Non-cash account", href: "#" },
      { name: "Payment", href: "#" },
    ],
  },
  {
    title: "Assistance to the buyer",
    description: "",
    links: [
      { name: "Find an order", href: "#" },
      { name: "Terms of delivery", href: "#" },
      { name: "Exchange and return of goods", href: "#" },
      { name: "Guarantee", href: "#" },
      { name: "Frequently asked questions", href: "#" },
      { name: "Terms of use of the site", href: "#" },
    ],
  },
];

export const PolicyData: PolicyProps = {
  description: "",
  links: [
    { name: `${ASSETPATH}/svgs/Twitter.svg`, href: "#" },
    { name: `${ASSETPATH}/svgs/Facebook.svg`, href: "#" },
    { name: `${ASSETPATH}/svgs/Tiktok.svg`, href: "#" },
    { name: `${ASSETPATH}/svgs/Instagram.svg`, href: "#" },
  ],
};

// mockData.ts

export const products: Product[] = [
  {
    id: "p1",
    title: "Apple iPhone 14 Pro Max",
    sku: `${ASSETPATH}/Iphone_14_pro_hash.png`,
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 1099,
    stock: 15,
    in_stock: true,
    isLiked: true,
  },
  // {
  //   id: "p2",
  //   title: "Sony PlayStation 5",
  //   sku: `${IPHONE_14_PRO_HASH}`,
  //   description:
  //     "Next-gen PlayStation 5 with ultra-fast SSD and DualSense controller.",
  //   price: 499,
  //   stock: 5,
  //   in_stock: true,
  //   isLiked: true,
  // },
  // {
  //   id: "p3",
  //   title: "Apple MacBook Air M2",
  //   sku: `${IPHONE_14_PRO_HASH}`,
  //   description:
  //     "Apple MacBook Air with M2 chip, 13.6-inch Liquid Retina Display.",
  //   price: 1299,
  //   stock: 0,
  //   in_stock: false,
  //   isLiked: false,
  // },
  // {
  //   id: "p4",
  //   title: "Apple AirPods Max",
  //   sku: `${IPHONE_14_PRO_HASH}`,
  //   description:
  //     "High-fidelity audio with Active Noise Cancellation and Spatial Audio.",
  //   price: 549,
  //   stock: 8,
  //   in_stock: true,
  //   isLiked: true,
  // },
];

export const cartItems: CartItem[] = [
  { ...products[0], quantity: 2 }, // 2x iPhone 14 Pro Max
  { ...products[1], quantity: 1 }, // 1x PS5
];
