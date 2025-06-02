export const TransactionRow = ({ transaction, index }) => (
  <tr className={`border-b ${index % 2 === 0 ? "bg-[#f4ebe5]" : "bg-white"}`}>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">{transaction.id}</td>
    <td className="text-center py-4 px-2 border-r border-gray-200 text-black">{transaction.date}</td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">{transaction.item_sold}</td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">{transaction.category}</td>
    <td className="text-right py-4 px-2 border-r border-gray-200 text-black">{transaction.price}</td>
    <td className="text-right py-4 px-2 border-r border-gray-200 text-black">{transaction.quantity}</td>
    <td className="text-right py-4 px-2 border-r border-gray-200 text-black">{transaction.price * transaction.quantity}</td>
    <td className="text-left py-4 px-2 border-r border-gray-200 text-black">{transaction.mop}</td>
  </tr>
);
