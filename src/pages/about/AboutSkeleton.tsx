const AboutSkeleton = () => {
  return (
    <section className="animate-pulse flex flex-col">
      <div className="custom-container grow py-10">
        {/* 1. Title Skeleton */}
        <div className="h-10 md:h-12 bg-blue-200/50 w-48 mb-8 rounded-sm"></div>
        <div className="h-0.5 bg-primary/20 w-32 -mt-5 mb-10"></div>

        {/* 2. Text Content Skeletons */}
        <div className="space-y-6">
          {/* Paragraph 1 */}
          <div className="space-y-2.5">
            <div className="h-4 bg-blue-100/70 w-full rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[95%] rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[90%] rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[40%] rounded-sm"></div>
          </div>

          {/* Paragraph 2 */}
          <div className="space-y-2.5">
            <div className="h-4 bg-blue-100/70 w-full rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[98%] rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[85%] rounded-sm"></div>
          </div>

          {/* Subtitle Skeleton */}
          <div className="h-7 bg-blue-200/40 w-64 mt-8 mb-4 rounded-sm"></div>

          {/* List Skeleton */}
          <div className="space-y-3 ml-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-blue-100/60 w-64 rounded-sm"></div>
            ))}
          </div>

          {/* Paragraph 3 */}
          <div className="space-y-2.5 pt-4">
            <div className="h-4 bg-blue-100/70 w-full rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[92%] rounded-sm"></div>
            <div className="h-4 bg-blue-100/70 w-[30%] rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
