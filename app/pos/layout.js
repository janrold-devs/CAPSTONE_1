import TopNav from "@/components/layouts/TopNav";
import SideNav from "@/components/layouts/SideNav";

export const metadata = {
  title: "POS - Kkopi",
};

export default function POSLayout({ children }) {
  return (
<div className="flex h-screen w-screen">
      {/* Left Sidebar — Full height */}
      <SideNav />

      {/* Right side with TopNav & content */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Top Navbar */}
        <TopNav />

        {/* Main Content */}
        <main className="flex overflow-auto p-6 bg-[#EBDFD7]">
          {children}
        </main>
      </div>
    </div>
  );
}