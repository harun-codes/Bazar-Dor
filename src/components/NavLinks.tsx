import Link from "next/link";

interface NavlinksProps {
  id: string;
  nameBn: string;
  icon: string;
}

const Navlinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
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

      <div className="mx-auto max-w-5xl px-3 sm:px-4">

        <div className="flex h-10 items-center gap-1 overflow-x-auto">

          <Link
            href="/"
            className="shrink-0 rounded px-2 py-1 text-[15px] font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
          >
            হোম
          </Link>

          {data.map((item) => (
            <Link
              key={item.id}
              href={`/category/${item.id}`}
              className="flex shrink-0 items-center gap-1 rounded px-2 py-1 text-[15px] font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
              <span className="text-[11px]">
                {item.icon}
              </span>

              <span className="whitespace-nowrap">
                {item.nameBn}
              </span>
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
};

export default Navlinks;