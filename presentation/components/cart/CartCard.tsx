import React from "react";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { StaticImageData } from "next/image";
// --- Types ---
export interface CartCardProps {
  id: string;
  title: string;
  sku: string;
  price: number;
  quantity: number;
  image: StaticImageData | string; // next/image static import or URL
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartCard: React.FC<CartCardProps> = ({
  id,
  title,
  sku,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="w-full max-w-[600px] flex gap-2 mx-auto mb-5 p-5 border-b border-gray-200">
      {/* Product Image */}
      <div>
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="mx-auto object-cover rounded-md"
        />
      </div>

      {/* Product Info */}
      <div className="text-black text-sm max-w-[200px] my-auto">
        <h4 className="font-bold mb-1 line-clamp-2">{title}</h4>
        <p className="text-gray-500">{sku}</p>
      </div>

      {/* Quantity + Price + Remove */}
      <div className="flex items-center gap-6 text-black">
        <div className="flex items-center gap-3">
          <AiOutlineMinus
            className="text-gray-700 text-lg cursor-pointer hover:text-black"
            onClick={() => onDecrease(id)}
          />
          <span className="border border-gray-300 rounded-md w-[30px] h-[30px] text-center">
            {quantity}
          </span>
          <AiOutlinePlus
            className="text-gray-700 text-lg cursor-pointer hover:text-black"
            onClick={() => onIncrease(id)}
          />
        </div>
        <p className="w-[100px] font-bold text-lg text-gray-600">${price * quantity}</p>
        <AiOutlineDelete
          className="hover:text-red-500 text-lg cursor-pointer"
          onClick={() => onRemove(id)}
        />
      </div>
    </div>
  );
};

export default CartCard;
