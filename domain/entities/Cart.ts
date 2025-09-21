import { Product } from "./Product";

export type CartItem = Product & { quantity: number };

// export type CartItem = {
//   product: string;
//   product_name: string;
//   price: string;
//   quantity: number;
//   total_price: string;
// };
export type UpdateCartRequest = {
  user: string;
  items: {
    product: string;
    quantity: number;
  }[];
};

export type PostCartRequest = {
  product: string;
  quantity: number;
};

export type GetOrderStatusResponse = {
  status: string; // e.g., "pending", "completed", "failed"
};
