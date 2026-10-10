import SortableProducts from "@/components/SortableProducts";
import { notFound } from "next/navigation";

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

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ categoryid: string }>;
}) => {

  const { categoryid } = await params;


  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );


  if (!res.ok) {
    notFound();
  }


  const result = await res.json();


  const products: Product[] = Array.isArray(result)
    ? result
    : result.data || [];



  const categoryProducts = products.filter(
    (product) => product.category === categoryid
  );



  if (categoryProducts.length === 0) {
    notFound();
  }



  return (
    <main className="bg-[#f2f7f3] px-4 py-4 mt-5">


      <div className="flex mx-auto max-w-6xl items-center gap-3 border border-[#dfe6e1] bg-white px-5 py-5">


        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f3f1] text-2xl">

          {categoryProducts[0]?.categoryIcon}

        </div>


        <div>

          <h1 className="text-[18px] font-bold leading-5 text-[#27312b]">

            {categoryProducts[0]?.categoryNameBn || "ক্যাটাগরি"}

          </h1>


          <p className="mt-1 text-[11px] text-gray-500">

            {categoryProducts.length}টি পণ্য • আজকের দাম ও পরিবর্তন

          </p>


        </div>


      </div>




      <div className="mx-auto mt-5 max-w-6xl">


        <SortableProducts
          products={categoryProducts}
        />


      </div>


    </main>
  );
};

export default CategoryPage;