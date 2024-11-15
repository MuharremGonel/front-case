import Products from "@/components/Products";
import { Metadata } from "next";

interface productIdParams {
  params: {
    query: string;
  };
}

export async function generateMetadata({ params }: productIdParams): Promise<Metadata> {
  const { query } = params;

  return {
    title: `Search results for "${query}"`,
    description: `Browse through search results for "${query}" on our site.`,
    openGraph: {
      title: `Search results for "${query}"`,
      description: `Explore products matching "${query}" and find what you're looking for.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/search/${query}`,
    },
    twitter: {
      card: "summary",
      title: `Search results for "${query}"`,
      description: `Browse products matching "${query}" on our site.`,
    },
  };
}

const Search: React.FC<productIdParams> = async ({ params }) => {
  const { query } = params;
  
  return (
    <div className="max-w-7xl py-20 mx-auto flex gap-5">
      <main className="w-full">
        <Products
          fetchPath={`${process.env.NEXT_PUBLIC_API_URL}/products/search?q=${query}&`}
        />
      </main>
    </div>
  );
};

export default Search;