import { FileText, File, Printer } from "lucide-react";

export const ExportButtons = ({ data, filename = "export", title = "Data Export", excludeColumns = [] }) => {
  
  // Helper function to filter out specified columns
  const filterExcludedColumns = (data) => {
    return data.map(row => {
      const filteredRow = {};
      Object.keys(row).forEach(key => {
        // Only include columns that are not in the excludeColumns array
        if (!excludeColumns.includes(key)) {
          filteredRow[key] = row[key];
        }
      });
      return filteredRow;
    });
  };

  // Excel Export Function
  const exportToExcel = () => {
    if (!data || data.length === 0) {
      alert("No data to export!");
      return;
    }

    // Filter out excluded columns
    const filteredData = filterExcludedColumns(data);
    
    if (filteredData.length === 0 || Object.keys(filteredData[0]).length === 0) {
      alert("No exportable data found (all columns excluded)!");
      return;
    }

    // Get headers from first filtered object
    const headers = Object.keys(filteredData[0]);
    
    // Create CSV content
    const csvContent = [
      headers.join(","), // Header row
      ...filteredData.map(row => 
        headers.map(header => {
          const value = row[header];
          // Handle values that might contain commas or quotes
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        }).join(",")
      )
    ].join("\n");

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PDF Export Function
  const exportToPDF = () => {
    if (!data || data.length === 0) {
      alert("No data to export!");
      return;
    }

    // Filter out excluded columns
    const filteredData = filterExcludedColumns(data);
    
    if (filteredData.length === 0 || Object.keys(filteredData[0]).length === 0) {
      alert("No exportable data found (all columns excluded)!");
      return;
    }

    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    const headers = Object.keys(filteredData[0]);
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px;
            color: #333;
          }
          h1 { 
            color: #2563eb; 
            text-align: center;
            margin-bottom: 30px;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-top: 20px;
          }
          th, td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: left;
          }
          th { 
            background-color: #f8f9fa; 
            font-weight: bold;
            color: #495057;
          }
          tr:nth-child(even) { 
            background-color: #f8f9fa; 
          }
          tr:hover { 
            background-color: #e9ecef; 
          }
          .export-date {
            text-align: right;
            color: #6c757d;
            font-size: 12px;
            margin-top: 20px;
          }
          .note {
            font-style: italic;
            color: #6c757d;
            font-size: 12px;
            margin-bottom: 20px;
            text-align: center;
          }
          @media print {
            body { margin: 0; }
            @page { margin: 1cm; }
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <table>
          <thead>
            <tr>
              ${headers.map(header => `<th>${header}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${filteredData.map(row => `
              <tr>
                ${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="export-date">
          Exported on: ${new Date().toLocaleString()}
        </div>
      </body>
      </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger PDF save
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
      }, 500);
    };
  };

  // Print Function
  const handlePrint = () => {
    if (!data || data.length === 0) {
      alert("No data to print!");
      return;
    }

    const filteredData = filterExcludedColumns(data);
    
    if (filteredData.length === 0 || Object.keys(filteredData[0]).length === 0) {
      alert("No printable data found (all columns excluded)!");
      return;
    }

    const headers = Object.keys(filteredData[0]);
    
    const printContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="color: #2563eb; text-align: center; margin-bottom: 30px;">${title}</h1>
        <div style="font-style: italic; color: #6c757d; font-size: 12px; margin-bottom: 20px; text-align: center;">
          Note: Excluded columns: ${excludeColumns.length > 0 ? excludeColumns.join(', ') : 'None'}
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              ${headers.map(header => 
                `<th style="border: 1px solid #ddd; padding: 12px; text-align: left; font-weight: bold;">${header}</th>`
              ).join('')}
            </tr>
          </thead>
          <tbody>
            ${filteredData.map((row, index) => `
              <tr style="background-color: ${index % 2 === 0 ? '#ffffff' : '#f8f9fa'};">
                ${headers.map(header => 
                  `<td style="border: 1px solid #ddd; padding: 12px;">${row[header] || ''}</td>`
                ).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div style="text-align: right; color: #6c757d; font-size: 12px; margin-top: 20px;">
          Printed on: ${new Date().toLocaleString()}
        </div>
      </div>
    `;

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button 
        onClick={exportToExcel}
        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition cursor-pointer"
        title="Export to Excel (CSV format) - Excludes specified columns"
      >
        <FileText className="h-5 w-5 mr-1" />
        Excel
      </button>
      
      <button 
        onClick={exportToPDF}
        className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition cursor-pointer"
        title="Export to PDF - Excludes specified columns"
      >
        <File className="h-5 w-5 mr-1" />
        PDF
      </button>
      
      <button 
        onClick={handlePrint}
        className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md transition cursor-pointer"
        title="Print data - Excludes specified columns"
      >
        <Printer className="h-5 w-5 mr-1" />
        Print
      </button>
    </div>
  );
};