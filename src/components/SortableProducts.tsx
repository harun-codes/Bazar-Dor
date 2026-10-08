"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";

interface Product {
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

interface SortableProductsProps {
    products: Product[];
}

const SortableProducts = ({
    products,
}: SortableProductsProps) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sort === "lowToHigh") {
            return a.today - b.today;
        }

        if (sort === "highToLow") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <div>
            <div className="mb-4 flex min-h-12 items-center rounded-xl border border-[#dfe6e1] bg-white px-6">

                <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                        সাজান
                    </span>

                    <div className="relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="appearance-none rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm text-gray-700 outline-none focus:border-green-500"
                        >
                            <option value="default">ডিফল্ট</option>
                            <option value="lowToHigh">দাম: কম থেকে বেশি</option>
                            <option value="highToLow">দাম: বেশি থেকে কম</option>
                        </select>

                        <FaChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500" />
                    </div>
                </div>

            </div>

            <p className="text-xs text-gray-500 mt-5">
                মোট {products.length}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 mt-5 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
};

export default SortableProducts;