import Service1 from "../../assets/images/Home/Services1.png";
import Service2 from "../../assets/images/Home/Services2.png";
import Service3 from "../../assets/images/Home/Services3.png";
import Service4 from "../../assets/images/Home/Services4.png";
import Service5 from "../../assets/images/Home/Services5.png";

// Mock data for services
const serviceData = [
  {
    image: Service5,
    title: "Telecommunications",
    description:
      "Reliable solutions in communications infrastructure to keep you connected.",
  },
  {
    image: Service3,
    title: "Energy Solutions",
    description: "Sustainable and efficient power solutions for modern needs.",
  },
  {
    image: Service4,
    title: "Project Management",
    description: "End-to-end project solutions across various industries.",
  },
  {
    image: Service1,
    title: "Agriculture",
    description:
      "Modern farming techniques for high-quality exports to North America",
  },
  {
    image: Service2,
    title: "Automobile Distro",
    description:
      "Efficient supply chain and logistics for vehicles and heavy machinery.",
  },
];

const Services = () => {
  return (
    <div className="px-24 py-24">
      <div>
        <p className="text-mavlin-gold">OUR EXPERTISE AND EXPERIENCE</p>
        <p className="font-arimo text-3xl text-mavlin-blue w-1/2 font-semibold">
          We Offer Services that are up with the times and Spans Key Sectors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center w-full h-64 rounded-md shadow-lg"
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="absolute inset-0 bg-mavlin-blue/40 rounded-md"></div>
            <div className="absolute text-white z-10 flex flex-col justify-start gap-2 px-4 mt-8">
              <p className="font-bold  leading-tight">{service.title}</p>
              <p className="text-xs">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
