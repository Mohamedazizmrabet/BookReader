"use client"
import React, { useEffect } from 'react'
import PagesInAbook from './pagesInAbook';
interface dataProps {
    id: number;
    content: string[];
    pageNumber: number;
    BookId: number;
    createdAt: string;
    updatedAt: string;
}
function Books({ data, page }: { data: Centent[], page: number }) {
    console.log(data);


    const contentGenerater = (content: Centent, centent2: Centent): dataProps[] => {
        // Assuming content is a JSON string
        const arr = JSON.parse(content.content);
        const arr2 = JSON.parse(centent2.content);
        const result = []
        // Use map to iterate and return actual content elements
        result.push({
            ...content, content: arr.map((item: string, index: number) => (
                <div key={index} className="mb-4">
                    {item === " " || item === "" ? <br /> : <p key={index} className="text-center text-lg text-gray-700">{item}</p>}
                </div>
            ))
        })

        result.push({
            ...centent2, content: arr2.map((item: string, index: number) => (
                <div key={index} className='mb-4'>
                    {item === " " || item === "" ? <br /> : <p key={index} className="text-center text-lg text-gray-700">{item}</p>}
                </div>
            ))
        })
        return result
    };
    const test = data.length ? contentGenerater(data[page], data[page + 1]) : "nigro"
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmoooooooooooooooo", test);

    return (
        <div>
            {
                data.length ? <PagesInAbook data={contentGenerater(data[page], data[page + 1])} page={page} /> : "loading"
            }
        </div>

    );
}

export default Books;
