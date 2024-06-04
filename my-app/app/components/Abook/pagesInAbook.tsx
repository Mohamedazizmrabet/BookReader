import React from 'react';
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


    return (
        <div className="flex justify-center">

        </div>
    );
}

export default PagesInAbook;
