import React from "react";

interface NavlinksProps {
    id: string;
    nameBn: string;
    icon: string;
}

const Navlinks = async () => {
    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/categories",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data: NavlinksProps[] = await res.json();

    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2 sm:px-6 lg:justify-center lg:px-8">

                {data.map((item) => (
                    <div
                        key={item.id}
                        className="flex shrink-0 cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                    >
                        <span className="text-base">
                            {item.icon}
                        </span>

                        <span className="whitespace-nowrap">
                            {item.nameBn}
                        </span>
                    </div>
                ))}

            </div>
        </nav>
    );
};

export default Navlinks;