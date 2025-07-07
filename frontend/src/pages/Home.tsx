import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import type { MenuItem } from "../data/MenuItem";
import { ThemeToggle } from "../components/ThemeToggleButton";

export const Home: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    fetch("http://localhost:8080/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const filteredItems =
    activeFilter === "ALL"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const categories = [
    { label: "All", value: "ALL" },
    { label: "Hot", value: "Hot" },
    { label: "Cold", value: "Cold" },
    { label: "Breakfast", value: "Breakfast" },
    { label: "Desserts", value: "Dessert" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F2ED] dark:bg-[#1C1C1E] text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight">Menu</h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start md:justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeFilter === cat.value
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                }`}
                onClick={() => setActiveFilter(cat.value)}
              >
                {cat.label}
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
            <div className="bg-white dark:bg-gray-900 rounded-[25px] w-full max-w-md overflow-hidden relative p-6 text-center">
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-lg"
              >
                &times;
              </button>

              {/* Title + Badge */}
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedItem.name}
                </h2>
                <div className="flex justify-center items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedItem.calorie} Cal
                  </span>
                  {selectedItem.isBestSale && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Best Sale
                    </span>
                  )}
                  {/*ensures best sale only if selected item is a best seller*/}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 px-2 mt-1 mb-4">
                {selectedItem.description}
              </p>

              {/* Image */}
              <img
                src={`/images/${selectedItem.image}`}
                alt={selectedItem.name}
                className="rounded-xl w-full h-48 object-cover mb-6"
              />

              {/* Price + Quantity */}
              <div className="flex justify-between items-center px-2">
                <span className="text-pink-400 text-lg font-bold">
                  {selectedItem.price.toFixed(2)} SR
                </span>

                <div className="flex items-center gap-2">
                  <button
                    className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      const q = Math.max(0, (cart[selectedItem.id] || 0) - 1);
                      setCart((prev) => ({ ...prev, [selectedItem.id]: q }));
                    }}
                  >
                    –
                  </button>
                  <span className="text-gray-700 dark:text-white">
                    {cart[selectedItem.id] || 0}
                  </span>
                  <button
                    className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      const q = (cart[selectedItem.id] || 0) + 1;
                      setCart((prev) => ({ ...prev, [selectedItem.id]: q }));
                    }}
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
