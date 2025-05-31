// utils/productUtils.js
export const filterProducts = (products, searchTerm) => {
  const searchLower = searchTerm.toLowerCase();
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.ingredients.toLowerCase().includes(searchLower) ||
      product.status.toLowerCase().includes(searchLower) ||
      product.size.toLowerCase().includes(searchLower) ||
      product.price.toLowerCase().includes(searchLower)
    );
  });
};

export const getStatusColor = (status) => {
  return status === "Available" ? "text-green-500" : "text-red-500";
};

