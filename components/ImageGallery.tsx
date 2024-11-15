"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

interface ProductData {
    title: string;
    images: string[];
}
export default function ImageGallery({ productData }: { productData: ProductData }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const thumbnailImages = productData.images.length > 0 ? productData.images : [...productData.images, productData.images[0]];
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                zoom={true}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                className="max-w-xs lg:max-w-xl"
            >
                {productData.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-zoom-container">
                            <Image
                                className="cursor-pointer object-contain h-96 bg-white"
                                width={3840}
                                height={2160}
                                src={image}
                                alt={`${productData.title} - ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Navigation, Thumbs]}
                className="max-w-xs lg:max-w-xl"
            >
                {thumbnailImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={3840}
                            height={2160}
                            src={image}
                            alt={`${productData.title} Thumbnail - ${index + 1}`}
                            className="cursor-pointer h-36 w-36 object-contain"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </>
    );
}