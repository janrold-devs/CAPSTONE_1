import TopNav from "@/components/layouts/TopNav";
import SideNav from "@/components/layouts/SideNav";

export const metadata = {
  title: "Ingredients & Materials - Kkopi",
};

export default function IngredientsLayout({ children }) {
  return (
<div className="flex h-screen w-screen">
      <SideNav />
      <div className="flex flex-col flex-1 min-w-0">
        <TopNav />
        <main className="flex p-6 bg-[#EBDFD7] w-full h-full overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}