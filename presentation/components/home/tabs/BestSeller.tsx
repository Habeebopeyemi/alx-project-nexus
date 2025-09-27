import React from 'react'
import ProductCard from "@/presentation/components/common/ProductCard";
import { AiFillHeart } from "react-icons/ai";
import IPHONE_14_PRO_HASH from "@/public/assets/images/Iphone_14_pro_hash.jpg";

const BestSeller = () => {
  return (
    <div className="w-full p-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/checkout"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/checkout"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/checkout"
          FavoriteIcon={AiFillHeart}
        />
        <ProductCard
          image={IPHONE_14_PRO_HASH}
          title="Apple iPhone 14 Pro Max 128GB Deep Purple"
          price={900}
          buttonLabel="Buy Now"
          buttonLink="/checkout"
          FavoriteIcon={AiFillHeart}
        />
      </div>
    </div>
  );
}

export default BestSeller