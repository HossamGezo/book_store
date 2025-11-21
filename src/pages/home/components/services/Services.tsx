// Data
import services from "../../data/services";
// Styles
import "./services.css";
// Main Component
const Services = () => {
  const allServices = [...services, ...services];
  return (
    <section className="services my-20">
      <div className="services-wrapper">
        <div className="services-slider">
          {/* All Services */}
          {allServices.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div key={index} className="service bg-primary text-white w-[300px] shrink-0 flex-center flex-col py-2.5 gap-5 rounded-md cursor-pointer">
                <IconComponent
                  className={`text-3xl ${
                    service.isFlipped ? "-scale-x-100" : ""
                  }`}
                />
                <span className="service-title text-xl font-bold tracking-wider">
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
