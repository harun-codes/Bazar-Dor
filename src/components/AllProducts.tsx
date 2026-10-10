import Link from "next/link";

interface ProductsProps {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down";
        pct: number;
    };
}

const AllProducts = async () => {

    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            next: {
                revalidate: 60,
            },
        }
    );


    if (!res.ok) {
        return null;
    }



    const result = await res.json();


    const products: ProductsProps[] = Array.isArray(result)
        ? result
        : Array.isArray(result.data)
            ? result.data
            : [];



    if(products.length === 0){
        return null;
    }



    return (
        <main className="bg-[#f3f7f4] px-4 py-8 mt-10 rounded-md">

            <div className="mx-auto max-w-6xl">


                <div className="mb-5">

                    <h1 className="text-2xl font-bold text-[#26332d]">
                        সব পণ্য
                    </h1>


                    <p className="mt-1 text-sm text-gray-500">
                        মোট {products.length}টি পণ্য দেখানো হচ্ছে
                    </p>


                </div>



                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">


                    {products.map((product)=>(
                        
                        <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            className="block rounded-2xl border border-[#e0e8e2] bg-white p-3.5 transition duration-200 hover:shadow-md hover:border-green-500"
                        >


                            <div className="flex items-start gap-3">


                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">

                                    {product.image}

                                </div>



                                <div>


                                    <h2 className="text-[15px] font-semibold text-[#27342e]">

                                        {product.nameBn}

                                    </h2>


                                    <p className="mt-0.5 text-xs text-gray-500">

                                        প্রতি{" "}
                                        {product.unit === "kg"
                                            ? "কেজি"
                                            : product.unit}

                                    </p>


                                </div>


                            </div>




                            <div className="mt-4 flex items-end justify-between">


                                <div>

                                    <p className="text-xs text-gray-500">
                                        আজকের দাম
                                    </p>


                                    <p className="mt-0.5 text-[17px] font-bold text-[#26332d]">

                                        {product.today} টাকা

                                    </p>


                                </div>




                                <div
                                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                                        product.change?.dir === "up"
                                        ? "bg-red-50 text-red-500"
                                        : "bg-green-50 text-green-600"
                                    }`}
                                >

                                    {product.change?.dir === "up"
                                        ? "▲"
                                        : "▼"
                                    }

                                    {" "}

                                    {product.change?.pct?.toFixed(1) || 0}%

                                </div>


                            </div>


                        </Link>

                    ))}


                </div>


            </div>

        </main>
    );
};


export default AllProducts;