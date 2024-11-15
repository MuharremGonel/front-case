import React from 'react'
import Accordion from './Accordion'

interface categoryParams {
    params: {
      category: string;
    };
  }

const Sidebar: React.FC<categoryParams> = async ({ params }) => {
    const { category } = params;
    return (
        <div className="border rounded-lg flex flex-col px-5 py-5 gap-5">
            <Accordion fetchPath={`${process.env.NEXT_PUBLIC_API_URL}/products/category/${category}?`} />
        </div>
    )
}

export default Sidebar