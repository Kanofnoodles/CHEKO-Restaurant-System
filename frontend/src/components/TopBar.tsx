import React from "react";
import { Sun, Moon } from "lucide-react";

interface TopBarProps {
  activeView: "Home" | "Map";
  setActiveView: (view: "Home" | "Map") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  activeView,
  setActiveView,
  theme,
  toggleTheme,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md flex justify-between items-center px-4 py-3 rounded-b-xl">
      {/* Nav Tabs */}
      <div className="flex gap-3">
        {["Home", "Map"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeView === tab
                ? "bg-pink-200 text-black"
                : "text-gray-600 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setActiveView(tab as "Home" | "Map")}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
};
