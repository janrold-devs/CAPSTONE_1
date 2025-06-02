import { SquarePen, Trash2 } from "lucide-react";

export const UserRow = ({ user, index }) => (
  <tr className={`border-b ${index % 2 === 0 ? "bg-[#f4ebe5]" : "bg-white"}`}>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {user.id}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {user.username}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {user.first_name}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {user.last_name}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {user.email}
    </td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {user.role}
    </td>
    <td className="p-2 text-center border-l border-b border-gray-300">
      <div className="flex justify-center">
        <button className="text-blue-500 hover:text-blue-700 flex items-center">
          <SquarePen className="inline mr-1" size={16} /> Edit
        </button>
        <button className="text-red-500 hover:text-red-700 ml-4 flex items-center">
          <Trash2 className="inline mr-1" size={16} /> Delete
        </button>
      </div>
    </td>
  </tr>
);
