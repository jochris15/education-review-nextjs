'use client'

import baseUrl from "@/api/baseUrl"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function ProductCard({ product }: { product: Product }) {
    const router = useRouter()

    async function handleDelete() {
        const response = await fetch(`${baseUrl}/products/${product.id}`, {
            method: "DELETE"
        })

        if (!response.ok) throw new Error('Failed to delete')

        router.refresh()
    }


    return (
        <>
            <div className="flex flex-col flex-start items-center bg-white border-2 border-black p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">
                <Link href={`/products/${product.id}`}>
                    <picture>
                        <img
                            src={product.thumbnail}
                            alt="product image"
                            className="border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer bg-blue-300"
                        />
                    </picture>
                </Link>
                <div className="flex flex-col h-full w-full justify-between">
                    <b className="mt-5">
                        {product.title}
                    </b>
                    <hr className="border-black w-full my-2" />
                    <p>
                        {product.description}
                    </p>
                    <hr className="border-black w-full my-2" />
                    <button className="bg-blue-300 border-2 border-black p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] font-bold w-full mt-2" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}