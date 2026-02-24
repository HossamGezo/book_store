const ResetPasswordSkeleton = () => {
  return (
    <div className="custom-container flex items-center justify-center flex-col gap-5 py-5 min-h-[calc(100vh-73.88px)] animate-pulse">
      {/* 1. Page Title Skeleton (White Box with Shadow) */}
      <div className="w-64 h-[68px] bg-white shadow-lg rounded-lg mb-5"></div>

      {/* 2. Reset Form Skeleton */}
      <div className="w-full max-w-[425px] shadow-lg flex flex-col gap-5 bg-blue-100/50 py-5 px-5 sm:p-10 rounded-lg">
        {/* Email Input Placeholder */}
        <div className="w-full h-[45px] bg-white/80 rounded-sm"></div>

        {/* Submit Button Placeholder */}
        <div className="w-32 h-10 bg-primary/30 rounded-md"></div>
      </div>

      {/* 3. Footer Link Placeholder (Back to Login) */}
      <div className="w-32 h-6 bg-blue-200/30 rounded-sm mt-2"></div>
    </div>
  );
};

export default ResetPasswordSkeleton;
