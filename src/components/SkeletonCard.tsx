const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">

      <div className="mx-auto h-24 w-24 rounded-lg bg-gray-200" />

      <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />

      <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

      <div className="mt-3 h-3 w-full rounded bg-gray-200" />
      <div className="mt-2 h-3 w-4/5 rounded bg-gray-200" />

    </div>
  );
};

export default SkeletonCard;