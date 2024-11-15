import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { FaRegHeart } from "react-icons/fa6";

import {
    FaSpa,
    FaCalendarCheck,
    FaGift,
    FaHome,
    FaUtensils,
    FaMapMarkerAlt,
    FaPlane,
    FaBox,
    FaTags,
} from "react-icons/fa";

const categories = [
    { name: "Beauty & Spas", icon: <FaSpa /> },
    { name: "Things To Do", icon: <FaCalendarCheck /> },
    { name: "Gifts", icon: <FaGift /> },
    { name: "Auto & Home", icon: <FaHome /> },
    { name: "Food & Drink", icon: <FaUtensils /> },
    { name: "Local", icon: <FaMapMarkerAlt /> },
    { name: "Travel", icon: <FaPlane /> },
    { name: "Goods", icon: <FaBox /> },
    { name: "Coupons", icon: <FaTags /> },
];


const Navbar = () => {
    return (
        <>
            <div className="py-5 border-b shadow-xl px-5">
                <div className="flex md:justify-between justify-center gap-5 md:gap-0 items-center w-full max-w-7xl mx-auto  md:px-0">
                    <div className="md:text-2xl text-lg text-blue-700 font-bold">
                        Frontend Task
                    </div>
                    <SearchBar />
                    <div className="md:flex gap-5 items-center hidden">
                        <FaRegHeart size={24} />
                        <MdOutlineShoppingCart size={24} />
                        <GrNotification size={24} />
                        <button className="flex items-center gap-3 border rounded-full text-sm font-medium px-4 py-2 !text-black">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                strokeWidth="1.5"
                                className="h-6 w-6"
                            >
                                <path
                                    d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 
                                    7.5 6.5C7.5 8.98528 9.51472 11 12 11Z"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    strokeLinecap="square"
                                ></path>
                                <path
                                    d="M12 13C7.029 13 3 17.029 3 22H21C21 17.029 16.971 13 12 13Z"
                                    stroke="currentColor"
                                    strokeMiterlimit="10"
                                    strokeLinecap="square"
                                ></path>
                            </svg>
                            Sign In
                            <FaChevronDown size={10} />
                        </button>
                    </div>
                    <div className="block md:hidden">
                        <IoMdMenu size={24} />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-5 hidden md:block">
                    <ul className="flex flex-wrap gap-14 gap-y-5 justify-center">
                        {categories.map((category) => (
                            <li key={category.name} className="flex gap-2 items-center">
                                <span className="text-gray-500">{category.icon}</span>
                                <span className="text-black text-sm">{category.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Navbar;