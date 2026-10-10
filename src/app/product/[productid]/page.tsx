import DetailsProduct from "@/components/DetailsProduct";
import { notFound } from "next/navigation";

interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

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
  markets: Market[];
}

interface PageProps {
  params: Promise<{
    productid: string;
  }>;
}


const ProductDetailsPage = async ({
  params,
}: PageProps) => {


  const { productid } = await params;



  const productsRes = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 60,
      },
    }
  );



  if (!productsRes.ok) {
    notFound();
  }



  const productsResult = await productsRes.json();



  const products: Product[] = Array.isArray(productsResult)
    ? productsResult
    : productsResult.data || [];



  const product = products.find(
    (item) => item.slug === productid
  );



  if (!product) {
    notFound();
  }


  const detailsRes = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${product.id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );



  if (!detailsRes.ok) {
    notFound();
  }



  const detailsResult = await detailsRes.json();



  const details: Product =
    detailsResult.data ?? detailsResult;



  return (
    <main className="min-h-screen bg-gray-50 py-6">

      <DetailsProduct data={details} />

    </main>
  );
};


export default ProductDetailsPage;