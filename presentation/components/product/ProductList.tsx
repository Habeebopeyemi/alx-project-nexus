"use client";
import { useGetProducts } from "@/presentation/hooks/useGetProducts";

export function ProductList() {
  const { data: products, isLoading, error } = useGetProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>UI Product</p>;

  return (
    <ul>
      {products?.map(p => (
        <li key={p.id}>
          {p.title} — ${p.price}
        </li>
      ))}
    </ul>
  );
}
