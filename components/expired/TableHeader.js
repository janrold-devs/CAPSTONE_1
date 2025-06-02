export const TableHeader = () => (
  <thead className="bg-[#d7d2cf] sticky top-0 z-10">
    <tr className="border-b">
      <th className="text-center text-black py-4 px-2 border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">#</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Duty</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Ingredient/Material name</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Quantity</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Total Waste</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf]">Remarks</th>
      <th className="text-center text-black py-4 px-2 font-medium sticky top-0 bg-[#d7d2cf]">Actions</th>
    </tr>
  </thead>
);