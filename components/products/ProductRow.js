import { SquarePen, Trash2 } from "lucide-react";
import { getStatusColor } from "../../utils/products";

export const ProductRow = ({ product, index }) => (
  <tr className={`border-b ${index % 2 === 0 ? "bg-[#f4ebe5]" : "bg-white"}`}>
    <td className="px-2 py-1 text-center border-r border-gray-200 text-black">
      {product.id}
    </td>
    <td className="px-2 py-1 text-center border-b border-gray-200">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-12 h-16 object-cover rounded mx-auto"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.jp/150x150.png";
          }}
        />
      </div>
    </td>
    <td className="px-2 py-1 text-left border-l border-b border-gray-300 text-black">
      {product.name}
    </td>
    <td className="px-2 py-1 text-center border-l border-b border-gray-300 text-black">
      {product.size}
    </td>
    <td className="px-2 py-1 text-center border-l border-b border-gray-300 text-black">
      {product.price}
    </td>
    <td className="text-sm text-gray-700 px-2 py-1 break-words whitespace-normal text-left border-l border-b border-gray-300">
      {Array.isArray(product.ingredients)
        ? product.ingredients.join(", ")
        : "-"}
    </td>

    <td className="px-2 py-1 text-center border-l border-b border-gray-300 text-black">
      {product.category}
    </td>
    <td
      className={`px-2 py-1 text-center border-l border-b border-gray-300 font-medium ${getStatusColor(
        product.status
      )}`}
    >
      {product.status}
    </td>
    <td className="px-2 py-1 text-center border-l border-b border-gray-300">
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
