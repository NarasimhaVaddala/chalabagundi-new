import React from "react";

export default function Sidebar({
  menuItems,
  setActive,
  handleLogout,
  active,
}) {
  return (
    <aside className="w-60 border-r border-gray-200">
      <ul className="space-y-4 text-gray-700">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer pl-2 py-1 border-l-4 ${
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
            className="mt-4 px-4 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
          >
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}
