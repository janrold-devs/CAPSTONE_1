// utils/products.js
export const filterProducts = (products, searchTerm) => {
  // Return all products if no search term
  if (!searchTerm || searchTerm.trim() === "") {
    return products;
  }

  const searchLower = searchTerm.toLowerCase().trim();
  
  return products.filter((product) => {
    // Check product name (with null safety)
    if (product.name && product.name.toLowerCase().includes(searchLower)) {
      return true;
    }
    
    // Check category (with null safety)
    if (product.category && product.category.toLowerCase().includes(searchLower)) {
      return true;
    }
    
    // Check ingredients (with proper array handling)
    if (Array.isArray(product.ingredients) && product.ingredients.length > 0) {
      const ingredientsString = product.ingredients.join(", ").toLowerCase();
      if (ingredientsString.includes(searchLower)) {
        return true;
      }
    }
    
    // Check status (with null safety)
    if (product.status && product.status.toLowerCase().includes(searchLower)) {
      return true;
    }
    
    // Check size (with null safety)
    if (product.size && product.size.toLowerCase().includes(searchLower)) {
      return true;
    }
    
    // Check price (convert to string first, with null safety)
    if (product.price && product.price.toString().toLowerCase().includes(searchLower)) {
      return true;
    }
    
    return false;
  });
};

export const getStatusColor = (status) => {
  return status === "Available" ? "text-green-500" : "text-red-500";
};