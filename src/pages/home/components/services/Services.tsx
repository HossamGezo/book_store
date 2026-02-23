// Data
import services from "../../data/services";

// Styles
import "./services.css";

// Main Component
const Services = () => {
  const allServices = [...services, ...services];
  return (
    <section className="my-20">
      <div className="services-wrapper">
        <div className="services-slider">
          {/* All Services */}
          {allServices.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div
                key={index}
                className="bg-primary text-white w-[300px] shrink-0 flex items-center justify-center flex-col py-2.5 gap-5 rounded-md cursor-pointer"
              >
                <IconComponent
                  className={`text-3xl ${
                    service.isFlipped ? "-scale-x-100" : ""
                  }`}
                />
                <span className="text-xl font-bold tracking-wider">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
