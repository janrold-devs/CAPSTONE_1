export const TableHeader = () => (
  <thead className="bg-[#d7d2cf] sticky top-0 z-10">
    <tr className="border-b">
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] ">
        First Name
      </th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] ">
        Last Name
      </th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] ">
        Username
      </th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[500px]">
        Email
      </th>
      <th className="text-center text-black py-4 px-2 font-medium border-r border-gray-200 sticky top-0 bg-[#d7d2cf] w-[100px]">
        Role
      </th>
      <th className="text-center text-black py-4 px-2 font-medium sticky top-0 bg-[#d7d2cf] w-[100px]">
        Actions
      </th>
    </tr>
  </thead>
);
