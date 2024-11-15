import React from "react";
import Image from "next/image";
import { FaStar, FaFire } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import * as Tabs from "@radix-ui/react-tabs";
import { notFound } from "next/navigation";
import { Product } from "@/types/types";
import ImageGallery from "@/components/ImageGallery";
import { Metadata } from "next";


export async function generateMetadata({ params }: productIdParams): Promise<Metadata> {
  const { id } = params;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch product data for metadata");
    }
    const productData: Product = await res.json();

    return {
      title: `${productData.title} - ${productData.brand}`,
      description: productData.description,
      openGraph: {
        title: `${productData.title} - ${productData.brand}`,
        description: productData.description,
        images: productData.images?.[0],
      },
      twitter: {
        card: "summary_large_image",
        title: `${productData.title} - ${productData.brand}`,
        description: productData.description,
        images: productData.images?.[0],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Product Not Found",
      description: "This product could not be found.",
    };
  }
}

interface productIdParams {
  params: {
    id: string;
  };
}
const ProductPage: React.FC<productIdParams> = async ({ params }) => {
  const { id } = params;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/products/${id}`;
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.error(`API returned status ${res.status}`);
      throw new Error("Failed to fetch data");
    }
    const responseData = await res.json();
    const productData: Product = responseData;
    return (
      <>
        <div className="max-w-7xl mx-auto py-20">
          <div className="flex flex-col px-5 xl:px-0">
            <div className="text-4xl font-bold">
              {productData.title}
            </div>
            <div className="flex items-center text-gray-400">
              <span>{productData.brand}</span>
              {productData.brand === undefined
                ?
                <span className="hidden"></span>
                :
                <span className="mx-2">|</span>


              }
              <div className="flex items-center">
                <FaStar size={20} className="text-yellow-400 mr-2" />
                <div className="text-black mr-1">{productData.rating}</div>
                <div>
                  (<span className="underline">{productData.reviews.length} reviews</span>)
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center mt-3">
              <div className="border border-black/40 rounded-lg">
                <div className="flex gap-2 items-center text-xs px-2 py-1">
                  <FaShippingFast />
                  <div>{productData.shippingInformation}</div>
                </div>
              </div>
              <div className="border border-black/40 rounded-lg">
                <div className="flex gap-2 items-center text-xs px-2 py-1">
                  <RiCustomerServiceFill />
                  <div>{productData.warrantyInformation}</div>
                </div>
              </div>
              <div className="border border-black/40 rounded-lg">
                <div className="flex gap-2 items-center text-xs px-2 py-1">
                  <FaFire className="text-red-400" />
                  <div>{productData.availabilityStatus}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-1/2">
            <ImageGallery productData={productData}/>
            </div>
            <div className="flex w-full px-5 md:px-0 md:w-1/2">
              <div className="mt-5 flex flex-col gap-5">
                <div>{productData.description}</div>
                <span className="text-gray-400">{productData.stock} stocks</span>
                <button className="bg-blue-700 text-white text-2xl py-3 rounded-full">
                  ${productData.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>

          <div className="py-20">
            <Tabs.Root
              className="max-w-7xl mx-auto flex flex-col"
              defaultValue="tab1"
            >
              <Tabs.List
                className="flex shrink-0 border-b"
                aria-label="Product Details"
              >
                <Tabs.Trigger
                  className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 leading-none outline-none data-[state=active]:text-blue-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
                  value="tab1"
                >
                  About
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 leading-none outline-none data-[state=active]:text-blue-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
                  value="tab2"
                >
                  Fine Print
                </Tabs.Trigger>
                <Tabs.Trigger
                  className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 leading-none outline-none data-[state=active]:text-blue-600 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative"
                  value="tab3"
                >
                  Reviews
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content
                className="p-5 outline-none"
                value="tab1"
              >
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <ul className="mt-4">
                  <li><strong>Brand:</strong> {productData.brand}</li>
                  <li><strong>Category:</strong> {productData.category}</li>
                  <li><strong>Price:</strong> ${productData.price}</li>
                  <li><strong>Discount:</strong> {productData.discountPercentage}%</li>
                  <li><strong>Rating:</strong> {productData.rating}</li>
                </ul>
              </Tabs.Content>

              <Tabs.Content
                className=" p-5 outline-none"
                value="tab2"
              >
                <p>
                  <strong>Warranty:</strong> {productData.warrantyInformation}<br />
                  <strong>Shipping Information:</strong> {productData.shippingInformation}<br />
                  <strong>Availability Status:</strong> {productData.availabilityStatus}<br />
                  <strong>Return Policy:</strong> {productData.returnPolicy}<br />
                  <strong>Minimum Order Quantity:</strong> {productData.minimumOrderQuantity}
                </p>
              </Tabs.Content>

              <Tabs.Content
                className="rounded-b-md p-5 outline-none"
                value="tab3"
              >
                <div className="flex flex-wrap justify-center md:justify-between gap-y-10">
                  {productData.reviews.map((review, index) => (
                    <div key={index} className="flex flex-col min-w-72">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center text-center items-center">
                          <div className="font-bold text-white">
                            {review.reviewerName.charAt(0)}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div>{review.reviewerName}</div>
                          <div>{review.reviewerEmail}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex">
                          {Array.from({ length: review.rating }, (_, index) => (
                            <FaStar key={index} className="text-yellow-400" />
                          ))}
                        </div>
                        <div>{new Date(review.date).toLocaleDateString()}</div>
                      </div>
                      <div>{review.comment}</div>
                    </div>
                  ))}
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </>

    );
  } catch (error) {
    console.error("Error fetching word data:", error);
    return notFound();
  }
};

export default ProductPage;