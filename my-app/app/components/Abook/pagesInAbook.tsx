"use client"
import React, { useEffect, useRef } from 'react';
import gsap from "gsap"
interface dataProps {
    id: number;
    content: string[];
    pageNumber: number;
    BookId: number;
    createdAt: string;
    updatedAt: string;
}
function PagesInAbook({ data, page }: { data: dataProps[], page: number }) {

    console.log(data);
    const firstPage = useRef(null)
    const secondPage = useRef(null)
    const handleFlipPage = () => {
        gsap.to(firstPage.current, {
            duration: 1, // Adjust animation duration as needed
            ease: 'power3.inOut', // Adjust easing function for smooth transition
            rotationY: 180,
            transformOrigin: 'right', // Rotate from left edge
        });

        gsap.to(secondPage.current, {
            duration: 1,
            ease: 'power3.inOut',
            rotationY: 180,
            transformOrigin: 'left', // Rotate from left edge
            onComplete: () => {
                // After the flip, update the pages
                gsap.set(secondPage.current, {
                    rotationX: 180,
                    transformOrigin: 'left center',
                });
            },
        });
    };
    useEffect(() => {
        return () => {
            gsap.killTweensOf(firstPage.current); // Clear any existing animations
            gsap.killTweensOf(secondPage.current);
        };
    }, []);
    return (
        <div className="flex justify-center w-[100%] h-[90vh]">
            <div ref={firstPage} className="w-1/2 p-4 bg-white border border-gray-200 rounded shadow-md mx-2">

                {data[0].content.map((item, index) => (
                    item
                ))}
                <div className="  text-center pt-6   ">
                    {data[0].pageNumber}
                </div>
            </div>

            <div ref={secondPage} className="w-1/2 p-4 bg-white border border-gray-200 rounded shadow-md mx-2">

                {data[1].content.map((item, index) => (
                    item
                ))}

                <div className='text-center'>
                    {data[1].pageNumber}
                </div>
            </div>
            <button onClick={handleFlipPage}>Turn Page</button>

        </div>
    );
}

export default PagesInAbook;
