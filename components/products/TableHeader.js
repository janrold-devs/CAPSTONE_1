export const TableHeader = () => (
  <thead className="bg-[#d7d2cf] sticky top-0 z-10">
    <tr className="border-b">
      <th className="text-center text-black py-4 px-2 border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[50px]">#</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[100px]">Image</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] min-w-[150px]">Product Name</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[80px]">Size</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[80px]">Price</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] min-w-[200px]">Ingredients</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[120px]">Category</th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[120px]">Status</th>
      <th className="text-center text-black py-4 px-2 font-medium sticky top-0 bg-[#d7d2cf] w-[120px]">Actions</th>
    </tr>
  </thead>
);