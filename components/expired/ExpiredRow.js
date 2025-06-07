import { Trash2 } from "lucide-react";

export const ExpiredRow = ({ stock, index }) => (
  <tr className={`border-b`}>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {stock.duty}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {stock.name}
    </td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {stock.quantity}
    </td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {stock.total}
    </td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {stock.remarks}
    </td>
    <td className="p-2 text-center border-l border-b border-gray-300">
      <div className="flex justify-center items-center">
      <button className="text-red-500 hover:text-red-700 ml-4 flex items-center">
        <Trash2 className="inline mr-1" size={16} /> Delete
      </button>
    </div>
  </td>
  </tr>
);
