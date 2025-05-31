'use client'
import React, { useState } from "react";
import { registerUser } from "./actions";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const res = await registerUser(formData);
    setMessage(res.message);
    setLoading(false);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-[400px] w-[400px] bg-gray-100 rounded shadow-md p-6"
    >
      <h1 className="text-2xl font-bold mb-4 text-black">Register</h1>

      <label htmlFor="email" className="self-start mb-1 text-sm text-gray-700">
        Email
      </label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full text-black font-medium"
        required
      />

      <label htmlFor="password" className="self-start mb-1 text-sm text-gray-700">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full text-black font-medium"
        required
        minLength={8}
      />

      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>

      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Login
        </a>
      </p>
    </form>
  );
}

export default Page;