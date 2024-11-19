import Service1 from "../../assets/images/SnowlandImmigration/service1.png";
import Service2 from "../../assets/images/SnowlandImmigration/service2.png";
import Service3 from "../../assets/images/SnowlandImmigration/service3.png";
import Service4 from "../../assets/images/SnowlandImmigration/service4.png";
import Service5 from "../../assets/images/SnowlandImmigration/service5.png";
import Service6 from "../../assets/images/SnowlandImmigration/service6.png";

// Mock data for services
const services = [
  {
    id: "01",
    title: "Express Entry Program / Permanent Residence",
    image: Service1,
    description:
      "We simplify the Express Entry process, guiding applicants through every step to achieve their goal of permanent residence in Canada.",
  },
  {
    id: "02",
    title: "Student Visa",
    image: Service2,
    description:
      "We provide comprehensive assistance to international students, ensuring their applications meet all requirements for studying in Canada.",
  },
  {
    id: "03",
    title: "Family Sponsorship",
    image: Service3,
    description:
      "We help families reunite by supporting sponsorship applications for eligible relatives to live in Canada permanently.",
  },
  {
    id: "04",
    title: "Citizenship",
    image: Service4,
    description:
      "Our team offers expert advice and assistance to help clients meet the requirements for becoming Canadian citizens.",
  },
  {
    id: "05",
    title: "Work Permit",
    image: Service5,
    description:
      "We assist skilled workers in obtaining work permits to pursue professional opportunities in Canada.",
  },
  {
    id: "06",
    title: "Post-Graduation Work Permit",
    image: Service6,
    description:
      "We support graduates in securing post-graduation work permits, enabling them to gain valuable work experience in Canada.",
  },
];

const SnowlandServices = () => {
  return (
    <section id="services" className="px-8 md:px-24 py-24 w-full bg-gray-100">
      <div className="flex items-start w-full mb-12">
        <div className="text-left w-full md:w-1/2">
          <p className="text-red-600 uppercase">Our Services</p>
          <p className="font-arimo text-3xl md:text-4xl text-mavlin-blue font-semibold">
            We make the Canadian Immigration Process easy
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transform transition-transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="h-48 w-full bg-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="p-6 flex flex-col">
              <p className="font-bold text-red-600 mt-4">{service.title}</p>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SnowlandServices;
