export const TableHeader = () => (
  <thead className="bg-[#d7d2cf] sticky top-0 z-10">
    <tr className="border-b">
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">#</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Transaction date</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Item Sold</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Category</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Item price</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Quantity</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Total cost</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Mode of payment</th>
    </tr>
  </thead>
);