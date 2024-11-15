"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { AccordionItem } from "@radix-ui/react-accordion";
import { FaChevronDown } from "react-icons/fa";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa6";
import * as Slider from "@radix-ui/react-slider";

interface categoryProps {
    fetchPath: string;
}

const Accordions: React.FC<categoryProps> = ({ fetchPath }) => {

    const [brands, setBrands] = useState([]);
    const [price, setPrice] = useState([]);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [range, setRange] = useState([0, 100]);
    const [ratingsCount, setRatingsCount] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        fetch(`${fetchPath}?limit=194&select=brand`)
            .then((response) => response.json())
            .then((data) => {
                const uniqueBrands = [...new Set(data.products.map((product) => product.brand).filter(Boolean))];
                setBrands(uniqueBrands);
            })
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, [fetchPath]);

    useEffect(() => {
        fetch(`${fetchPath}?limit=194&select=price`)
            .then((response) => response.json())
            .then((data) => {
                if (data.products && Array.isArray(data.products)) {
                    const price = data.products.map((product) => product.price).filter(Boolean);
                    const minPrice = Math.min(...price);
                    const maxPrice = Math.max(...price);
                    setMinValue(minValue);
                    setMaxValue(maxValue);
                    setRange([minPrice, maxPrice]);
                } else {
                    console.error("Beklenmedik veri formatı:", data);
                }
            })
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, [fetchPath]);

    useEffect(() => {
        // Rating verilerini çek
        fetch("https://dummyjson.com/products/category/laptops?limit=194&select=rating")
            .then((response) => response.json())
            .then((data) => {
                if (data.products && Array.isArray(data.products)) {
                    // Ratingleri gruplandır
                    const counts: { [key: number]: number } = {};
                    [1, 2, 3, 4, 5].forEach((rating) => {
                        counts[rating] = data.products.filter(
                            (product) => Math.round(product.rating) === rating
                        ).length;
                    });
                    setRatingsCount(counts);
                } else {
                    console.error("Beklenmedik veri formatı:", data);
                }
            })
            .catch((error) => console.error("Veri çekme hatası:", error));
    }, []);


    const handleSliderChange = (value) => {
        setRange(value);
    };


    return (
        <>
            {
                brands.length === 0
                    ?
                    <div className="hidden"></div>
                    :
                    <Accordion.Root type="single" collapsible className="Accordion">
                        <AccordionItem className="AccordionItem border-b pb-5" value="item-1">
                            <AccordionTrigger className="AccordionTrigger flex justify-between items-center w-full">
                                <div>Brand</div>
                                <FaChevronDown className="AccordionChevron" />
                            </AccordionTrigger>
                            <AccordionContent className="mt-5">
                                <div className="flex flex-col space-y-2 max-h-64 overflow-auto">
                                    {brands.map((brand, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Checkbox.Root
                                                className="flex size-[25px] items-center justify-center rounded outline-none border"
                                                id="c1"
                                            >
                                                <Checkbox.Indicator className="">
                                                    <FaCheck />
                                                </Checkbox.Indicator>
                                            </Checkbox.Root>
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion.Root>
            }

            <Accordion.Root
                className="AccordionRoot"
                type="single"
                collapsible
            >
                <Accordion.Item className="AccordionItem border-b pb-5" value="item-1">
                    <AccordionTrigger className=" AccordionTrigger flex justify-between items-center w-full">
                        <div>
                            Price
                        </div>
                        <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5">

                        <Slider.Root
                            className="relative flex h-5 w-full pr-5 touch-none select-none items-center"
                            value={range}
                            onValueChange={handleSliderChange}
                            min={minValue}
                            max={maxValue}
                            step={1}
                        >
                            <Slider.Track className="relative h-[6px] grow rounded-full bg-black">
                                <Slider.Range className="absolute h-full rounded-full bg-blue-600" />
                            </Slider.Track>
                            <Slider.Thumb
                                className="block size-5 rounded-[10px] shadow-[0_2px_10px] bg-blue-600 shadow-black hover:bg-blue-600 focus:shadow-[0_0_0_5px] focus:shadow-blue-300 focus:outline-none"
                                aria-label="Minimum Fiyat"
                            />
                            {range.map((value, index) => (
                                <div
                                    key={index}
                                    className="absolute transform -translate-y-8 text-sm bg-gray-200 p-1 rounded shadow"
                                    style={{
                                        left: `${((value - minValue) / (maxValue - minValue)) * 100
                                            }%`,
                                    }}
                                >
                                    ${value.toFixed(2)}
                                </div>
                            ))}


                            <Slider.Thumb
                                className="block size-5 rounded-[10px] shadow-[0_2px_10px] bg-blue-600 shadow-black hover:bg-blue-600 focus:shadow-[0_0_0_5px] focus:shadow-blue-300 focus:outline-none"
                                aria-label="Maksimum Fiyat"
                            />
                        </Slider.Root>
                        <div className="flex justify-between pr-5">
                            <div>{minValue}</div>
                            <div>{maxValue}</div>
                        </div>

                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>




            <Accordion.Root className="AccordionRoot" type="single" collapsible>
                <Accordion.Item className="AccordionItem" value="item-1">
                    <AccordionTrigger className="AccordionTrigger flex justify-between items-center w-full">
                        <div>Rating</div>
                        <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5">
                        <div className="flex flex-col space-y-2">
                            {Object.keys(ratingsCount).map((rating) => (
                                <div key={rating} className="flex justify-between">
                                    <span>{rating} yıldız</span>
                                    <span>{ratingsCount[Number(rating)]} product</span>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}
