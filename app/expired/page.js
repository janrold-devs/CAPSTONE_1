'use client'

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { expired } from '../../data/expired';
import { filterExpired } from '../../utils/expired';
import { ExportButtons } from '../../components/expired/ExportButtons';
import { SearchInput } from '../../components/expired/SearchInput';
import { ExpiredRow } from '../../components/expired/ExpiredRow';
import { TableHeader } from '../../components/expired/TableHeader';

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredExpired = filterExpired(expired, searchTerm);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">Spoiled and Damaged List</h1>
      
      <button className="bg-[#ed9e7f] text-white px-2 py-2 rounded mb-4 flex items-center w-fit cursor-pointer transition hover:bg-[#e58e6f]">
        <Plus className="inline mr-2" size={18} />
        Add spoiled or Damaged Item
      </button>
      
      {/* Search and Export Controls */}
      <div className="mb-4 border-t-2 border-gray-300 pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <ExportButtons />
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="border-2 rounded-lg overflow-hidden flex-grow">
        <div className="overflow-auto h-full">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {filteredExpired.length > 0 ? (
                filteredExpired.map((stock, index) => (
                  <ExpiredRow key={stock.id} stock={stock} index={index} />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No products found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          Showing {filteredExpired.length} of {expired.length} products
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
  )
}

export default Page;
