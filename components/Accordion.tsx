import React from 'react'
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { FaChevronDown } from "react-icons/fa";

function Accordions() {
    
    return (
        <>
            <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
            >
                <Accordion.Item className="AccordionItem border-b pb-5" value="item-1">
                    <AccordionTrigger className=" AccordionTrigger flex justify-between items-center w-full">
                        <div>
                            Brand
                        </div>
                        <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
           
            <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
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
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
            
            <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
            >
                <Accordion.Item className="AccordionItem border-b pb-5" value="item-1">
                    <AccordionTrigger className=" AccordionTrigger flex justify-between items-center w-full">
                        <div>
                            Rating
                        </div>
                        <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
            
            <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
            >
                <Accordion.Item className="AccordionItem pb-5" value="item-1">
                    <AccordionTrigger className=" AccordionTrigger flex justify-between items-center w-full">
                        <div>
                            Category
                        </div>
                        <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5">
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
        </>
    )
}
export default Accordions;