const ContactSkeleton = () => {
  return (
    <section className="contact custom-container animate-pulse mt-10">
      {/* 1. Contact Address Skeleton */}
      <div className="contact-address flex max-md:flex-col gap-5 md:justify-between border-b-2 border-b-primary/20 pb-5 mb-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-between gap-2.5 w-full"
          >
            {/* Icon Circle Placeholder */}
            <div className="w-10 h-10 bg-blue-200/60 rounded-full"></div>
            {/* Title Placeholder */}
            <div className="w-20 h-5 bg-blue-100/80 rounded-sm"></div>
            {/* Desc Placeholder */}
            <div className="w-32 h-4 bg-blue-50/70 rounded-sm"></div>
          </div>
        ))}
      </div>

      {/* 2. Contact Form Skeleton */}
      <div className="flex flex-col gap-2.5 pt-5 w-full md:w-fit mx-auto mt-10">
        {/* Form Title */}
        <div className="w-48 h-8 bg-blue-200/50 mx-auto mb-10 rounded-sm"></div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* 3 Input Bar Placeholders */}
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>

          {/* Textarea Placeholder */}
          <div className="xl:col-span-3 w-full h-[300px] bg-blue-100/30 rounded-sm"></div>
        </div>

        {/* Button Placeholder */}
        <div className="w-32 h-10 bg-primary/30 rounded-md mt-2"></div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
