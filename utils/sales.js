export const filterSales = (sales, searchTerm) => {
  const searchLower = (searchTerm || "").toLowerCase();

  return sales.filter((sale) => {
    if (!sale) return false;

    return (
      (sale.order?.toString() || "").includes(searchLower) ||
      (sale.date?.toLowerCase() || "").includes(searchLower) ||
      (sale.total?.toString() || "").includes(searchLower)
    );
  });
};
