import NavItem from "./ActiveNavItem";
import { Suspense } from "react";

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
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: NavlinksProps[] = await res.json();

  return (
    <nav
      className="
            w-full
            border-b
            border-gray-200
            bg-white
        "
    >
      <div
        className="
                mx-auto
                max-w-5xl
                px-3
                sm:px-4
            "
      >
        <div
          className="
                    flex
                    h-11
                    items-center
                    gap-1
                    overflow-x-auto
                "
        >


        <Suspense>
          <NavItem href="/" name="হোম" />

          {data.map((item) => (
              <NavItem
              key={item.id}
              href={`/category/${item.id}`}
              name={item.nameBn}
              icon={item.icon}
              />
            ))}
            </Suspense>

        </div>
      </div>
    </nav>
  );
};

export default Navlinks;
