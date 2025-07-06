import { useEffect, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export default function MenuList() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/menu`) // Adjust if your endpoint differs
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-blue-700 font-bold mt-2">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
