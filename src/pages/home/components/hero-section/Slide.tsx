// Types
type SlideProps = {
  gradient: string;
  image: string;
  title: string;
  desc: string;
  translateX: string;
};
// Main Component
const Slide = ({gradient, image, title, desc, translateX}: SlideProps) => {
  return (
    <div
      className={`slide w-screen shrink-0 h-[calc(100vh-129px)] lg:h-[calc(100vh-72.88px)] flex-center flex-col lg:flex-row gap-10 xxl:gap-12 transition-transform duration-500 ${gradient} ${translateX}`}
    >
      {/* Slider Image */}
      <div className="slider-image-container w-[335px] xl:w-[450px] select-none">
        <img
          src={image}
          alt="IMAGE"
          className="object-contain"
          draggable="false"
        />
      </div>
      {/* Slider Description */}
      <div className="slider-desc text-[#333] font-serif text-center w-[335px] sm:w-[500px] xl:w-[550px] xxl:w-[900px] select-none">
        <h3 className="mb-5 text-3xl sm:text-4xl lg:text-6xl xxl:text-[65px] font-bold tracking-wide">
          {title}
        </h3>
        <p className="text-white text-lg sm:text-2xl xxl:text-4xl font-light tracking-wider">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Slide;
