import React from "react";
import ProductCard from "@/presentation/components/common/ProductCard";
import { AiFillHeart } from "react-icons/ai";
import { products } from "@/constants/index";
import { useGetProductsQuery } from "@/infrastructure/api/productApi";
const ASSETPATH = "/assets/images";

const Arrival = () => {
  const { data: product, isLoading, isError } = useGetProductsQuery();
  if (isLoading) {
    return <p className="text-center">Loading products...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Failed to load products.</p>;
  }
  console.log(product);
  return (
    <div className="w-full p-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {product?.results?.map(product => (
          <ProductCard
            image={`${ASSETPATH}/Iphone_14_pro_hash.png`}
            title={product.name}
            price={product.price}
            buttonLabel="Buy Now"
            buttonLink={`/cart/${product.product_id}`}
            FavoriteIcon={AiFillHeart}
            key={product.product_id}
            showFavorite={product.in_stock ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Arrival;
