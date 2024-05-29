"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
function BookSingle({ book }: { book: Books }) {
    const route = useRouter()
    return (
        <div onClick={() => {
            route.push(`/books/${book.id}`)

        }}>
            <h3>{book.bookName}</h3>
            <h5>{book.author}</h5>
        </div>
    )
}

export default BookSingle