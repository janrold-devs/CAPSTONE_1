import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ingredientsData = ["Sugar", "Milk", "Tapioca", "Syrup", "Coffee", "Ice"];

export function AddModal({
  isOpen,
  onClose,
  onAdd,
  productToEdit,
  existingProducts = [],
}) {
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState("");
  const [errors, setErrors] = useState({});

  // Function to get available sizes based on category
  const getSizesByCategory = (category) => {
    switch (category) {
      case "Milktea":
        return ["12 oz", "16 oz", "22 oz"];
      case "Fruit tea":
        return ["16 oz", "24 oz"];
      case "Coffee":
        return ["12 oz", "16 oz", "20 oz", "24 oz"];
      default:
        return [];
    }
  };

  const resetForm = () => {
    setProductName("");
    setSize("");
    setPrice("");
    setCategory("");
    setStatus("");
    setImage(null);
    setIngredients([]);
    setSelected("");
    setErrors({});
  };

  useEffect(() => {
    if (productToEdit) {
      setProductName(productToEdit.name || "");
      setSize(productToEdit.size || "");
      setPrice(productToEdit.price || "");
      setCategory(productToEdit.category || "");
      setStatus(productToEdit.status || "");
      setImage(null); // reset image
      setIngredients(productToEdit.ingredients || []);
      setSelected("");
    } else {
      resetForm();
    }
  }, [productToEdit, isOpen]);

  // Reset size when category changes
  useEffect(() => {
    const availableSizes = getSizesByCategory(category);
    if (size && !availableSizes.includes(size)) {
      setSize("");
    }
  }, [category, size]);

  if (!isOpen) return null;

  const getNextId = (existingProducts) => {
    if (!existingProducts || existingProducts.length === 0) return 1;
    const maxId = Math.max(
      ...existingProducts.map((product) => product.id || 0)
    );
    return maxId + 1;
  };

  const addIngredient = () => {
    if (selected && !ingredients.includes(selected)) {
      setIngredients([...ingredients, selected]);
      setErrors((prev) => ({ ...prev, ingredients: false }));
    }
    setSelected("");
  };

  const removeIngredient = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  const isValidPrice = (priceValue) => {
    return /^\d+(\.\d{1,2})?$/.test(priceValue.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!productName.trim()) newErrors.productName = "required";
    if (!size) newErrors.size = "required";
    if (!price.trim()) {
      newErrors.price = "required";
    } else if (!isValidPrice(price)) {
      newErrors.price = "invalid";
    }
    if (!category) newErrors.category = "required";
    // Only validate status if editing an existing product
    if (productToEdit && !status) newErrors.status = "required";
    if (!image && !productToEdit?.image) newErrors.image = "required";
    if (ingredients.length === 0) newErrors.ingredients = "required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: productToEdit?.id || getNextId(existingProducts),
      name: productName,
      size,
      price,
      ingredients,
      category,
      // Set status to "Available" for new products, use existing status for edits
      status: productToEdit ? status : "Available",
      image: image ? URL.createObjectURL(image) : productToEdit?.image || null,
    };

    onAdd(newProduct);
    resetForm();
    setErrors({});
    onClose();
  };

  const availableSizes = getSizesByCategory(category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full min-h-auto max-w-150 relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {productToEdit ? "Edit Product" : "Add New Product"}
        </h2>

        <div>
          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => {
                const value = e.target.value;
                setCategory(value);

                if (value === "") {
                  setErrors((prev) => ({ ...prev, category: "required" }));
                } else {
                  setErrors((prev) => ({ ...prev, category: false }));
                }
              }}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300 focus:outline-none"
            >
              <option value="">Select category</option>
              <option value="Milktea">Milktea</option>
              <option value="Coffee">Coffee</option>
              <option value="Fruit tea">Fruit Tea</option>
            </select>
            {errors.category === "required" && (
              <p className="text-red-500 text-sm mt-1">Category is required.</p>
            )}
          </div>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={productName}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300 focus:outline-none"
              onChange={(e) => {
                const value = e.target.value;
                setProductName(value);

                if (value.trim() === "") {
                  setErrors((prev) => ({ ...prev, productName: "required" }));
                } else {
                  setErrors((prev) => ({ ...prev, productName: false }));
                }
              }}
            />
            {errors.productName === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Product name is required.
              </p>
            )}
          </div>
          {/* Size Selection - Only show if category is selected */}
          {category && (
            <div className="mb-4">
              <div className="text-gray-700 mb-2 text-sm font-medium">
                Select Size <span className="text-red-500">*</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                {availableSizes.map((sizeOption) => (
                  <label
                    key={sizeOption}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={size === sizeOption}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const newSize = isChecked ? sizeOption : "";
                        setSize(newSize);

                        if (newSize === "") {
                          setErrors((prev) => ({ ...prev, size: "required" }));
                        } else {
                          setErrors((prev) => ({ ...prev, size: false }));
                        }
                      }}
                      className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{sizeOption}</span>
                  </label>
                ))}
              </div>
              {errors.size === "required" && (
                <p className="text-red-500 text-sm mt-1">Size is required.</p>
              )}
            </div>
          )}
          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                const value = e.target.value;
                setPrice(value);

                if (value.trim() === "") {
                  setErrors((prev) => ({ ...prev, price: "required" }));
                } else if (!isValidPrice(value)) {
                  setErrors((prev) => ({ ...prev, price: "invalid" }));
                } else {
                  setErrors((prev) => ({ ...prev, price: false }));
                }
              }}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300 focus:outline-none"
            />
            {errors.price === "required" && (
              <p className="text-red-500 text-sm mt-1">Price is required.</p>
            )}
            {errors.price === "invalid" && (
              <p className="text-red-500 text-sm mt-1">
                Please input numbers only (e.g., 25 or 25.50).
              </p>
            )}
          </div>
          {/* Ingredients Tag Picker */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Ingredients <span className="text-red-500">*</span>
            </label>
            <div className="mb-2 flex gap-2">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addIngredient();
                  }
                }}
                className="flex-1 border px-3 py-2 rounded text-gray-700 border-gray-300 focus:outline-none"
              >
                <option value="" className="text-gray-300">
                  Select an ingredient
                </option>
                {ingredientsData
                  .filter((ing) => !ingredients.includes(ing))
                  .map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
              <button
                type="button"
                onClick={addIngredient}
                disabled={!selected}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors"
              >
                Add
              </button>
            </div>
            <div className="w-full border rounded px-3 py-2 min-h-[50px] flex flex-wrap gap-2 bg-white">
              {ingredients.length === 0 ? (
                <span className="text-gray-400 text-sm">
                  No ingredients selected
                </span>
              ) : (
                ingredients.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded-sm flex items-center text-sm text-gray-700"
                  >
                    {item}
                    <button
                      type="button"
                      className="ml-2 text-gray-700 hover:text-red-500"
                      onClick={() => removeIngredient(index)}
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))
              )}
            </div>
            {errors.ingredients === "required" && (
              <p className="text-red-500 text-sm mt-1">
                At least one ingredient is required.
              </p>
            )}
          </div>
          {/* Status - Only show when editing an existing product */}
          {productToEdit && (
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setErrors((prev) => ({ ...prev, status: false }));
                }}
                className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
              >
                <option value="">Select status</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">Status is required.</p>
              )}
            </div>
          )}
          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Select Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file);

                if (!file) {
                  setErrors((prev) => ({ ...prev, image: "required" }));
                } else {
                  setErrors((prev) => ({ ...prev, image: false }));
                }
              }}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:text-sm file:font-medium file:bg-gray-300"
            />
            {errors.image === "required" && (
              <p className="text-red-500 text-sm mt-1">Image is required.</p>
            )}
          </div>
          {/* Buttons */}

          <div className="flex justify-between gap-4 mt-6">
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                {productToEdit ? "Save Changes" : "Add Product"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
              >
                Clear Form
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose(false);
              }}
              className="bg-red-600 hover:bg-red-400 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
