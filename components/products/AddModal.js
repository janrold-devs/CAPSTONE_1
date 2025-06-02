import React, { useState } from "react";
import { X } from "lucide-react";

const ingredientsData = ["Sugar", "Milk", "Tapioca", "Matcha", "Coffee", "Ice"];

export function AddModal({ isOpen, onClose, onAdd }) {
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState("");

  if (!isOpen) return null;

  const addIngredient = () => {
    if (selected && !ingredients.includes(selected)) {
      setIngredients([...ingredients, selected]);
    }
    setSelected("");
  };

  const removeIngredient = (indexToRemove) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: productName,
      size,
      price,
      ingredients, // Already tracked
      category,
      status,
      image: image ? URL.createObjectURL(image) : null,
    };

    onAdd(newProduct); // Send to parent state
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full h-full max-w-150 max-h-200 relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Add New Product
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Size</label>
            <input
              type="text"
              value={size}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
              onChange={(e) => setSize(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Price</label>
            <input
              type="text"
              value={price}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Ingredients Tag Picker */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Ingredients
            </label>
            <div className="flex items-center gap-2 mb-2">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="border px-3 py-2 rounded text-gray-700 w-full border-gray-300"
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
                className="bg-[#ed9e7f] text-white px-3 py-2 rounded hover:bg-[#e58e6f]"
                disabled={!selected}
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
                    className="bg-gray-200 px-2 py-1 rounded-sm flex items-center text-sm text-gray-700 "
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
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
            >
              <option value="">Select category</option>
              <option value="Milktea">Milktea</option>
              <option value="Coffee">Coffee</option>
              <option value="Fruit tea">Fruit Tea</option>
            </select>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded px-3 py-2 text-gray-700 border-gray-300"
            >
              <option value="">Select status</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">
              Select Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-black text-sm border-1 py-3 px-2 rounded-sm border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ed9e7f] hover:bg-[#e58e6f] text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
