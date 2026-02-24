const BookDetailsSkeleton = () => {
  return (
    <div className="custom-container min-h-screen p-5 animate-pulse">
      {/* 1. Top Section Skeleton (Image & Main Info) */}
      <div className="flex md:items-center max-md:flex-col bg-blue-100/50 p-2 sm:p-5 rounded-lg">
        {/* Image Placeholder */}
        <div className="h-[200px] w-[200px] md:h-[400px] md:w-[30%] bg-blue-200/50 rounded-md"></div>

        {/* Description Wrapper */}
        <div className="py-5 md:pl-10 grow w-full">
          <div className="flex flex-col gap-5">
            {/* Title Line */}
            <div className="h-8 bg-blue-200/60 w-3/4 rounded-sm"></div>

            {/* Author Line */}
            <div className="flex items-center gap-2.5">
              <div className="h-6 bg-blue-100/80 w-10 rounded-sm"></div>
              <div className="h-6 bg-blue-200/40 w-32 rounded-sm"></div>
            </div>

            {/* Rating Line */}
            <div className="flex items-center gap-2.5">
              <div className="h-6 bg-blue-100/80 w-24 rounded-sm"></div>
              <div className="h-6 bg-blue-100/80 w-12 rounded-sm"></div>
            </div>
          </div>

          {/* Cart Controls Skeleton */}
          <div className="flex items-center gap-5 my-10">
            <div className="w-[150px] h-10 bg-white/80 rounded-sm"></div>
            <div className="w-32 h-10 bg-primary/30 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* 2. Summary Skeleton (Multiple Lines) */}
      <div className="w-full md:w-3/4 my-5 bg-blue-100/50 p-5 rounded-lg space-y-3">
        <div className="h-4 bg-blue-200/30 w-full rounded-sm"></div>
        <div className="h-4 bg-blue-200/30 w-[95%] rounded-sm"></div>
        <div className="h-4 bg-blue-200/30 w-[98%] rounded-sm"></div>
        <div className="h-4 bg-blue-200/30 w-[40%] rounded-sm"></div>
      </div>

      {/* 3. Public Information Grid Skeleton */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 mt-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            {/* Label Placeholder */}
            <div className="w-32 h-8 bg-blue-100 rounded-sm"></div>
            {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-blue-200/50 rounded-full"></div>
            {/* Value Placeholder */}
            <div className="w-24 h-5 bg-blue-100 rounded-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;
