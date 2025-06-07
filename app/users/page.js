"use client";

import React, { useState } from "react";
import { users } from "../../data/users";
import { filterUser } from "../../utils/users";
import { UserRow } from "@/components/users/UserRow";
import { TableHeader } from "@/components/users/TableHeader";
import { Plus } from "lucide-react";
import { ExportButtons } from "@/components/users/ExportButtons";
import { SearchInput } from "@/components/users/SearchInput";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = filterUser(users, searchTerm);

  return (
    <div className="bg-white w-full h-full p-6 rounded-xl shadow-md flex flex-col">
      <h1 className="text-2xl font-semibold mb-4 text-gray-600">User List</h1>

      <button className="bg-blue-600 hover:bg-blue-400 text-white px-2 py-2 rounded mb-4 flex items-center w-fit cursor-pointer transition ">
        <Plus className="inline mr-2" size={18} />
        Add User
      </button>

      {/* Controls: Export & Search */}
      <div className="mb-4 border-t-2 border-gray-300 pt-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <ExportButtons />
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      {/* Table */}
      <div className="border-2 rounded-lg overflow-hidden flex-grow">
        <div className="overflow-auto h-full">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <UserRow key={user.id} user={user} index={index} />
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No users found matching your search
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-gray-600 text-sm">
          Showing {filteredUsers.length} of {users.length} users
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded bg-[#ed9e7f] text-white hover:bg-[#e58e6f]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
