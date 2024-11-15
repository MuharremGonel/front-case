import React from 'react'
import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes'
import { CiHeart } from "react-icons/ci";
type Dimensions = {
    width: number;
    height: number;
    depth: number;
};
type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
};
type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
};
type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
};
const productItems: Product[] = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description:
            "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
        rating: 4.94,
        stock: 5,
        tags: ["beauty", "mascara"],
        brand: "Essence",
        sku: "RCH45Q1A",
        weight: 2,
        dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
        warrantyInformation: "1 month warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "Low Stock",
        reviews: [
            {
                rating: 2,
                comment: "Very unhappy with my purchase!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "John Doe",
                reviewerEmail: "john.doe@x.dummyjson.com",
            },
            {
                rating: 2,
                comment: "Not as described!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Nolan Gonzalez",
                reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
            },
            {
                rating: 5,
                comment: "Very satisfied!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Scarlett Wright",
                reviewerEmail: "scarlett.wright@x.dummyjson.com",
            },
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 24,
        meta: {
            createdAt: "2024-05-23T08:56:21.618Z",
            updatedAt: "2024-05-23T08:56:21.618Z",
            barcode: "9164035109868",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        },
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
        ],
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        description:
            "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
        rating: 3.28,
        stock: 44,
        tags: ["beauty", "eyeshadow"],
        brand: "Glamour Beauty",
        sku: "MVCFH27F",
        weight: 3,
        dimensions: { width: 12.42, height: 8.63, depth: 29.13 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Very satisfied!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Liam Garcia",
                reviewerEmail: "liam.garcia@x.dummyjson.com",
            },
            {
                rating: 1,
                comment: "Very disappointed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Nora Russell",
                reviewerEmail: "nora.russell@x.dummyjson.com",
            },
            {
                rating: 5,
                comment: "Highly impressed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Elena Baker",
                reviewerEmail: "elena.baker@x.dummyjson.com",
            },
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 32,
        meta: {
            createdAt: "2024-05-23T08:56:21.618Z",
            updatedAt: "2024-05-23T08:56:21.618Z",
            barcode: "2817839095220",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        },
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        ],
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
        id: 3,
        title: "Eyeshadow Palette with Mirror",
        description:
            "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
        rating: 3.28,
        stock: 44,
        tags: ["beauty", "eyeshadow"],
        brand: "Glamour Beauty",
        sku: "MVCFH27F",
        weight: 3,
        dimensions: { width: 12.42, height: 8.63, depth: 29.13 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Very satisfied!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Liam Garcia",
                reviewerEmail: "liam.garcia@x.dummyjson.com",
            },
            {
                rating: 1,
                comment: "Very disappointed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Nora Russell",
                reviewerEmail: "nora.russell@x.dummyjson.com",
            },
            {
                rating: 5,
                comment: "Highly impressed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Elena Baker",
                reviewerEmail: "elena.baker@x.dummyjson.com",
            },
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 32,
        meta: {
            createdAt: "2024-05-23T08:56:21.618Z",
            updatedAt: "2024-05-23T08:56:21.618Z",
            barcode: "2817839095220",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        },
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        ],
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
    {
        id: 4,
        title: "Eyeshadow Palette with Mirror",
        description:
            "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        category: "beauty",
        price: 19.99,
        discountPercentage: 5.5,
        rating: 3.28,
        stock: 44,
        tags: ["beauty", "eyeshadow"],
        brand: "Glamour Beauty",
        sku: "MVCFH27F",
        weight: 3,
        dimensions: { width: 12.42, height: 8.63, depth: 29.13 },
        warrantyInformation: "1 year warranty",
        shippingInformation: "Ships in 2 weeks",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Very satisfied!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Liam Garcia",
                reviewerEmail: "liam.garcia@x.dummyjson.com",
            },
            {
                rating: 1,
                comment: "Very disappointed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Nora Russell",
                reviewerEmail: "nora.russell@x.dummyjson.com",
            },
            {
                rating: 5,
                comment: "Highly impressed!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "Elena Baker",
                reviewerEmail: "elena.baker@x.dummyjson.com",
            },
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 32,
        meta: {
            createdAt: "2024-05-23T08:56:21.618Z",
            updatedAt: "2024-05-23T08:56:21.618Z",
            barcode: "2817839095220",
            qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        },
        images: [
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        ],
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
];
function Products() {
    return (
        <>
            <div className="max-w-7xl flex flex-wrap gap-5 gap-y-2">
                {productItems.map((product) => (
                    <Box key={product.id} maxWidth="300px" className="mb-4">
                        <Card size="2">
                            <Inset clip="padding-box" side="top" pb="current" className="relative">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    style={{
                                        display: "block",
                                        objectFit: "cover",
                                        width: "100%",
                                        height: 300,
                                    }}
                                />
                                <CiHeart size={24} className="h-10 w-10 bg-white rounded-full absolute top-5 right-5" />
                            </Inset>
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
                ))}
            </div>
        </>
    )
}
export default Products