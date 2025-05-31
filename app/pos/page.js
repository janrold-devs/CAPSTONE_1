"use client";

import React, { useState } from "react";
import {
  PlusCircle,
  MinusCircle,
  Trash2,
  ShoppingCart,
  CreditCard,
  X,
  Filter,
  Search,
} from "lucide-react";
import SaltedCaramel from "../../public/bg.jpg";

export default function Page() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Americano",
      price: 39,
      category: "Coffee",
      image: SaltedCaramel.src,
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 49,
      category: "Coffee",
      image: SaltedCaramel.src,
    },
    {
      id: 3,
      name: "Barako",
      price: 59,
      category: "Coffee",
      image: SaltedCaramel.src,
    },
    {
      id: 4,
      name: "Salted Caramel",
      price: 29,
      category: "Milktea",
      image: SaltedCaramel.src,
    },
    {
      id: 5,
      name: "Chocolate Cake",
      price: 69,
      category: "Milktea",
      image: SaltedCaramel.src,
    },
    {
      id: 6,
      name: "Apple Green",
      price: 29,
      category: "Fruit Tea",
      image: SaltedCaramel.src,
    },
    {
      id: 7,
      name: "Blueberry",
      price: 29,
      category: "Fruit Tea",
      image: SaltedCaramel.src,
    },
    {
      id: 8,
      name: "Mango",
      price: 39,
      category: "Fruit Tea",
      image: SaltedCaramel.src,
    },
        {
      id: 9,
      name: "Strawberry",
      price: 69,
      category: "Milktea",
      image: SaltedCaramel.src,
    },
  ];

  const categories = ["All", "Coffee", "Milktea", "Fruit Tea"];

  // State management
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [discount, setDiscount] = useState(0);
  const [activeTab, setActiveTab] = useState("menu");
  const [transactionHistory, setTransactionHistory] = useState([]);

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    setDiscount(0);
  };

  // Process payment
  const processPayment = () => {
    if (cart.length === 0) return;

    const newTransaction = {
      id: Date.now(),
      items: [...cart],
      subtotal,
      discount: discountAmount,
      total,
      timestamp: new Date().toLocaleString(),
    };

    setTransactionHistory((prev) => [newTransaction, ...prev]);
    clearCart();
  };

  return (
    <div className="p-6 w-full h-full bg-gray-100 rounded-[10px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Kkopi.Tea
          </h1>
          <p className="text-gray-600">
            Date: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 ">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "menu"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("menu")}
        >
          Menu
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "history"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("history")}
        >
          Transaction History
        </button>
      </div>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Section - Column 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 h-155 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <ShoppingCart size={24} className="mr-2 text-blue-600" />
              Current Order
            </h2>
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 flex items-center"
            >
              <Trash2 size={18} className="mr-1" />
              Clear
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto mb-4 pr-2">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingCart size={48} className="mb-4" />
                <p className="text-lg">Your cart is empty</p>
                <p className="text-sm mt-2">Select items from the menu</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 border-b border-gray-200"
                  >
                    <div className="flex items-center">
                      {/* Fixed image display */}
                      <div className="mr-3 w-10 h-10 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-gray-600">
                          ₱{item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <MinusCircle size={20} />
                      </button>
                      <div className="mx-3 w-8 text-center font-medium">
                        {item.quantity}
                      </div>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <PlusCircle size={20} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-black">Subtotal:</span>
              <span className="text-black">₱{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <span className="text-black">Discount:</span>
                <div className="ml-2 flex items-center">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    className="w-12 border border-gray-300 rounded px-2 py-1 text-sm text-black"
                    value={discount}
                    onChange={(e) =>
                      setDiscount(parseFloat(e.target.value) || 0)
                    }
                  />
                  <span className="ml-1">%</span>
                </div>
              </div>
              <span className="text-red-600">
                -₱{discountAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-gray-300">
              <span className="font-bold text-lg text-black">Total:</span>
              <span className="font-bold text-xl text-black">
                ₱{total.toFixed(2)}
              </span>
            </div>
            <div className="mt-5">
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 rounded-lg flex items-center justify-center font-medium shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={processPayment}
              >
                <CreditCard size={20} className="mr-2" />
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section - Column 2 */}
        {activeTab === "menu" && (
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 h-155 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Product Menu</h2>

              <div className="flex space-x-2">
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
                  <Filter size={18} className="text-gray-500 mr-2" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent focus:outline-none text-black"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid - Fixed image display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                  onClick={() => addToCart(product)}
                >
                  <div className="flex justify-between items-center mb-3">
                    {/* Product image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="bg-blue-100 text-blue-600 rounded-full p-1">
                      <PlusCircle size={20} />
                    </button>
                  </div>
                  <h3 className="font-medium text-black">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                  <p className="font-bold mt-2 text-black">
                    ₱{product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transaction History Section */}
        {activeTab === "history" && (
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 h-155 flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Transaction History
            </h2>

            <div className="overflow-y-auto pr-2">
              {transactionHistory.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <CreditCard size={48} className="mb-4" />
                  <p className="text-lg">No transactions yet</p>
                  <p className="text-sm mt-2">
                    Completed orders will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {transactionHistory.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-black">
                            Transaction #{transaction.id}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {transaction.timestamp}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-black">
                            ₱{transaction.total.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-3">
                        {transaction.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between text-sm mb-1 text-black"
                          >
                            <span>
                              {item.name} x {item.quantity}
                            </span>
                            <span>
                              ₱{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                        <div className="flex justify-between">
                          <span className="text-black">Discount:</span>
                          <span className="text-red-600">
                            -₱{transaction.discount.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
