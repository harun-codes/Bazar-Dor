"use client";

import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

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

interface MarqueeProps {
    products: Product[];
}

const Marquee = ({ products }: MarqueeProps) => {
    const items = products.slice(0, 15);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="w-full overflow-hidden border-b border-gray-200 bg-white">

            <MarqueeText
                direction="right"
                
                duration={35}
                pauseOnHover
            >
                <div className="flex items-center">

                    {items.map((item) => {
                        const isUp = item.change.dir === "up";

                        return (
                            <div
                                key={item.id}
                                className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-4 py-2 text-xs sm:px-5 sm:text-sm"
                            >
                                
                                <span className="text-base">
                                    {item.image || item.categoryIcon}
                                </span>

                             
                                <span className="whitespace-nowrap font-medium text-gray-700">
                                    {item.nameBn}
                                </span>

                          
                                <span className="whitespace-nowrap text-gray-500">
                                    {item.today} টাকা/
                                    {item.unit === "kg"
                                        ? "কেজি"
                                        : item.unit}
                                </span>

                             
                                <span
                                    className={`whitespace-nowrap font-semibold ${
                                        isUp
                                            ? "text-red-500"
                                            : "text-green-600"
                                    }`}
                                >
                                    {isUp ? "▲" : "▼"}{" "}
                                    {item.change.pct}%
                                </span>
                            </div>
                        );
                    })}

                </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;