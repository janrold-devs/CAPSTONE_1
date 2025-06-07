import { SquarePen, Trash2 } from "lucide-react";
import { getStatusColor, getAlertStatusColor } from "../../utils/ingredients";

export const IngredientRow = ({ ingredient, index }) => (
  <tr className={`border-b`}>
    <td className="p-2 text-justify border-l border-b border-gray-300 text-black">{ingredient.name}</td>
    <td className="p-2 text-center border-l border-b border-gray-300 text-black">{ingredient.quantity}</td>
    <td className="p-2 text-center border-l border-b border-gray-300 text-black">{ingredient.unit}</td>
    <td className="p-2 text-center border-l border-b border-gray-300">
      <span className={`px-2 py-1 rounded font-medium ${getAlertStatusColor(ingredient.quantity)}`}>
        {ingredient.quantity === "0" ? "No Stock" : ingredient.quantity <= 10 ? "Low Stock" : "On Stock"}
      </span>
    </td>
    <td className="p-2 text-center border-l border-b border-gray-300 text-[12px]">
      <button className={`px-2 py-1 rounded font-medium ${getStatusColor(ingredient.expired)}`}>
        {ingredient.expired}
      </button>
    </td>
    <td className="p-2 text-justify border-l border-b border-gray-300 text-black">{ingredient.remarks}</td>
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