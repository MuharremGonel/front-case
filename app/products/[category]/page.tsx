import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";


interface categoryParams {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: categoryParams): Promise<Metadata> {
  const { category } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}`;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch product data for metadata");
    }
    const productData = await res.json();
    const product = productData.products[0];

    return {
      title: `${category} - Top Products`,
      description: `Explore top products in the ${category} category, including ${product?.title} and more.`,
      openGraph: {
        title: `${category} - Top Products`,
        description: `Discover quality products in the ${category} category, like ${product?.title}.`,
        images: product?.thumbnail ? [product.thumbnail] : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: `${category} - Top Products`,
        description: `Check out the best products in ${category}, including ${product?.title}.`,
        images: product?.thumbnail ? [product.thumbnail] : undefined,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Category Not Found",
      description: "This category could not be found.",
    };
  }
}


const Categories: React.FC<categoryParams> = async ({ params }) => {
  const { category } = params;



  return (
    <div className="max-w-7xl py-20 mx-auto flex gap-5">
      <aside className="max-w-xs w-full hidden xl:block">
        <Sidebar params={params} />
      </aside>
      <main className="w-full">
        <Products fetchPath={`${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}?`} />
      </main>
    </div>
  );
};

export default Categories;