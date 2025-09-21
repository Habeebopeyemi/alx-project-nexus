export interface GetCartResponseDTO {
  cart_id: string;
  user: string;
  items: CartItemDTO[];
}

export type CartItemDTO = {
  product: string;
  product_name: string;
  price: string;
  quantity: number;
  total_price: string;
};

export type UpdateCartResponseDTO = {
  cart_id: string;
  user: string;
  items: CartItemDTO[];
};

export interface GetCartsResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: CartItemDTO[];
}

export interface GetMyCartResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: CartResultDTO[];
}

export interface CartResultDTO {
  cart_id: string;
  user: string;
  items: CartItemDTO[];
}

export interface CartCheckoutResponseDTO {
  order_id: string;
  user: string;
  items: CheckoutItemDTO[];
  created_at: string;
  status: string;
}

export type CheckoutItemDTO = {
  product: string;
  quantity: number;
  total_price: string;
};
