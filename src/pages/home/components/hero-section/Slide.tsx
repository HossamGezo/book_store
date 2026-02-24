// Types
type SlideProps = {
  title: string;
  description: string;
  image: string;
  gradient: string;
};

// Main Component
const Slide = ({ gradient, image, title, description }: SlideProps) => {
  return (
    <div
      className={`w-full shrink-0 h-[calc(100vh-129px)] lg:h-[calc(100vh-72.88px)] flex items-center justify-center flex-col lg:flex-row gap-16 ${gradient}`}
    >
      {/* Slide Image */}
      <div className="slide-image-container w-[235px] sm:w-[335px] xl:w-[450px] select-none">
        <img
          src={image}
          alt={title}
          className="object-contain"
          draggable="false"
        />
      </div>
      {/* Slide Description */}
      <div className="text-[#333] font-serif text-center w-[335px] sm:w-[500px] xl:w-[550px] xxl:w-[900px] select-none">
        <h3 className="mb-5 text-3xl sm:text-4xl lg:text-6xl xxl:text-[65px] font-bold tracking-wide">
          {title}
        </h3>
        <p className="text-white text-lg sm:text-2xl xxl:text-4xl font-light tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Slide;
