import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl py-20 mx-auto flex gap-5">
        <div className="max-w-xs w-full hidden xl:block">
          <Sidebar />
        </div>
        <div className="w-full">
          <Products />
        </div>
      </div>
    </>
  );
}
