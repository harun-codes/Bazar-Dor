import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f2f7f3] px-4">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-green-600">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-2 text-white"
        >
          হোম পেজে ফিরে যান
        </Link>

      </div>

    </main>
  );
}