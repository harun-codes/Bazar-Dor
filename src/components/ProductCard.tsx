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

const ProductCard = ({
  product,
}: {
  product: Product;
}) => {
  return (
    <div className="rounded-2xl border border-[#dfe7e1] bg-white p-3.5 transition duration-200 hover:shadow-md">

      <div className="flex items-start gap-3">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
          {product.image}
        </div>

        <div>
          <h2 className="text-[15px] font-semibold text-[#27342e]">
            {product.nameBn}
          </h2>

          <p className="mt-0.5 text-xs text-gray-500">
            প্রতি{" "}
            {product.unit === "kg"
              ? "কেজি"
              : product.unit}
          </p>
        </div>

      </div>

      <div className="mt-4 flex items-end justify-between">

        <div>
          <p className="text-xs text-gray-500">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-[17px] font-bold text-[#26332d]">
            {product.today} টাকা
          </p>
        </div>

        <div
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            product.change.dir === "up"
              ? "bg-red-50 text-red-500"
              : product.change.dir === "down"
              ? "bg-green-50 text-green-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {product.change.dir === "up" && "▲ "}
          {product.change.dir === "down" && "▼ "}

          {product.change.pct.toFixed(1)}%
        </div>

      </div>

    </div>
  );
};

export default ProductCard;