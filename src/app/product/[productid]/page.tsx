import DetailsProduct from "@/components/DetailsProduct";

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

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { productid } = await params;

  const productsRes = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!productsRes.ok) {
    throw new Error("Failed to fetch products");
  }

  const productsResult = await productsRes.json();

  const products: Product[] = productsResult.data ?? productsResult;

  const product = products.find(
    (item) => item.slug === productid
  );

  if (!product) {
    throw new Error("Product not found");
  }
  const detailsRes = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${product.id}`,
    {
      cache: "no-store",
    }
  );

  if (!detailsRes.ok) {
    throw new Error("Failed to fetch product details");
  }

  const detailsResult = await detailsRes.json();

  const details: Product = detailsResult.data ?? detailsResult;

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      <DetailsProduct data={details} />
    </main>
  );
};

export default ProductDetailsPage;