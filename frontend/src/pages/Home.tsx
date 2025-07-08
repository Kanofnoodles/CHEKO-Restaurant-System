import React, { act, useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import type { MenuItem } from "../data/MenuItem";
import { ThemeToggle } from "../components/ThemeToggleButton";

export const Home: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  {
    /*for use with cart button*/
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) {
        delete updated[id]; // this removes the item entirely
      } else {
        updated[id] = quantity; // this updates the quantity
      }
      return updated;
    });
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const filteredItems =
    activeFilter === "All"
      ? items
      : activeFilter === "Cart"
      ? items.filter((item) => cart[item.id] > 0)
      : items.filter((item) => item.category === activeFilter);

  const categories = [
    { label: "All", value: "All" },
    { label: "Hot", value: "Hot" },
    { label: "Cold", value: "Cold" },
    { label: "Breakfast", value: "Breakfast" },
    { label: "Desserts", value: "Dessert" },
    { label: "Cart", value: "Cart" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F2ED] dark:bg-[#1C1C1E] text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight">Menu</h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === category.value
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
                onClick={() => setActiveFilter(category.value)}
              >
                {category.label}

                {/* Badge for Cart only */}
                {category.value === "Cart" && cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              quantity={cart[item.id] || 0}
              onQuantityChange={handleQuantityChange}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white dark:bg-gray-900 rounded-[25px] w-full max-w-md overflow-hidden relative p-6 text-center shadow-xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-lg"
              >
                &times;
              </button>

              {/* Title + Best Sale */}
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white inline-flex items-center justify-center gap-2">
                  {selectedItem.name}
                  {selectedItem.isBestSale && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Best Sale
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {selectedItem.calorie} Cal
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {selectedItem.description}
              </p>

              {/* Image */}
              <img
                src={`/images/${selectedItem.image}`}
                alt={selectedItem.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              {/* Price + Quantity Controls (Synced with cart) */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-pink-400 text-lg font-bold">
                  {selectedItem.price.toFixed(2)} SR
                </span>

                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200"
                    onClick={() =>
                      handleQuantityChange(
                        selectedItem.id,
                        Math.max(0, (cart[selectedItem.id] || 0) - 1)
                      )
                    }
                  >
                    –
                  </button>
                  <span className="text-gray-900 dark:text-white">
                    {cart[selectedItem.id] || 0}
                  </span>
                  <button
                    className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200"
                    onClick={() =>
                      handleQuantityChange(
                        selectedItem.id,
                        (cart[selectedItem.id] || 0) + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
