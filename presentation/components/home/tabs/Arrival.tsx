import React from "react";
import ProductCard from "@/presentation/components/common/ProductCard";
import { AiFillHeart } from "react-icons/ai";
import { products } from "@/constants/index";

const Arrival = () => {
  return (
    <div className="w-full p-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard
            image={product.sku}
            title={product.title}
            price={product.price}
            buttonLabel="Buy Now"
            buttonLink={`/cart/${product.id}`}
            FavoriteIcon={AiFillHeart}
            key={product.id}
            showFavorite={product.isLiked ? true : false}
          />
        ))}
        {/* <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/cart/1"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/cart/1"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/cart/1"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/cart/1"
          FavoriteIcon={AiFillHeart}
        /> */}
      </div>
    </div>
  );
};

export default Arrival;
