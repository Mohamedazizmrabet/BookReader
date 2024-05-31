"use client"
import React, { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip';

function Books({ data, page }: { data: Centent[], page: number }) {
    const book = useRef(null);
    const contentGenerater = (content: string) => {
        // Assuming content is a JSON string
        const arr = JSON.parse(content);

        // Use map to iterate and return actual content elements
        return arr.map((item: string, index: number) => (
            <div key={index} className="mb-4">
                {item === " " || item === "" ? <br /> : <p key={index} className="text-center text-lg text-gray-700">{item}</p>}
            </div>
        ));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <HTMLFlipBook
                width={700}
                height={700}
                style={{
                    margin: '0 auto',
                    background: 'white',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
                    borderRadius: '8px',
                    overflow: 'hidden'
                }}
                ref={book}
                className="rounded-lg shadow-lg"
            >
                {data.map((book, i) => (
                    <div key={book.id} className='flex items-center justify-center h-full flex-col p-8 bg-white'>
                        {contentGenerater(book.content)}
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}

export default Books;
