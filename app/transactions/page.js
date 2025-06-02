"use client";

import React, { useState } from "react";
import { transactions } from "../../data/transactions";
import { filterTransactions } from "../../utils/transactions";
import { ExportButtons } from "../../components/transactions/ExportButtons";
import { SearchInput } from "../../components/transactions/SearchInput";
import { TransactionRow } from "../../components/transactions/TransactionRow";
import { TableHeader } from "../../components/transactions/TableHeader";
import { DateRangePicker } from "../../components/transactions/DateRangePicker";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const filteredTransactions = filterTransactions(transactions, searchTerm);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">
        Transaction List
      </h1>

      {/* Filters Row (Date Range + Export + Search) */}
      {/* Filters Section: Date Range on top, then Export & Search below */}
      <div className="mb-4 border-t-1 border-gray-300 pt-4">
        <div className="flex flex-col gap-3 w-full">
          {/* Top Row: From / To */}
          <div>
            <DateRangePicker
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
              
            />
          </div>

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

      {/* Transaction Table */}
      <div className="border-2 rounded-lg overflow-hidden flex-grow">
        <div className="overflow-auto h-full">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => (
                  <TransactionRow
                    key={`${transaction.id}-${index}`}
                    transaction={transaction}
                    index={index}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No transactions found matching your search
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
          Showing {filteredTransactions.length} of {transactions.length}{" "}
          transactions
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
