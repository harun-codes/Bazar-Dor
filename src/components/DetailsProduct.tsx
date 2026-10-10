import Link from "next/link";

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

interface DetailsProductProps {
  data: Product;
}

const DetailsProduct = ({ data }: DetailsProductProps) => {
  const isUp = data.change?.dir === "up";

  const marketPrices =
    data.markets?.flatMap((market) => [market.min, market.max]) ?? [];

  const lowestPrice =
    marketPrices.length > 0 ? Math.min(...marketPrices) : data.today;

  const highestPrice =
    marketPrices.length > 0 ? Math.max(...marketPrices) : data.today;

  const priceDiff = Math.abs(data.today - data.yesterday);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8 bg-[#f4f6f3] min-h-screen">
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-800 transition">
          হোম
        </Link>
        <span>›</span>
        <Link href="/" className="hover:text-gray-800 transition">
          {data.categoryNameBn}
        </Link>
        <span>›</span>
        <span className="text-gray-800 font-medium">{data.nameBn}</span>
      </nav>

      <section className="mb-6 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl sm:h-24 sm:w-24 sm:text-5xl">
            {data.image}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {data.nameBn}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              প্রতি {data.unit} · {data.categoryNameBn}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              গতকালকের তুলনায় আজ দাম{" "}
              <span className="font-semibold text-gray-900">
                {isUp ? "বেড়েছে" : "কমেছে"}
              </span>{" "}
              - {priceDiff} টাকা
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-end">
          <div className="w-full sm:w-48 rounded-xl bg-[#f0f4f1] p-4 text-center">
            <p className="text-xs text-gray-500 font-medium">আজকের দাম</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">
              {data.today}
            </p>
            <p className="mt-0.5 text-xs text-gray-500">টাকা / {data.unit}</p>
            <div className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-bold text-red-600">
              <span>{isUp ? "▲" : "▼"}</span>
              <span>{data.change?.pct}%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <h2 className="mb-4 text-base font-bold text-gray-900">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-2xs">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {lowestPrice}{" "}
              <span className="text-base font-semibold">টাকা</span>
            </p>
            <p className="mt-2 text-xs text-gray-400">সবচেয়ে কম দামের বাজার</p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-2xs">
            <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
            <p className="mt-2 text-2xl font-bold text-rose-600">
              {highestPrice}{" "}
              <span className="text-base font-semibold">টাকা</span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-2xs">
            <p className="text-xs text-gray-500">গড় দাম</p>
            <p className="mt-2 text-2xl font-bold text-emerald-600">
              {data.today} <span className="text-base font-semibold">টাকা</span>
            </p>
            <p className="mt-2 text-xs text-gray-400">
              প্রতি {data.unit}-এর হিসাবে
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            বাজারভিত্তিক আজকের দাম
          </h2>
        </div>

        <div className="space-y-3 md:hidden">
          {data.markets?.map((market, index) => {
            const avgMarketPrice = ((market.min + market.max) / 2).toFixed(2);
            return (
              <div
                key={`${market.market}-${index}`}
                className="rounded-xl border border-gray-100 bg-[#f9faf9] p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{market.market}</h3>
                    <p className="text-xs text-gray-500">{market.division}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    গড়: {avgMarketPrice} টাকা
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs border-t border-gray-200/60 pt-3">
                  <div>
                    <span className="text-gray-500">সর্বনিম্ন: </span>
                    <span className="font-bold text-gray-800">
                      {market.min} টাকা
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">সর্বাধিক: </span>
                    <span className="font-bold text-gray-800">
                      {market.max} টাকা
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <th className="pb-3 font-semibold">বাজার</th>
                <th className="pb-3 font-semibold">বিভাগ</th>
                <th className="pb-3 font-semibold">সর্বনিম্ন</th>
                <th className="pb-3 font-semibold">সর্বাধিক</th>
                <th className="pb-3 font-semibold text-right">গড়</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {data.markets?.map((market, index) => {
                const avgMarketPrice = ((market.min + market.max) / 2).toFixed(
                  2,
                );
                return (
                  <tr
                    key={`${market.market}-${index}`}
                    className="hover:bg-gray-50/50"
                  >
                    <td className="py-3.5 font-bold text-gray-900">
                      {market.market}
                    </td>
                    <td className="py-3.5 text-gray-600">{market.division}</td>
                    <td className="py-3.5 font-medium text-gray-800">
                      {market.min} টাকা
                    </td>
                    <td className="py-3.5 font-medium text-gray-800">
                      {market.max} টাকা
                    </td>
                    <td className="py-3.5 font-bold text-gray-900 text-right">
                      {avgMarketPrice} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {(!data.markets || data.markets.length === 0) && (
          <div className="rounded-xl bg-gray-50 p-6 text-center">
            <p className="text-gray-500">বাজারের তথ্য পাওয়া যায়নি।</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DetailsProduct;
