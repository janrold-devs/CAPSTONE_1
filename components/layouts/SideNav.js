"use client";

import { useState, useEffect } from "react";
import {
  PanelLeftOpen,
  PanelLeftClose,
  Gauge,
  MonitorCheck,
  CupSoda,
  Monitor,
  MilkOff,
  Utensils,
  ArrowLeftRight,
  Receipt,
  User,
  Activity,
  Settings,
  LogOut,
} from "lucide-react";

export default function SideNav() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setSidebarCollapsed(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div
      className={`bg-[#E89271] text-white p-4 overflow-y-auto transition-all duration-300 h-full ${
        sidebarCollapsed ? "w-20" : "w-80"
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        {!sidebarCollapsed && (
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
              <img src="/bg.jpg" alt="Admin" className="w-full h-full object-cover rounded-full" />
            </div>

            <div className="ml-4">
              <h3 className="font-semibold">Admin</h3>
              <p className="text-sm text-gray-300">admin@kkopi.tea</p>
            </div>
          </div>
        )}

        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-lg hover:bg-[#eab9a5] transition-colors ${
            sidebarCollapsed ? "mx-auto" : ""
          }`}
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="h-6 w-6" />
          ) : (
            <PanelLeftClose className="h-6 w-6" />
          )}
        </button>
      </div>

      <nav className="space-y-2">
        <NavItem
          href="/dashboard"
          label="Dashboard"
          collapsed={sidebarCollapsed}
          icon={<Gauge size={20} />}
        />
        <NavItem
          href="/pos"
          label="POS"
          collapsed={sidebarCollapsed}
          icon={<Monitor size={20} />}
        />
        <Divider />
        <NavItem
          href="/products"
          label="Products"
          collapsed={sidebarCollapsed}
          icon={<CupSoda size={20} />}
        />
        <NavItem
          href="/ingredients-materials"
          label="Ingredients & Materials"
          collapsed={sidebarCollapsed}
          icon={<Utensils size={20} />}
        />
        <NavItem
          href="/stock"
          label="Stock In"
          collapsed={sidebarCollapsed}
          icon={<MonitorCheck size={20} />}
        />
        <NavItem
          href="/expired"
          label="Expired"
          collapsed={sidebarCollapsed}
          icon={<MilkOff size={20} />}
        />
        <Divider />
        <NavItem
          href="/transactions"
          label="Transactions"
          collapsed={sidebarCollapsed}
          icon={<ArrowLeftRight size={20} />}
        />
        <NavItem
          href="/sales"
          label="Sales"
          collapsed={sidebarCollapsed}
          icon={<Receipt size={20} />}
        />
        <Divider />
        <NavItem
          href="/users"
          label="Users"
          collapsed={sidebarCollapsed}
          icon={<User size={20} />}
        />
        <NavItem
          href="/logs"
          label="Activity Log"
          collapsed={sidebarCollapsed}
          icon={<Activity size={20} />}
        />
        <Divider />
        <NavItem
          href="/settings"
          label="Settings"
          collapsed={sidebarCollapsed}
          icon={<Settings size={20} />}
        />
        <NavItem
          href="/login"
          label="Logout"
          collapsed={sidebarCollapsed}
          icon={<LogOut size={20} />}
        />
      </nav>
    </div>
  );
}

function NavItem({ href, icon, label, collapsed }) {
  return (
    <a
      href={href}
      className="flex items-center p-3 rounded-lg hover:bg-[#eab9a5] transition-colors group relative"
      title={collapsed ? label : ""}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="ml-3">{label}</span>}
      {collapsed && (
        <span className="absolute left-20 ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {label}
        </span>
      )}
    </a>
  );
}

function Divider() {
  return <div className="border-t border-black/10 my-2" />;
}
