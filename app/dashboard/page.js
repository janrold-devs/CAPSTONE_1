"use client";

import React from "react";
import {
  BriefcaseBusiness,
  CalendarX,
  ChartNoAxesCombined,
  MilkOff,
  Truck,
} from "lucide-react";

export default function page() {
  return (
    <div className="p-6 w-full h-full">
      {/* Top Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
        {/* Card 1 */}
        <div className="col-span-12 xl:col-span-4 bg-white text-gray-800 rounded-lg p-6 shadow-md h-60">
          <div className="bg-gray-200 rounded-xl p-3 mb-4 w-fit">
            <BriefcaseBusiness size={24} />
          </div>
          <p className="text-3xl">5</p>
          <p className="text-md">Product Transactions</p>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 xl:col-span-4 bg-white text-gray-800 rounded-lg p-6 shadow-md h-60">
          <div className="bg-gray-200 rounded-xl p-3 mb-4 w-fit">
            <ChartNoAxesCombined size={24} />
          </div>
          <p className="text-3xl">₱ 1,000</p>
          <p className="text-md">Sales</p>
        </div>

        {/* Card 3 & 4 Stacked */}
        <div className="col-span-12 xl:col-span-4 flex flex-col space-y-6">
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md h-27">
            <div className="flex items-center w-full">
              <div className="bg-gray-200 rounded-xl p-3 w-fit mr-4">
                <Truck size={24} />
              </div>
              <div>
                <p className="text-3xl">15</p>
                <p className="text-sm">Number of Stock In</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md h-27">
            <div className="flex items-center w-full">
              <div className="bg-gray-200 rounded-xl p-3 w-fit mr-4">
                <CalendarX size={24} />
              </div>
              <div>
                <p className="text-3xl">2</p>
                <p className="text-sm">Expired Ingredients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="col-span-12 xl:col-span-8 bg-white text-gray-800 rounded-lg p-6 shadow-md h-[500px]">
          <h1 className="text-lg font-semibold">Sales Graph</h1>
        </div>

        {/* Best Selling Products Card - aligns with stacked Card 3/4 */}
        <div className="col-span-12 xl:col-span-4 bg-white text-gray-800 rounded-lg p-6 shadow-md h-[500px]">
          <h1 className="text-lg font-semibold">Best Selling Products</h1>
        </div>
      </div>
    </div>
  );
}
