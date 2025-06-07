import { SquarePen, Trash2 } from "lucide-react";
import { getStatusColor } from "../../utils/products";

export const ProductRow = ({ product, index, onEdit, onDelete }) => (
  <tr className={`border-b`}>
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
      <span className="text-[12px]">₱ </span>
      {product.price}
    </td>
    <td className="px-2 py-1 text-left border-l border-b border-gray-300">
      <div className="flex flex-wrap gap-1">
        {Array.isArray(product.ingredients) &&
        product.ingredients.length > 0 ? (
          product.ingredients.map((ing, i) => (
            <span
              key={i}
              className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full"
            >
              {ing}
            </span>
          ))
        ) : (
          <span className="text-gray-400 text-sm">-</span>
        )}
      </div>
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
        <button
          className="text-blue-500 hover:text-blue-700 flex items-center"
          onClick={() => onEdit(product)}
        >
          <SquarePen className="inline mr-1" size={16} /> Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700 ml-4 flex items-center"
          onClick={() => onDelete(product.id)}
        >
          <Trash2 className="inline mr-1" size={16} /> Delete
        </button>
      </div>
    </td>
  </tr>
);
