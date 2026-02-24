const ContactSkeleton = () => {
  return (
    <section className="contact custom-container animate-pulse mb-10">
      {/* 1. Contact Address Skeleton */}
      <div className="contact-address">
        {/* Item 1: Address */}
        <div>
          <div className="icon w-7 h-7 bg-blue-200/60 rounded-full"></div>
          <span className="w-20 h-5 bg-blue-100/80 rounded-sm"></span>
          <span className="w-40 h-5 bg-blue-50/70 rounded-sm"></span>
        </div>

        {/* Item 2: Phone */}
        <div>
          <div className="icon w-7 h-7 bg-blue-200/60 rounded-full"></div>
          <span className="w-16 h-5 bg-blue-100/80 rounded-sm"></span>
          <span className="w-32 h-5 bg-blue-50/70 rounded-sm"></span>
        </div>

        {/* Item 3: Email */}
        <div>
          <div className="icon w-7 h-7 bg-blue-200/60 rounded-full"></div>
          <span className="w-16 h-5 bg-blue-100/80 rounded-sm"></span>
          <span className="w-36 h-5 bg-blue-50/70 rounded-sm"></span>
        </div>
      </div>

      {/* 2. Contact Form Skeleton */}
      <div className="contact-form w-full md:w-fit">
        {/* Form Title */}
        <div className="w-64 h-10 bg-blue-200/50 mx-auto mb-10 rounded-sm"></div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* 3 Input Bars */}
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>
          <div className="w-[325px] h-[45px] bg-blue-100/50 rounded-sm"></div>

          {/* Textarea Placeholder */}
          <div className="xl:col-span-3 w-full h-[300px] bg-blue-100/30 rounded-sm"></div>
        </div>

        {/* Button Placeholder */}
        <div className="w-32 h-10 bg-primary/30 rounded-md mt-5"></div>
      </div>
    </section>
  );
};

export default ContactSkeleton;
