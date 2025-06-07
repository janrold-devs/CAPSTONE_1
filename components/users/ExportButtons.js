import { FileText, File, Printer } from "lucide-react";

export const ExportButtons = () => (
  <div className="flex flex-wrap gap-2">
    <button className="flex items-center bg-green-600 hover:bg-green-400 text-white px-3 py-2 rounded-md transition cursor-pointer">
      <FileText className="h-5 w-5 mr-1" />
      Excel
    </button>
    <button className="flex items-center bg-red-600 hover:bg-red-400 text-white px-3 py-2 rounded-md transition cursor-pointer">
      <File className="h-5 w-5 mr-1" />
      PDF
    </button>
    <button className="flex items-center bg-gray-600 hover:bg-gray-400 text-white px-3 py-2 rounded-md transition cursor-pointer">
      <Printer className="h-5 w-5 mr-1" />
      Print
    </button>
  </div>
);