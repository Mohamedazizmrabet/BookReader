'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import BooKs from "../../components/Abook/Books"
export default function ExampleClientComponent() {

    const [data, setData] = useState<Centent[] | []>([])
    const [page, setPage] = useState(0)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const pathURL = pathname.split("/")
    const id = pathURL[pathURL.length - 1]

    const upDownCounter = (bol: boolean) => {
        if (bol) setPage(page + 2)
        else setPage(page - 2)
    }
    useEffect(() => {
        console.log(page, "in useffect");

        const fetchData = async () => {

            const result = await axios.get(`http://localhost:3000/file/content/${id}/${page}`)
            console.log(result.data);

            setData(result.data as Centent[])

        }

        if (page % 10 === 0) fetchData()
        console.log('est ce que atef m9a7ib');

    }, [page % 10 === 0])

    return <div>

        <BooKs data={data} page={page} upDownCounter={upDownCounter} />
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => upDownCounter(false)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >{page + 1}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => upDownCounter(true)} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    </div>
}