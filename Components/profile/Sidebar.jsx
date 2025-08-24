import React from "react";
import { X } from "lucide-react";

export default function Sidebar({
  menuItems,
  setActive,
  handleLogout,
  active,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-60 border-r border-gray-200 pr-4">
        <ul className="space-y-4 text-gray-700">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer pl-2 py-1 border-l-4 transition-colors ${
                active === item
                  ? "text-green-600 font-medium border-green-500"
                  : "border-transparent hover:text-green-500"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}

          <li>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors w-full lg:w-auto"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          {/* Close button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu items */}
          <ul className="space-y-4 text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer pl-2 py-2 border-l-4 transition-colors ${
                  active === item
                    ? "text-green-600 font-medium border-green-500"
                    : "border-transparent hover:text-green-500"
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}

            <li className="pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setSidebarOpen(false);
                }}
                className="w-full px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
