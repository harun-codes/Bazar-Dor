import SkeletonCard from "@/components/SkeletonCard";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f2f7f3] px-4 py-6">

      <div className="mx-auto h-32 max-w-6xl animate-pulse rounded-xl bg-gray-200" />

      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}

      </div>

    </main>
  );
};

export default Loading;