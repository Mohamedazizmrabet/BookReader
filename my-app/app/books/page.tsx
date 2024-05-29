import React from 'react'
import axios from 'axios'
import BookSingle from './bookSingle'
const Books = async () => {
    // const response =  axios.get('http://localhost:3000/file/getAllBooks').then((res)=>{

    // });
    // const data: Books[] =  response.data as Books[];
    // console.log(data);

    const response = await fetch('http://localhost:3000/file/getAllBooks', {
        cache: 'force-cache',
        next: { revalidate: 3600 }
    })
    const data: Books[] = await response.json() as Books[]; // Type assertion
    return (
        <div>
            <h1>Books available </h1>
            {data.map((book, i) => {
                return (
                    <BookSingle key={i} book={book} />
                )
            })}
        </div>
    )
}

export default Books