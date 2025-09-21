export interface GetOrdersResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: OrderDTO[];
}

export interface OrderDTO {
  order_id: string;
  user: string;
  items: OrderItemDTO[];
  created_at: string;
  status: string;
}

export type OrderItemDTO = {
  product: string;
  quantity: number;
  total_price: string;
};

export type GetOrderStatusResponseDTO = {
  status: string; // e.g., "pending", "completed", "failed"
};
