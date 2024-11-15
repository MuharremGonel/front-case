import React from 'react'
import Accordion from './Accordion'
import Products from './Products'
function Sidebar() {
    return (
        <div className="border rounded-lg flex flex-col px-5 py-5 gap-5">
            <Accordion />
        </div>
    )
}
export default Sidebar