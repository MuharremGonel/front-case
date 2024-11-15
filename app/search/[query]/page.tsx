import Products from "@/components/Products";

interface productIdParams {
    params: {
      query: string;
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