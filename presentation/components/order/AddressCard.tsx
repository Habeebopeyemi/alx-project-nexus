import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { AddressCardProps } from "@/domain/entities";

const AddressCard: React.FC<AddressCardProps> = ({
  id,
  label,
  name,
  address,
  phone,
  selected = false,
  onSelect,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex justify-between text-sm border border-gray-300 rounded-lg p-4 mt-4 bg-[#E9E9E9]">
      {/* Address Details */}
      <div>
        <div className="flex gap-3 text-black mb-3">
          <input
            type="radio"
            name="address"
            checked={selected}
            onChange={() => onSelect?.(id)}
            className="accent-black focus:ring-black focus:outline-none"
          />
          <label>
            {name}{" "}
            <span className="p-1 bg-black text-white rounded-md text-[.7rem]">
              {label}
            </span>
          </label>
        </div>
        <div className="ml-6 text-black">
          <p>{address}</p>
          <span>{phone}</span>
        </div>
      </div>

      {/* Edit & Delete */}
      <div className="flex gap-5 items-center">
        <AiFillEdit
          size={15}
          className="text-black cursor-pointer hover:text-blue-500"
          onClick={() => onEdit?.(id)}
        />
        <AiFillDelete
          size={15}
          className="text-black cursor-pointer hover:text-red-500"
          onClick={() => onDelete?.(id)}
        />
      </div>
    </div>
  );
};

export default AddressCard;
