import React from "react";
import { Box, Card, Text } from "@radix-ui/themes";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { Product } from "@/types/types";


type ProductCardProps = {
  product: Product;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <>
      <Box key={product.id} maxWidth="300px" className="mb-4">
        <Card className="relative h-full w-full min-w-[300px] hover:shadow-lg" size="2">
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout="responsive"
            width={300}
            height={300}
            objectFit="cover"
            loading="lazy"
          />
          <CiHeart
            size={24}
            className="h-10 w-10 bg-white rounded-full absolute top-5 right-5"
          />
          <Text as="p" size="3" className="p-4">
            <div className="font-bold text-xl">{product.title}</div>
            <div className="text-xs font-bold">{product.brand}</div>
            <div className="text-sm font-semibold text-gray-600">
              ${product.price.toFixed(2)}
              {product.discountPercentage > 0 && (
                <span className="ml-2 text-red-500">
                  -{product.discountPercentage}%
                </span>
              )}
            </div>
          </Text>
        </Card>
      </Box>
    </>
  );
};
export default ProductCard;