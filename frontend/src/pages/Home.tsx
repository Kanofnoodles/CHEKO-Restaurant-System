import React, { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { TopBar } from "../components/TopBar";
import type { MenuItem } from "../data/MenuItem";
import { MapView } from "../components/MapView";

export const Home: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<{ [id: number]: number }>({});
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeView, setActiveView] = useState<"Home" | "Map">("Home");
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/menu")
      .then((res) => res.json())
      .then((data: MenuItem[]) => setItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const categories = ["All", "Hot", "Cold", "Dessert", "Breakfast", "Cart"];

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "All"
        ? true
        : activeFilter === "Cart"
        ? cart[item.id] > 0
        : item.category === activeFilter;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black p-4 md:p-8">
      {/* TopBar with nav & theme toggle */}
      <TopBar
        activeView={activeView}
        setActiveView={setActiveView}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="flex items-center gap-4 mt-6 mb-6">
        <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-4 rounded-2xl shadow-md w-full">
          <span className="text-gray-400 mr-4 text-2xl">🔍</span>
          <input
            type="text"
            placeholder="Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none w-full text-base text-gray-900 dark:text-white placeholder-gray-400"
          />
        </div>
      </div>

      {activeView === "Home" ? (
        <div className="mt-6">
          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto mb-6">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? items.length
                  : cat === "Cart"
                  ? Object.values(cart).reduce((sum, qty) => sum + qty, 0)
                  : items.filter((item) => item.category === cat).length;

              const isActive = activeFilter === cat;

              return (
                <div
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-md cursor-pointer transition-all duration-200
        ${isActive ? "bg-pink-100" : "bg-white dark:bg-gray-800"}
      `}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold
          ${
            isActive
              ? "bg-pink-400 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          }
        `}
                  >
                    {
                      {
                        All: "🍽️",
                        Hot: "🔥",
                        Cold: "❄️",
                        Dessert: "🍰",
                        Breakfast: "🥞",
                        Cart: "🛒",
                      }[cat]
                    }
                  </div>

                  <span
                    className={`text-base font-semibold ${
                      isActive ? "text-black" : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {cat}{" "}
                    <span className="ml-1 text-gray-500 dark:text-gray-400 text-sm font-normal">
                      {count}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                quantity={cart[item.id] || 0}
                onClick={() => setSelectedItem(item)}
                onQuantityChange={(id, quantity) =>
                  setCart((prev) => ({ ...prev, [id]: quantity }))
                }
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

                {/* Title + Badge */}
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

                {/* Price + Quantity Controls (Direct setCart) */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-pink-400 text-lg font-bold">
                    {selectedItem.price.toFixed(2)} SR
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 bg-pink-100 text-pink-700 rounded-xl hover:bg-pink-200"
                      onClick={() =>
                        setCart((prev) => ({
                          ...prev,
                          [selectedItem.id]: Math.max(
                            0,
                            (prev[selectedItem.id] || 0) - 1
                          ),
                        }))
                      }
                    >
                      –
                    </button>
                    <span className="text-gray-900 dark:text-white">
                      {cart[selectedItem.id] || 0}
                    </span>
                    <button
                      className="w-8 h-8 bg-pink-100 text-pink-700 rounded-xl hover:bg-pink-200"
                      onClick={() =>
                        setCart((prev) => ({
                          ...prev,
                          [selectedItem.id]: (prev[selectedItem.id] || 0) + 1,
                        }))
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
      ) : (
        <MapView />
      )}
    </div>
  );
};
