'use client';

import React, { useState } from "react";
import { loginUser } from "./actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const res = await loginUser(formData);
    if (res.success) {
      router.push("/dashboard");
    } else {
      setMessage(res.message);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-[400px] w-[400px] bg-gray-100 rounded shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Login</h1>

        <label htmlFor="email" className="self-start mb-1 text-sm text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full text-black"
        />

        <label htmlFor="password" className="self-start mb-1 text-sm text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full text-black"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Login
        </button>

        {message && <p className="mt-4 text-sm text-red-600">{message}</p>}

        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
  );
}

export default Page;
