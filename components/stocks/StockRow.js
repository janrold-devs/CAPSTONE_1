export const StockRow = ({ stock, index }) => (
  <tr className={`border-b`}>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">{stock.batch}</td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">{stock.name}</td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">{stock.date}</td>
  </tr>
);
