import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ProductCardProps } from "@/domain/entities/index";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  buttonLabel = "Buy Now",
  buttonLink = "#",
  showFavorite = true,
  FavoriteIcon,
  className = "",
}) => {
  return (
    <div
      className={`w-full relative text-center bg-[#EDEDED] sm:max-w-[200px] xl:max-w-[250px] p-5 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {/* Product Image */}
      <div className="mb-3 mt-7">
        <Image
          src={image}
          alt={title}
          className="w-[120px] h-auto mx-auto object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="max-w-[200px] sm:max-w-full text-sm mx-auto">
        <h3 className="text-gray-500 my-2">{title}</h3>
        <p className="text-lg font-semibold text-gray-800 mb-2">${price}</p>
        <Link href={buttonLink}>
          <Button
            label={buttonLabel}
            variant="primary"
            className="w-full hover:bg-white hover:text-black"
          />
        </Link>
      </div>

      {/* Favorite Icon */}
      {showFavorite && FavoriteIcon && (
        <div className="absolute top-2 right-2">
          <FavoriteIcon className="bg-transparent text-2xl text-red-600 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
