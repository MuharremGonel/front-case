import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import * as Accordion from "@radix-ui/react-accordion";
import { AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { FaChevronDown } from "react-icons/fa";
type FooterSection = {
  title: string;
  items: string[];
};
export const footerSections: FooterSection[] = [
  {
    title: "Support",
    items: [
      "Help Center",
      "Report Infringement",
      "Refund Policies",
      "Merchant Class Action Settlement Notice",
    ],
  },
  {
    title: "Sell on Brand",
    items: [
      "Join Brand Marketplace",
      "Run a Brand Campaign",
      "How does Brand work for Merchants",
      "Sponsor your Campaign",
      "Affiliate Program",
      "Vendor Code of Conduct",
    ],
  },
  {
    title: "Company",
    items: [
      "About Brand",
      "Jobs",
      "Press",
      "Investor Relations",
      "Management Team",
    ],
  },
];
type AccordionSection = {
  title: string;
  items: string[];
};
export const accordionSections: AccordionSection[] = [
  {
    title: "Treat Yourself",
    items: [
      "Eyelash Extensions",
      "Facials",
      "Fitness Classes",
      "Hair Salons",
      "Liposuction",
      "Massages",
      "Nail Salons",
      "Spas",
    ],
  },
  {
    title: "Things To Do",
    items: [
      "All Things To Do",
      "Arcade",
      "Auto Detailing",
      "Bars",
      "Bowling",
      "Escape Rooms",
      "Food Near Me",
      "Kids Activities",
      "Oil Change",
      "Restaurants",
    ],
  },
  {
    title: "Coupons",
    items: [
      "Coupon Codes",
      "Coupon Codes by Brand",
      "Exclusive Offers",
      "Coupon Codes by Category",
      "Seasonal Coupon Codes",
      "Coupons Blog",
    ],
  },
  {
    title: "Gifts for Occasions",
    items: [
      "All Gift Ideas",
      "Valentine's Day Gifts",
      "Mother's Day Gifts",
      "Father's Day Gifts",
      "Birthday Gifts",
      "Gift Cards",
    ],
  },
];
export const footerLinks: string[] = [
  "© 2024 Brand, Inc. All Rights Reserved.",
  "Terms and Conditions",
  "Privacy Statement",
  "Do Not Sell or Share My Personal Information",
  "Accessibility",
  "Sitemap",
  "Customer Support",
  "Licenses",
];
function Footer() {
  return (
    <>
      <div className="bg-[#edeff1]">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row  justify-between items-center py-10">
          <div className="text-2xl text-blue-700 font-bold">Frontend Task</div>
          <div className="flex flex-col text-center lg:text-start">
            <div className="text-lg font-bold">Follow Us</div>
            <div className="flex gap-7 mt-5">
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaXTwitter size={24} />
              <FaLinkedin size={24} />
            </div>
          </div>
        </div>
        <div className="max-w-7xl border-t pt-5 mx-auto w-full flex justify-between items-center py-10">
          <div className="flex flex-col lg:flex-row w-full text-center gap-y-5 lg:justify-between">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                <ul className="space-y-3 text-base">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mt-5 text-gray-600 hover:text-gray-800">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col w-full lg:w-1/4">
              <h2 className="text-lg text-center font-bold mb-4">Quick Links</h2>
              <Accordion.Root
                className="AccordionRoot"
                type="single"
                defaultValue="item-1"
                collapsible
              >
                {accordionSections.map((section, index) => (
                  <Accordion.Item className="AccordionItem" value={`item-${index}`} key={index}>
                    <AccordionTrigger className="AccordionTrigger flex max-w-52 min-w-52 mx-auto justify-between items-center w-full">
                      <div className="!text-sm">{section.title}</div>
                      <FaChevronDown className="AccordionChevron" />
                    </AccordionTrigger>
                    <AccordionContent className="mt-5 ml-0 lg:ml-5 space-y-2 text-sm">
                      <ul>
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 hover:text-gray-800 mb-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="flex flex-col lg:flex-row text-center justify-center gap-2">
            {footerLinks.map((link, index) => (
              <div key={index} className="text-xs text-gray-600 hover:text-gray-800">
                {link}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer