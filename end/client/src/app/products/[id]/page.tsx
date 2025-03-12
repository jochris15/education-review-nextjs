import baseUrl from "@/api/baseUrl"
import Link from "next/link"
import type { Metadata } from 'next'

export async function generateMetadata(
    { params }: { params: Promise<{ id: number }> }
): Promise<Metadata> {
    // read route params
    const { id } = await params

    // fetch data
    const product: Product = await fetch(`${baseUrl}/products/${id}`).then((res) => res.json())

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: [product.thumbnail],
        },
    }
}


export default async function DetailProduct({
    params
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params

    const response = await fetch(`${baseUrl}/products/${id}`)
    const product: Product = await response.json()

    return (
        <>
            <div className="flex flex-start bg-white border-2 border-black p-5 shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full mt-10">
                <picture>
                    <img
                        src={product.thumbnail}
                        alt="product image"
                        className="border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full bg-blue-300"
                    />
                </picture>
                <div className="flex mx-10 flex-col w-1/2 justify-between">
                    <b className="text-4xl mb-5">
                        {product.title}
                    </b>
                    <p className="h-full">
                        {product.description}
                    </p>
                    <div>
                        <Link href="/products" >
                            <button className="border-2 border-black p-2 shadow-[2px_2px_0px_rgba(0,0,0,1)] w-40 bg-blue-300 font-bold">Back</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}