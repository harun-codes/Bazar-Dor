import NavItem from "./ActiveNavItem";

interface NavlinksProps {
  id: string;
  nameBn: string;
  icon: string;
}

const Navlinks = async () => {

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
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



  const data: NavlinksProps[] = Array.isArray(result)
    ? result
    : result.data || [];



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

          <NavItem
            href="/"
            name="হোম"
          />


          {data.map((item)=>(
            
            <NavItem
              key={item.id}
              href={`/category/${item.id}`}
              name={item.nameBn}
              icon={item.icon}
            />

          ))}


        </div>

      </div>

    </nav>
  );
};

export default Navlinks;