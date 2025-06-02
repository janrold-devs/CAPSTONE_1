export const SalesRow = ({ sale, index }) => (
  <tr className={`border-b ${index % 2 === 0 ? "bg-[#f4ebe5]" : "bg-white"}`}>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {sale.order}
    </td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">
      {sale.date}
    </td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">
      {sale.total}
    </td>
  </tr>
);
