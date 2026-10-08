import React from 'react';
interface IncreaseProductsProps {
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

const PriceDecrease = async () => {

    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const result = await res.json();
    const products: IncreaseProductsProps[] = Array.isArray(result)
        ? result
        : result.data || [];

    const increasedProducts = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => a.today - b.today)
        .slice(0, 6);
    return (
        <section className="bg-[#f3f7f4] px-4 py-6 mt-10 rounded-md">
            <div className="mx-auto max-w-6xl">

                <div className="mb-4">
                    <h2 className="flex items-center gap-2 text-xl font-bold text-[#26332d]">
                        <span className="text-green-500">▼</span>
                        আজ দাম কমেছে
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                    {increasedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-2xl border border-[#e0e8e2] bg-white p-3.5 transition duration-200 hover:shadow-md"
                        >

                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
                                    {product.image}
                                </div>

                                <div>
                                    <h3 className="text-[15px] font-semibold text-[#26332d]">
                                        {product.nameBn}
                                    </h3>

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

                                <div className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-green-500">
                                    ▼ {product.change.pct.toFixed(1)}%
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PriceDecrease;