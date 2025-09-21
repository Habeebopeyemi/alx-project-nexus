export interface Order {
  order_id: string;
  user: string;
  items: OrderItem[];
  created_at: string;
  status: string;
}

export type OrderItem = {
  product: string;
  quantity: number;
  total_price: string;
};
