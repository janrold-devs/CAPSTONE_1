import { Bell, Settings, User } from "lucide-react";
import React from "react";

function TopNav() {
  return (
    <header className="w-full h-20 bg-[#ed9e7f] text-white flex justify-end items-center px-6 shadow-md border-b border-black/10">

      {/* Icon Links */}
      <nav className="flex items-center space-x-6">
        {/* Bell */}
        <button className="cursor-pointer" title="Notifications">
          <Bell className="w-6 h-6" />
        </button>

        {/* Profile Avatar Placeholder */}
        <a
          href="/profile"
          className="bg-gray-600 hover:ring-2 hover:ring-gray-400 transition-all rounded-full w-10 h-10 flex items-center justify-center"
          title="Profile"
        >
          <img
            src="/bg.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </a>

        {/* Settings */}
        <a
          href="/dashboard/settings"
          className=""
          title="Settings"
        >
          <Settings className="w-6 h-6" />
        </a>
      </nav>
    </header>
  );
}

export default TopNav;
