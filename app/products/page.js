'use client';

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { products } from "../../data/products";
import { filterProducts, getStatusColor } from "../../utils/products";
import { ExportButtons } from "../../components/products/ExportButtons";
import { SearchInput } from "../../components/products/SearchInput";
import { ProductRow } from "../../components/products/ProductRow";
import { TableHeader } from "../../components/products/TableHeader";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = filterProducts(products, searchTerm);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">Product List</h1>
      
      <button className="bg-[#ed9e7f] text-white px-2 py-2 rounded mb-4 flex items-center w-fit cursor-pointer transition hover:bg-[#e58e6f]">
        <Plus className="inline mr-2" size={18} />
        Add Product
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductRow key={product.id} product={product} index={index} />
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
          Showing {filteredProducts.length} of {products.length} products
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