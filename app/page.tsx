import Image from "next/image";
import Link from "next/link";

type Category = {
  id: number;
  slug: string;
  name: string;
  url: string;
};


const Home: React.FC = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/products/categories`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      console.error(`API returned status ${res.status}`);
      throw new Error("Failed to fetch data");
    }
    const responseData = await res.json();
    const categoriesData: Category[] = responseData;
    return (
      <div className="flex columns-5 justify-between max-w-7xl py-4 mx-auto flex-wrap">
        {categoriesData.map((category) => (
          <div key={category.id} className="">
            <Link href={`/products/${category.slug}`}>
              <div className="block w-56 h-24 text-center items-center my-6 rounded-lg bg-white p-6 text-surface border hover:shadow-lg">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {category.name}
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching word data:", error);
  }
};
export default Home;