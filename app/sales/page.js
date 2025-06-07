'use client';

import React, { useState } from "react";
import { sales } from "../../data/sales";
import { ExportButtons } from "../../components/sales/ExportButtons";
import { SearchInput } from "../../components/sales/SearchInput";
import { SalesRow } from "../../components/sales/SalesRow";
import { TableHeader } from "../../components/sales/TableHeader";
import { DateRangePicker } from "../../components/sales/DateRangePicker";
import { filterSales } from "../../utils/sales";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredSales = filterSales(sales, searchTerm, fromDate, toDate);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">
        Sales Report
      </h1>

      {/* Filters Section: Date Range on top, then Export & Search below */}
      <div className="mb-4 border-t-1 border-gray-300 pt-4">
        <div className="flex flex-col gap-3 w-full">
          {/* Top Row: From / To */}
          <DateRangePicker
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />

          {/* Bottom Row: Export + Search aligned side-by-side */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <ExportButtons />
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="border-2 rounded-lg overflow-hidden flex-grow">
        <div className="overflow-auto h-full">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {filteredSales.length > 0 ? (
                filteredSales.map((sale, index) => (
                  <SalesRow
                    key={`${sale.id}-${index}`}
                    sale={sale}
                    index={index}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No sales found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          Showing {filteredSales.length} of {sales.length} sales
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
