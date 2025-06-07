"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { stockins } from "../../data/stockins";
import { filterStocks } from "../../utils/stocks";
import { ExportButtons } from "../../components/stocks/ExportButtons";
import { SearchInput } from "../../components/stocks/SearchInput";
import { StockRow } from "../../components/stocks/StockRow";
import { TableHeader } from "../../components/stocks/TableHeader";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredStocks = filterStocks(stockins, searchTerm);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">
        Stock In List
      </h1>
      <button className="bg-blue-600 hover:bg-blue-400 text-white px-2 py-2 rounded mb-4 flex items-center w-fit cursor-pointer transition">
        <Plus className="inline mr-2" size={18} />
        Add Stock
      </button>
      <div className="mb-4 border-t-1 border-gray-300 pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <ExportButtons />
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className="border-2 rounded-lg overflow-hidden flex-grow">
        <div className="overflow-auto h-full">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {filteredStocks.length > 0 ? (
                filteredStocks.map((stock, index) => (
                  <StockRow
                    key={`${stock.id}-${index}`}
                    stock={stock}
                    index={index}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No stocks found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          Showing {filteredStocks.length} of {stockins.length} stocks
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded bg-[#ed9e7f] text-white hover:bg-[#e58e6f]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
