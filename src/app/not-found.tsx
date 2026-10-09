import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f2f7f3] px-4">
      <div className="text-center">

        <div className="mb-4 text-7xl">
          🔍
        </div>

        <h1 className="text-4xl font-bold text-[#27312b]">
          404
        </h1>

        <h2 className="mt-2 text-xl font-semibold text-gray-700">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো নেই অথবা সরিয়ে ফেলা হয়েছে।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>

      </div>
    </main>
  );
};

export default NotFound;