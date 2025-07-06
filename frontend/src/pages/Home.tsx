import { useEffect, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  calorie: number;
  category: string;
  lat: number;
  lng: number;
};

const categories = ["All", "Breakfast", "Cold", "Hot", "Dessert"];

export default function Home() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
      .then((res) => res.json())
      .then(setItems)
      .catch(console.error);
  }, []);

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-white px-6 py-8 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">CHEKO</div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-pink-100 text-pink-800 hover:bg-pink-200">
            Menu
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
            Map
          </button>
          {/* Dark mode toggle placeholder */}
          <button className="ml-4 px-3 py-1 text-sm border rounded-full">
            ☀️ / 🌙
          </button>
        </div>
      </header>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => {
          console.log("Image URL:", item.image);
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-pink-600 font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between mt-auto pt-3 text-sm">
                <span>{item.calorie} cal</span>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-red-400">
                    ❤️
                  </button>
                  <button className="text-gray-400 hover:text-pink-500">
                    ➕
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
