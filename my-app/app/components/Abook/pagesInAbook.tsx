"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";

interface dataProps {
    id: number;
    content: string[];
    pageNumber: number;
    BookId: number;
    createdAt: string;
    updatedAt: string;
}

function PagesInAbook({ data, page, upDownCounter }: { data: dataProps[], page: number, upDownCounter: (bol: boolean) => void }) {
    const firstPage = useRef<HTMLDivElement>(null);
    const secondPage = useRef<HTMLDivElement>(null);

    const [firstPageContent, setFirstPageContent] = useState<dataProps | null>(null);
    const [secondPageContent, setSecondPageContent] = useState<dataProps | null>(null);

    useEffect(() => {
        setFirstPageContent(data[0]);
        setSecondPageContent(data[1]);
    }, [data]);

    const handleFlipPage = () => {
        gsap.to(secondPage.current, {
            duration: 1,
            ease: "power3.inOut",
            rotationY: -180,
            transformOrigin: "left",
            onComplete: () => {
                if (secondPage.current && firstPage.current) {
                    gsap.set(secondPage.current, {
                        clearProps: "all"
                    });
                    upDownCounter(true);
                    // // Update page content after flipping
                    // const nextPageIndex = (data.findIndex(d => d.id === firstPageContent?.id) + 1) % data.length;
                    // setFirstPageContent(data[nextPageIndex]);
                    // setSecondPageContent(data[(nextPageIndex + 1) % data.length]);
                } else {
                    return;
                }
            }
        });
    };

    useEffect(() => {
        return () => {
            gsap.killTweensOf(firstPage.current); // Clear any existing animations
            gsap.killTweensOf(secondPage.current);
        };
    }, []);

    return (
        <div className="flex justify-center w-full h-[90vh] perspective-1000">
            <div ref={firstPage} className="relative w-1/2 p-4 bg-white border border-gray-200 rounded shadow-md mx-2 overflow-auto max-h-full break-words transform-style-3d backface-hidden">
                {firstPageContent ? firstPageContent.content.map((item, index) => (
                    <div key={index}>{item}</div>
                )) : "loading"}
                <div className="text-center pt-6">
                    {firstPageContent?.pageNumber}
                </div>
            </div>

            <div ref={secondPage} className="relative w-1/2 p-4 bg-white border border-gray-200 rounded shadow-md mx-2 overflow-auto max-h-full break-words transform-style-3d backface-hidden">
                {secondPageContent ? secondPageContent.content.map((item, index) => (
                    <div key={index}>{item}</div>
                )) : "loading"}
                <div className="text-center">
                    {secondPageContent?.pageNumber}
                </div>
            </div>
            <button onClick={handleFlipPage}>Turn Page</button>
        </div>
    );
}

export default PagesInAbook;
