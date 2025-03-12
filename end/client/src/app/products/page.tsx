import baseUrl from "@/api/baseUrl";
import ProductCard from "@/components/ProductCard";

export default async function Products() {
    const data = await fetch(`${baseUrl}/products`)
    const products: Product[] = await data.json()

    return (
        <>
            <div className="mt-8">
                {/* Main Product */}
                <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                    <main className="my-8 grid grid-cols-4 gap-5">
                        {products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })}
                    </main>
                </div>
            </div>

        </>
    );
}
