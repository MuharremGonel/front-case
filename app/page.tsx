import Link from "next/link";
import { Metadata } from "next";

type Category = {
  id: number;
  slug: string;
  name: string;
  url: string;
};

export const generateMetadata = (): Metadata => ({
  title: "Home - Browse Categories",
  description: "Discover various product categories and find your next purchase.",
  openGraph: {
    title: "Home - Browse Categories",
    description: "Explore our product categories to find great deals and top products.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Browse Categories",
    description: "Explore our product categories to find great deals and top products.",
  },
});

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
      <div className="flex columns-5 xl:justify-start justify-center gap-2 md:gap-10 gap-y-3 max-w-7xl py-4 mx-auto flex-wrap">
        {categoriesData.map((category) => (
          <div key={category.slug} className="">
            <Link href={`/products/${category.slug}`}>
              <div className="block w-56 h-24 text-center items-center my-6 rounded-lg bg-white hover:text-blue-600 p-6 text-surface border hover:shadow-lg hover:shadow-blue-300">
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