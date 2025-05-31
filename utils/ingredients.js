// utils/ingredients.js
export const filterIngredients = (ingredients, searchTerm) => {
  const searchLower = searchTerm.toLowerCase();
  return ingredients.filter((ingredient) => {
    return (
      ingredient.name.toLowerCase().includes(searchLower) ||
      ingredient.batch.toLowerCase().includes(searchLower) ||
      ingredient.unit.toLowerCase().includes(searchLower) ||
      ingredient.alert.toLowerCase().includes(searchLower) ||
      ingredient.expired.toLowerCase().includes(searchLower) ||
      ingredient.remarks.toLowerCase().includes(searchLower)
    );
  });
};

export const getStatusColor = (expiredDate) => {
  const today = new Date();
  const expiryDate = new Date(expiredDate);
  
  if (expiryDate < today) return "bg-red-500"; // Expired
  if (expiryDate <= new Date(today.setDate(today.getDate() + 7))) return "bg-yellow-500"; // Expiring soon
  return "bg-green-500"; // Good
};

export const getAlertStatusColor = (quantity) => {
  const qty = parseInt(quantity); // Convert string to number
  if (qty === 0) return "text-red-500";      // No Stock
  if (qty <= 10) return "text-yellow-500";   // Low Stock
  return "text-green-500";                   // On Stock
};