export const TableHeader = () => (
  <thead className="bg-[#d7d2cf] sticky top-0 z-10">
    <tr className="border-b">
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[300px]">Name</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[90px]">Quantity</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[90px]">Unit</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[120px]">Alert</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[120px]">Expiration</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] min-w-auto">Remarks</th>
      <th className="text-center text-black py-4 px-2 font-medium sticky top-0 bg-[#d7d2cf] w-[120px]">Actions</th>
    </tr>
  </thead>
);