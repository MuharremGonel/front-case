import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function Navbar() {
    return (
        <>
            <div className="h-16 border-b shadow-xl flex justify-between items-center">
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                    <div className="text-2xl text-blue-700 font-bold">Frontend Task</div>
                    <div className="flex items-center">
                        <IoSearchSharp className="-mr-6 z-10"/>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="border-2 border-blue-700 rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar