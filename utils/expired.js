export const filterExpired = (expired, searchTerm) => {
  const searchLower = (searchTerm || "").toLowerCase();

  return expired.filter((stock) => {
    if (!stock) return false;

    return (
      (stock.duty?.toString().toLowerCase() || "").includes(searchLower) ||
      (stock.name?.toString().toLowerCase() || "").includes(searchLower) ||
      (stock.quantity?.toString().toLowerCase() || "").includes(searchLower) ||
      (stock.total?.toString().toLowerCase() || "").includes(searchLower) ||
      (stock.remarks?.toString().toLowerCase() || "").includes(searchLower)
    );
  });
};
