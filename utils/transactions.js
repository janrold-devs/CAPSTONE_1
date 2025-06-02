export const filterTransactions = (transactions, searchTerm) => {
  const searchLower = (searchTerm || "").toLowerCase();

  return transactions.filter((transaction) => {
    if (!transaction) return false;

    return (
      (transaction.id?.toString() || "").includes(searchLower) ||
      (transaction.date?.toLowerCase() || "").includes(searchLower) ||
      (transaction.item_sold?.toLowerCase() || "").includes(searchLower) ||
      (transaction.category?.toLowerCase() || "").includes(searchLower) ||
      (transaction.price?.toString() || "").includes(searchLower) ||
      (transaction.quantity?.toString() || "").includes(searchLower) ||
      (transaction.mop?.toLowerCase() || "").includes(searchLower)
    );
  });
};
