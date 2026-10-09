import SkeletonCard from "@/components/SkeletonCard";

const CategoryLoading = () => {
  return (
    <main className="mt-5 min-h-screen bg-[#f2f7f3] px-4 py-4">

      <div className="mx-auto max-w-6xl animate-pulse rounded-xl border border-[#dfe6e1] bg-white px-5 py-5">

        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-full bg-gray-200" />

          <div>
            <div className="h-5 w-32 rounded bg-gray-200" />

            <div className="mt-2 h-3 w-48 rounded bg-gray-200" />
          </div>

        </div>

      </div>

      <div className="mx-auto mt-5 h-14 max-w-6xl animate-pulse rounded-xl border border-[#dfe6e1] bg-white" />

      <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </main>
  );
};

export default CategoryLoading;