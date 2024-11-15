import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
interface categoryParams {
  params: {
    category: string;
  };
}
const Categories: React.FC<categoryParams> = async ({ params }) => {
  const { category } = params;
  return (
    <div className="max-w-7xl py-20 mx-auto flex gap-5">
      <aside className="max-w-xs w-full hidden xl:block">
        <Sidebar params={params}/>
      </aside>
      <main className="w-full">
        <Products fetchPath={`${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}?`} />
      </main>
    </div>
  );
};
export default Categories;