import { FileText, File, Printer } from "lucide-react";

export const ExportButtons = () => (
  <div className="flex flex-wrap gap-2">
    <button className="flex items-center bg-[#ed9e7f] text-white px-3 py-2 rounded-md transition cursor-pointer hover:bg-[#e58e6f]">
      <FileText className="h-5 w-5 mr-1" />
      Excel
    </button>
    <button className="flex items-center bg-[#ed9e7f] text-white px-3 py-2 rounded-md transition cursor-pointer hover:bg-[#e58e6f]">
      <File className="h-5 w-5 mr-1" />
      PDF
    </button>
    <button className="flex items-center bg-[#ed9e7f] text-white px-3 py-2 rounded-md transition cursor-pointer hover:bg-[#e58e6f]">
      <Printer className="h-5 w-5 mr-1" />
      Print
    </button>
  </div>
);