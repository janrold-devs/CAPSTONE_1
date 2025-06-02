export const DateRangePicker = ({ fromDate, toDate, setFromDate, setToDate }) => (
  <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
    <div className="flex flex-1 items-center gap-2 min-w-[180px]">
      <label htmlFor="fromDate" className="text-gray-700 font-medium whitespace-nowrap">
        From:
      </label>
      <input
        id="fromDate"
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d7d2cf] text-black"
      />
    </div>

    <div className="flex flex-1 items-center gap-2 min-w-[180px]">
      <label htmlFor="toDate" className="text-gray-700 font-medium whitespace-nowrap">
        To:
      </label>
      <input
        id="toDate"
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#d7d2cf] text-black"
      />
    </div>
  </div>
);
