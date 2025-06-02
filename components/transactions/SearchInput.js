export const SearchInput = ({ searchTerm, setSearchTerm }) => (
  <div className="flex items-center gap-3 w-full sm:w-auto">
    <label htmlFor="searchInput" className="text-gray-700 font-medium whitespace-nowrap">
      Search:
    </label>
    <input
      id="searchInput"
      type="text"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d7d2cf] text-black"
    />
  </div>
);