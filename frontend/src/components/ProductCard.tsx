import React from "react";
import type { MenuItem } from "../data/MenuItem";

interface Props {
  item: MenuItem;
  quantity: number;
  onQuantityChange: (id: number, quantity: number) => void;
  onClick?: () => void;
}

export const ProductCard: React.FC<Props> = ({
  item,
  quantity,
  onQuantityChange,
  onClick,
}) => {
  return (
    <div
      className="rounded-2xl shadow-sm p-4 bg-white dark:bg-[#1C1C1E] cursor-pointer hover:shadow-md transition space-y-2"
      onClick={onClick}
    >
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className="w-full h-40 object-cover rounded-xl mb-2"
      />

      <div className="space-y-1">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {item.name}
        </h3>

        {/* Best Sale Badge (if applicable) */}
        {item.isBestSale && (
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            Best Sale
          </span>
        )}

        {/* Calories */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.calorie} Cal
        </p>

        {/* Price and Controls */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-pink-400 text-lg font-bold">
            {item.price.toFixed(2)} SR
          </span>

          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 bg-pink-100 text-pink-700 rounded-xl hover:bg-pink-200"
              onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(item.id, Math.max(0, quantity - 1));
              }}
            >
              –
            </button>
            <span className="text-gray-900 dark:text-white">{quantity}</span>
            <button
              className="w-8 h-8 bg-pink-100 text-pink-700 rounded-xl hover:bg-pink-200"
              onClick={(e) => {
                e.stopPropagation();
                onQuantityChange(item.id, quantity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
