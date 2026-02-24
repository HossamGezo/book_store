// Main Component
const AuthorsSkeleton = () => {
  const skeletonCards = Array.from({ length: 8 });

  // Return JSX
  return (
    <section className="py-10 min-h-[calc(100vh-73.88px)] flex flex-col animate-pulse">
      <div className="custom-container flex flex-col flex-1">
        {/* 1. Search Bar Skeleton */}
        <div className="w-[60%] h-10 bg-blue-200/50 rounded-sm mb-5"></div>

        {/* 2. Authors Grid Skeleton */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-10">
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-white h-[280px] flex items-center justify-center shadow-(--shadow-normal) rounded-lg border-b border-b-transparent"
            >
              <div className="relative">
                {/* Image Placeholder */}
                <div className="w-[250px] h-[250px] bg-blue-100/70 rounded-md"></div>
                {/* Name Label Placeholder */}
                <div className="absolute left-0 bottom-0 bg-blue-200/80 w-32 h-8 rounded-sm rounded-tl-none rounded-br-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Pagination Skeleton */}
        <div className="mx-auto w-full flex justify-center gap-2">
          <div className="w-10 h-10 bg-blue-200/50 rounded-sm"></div>
          <div className="w-10 h-10 bg-blue-200/50 rounded-sm"></div>
          <div className="w-10 h-10 bg-blue-200/50 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default AuthorsSkeleton;
