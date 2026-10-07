"use client";

import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
    const [date] = useState(() =>
        new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        }),
    );

    return (
        <header className="w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

                
                <div className="flex items-center gap-3 ml-40">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 p-2 shadow-sm">
                        <Image
                            src="/logo-icon.png"
                            alt="বাজার দর"
                            width={32}
                            height={32}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div>
                        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            বাজার দর
                        </h2>

                        <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                            {date || "তারিখ লোড হচ্ছে..."}
                        </p>
                    </div>
                </div>

                
                <div className="flex w-full gap-2 sm:w-auto sm:justify-end">
                    <button
                        className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-green-600 hover:text-green-700 active:scale-95 sm:flex-none sm:px-5"
                    >
                        সাইন ইন
                    </button>

                    <button
                        className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 active:scale-95 sm:flex-none sm:px-5"
                    >
                        সাইন আপ
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;