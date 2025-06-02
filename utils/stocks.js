export const filterStocks = (stocks, searchTerm) => {
  const searchLower = (searchTerm || "").toLowerCase();

  return stocks.filter((stock) => {
    if (!stock) return false;

    return (
      (stock.batch?.toLowerCase() || "").includes(searchLower) ||
      (stock.name?.toLowerCase() || "").includes(searchLower) ||
      (stock.date?.toLowerCase() || "").includes(searchLower)
    );
  });
};
